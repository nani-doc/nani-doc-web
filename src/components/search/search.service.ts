import { defineComponent, watch, Ref, ref, onMounted, onBeforeUnmount } from "vue";
import highlightText from "/@/components/search/components/highlightText/highlightText.vue";
import { Search } from './types/search.d'
import './search.scss'

/**
 * 搜索组件service
 */
class SearchService {

    /**
     * 索引列表
     */
    private indexes: Search.DocInfo[] = []

    /**
     * 项目名称
     */
    projectName: Ref<string> = ref('')

    /**
     * 搜索结果
     */
    searchResults: Ref<Search.SearchResults> = ref({})

    /**
     * 搜索结果key类别
     */
    searchResultKeys: Ref<Search.SearchResultKeys> = ref({})

    /**
     * 是否有搜索结果
     */
    hasSearchResult: Ref<boolean> = ref(false)

    /**
     * 搜索关键字
     */
    keyword: Ref<string> = ref('')

    /**
     * 初始化搜索组件
     * @param props 组件参数
     */
    constructor(props: Search.Props) {
        watch(() => props.projectName, (newVal) => {
            this.projectName.value = newVal;
            this.loadData();
        }, {
            immediate: true
        })
    }

    /**
     * 加载数据
     */
    private async loadData() {
        if (!this.projectName.value) {
            return;
        }
        try {
            const res = await fetch(`/docDist/${this.projectName.value}/searchIndex/index.json`, {
                method: "GET",
                mode: "cors",
                credentials: "include",
            })
            const result = await res.json() as Search.SearchIndexInfo;
            for (let i = 1; i <= result.totalPage; i++) {
                this.loadDoc(i);
            }
        } catch (e) {
        }
    }

    /**
     * 加载文档
     * @param p 页码
     */
    private async loadDoc(p: number) {
        try {
            const res = await fetch(`/docDist/${this.projectName.value}/searchIndex/${p}.json`, {
                method: "GET",
                mode: "cors",
                credentials: "include",
            })
            const result = await res.json() as Search.DocInfo[];
            result.forEach((item) => {
                this.indexes.push(item)
            })
        } catch (e) {
        }
    }

    /**
     * 搜索元素点击事件
     * @param e 事件对象
     * @param isSearchResultElement 是否是搜索结果元素
     * @returns 
     */
    onBodyClick(e: MouseEvent) {
        e.stopPropagation()
        this.onSearchElementClick(e, false);
    }

    /**
     * 搜索元素点击事件
     * @param e 事件对象
     * @param isSearchResultElement 是否是搜索结果元素
     * @returns 
     */
    onSearchElementClick(e: MouseEvent, isSearchResultElement: boolean) {
        e.stopPropagation()
        const target: HTMLElement = e.target as HTMLElement;
        if (isSearchResultElement || target.id === 'search-input') {
            return
        }
        this.searchResults.value = {};
        this.searchResultKeys.value = {};
        this.hasSearchResult.value = false;
    }

    /**
     * 搜索
     * @param keyword 关键字
     * @returns 搜索结果
     */
    search(keyword: string): Search.Result[] {
        let result: Search.Result[] = [];
        if (!keyword) {
            return result;
        }
        for (let i in this.indexes) {
            const item = this.indexes[i];
            try {
                const docMatchResult: Search.DocMatchResult = {
                    moduleTitleMatched: item.moduleTitle.search(keyword) > -1,
                    controllerTitleMatched: item.controllerTitle.search(keyword) > -1,
                    actionTitleMatched: item.actionTitle.search(keyword) > -1,
                    actionUrlMatched: item.actionUrl.search(keyword) > -1
                }
                if (docMatchResult.moduleTitleMatched ||
                    docMatchResult.controllerTitleMatched ||
                    docMatchResult.actionTitleMatched ||
                    docMatchResult.actionUrlMatched
                ) {
                    result.push(this.highlight(item, docMatchResult, keyword));
                    //最多显示12条数据
                    if (result.length >= 12) {
                        return result;
                    }
                }
            } catch (e) {
            }
        }
        return result;
    }

