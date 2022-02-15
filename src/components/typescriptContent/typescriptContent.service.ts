import { defineComponent, ref, Ref,nextTick,PropType,watch  } from "vue";
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/themes/prism-tomorrow.css'
import {DocInfo} from '/@/types/docInfo.d'
import {TypescriptContent} from './types/typescriptContent'

/**
 * typescript内容service
 */
class TypescriptContentService {

    /**
     * 页面信息
     */
    pageInfo: Ref<DocInfo>

    constructor(props:TypescriptContent.Props) {
        this.pageInfo = ref(props.pageInfo)
        watch(()=>props.pageInfo,(value)=>{
            if(value.url){
                this.pageInfo.value = value;

                nextTick(()=>{
                    Prism.highlightAll()
                })
            }
        },{
            immediate:true
        })
        nextTick(()=>{
            Prism.highlightAll()
        })
    }
}
export default defineComponent({
    name: "typescriptContent",
    props:{
        pageInfo: {
            type:Object as PropType<DocInfo>,
            default:{}
        }
    },
    setup: (props:TypescriptContent.Props) => {
        const typescriptContentService = new TypescriptContentService(props);
        return {
            pageInfo: typescriptContentService.pageInfo,
        }
    },
});