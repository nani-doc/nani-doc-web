import{c as _,a as h,d as v,r as y,b as g,o as $,e as b}from"./vendor.3d9f226a.js";const N=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};N();const A="modulepreload",l={},E="/nani-doc-web/",d=function(o,s){return!s||s.length===0?o():Promise.all(s.map(r=>{if(r=`${E}${r}`,r in l)return;l[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":A,e||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),e)return new Promise((f,m)=>{n.addEventListener("load",f),n.addEventListener("error",m)})})).then(()=>o())},L=()=>d(()=>import("./index.b4afdbfd.js"),["assets/index.b4afdbfd.js","assets/index.5714fcb3.css","assets/vendor.3d9f226a.js","assets/locationUtil.7e824b65.js","assets/locationUtil.5460fe69.css"]),a=()=>d(()=>import("./docIndex.fb686240.js"),["assets/docIndex.fb686240.js","assets/docIndex.e4afe46b.css","assets/vendor.3d9f226a.js","assets/locationUtil.7e824b65.js","assets/locationUtil.5460fe69.css"]),i={}.BASE_PATH,P=[{path:`${i}/`,component:L,meta:{title:"NaNi\u6587\u6863"}},{path:`${i}/:projectName`,component:a},{path:`${i}/:projectName/:moduleName`,component:a},{path:`${i}/:projectName/:moduleName/:pageName*`,component:a}],u=_({history:h(),routes:P});u.beforeResolve(async c=>{const{meta:o}=c;o&&o.title&&(document.title=o.title)});function w(){return u.currentRoute.value}var x=(c,o)=>{const s=c.__vccOpts||c;for(const[r,e]of o)s[r]=e;return s};const O=v({name:"App"});function R(c,o,s,r,e,t){const n=y("router-view");return $(),g(n)}var j=x(O,[["render",R]]);const p=b(j);p.use(u);p.mount("#app");export{x as _,w as g};
