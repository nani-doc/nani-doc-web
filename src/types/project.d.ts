/**
 * 项目信息
 */
export interface Project {

    /**
     * 项目名称
     * */
    projectName: string;

    /**
     * 项目标题
     */
    projectTitle: string;

    /**
     * 模块列表
     */
    modules: ModuleInfo[];
}

/**
 * 模块信息
 */
export interface ModuleInfo {

    /**
     * 模块名称
     * */
    name: string;

    /**
     * 模块标题
     * */
    title: string;
}