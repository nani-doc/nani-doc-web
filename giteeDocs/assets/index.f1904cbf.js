import{c as f,a as _,d as h,r as v,b as y,o as g,e as A}from"./vendor.3d9f226a.js";const E=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};E();const $="modulepreload",u={},N="/nani-doc-web/",l=function(o,s){return!s||s.length===0?o():Promise.all(s.map(r=>{if(r=`${N}${r}`,r in u)return;u[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":$,e||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),e)return new Promise((d,m)=>{n.addEventListener("load",d),n.addEventListener("error",m)})})).then(()=>o())},P=()=>l(()=>import("./index.c5885d37.js"),["assets/index.c5885d37.js","assets/index.5714fcb3.css","assets/vendor.3d9f226a.js","assets/locationUtil.3e05085d.js","assets/locationUtil.5460fe69.css"]),i=()=>l(()=>import("./docIndex.c70ec2b6.js"),["assets/docIndex.c70ec2b6.js","assets/docIndex.e4afe46b.css","assets/vendor.3d9f226a.js","assets/locationUtil.3e05085d.js","assets/locationUtil.5460fe69.css"]),L=[{path:`${{}.BASE_PATH}/`,component:P,meta:{title:"NaNi\u6587\u6863"}},{path:`${{}.BASE_PATH}/:projectName`,component:i},{path:`${{}.BASE_PATH}/:projectName/:moduleName`,component:i},{path:`${{}.BASE_PATH}/:projectName/:moduleName/:pageName*`,component:i}],a=f({history:_(),routes:L});a.beforeResolve(async c=>{const{meta:o}=c;o&&o.title&&(document.title=o.title)});function j(){return a.currentRoute.value}var b=(c,o)=>{const s=c.__vccOpts||c;for(const[r,e]of o)s[r]=e;return s};const x=h({name:"App"});function O(c,o,s,r,e,t){const n=v("router-view");return g(),y(n)}var R=b(x,[["render",O]]);const p=A(R);p.use(a);p.mount("#app");export{b as _,j as g};
