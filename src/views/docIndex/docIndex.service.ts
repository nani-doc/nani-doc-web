import { defineComponent, ref, Ref } from "vue";
import { getCurrentRoute } from '/@/routers'
import { RouteParams } from 'vue-router'
import { BASE_PATH } from '/@/constant'
import typescriptContent from "/@/components/typescriptContent/typescriptContent.vue";
import search from "/@/components/search/search.vue";
import './docIndex.scss'
import { DocInfo } from '/@/types/docInfo.d'
import { Project } from '/@/types/project.d'
import { CataLogInfo, PageInfo } from '/@/types/catalog.d'
import { isGiteeSite } from '/@/utils/locationUtil'

/**
 * 文档首页
 */
class DocIndexService {

    /**
     * 项目信息
     */
    projectInfo: Ref<Project> = ref({
        projectName: '',
        projectTitle: '',
        modules: []
    })

    /**
     * 页面列表
     */
    catelogs: Ref<CataLogInfo[]> = ref([])

    /**
     * 页面信息
     */
    pageInfo: Ref<DocInfo> = ref({
        title: '',
        url: '',
        contentType: '',
        requestParamList: [],
        responseTypeList: [],
        requestMethod: {
            title: '',
            requestMethod: '',
            className: '',
            responseClassName: '',
            responseGenericClassName: '',
            url: '',
            methodName: '',
        }
    })

    /**
     * 项目名称
     */
    projectName: Ref<string> = ref('');

    /**
     * 模块名称
     */
    moduleName: Ref<string> = ref('');

    /**
     * 页面名称
     */
    pageName: Ref<string> = ref('');

    /**
     * 基础路径
     */
    private basePath = isGiteeSite() ? `${BASE_PATH}/docDist` : '/docDist'

    constructor() {
        const routeParams: RouteParams = getCurrentRoute().params;
        this.projectName.value = routeParams.projectName ? <string>routeParams.projectName : '';
        this.moduleName.value = routeParams.moduleName ? <string>routeParams.moduleName : '';
        if (routeParams.pageName && typeof (routeParams.pageName as Array<string>)) {
            this.pageName.value = (<Array<string>>routeParams.pageName).join('/')
        } else {
            this.pageName.value = routeParams.pageName ? <string>routeParams.pageName : '';
        }
        this.loadProjectInfo()
    }

    /** 
     * 加载项目信息
    */
    private async loadProjectInfo() {
        const res = await fetch(`${this.basePath}/${this.projectName.value}/index.json`, {
            method: "GET",
            mode: "cors",
            credentials: "include",
        })
        this.projectInfo.value = await res.json();
        document.title = this.projectInfo.value.projectName;
        if (!this.moduleName.value) {
            this.moduleName.value = this.projectInfo.value.modules[0].name;
        }
        this.loadCatalogInfo()
    }

    /**
     * 加载目录信息
     * @param catalogName 目录名称
     */
    private async loadCatalogInfo() {
        this.setLocation()
        const res = await fetch(`${this.basePath}/${this.projectName.value}/catalog/${this.moduleName.value}.json`, {
            method: "GET",
            mode: "cors",
            credentials: "include",
        })
        this.catelogs.value = await res.json();
        if (!this.pageName.value) {
            this.pageName.value = this.catelogs.value[0].pageList[0].path.replace('.json', '');
        } else if (this.pageName.value.indexOf(this.moduleName.value) < 0) {
            this.pageName.value = `${this.moduleName.value}/${this.pageName.value}`
        }
        this.loadDoc();
    }

    /**
     * 设置页面地址
     */
    private setLocation() {
        let url: string[] = [`${BASE_PATH}/${this.projectName.value}`];
        if (this.moduleName.value &&
            this.pageName.value &&
            this.pageName.value.indexOf(this.moduleName.value) < 0) {
            url.push(this.moduleName.value)
        }
        if (this.pageName.value) {
            url.push(this.pageName.value)
        }
        window.history.pushState({}, '', `${window.location.host}/${url.join("/")}`)
        window.history.forward();
    }

    /**
     * 加载文档
     */
    private async loadDoc() {
        let path: string[] = [`${this.basePath}/`]
        path.push(this.projectName.value)
        path.push('/')
        path.push(this.pageName.value);
        path.push('.json');
        this.setLocation()
        const res = await fetch(path.join(''), {
            method: "GET",
            mode: "cors",
            credentials: "include",
        })
        this.pageInfo.value = await res.json();
    }

    /**
     * 加载文档事件
     */
    onLoadDoc(pageInfo: PageInfo) {
        this.pageName.value = pageInfo.path.replace('.json', '');
        this.loadDoc()
    }

    /**
     * 加载目录事件
     * @param catalogName 目录名称
     */
    onLoadCatalog(catalogName: string) {
        this.moduleName.value = catalogName;
        this.setLocation()
        this.loadCatalogInfo()
    }
}


export default defineComponent({
    name: "docIndex",
    components: {
        typescriptContent,
        search
    },
    setup: () => {
        const docIndexService = new DocIndexService();
        return {
            basePath: BASE_PATH,
            projectInfo: docIndexService.projectInfo,
            catelogs: docIndexService.catelogs,
            pageInfo: docIndexService.pageInfo,
            moduleName: docIndexService.moduleName,
            pageName: docIndexService.pageName,
            onLoadDoc: docIndexService.onLoadDoc.bind(docIndexService),
            onLoadCatalog: docIndexService.onLoadCatalog.bind(docIndexService),
        }
    },
});