    /**
     * 高亮搜索结果
     * @param doc 文档
    * @param docMatchResult 文档匹配结果 
    * @param keyword 搜索关键字
     * @returns 高亮文本
     */
    private highlight(doc: Search.DocInfo, docMatchResult: Search.DocMatchResult, keyword: string): Search.Result {
        return {
            path: doc.path,
            baseModuleTitle: doc.moduleTitle,
            baseControllerTitle: doc.controllerTitle,
            moduleTitle: this.highlightText(doc.moduleTitle, keyword, docMatchResult.moduleTitleMatched),
            controllerTitle: this.highlightText(doc.controllerTitle, keyword, docMatchResult.controllerTitleMatched),
            actionTitle: this.highlightText(doc.actionTitle, keyword, docMatchResult.actionTitleMatched),
            actionUrl: this.highlightText(doc.actionUrl, keyword, docMatchResult.actionUrlMatched),
        };
    }

    /**
     * 高亮文本内容
     * @param text 文本内容
     * @param keyword 关键字
     * @param isMatched 是否匹配
     * @returns 高亮文本结果
     */
    private highlightText(text: string, keyword: string, isMatched: boolean): Search.ResultText[] {
        let result: Search.ResultText[] = [];
        if (!isMatched) {
            result.push({
                type: Search.ResultType.GENERAL,
                text: text
            })
            return result;
        }
        const keywordLength = keyword.length;
        let index: number;
        while (true && text !== '') {
            index = text.indexOf(keyword);
            if (index === -1) {
                result.push({
                    type: Search.ResultType.GENERAL,
                    text: text
                })
                break
            }
            if (index > 0) {
                result.push({
                    type: Search.ResultType.GENERAL,
                    text: text.substring(0, index)
                })
            }
            result.push({
                type: Search.ResultType.HIGHLIGHT,
                text: keyword
            })
            text = text.substring(index + keywordLength);
        }
        return result;
    }

    /**
     * 搜索关键字输入事件
     */
    onInput() {
        if (!this.keyword.value) {
            this.searchResults.value = {};
            return;
        }
        const baseSearchResults = this.search(this.keyword.value);
        const searchResults: Search.SearchResults = {};
        const searchResultKeys: Search.SearchResultKeys = {}
        baseSearchResults.forEach(item => {
            if (!searchResults[item.baseModuleTitle]) {
                searchResults[item.baseModuleTitle] = {}
                searchResultKeys[item.baseModuleTitle] = item;
            }
            if (!searchResults[item.baseModuleTitle][item.baseControllerTitle]) {
                searchResults[item.baseModuleTitle][item.baseControllerTitle] = []
                searchResultKeys[item.baseControllerTitle] = item;
            }
            searchResults[item.baseModuleTitle][item.baseControllerTitle].push(item)
        })
        this.searchResults.value = searchResults;
        this.searchResultKeys.value = searchResultKeys;
        this.hasSearchResult.value = baseSearchResults.length > 0;
    }
}

export default defineComponent({
    name: "search",
    props: {
        projectName: {
            type: String,
            default: ''
        }
    },
    components: {
        highlightText
    },
    setup: (props: Search.Props) => {
        const searchService = new SearchService(props);

        onMounted(() => {
            window.addEventListener("click", searchService.onBodyClick.bind(searchService));
        })
        onBeforeUnmount(() => {
            window.removeEventListener("click", searchService.onBodyClick.bind(searchService));
        })
        return {
            projectName: searchService.projectName,
            searchResults: searchService.searchResults,
            searchResultKeys: searchService.searchResultKeys,
            hasSearchResult: searchService.hasSearchResult,
            keyword: searchService.keyword,
            onInput: searchService.onInput.bind(searchService),
            onSearchElementClick: searchService.onSearchElementClick.bind(searchService)
        }
    },
});