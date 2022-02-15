/**
 * 目录信息
 */
export interface CataLogInfo {

    /**
     * 控制器标题
     */
    controllerTitle: string;

    /**
     * 控制器名称
     */
    controllerName: string;
    /**
     * 页面名称
     */
    pageList: PageInfo[];
}
/**
 * 页面信息
 */
export interface PageInfo {
    /**
     * 页面名称
     * */
    name: string;

    /**
     * 页面路径
     * */
    path: string;

    /**
     * 控制器标题
     */
    controllerTitle: string;

    /**
     * 控制器名称
     * */
    controllerName: string;
}