var i=Object.defineProperty;var d=(e,t,s)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var a=(e,t,s)=>(d(e,typeof t!="symbol"?t+"":t,s),s);import{B as n,_ as p}from"./index.f628d5c5.js";import{t as l,i as f}from"./locationUtil.32a666fe.js";import{d as j,f as h,o as r,g as c,F as m,h as _,i as u,t as $}from"./vendor.ac5fb52a.js";class v{constructor(){a(this,"projects",h([]));a(this,"basePath",f()?`${n}/docDist`:"/docDist");this.loadProjects()}async loadProjects(){const t=await fetch(`${this.basePath}/projects.json`,{method:"GET",mode:"cors",credentials:"include"});this.projects.value=await t.json()}}var x=j({name:"docIndex",components:{typescriptContent:l},setup:()=>{const e=new v;return{basePath:n,projects:e.projects}}});const P={class:"projects"},b=u("div",{class:"title"},"\u9879\u76EE\u5217\u8868",-1),B=["href"];function S(e,t,s,g,y,k){return r(),c("div",P,[b,(r(!0),c(m,null,_(e.projects,o=>(r(),c("a",{href:`${e.basePath}/${o.projectName}/`,class:"item",key:`page_${o.projectName}`},$(o.projectTitle),9,B))),128))])}var T=p(x,[["render",S]]);export{T as default};