/**
 * 搜索
 */
export namespace Search {

    /**
     * 属性
     */
    export interface Props {
        /**
         * 项目名称
         */
        projectName: string
    }

    /**
     * 搜索索引信息
     */
    export interface SearchIndexInfo {

        /**
         * 页面总数
         */
        totalPage: number
    }

    /**
     * 文档信息
     */
    export interface DocInfo {

        /**
         * url路径
         */
        path: string

        /**
         * 模块标题
         */
        moduleTitle: string

        /**
         * 控制器标题
         */
        controllerTitle: string

        /**
         * 接口标题
         */
        actionTitle: string

        /**
         * 接口url
         */
        actionUrl: string
    }

    /**
     * 文档匹配结果
     */
    export interface DocMatchResult {

        /**
         * 模块标题是否匹配
         */
        moduleTitleMatched: boolean

        /**
         * 控制器标题是否匹配
         */
        controllerTitleMatched: boolean

        /**
         * 接口标题是否匹配
         */
        actionTitleMatched: boolean

        /**
         * 接口url是否匹配
         */
        actionUrlMatched: boolean
    }

    /**
     * 搜索结果
     */
    export interface Result {

        /**
         * url路径
         */
        path: string

        /**
         * 原始模块标题
         */
        baseModuleTitle: string

        /**
         * 原始控制器标题
         */
        baseControllerTitle: string

        /**
         * 模块标题
         */
        moduleTitle: ResultText[]

        /**
         * 控制器标题
         */
        controllerTitle: ResultText[]

        /**
         * 接口标题
         */
        actionTitle: ResultText[]

        /**
         * 接口url
         */
        actionUrl: ResultText[]
    }

    /**
     * 搜索结果文本
     */
    export interface ResultText {

        /**
         * 结果类型
         */
        type: ResultType,

        /**
         * 文本内容
         */
        text: string
    }

    /**
     * 结果类型
     */
    export enum ResultType {
        // 普通
        GENERAL,
        // 高亮
        HIGHLIGHT
    }

    /**
     * 搜索结果列表
     */
    export type SearchResults = { [key: string]: { [key: string]: Search.Result[] } }

    /**
     * 搜索结果Key列表
     */
    export type SearchResultKeys = { [key: string]: Search.Result }
}