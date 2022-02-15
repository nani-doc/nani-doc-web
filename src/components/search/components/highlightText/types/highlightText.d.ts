import { Search } from '../../../types/search.d'
/**
 * 高亮文本
 */
export namespace HighlightText {

    /**
     * 属性
     */
    export interface Props {
        /**
         * 项目名称
         */
        texts: Search.ResultText[]
    }
}