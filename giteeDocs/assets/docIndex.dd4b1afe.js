var x=Object.defineProperty;var L=(t,e,a)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var c=(t,e,a)=>(L(t,typeof e!="symbol"?e+"":e,a),a);import{_ as b,g as S}from"./index.d3e6a3e7.js";import{i as C,t as E}from"./locationUtil.8ebdf263.js";import{d as $,f as u,w,o as n,g as i,F as v,h as f,k as I,t as m,l as M,m as D,r as k,p as G,v as P,i as s,q as R,s as _,j,b as H}from"./vendor.ac5fb52a.js";class U{constructor(e){c(this,"texts",u([]));w(()=>e.texts,a=>{this.texts.value=a},{immediate:!0})}}var B=$({name:"search",props:{texts:{type:Array,default:[]}},setup:t=>({texts:new U(t).texts})});const K={class:"highlight-text"};function A(t,e,a,l,o,d){return n(),i("div",K,[(n(!0),i(v,null,f(t.texts,r=>(n(),i("span",{key:r.text,class:I({on:r.type===1})},m(r.text),3))),128))])}var V=b(B,[["render",A]]),N;(function(t){(function(e){e[e.GENERAL=0]="GENERAL",e[e.HIGHLIGHT=1]="HIGHLIGHT"})(t.ResultType||(t.ResultType={}))})(N||(N={}));class q{constructor(e){c(this,"indexes",[]);c(this,"projectName",u(""));c(this,"searchResults",u({}));c(this,"searchResultKeys",u({}));c(this,"hasSearchResult",u(!1));c(this,"keyword",u(""));c(this,"basePath",C()?"/nani-doc-web/docDist":"/docDist");w(()=>e.projectName,a=>{this.projectName.value=a,this.loadData()},{immediate:!0})}async loadData(){if(!!this.projectName.value)try{const a=await(await fetch(`${this.basePath}/${this.projectName.value}/searchIndex/index.json`,{method:"GET",mode:"cors",credentials:"include"})).json();for(let l=1;l<=a.totalPage;l++)this.loadDoc(l)}catch{}}async loadDoc(e){try{(await(await fetch(`${this.basePath}/${this.projectName.value}/searchIndex/${e}.json`,{method:"GET",mode:"cors",credentials:"include"})).json()).forEach(o=>{this.indexes.push(o)})}catch{}}onBodyClick(e){e.stopPropagation(),this.onSearchElementClick(e,!1)}onSearchElementClick(e,a){e.stopPropagation();const l=e.target;a||l.id==="search-input"||(this.searchResults.value={},this.searchResultKeys.value={},this.hasSearchResult.value=!1)}search(e){let a=[];if(!e)return a;for(let l in this.indexes){const o=this.indexes[l];try{const d={moduleTitleMatched:o.moduleTitle.search(e)>-1,controllerTitleMatched:o.controllerTitle.search(e)>-1,actionTitleMatched:o.actionTitle.search(e)>-1,actionUrlMatched:o.actionUrl.search(e)>-1};if((d.moduleTitleMatched||d.controllerTitleMatched||d.actionTitleMatched||d.actionUrlMatched)&&(a.push(this.highlight(o,d,e)),a.length>=12))return a}catch{}}return a}highlight(e,a,l){return{path:e.path,baseModuleTitle:e.moduleTitle,baseControllerTitle:e.controllerTitle,moduleTitle:this.highlightText(e.moduleTitle,l,a.moduleTitleMatched),controllerTitle:this.highlightText(e.controllerTitle,l,a.controllerTitleMatched),actionTitle:this.highlightText(e.actionTitle,l,a.actionTitleMatched),actionUrl:this.highlightText(e.actionUrl,l,a.actionUrlMatched)}}highlightText(e,a,l){let o=[];if(!l)return o.push({type:N.ResultType.GENERAL,text:e}),o;const d=a.length;let r;for(;e!=="";){if(r=e.indexOf(a),r===-1){o.push({type:N.ResultType.GENERAL,text:e});break}r>0&&o.push({type:N.ResultType.GENERAL,text:e.substring(0,r)}),o.push({type:N.ResultType.HIGHLIGHT,text:a}),e=e.substring(r+d)}return o}onInput(){if(!this.keyword.value){this.searchResults.value={};return}const e=this.search(this.keyword.value),a={},l={};e.forEach(o=>{a[o.baseModuleTitle]||(a[o.baseModuleTitle]={},l[o.baseModuleTitle]=o),a[o.baseModuleTitle][o.baseControllerTitle]||(a[o.baseModuleTitle][o.baseControllerTitle]=[],l[o.baseControllerTitle]=o),a[o.baseModuleTitle][o.baseControllerTitle].push(o)}),this.searchResults.value=a,this.searchResultKeys.value=l,this.hasSearchResult.value=e.length>0}}var O=$({name:"search",props:{projectName:{type:String,default:""}},components:{highlightText:V},setup:t=>{const e=new q(t);return M(()=>{window.addEventListener("click",e.onBodyClick.bind(e))}),D(()=>{window.removeEventListener("click",e.onBodyClick.bind(e))}),{projectName:e.projectName,searchResults:e.searchResults,searchResultKeys:e.searchResultKeys,hasSearchResult:e.hasSearchResult,keyword:e.keyword,onInput:e.onInput.bind(e),onSearchElementClick:e.onSearchElementClick.bind(e)}}});const F={class:"search-box"},z={class:"parent-page-title"},J={class:"controllers"},Q={class:"page-title"},W={class:"actions"},X=["href"];function Y(t,e,a,l,o,d){const r=k("highlightText");return n(),i("div",F,[G(s("input",{"aria-label":"Search",autocomplete:"off",spellcheck:"false",id:"search-input","onUpdate:modelValue":e[0]||(e[0]=p=>t.keyword=p),onInput:e[1]||(e[1]=(...p)=>t.onInput&&t.onInput(...p))},null,544),[[P,t.keyword]]),t.hasSearchResult?(n(),i("div",{key:0,class:"suggestion",onClick:e[2]||(e[2]=p=>t.onSearchElementClick(p,!0))},[(n(!0),i(v,null,f(t.searchResults,(p,h)=>(n(),i("div",{class:"modules",key:h},[s("div",z,[_(r,{texts:t.searchResultKeys[h].moduleTitle},null,8,["texts"])]),s("div",J,[(n(!0),i(v,null,f(t.searchResults[h],(g,y)=>(n(),i("div",{class:"suggestion-row",key:y},[s("div",Q,[_(r,{texts:t.searchResultKeys[y].controllerTitle},null,8,["texts"])]),s("div",W,[(n(!0),i(v,null,f(g,T=>(n(),i("div",{class:"suggestion-content",key:T.path},[s("a",{href:`/nani-doc-web/${t.projectName}${T.path}`},[s("div",null,[_(r,{texts:T.actionTitle},null,8,["texts"])]),s("div",null,[_(r,{texts:T.actionUrl},null,8,["texts"])])],8,X)]))),128))])]))),128))])]))),128))])):R("",!0)])}var Z=b(O,[["render",Y]]);class ee{constructor(){c(this,"projectInfo",u({projectName:"",projectTitle:"",modules:[]}));c(this,"catelogs",u([]));c(this,"pageInfo",u({title:"",url:"",contentType:"",requestParamList:[],responseTypeList:[],requestMethod:{title:"",requestMethod:"",className:"",responseClassName:"",responseGenericClassName:"",url:"",methodName:""}}));c(this,"projectName",u(""));c(this,"moduleName",u(""));c(this,"pageName",u(""));c(this,"basePath",C()?"/nani-doc-web/docDist":"/docDist");const e=S().params;this.projectName.value=e.projectName?e.projectName:"",this.moduleName.value=e.moduleName?e.moduleName:"",e.pageName&&typeof e.pageName?this.pageName.value=e.pageName.join("/"):this.pageName.value=e.pageName?e.pageName:"",this.loadProjectInfo()}async loadProjectInfo(){const e=await fetch(`${this.basePath}/${this.projectName.value}/index.json`,{method:"GET",mode:"cors",credentials:"include"});this.projectInfo.value=await e.json(),document.title=this.projectInfo.value.projectName,this.moduleName.value||(this.moduleName.value=this.projectInfo.value.modules[0].name),this.loadCatalogInfo()}async loadCatalogInfo(){this.setLocation();const e=await fetch(`${this.basePath}/${this.projectName.value}/catalog/${this.moduleName.value}.json`,{method:"GET",mode:"cors",credentials:"include"});this.catelogs.value=await e.json(),this.pageName.value?this.pageName.value.indexOf(this.moduleName.value)<0&&(this.pageName.value=`${this.moduleName.value}/${this.pageName.value}`):this.pageName.value=this.catelogs.value[0].pageList[0].path.replace(".json",""),this.loadDoc()}setLocation(){let e=[this.projectName.value];this.moduleName.value&&this.pageName.value&&this.pageName.value.indexOf(this.moduleName.value)<0&&e.push(this.moduleName.value),this.pageName.value&&e.push(this.pageName.value),window.history.pushState({},"",`/${e.join("/")}`),window.history.forward()}async loadDoc(){let e=[`${this.basePath}/`];e.push(this.projectName.value),e.push("/"),e.push(this.pageName.value),e.push(".json"),this.setLocation();const a=await fetch(e.join(""),{method:"GET",mode:"cors",credentials:"include"});this.pageInfo.value=await a.json()}onLoadDoc(e){this.pageName.value=e.path.replace(".json",""),this.loadDoc()}onLoadCatalog(e){this.moduleName.value=e,this.setLocation(),this.loadCatalogInfo()}}var te=$({name:"docIndex",components:{typescriptContent:E,search:Z},setup:()=>{const t=new ee;return{projectInfo:t.projectInfo,catelogs:t.catelogs,pageInfo:t.pageInfo,moduleName:t.moduleName,pageName:t.pageName,onLoadDoc:t.onLoadDoc.bind(t),onLoadCatalog:t.onLoadCatalog.bind(t)}}});const se={class:"theme-container"},ae={class:"navbar"},oe=s("div",{class:"sidebar-button"},null,-1),le=["href"],ne={class:"site-name"},ie={class:"links",style:{"max-width":"1134px"}},re={class:"nav-links can-hide"},ce=["onClick"],he={type:"button",class:"dropdown-title"},ue=s("div",{class:"sidebar-mask"},null,-1),de={class:"sidebar"},pe={class:"sidebar-links"},me={class:"sidebar-group depth-0"},ge={class:"sidebar-heading open"},ve={class:"sidebar-links sidebar-group-items"},fe=["onClick"],Ne={class:"page"},_e={class:"theme-default-content content__default"},Te={id:"\u6DFB\u52A0-\u4FEE\u6539\u5E94\u7528\u4FE1\u606F"},je=s("a",{href:"#\u6DFB\u52A0-\u4FEE\u6539\u5E94\u7528\u4FE1\u606F",class:"header-anchor"},"#",-1),ye=s("h3",{id:"url"},[s("a",{href:"#url",class:"header-anchor"},"#"),j(" url")],-1),be=s("h3",{id:"\u8BF7\u6C42\u65B9\u5F0F"},[s("a",{href:"#\u8BF7\u6C42\u65B9\u5F0F",class:"header-anchor"},"#"),j(" \u8BF7\u6C42\u65B9\u5F0F ")],-1),$e=s("p",null,"POST",-1),Ie=s("h3",{id:"\u8BF7\u6C42\u5934"},[s("a",{href:"#\u8BF7\u6C42\u5934",class:"header-anchor"},"#"),j(" \u8BF7\u6C42\u5934 ")],-1),ke=s("thead",null,[s("tr",null,[s("th",null,"\u53C2\u6570\u540D"),s("th",null,"\u662F\u5426\u5FC5\u987B"),s("th",null,"\u7C7B\u578B"),s("th",null,"\u8BF4\u660E")])],-1),Ce=s("td",null,"Content-Type",-1),we=s("td",null,"\u662F",-1),Re=s("td",null,"string",-1);function xe(t,e,a,l,o,d){const r=k("search"),p=k("typescriptContent");return n(),i("div",se,[s("header",ae,[oe,s("a",{href:`/${t.projectInfo.projectName}/`,class:"home-link router-link-active"},[s("span",ne,m(t.projectInfo.projectTitle),1)],8,le),s("div",ie,[_(r,{projectName:t.projectInfo.projectName},null,8,["projectName"]),s("nav",re,[(n(!0),i(v,null,f(t.projectInfo.modules,h=>(n(),i("div",{class:"nav-item",key:h.name},[s("div",{class:"dropdown-wrapper",onClick:g=>t.onLoadCatalog(h.name)},[s("button",he,[s("a",{class:I(["title",{"router-link-active":h.name===t.moduleName}])},m(h.title),3)])],8,ce)]))),128))])])]),ue,s("aside",de,[s("ul",pe,[(n(!0),i(v,null,f(t.catelogs,h=>(n(),i("li",{key:`catalog_${h.controllerName}`},[s("section",me,[s("p",ge,[s("span",null,m(h.controllerTitle),1)]),s("ul",ve,[(n(!0),i(v,null,f(h.pageList,g=>(n(),i("li",{key:`page_${g.name}`},[s("a",{class:I(["sidebar-link",{active:g.path===`${t.pageName}.json`}]),onClick:y=>t.onLoadDoc(g)},m(g.name),11,fe)]))),128))])])]))),128))])]),s("main",Ne,[s("div",_e,[s("h1",Te,[je,j(" "+m(t.pageInfo.title),1)]),ye,s("p",null,m(t.pageInfo.url),1),be,$e,Ie,s("table",null,[ke,s("tbody",null,[s("tr",null,[Ce,we,Re,s("td",null,m(t.pageInfo.contentType),1)])])]),t.pageInfo.url?(n(),H(p,{key:0,pageInfo:t.pageInfo},null,8,["pageInfo"])):R("",!0)])])])}var De=b(te,[["render",xe]]);export{De as default};
