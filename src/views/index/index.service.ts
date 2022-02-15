import { defineComponent, ref, Ref } from "vue";
import typescriptContent from "/@/components//typescriptContent/typescriptContent.vue";
import './index.scss'
import { Project } from '/@/types/project'

/**
 * 首页
 */
class IndexService {

    /**
     * 页面信息
     */
    projects: Ref<Project[]> = ref([])

    constructor() {
        this.loadProjects()
    }

    /** 
     * 加载项目信息
    */
    private async loadProjects() {
        const res = await fetch("/docDist/projects.json", {
            method: "GET",
            mode: "cors",
            credentials: "include",
        })
        this.projects.value = await res.json();
    }
}

export default defineComponent({
    name: "docIndex",
    components: {
        typescriptContent
    },
    setup: () => {
        const indexService = new IndexService();
        return {
            projects: indexService.projects
        }
    },
});