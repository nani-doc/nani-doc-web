import { defineComponent, PropType, watch, Ref, ref } from "vue";
import './highlightText.scss'
import { HighlightText } from './types/highlightText.d'
import { Search } from '../../types/search.d'

/**
 * 文本高亮组件service
 */
class HighlightTextService {

    /**
     * 高亮文本列表
     */
    texts: Ref<Search.ResultText[]> = ref([])

    /**
     * 初始化搜索组件
     * @param props 组件参数
     */
    constructor(props: HighlightText.Props) {
        watch(() => props.texts, (newVal) => {
            this.texts.value = newVal;
        }, {
            immediate: true
        })
    }
}

export default defineComponent({
    name: "search",
    props: {
        texts: {
            type: Array as PropType<Search.ResultText[]>,
            default: []
        }
    },
    setup: (props: HighlightText.Props) => {
        const highlightTextService = new HighlightTextService(props);
        return {
            texts: highlightTextService.texts
        }
    },
});