import{c as f,a as _,d as h,b as v,r as y,o as g,e as b}from"./vendor.ac5fb52a.js";const N=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};N();const w="modulepreload",u={},L="/nani-doc-web/",l=function(o,c){return!c||c.length===0?o():Promise.all(c.map(r=>{if(r=`${L}${r}`,r in u)return;u[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":w,e||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),e)return new Promise((p,m)=>{n.addEventListener("load",p),n.addEventListener("error",m)})})).then(()=>o())},x=()=>l(()=>import("./index.53cab57c.js"),["assets/index.53cab57c.js","assets/index.5714fcb3.css","assets/locationUtil.418d01d0.js","assets/locationUtil.5460fe69.css","assets/vendor.ac5fb52a.js"]),i=()=>l(()=>import("./docIndex.561ed10c.js"),["assets/docIndex.561ed10c.js","assets/docIndex.e4afe46b.css","assets/locationUtil.418d01d0.js","assets/locationUtil.5460fe69.css","assets/vendor.ac5fb52a.js"]),E=[{path:"/nani-doc-web/",component:x,meta:{title:"NaNi\u6587\u6863"}},{path:"/nani-doc-web/:projectName",component:i},{path:"/nani-doc-web/:projectName/:moduleName",component:i},{path:"/nani-doc-web/:projectName/:moduleName/:pageName*",component:i}],a=f({history:_(),routes:E});a.beforeResolve(async s=>{const{meta:o}=s;o&&o.title&&(document.title=o.title)});function j(){return a.currentRoute.value}var O=(s,o)=>{const c=s.__vccOpts||s;for(const[r,e]of o)c[r]=e;return c};const $=h({name:"App"});function A(s,o,c,r,e,t){const n=y("router-view");return g(),v(n)}var P=O($,[["render",A]]);const d=b(P);d.use(a);d.mount("#app");export{O as _,j as g};
