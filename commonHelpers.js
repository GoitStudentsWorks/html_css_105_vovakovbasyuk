(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();(()=>{const r={openMenuBtn:document.querySelector(".menu-open-btn"),closeModalBtn:document.querySelector(".mobile-menu-close-btn"),mobilemenu:document.querySelector(".mobile-menu")};r.openMenuBtn.addEventListener("click",i),r.closeModalBtn.addEventListener("click",i);function i(){r.mobilemenu.classList.toggle("is-open")}function f(){function c(t,n){let l=document.querySelector(t);if(!l){console.log("елемент куди скролити не знайдено:",t);return}let m=l.getBoundingClientRect().top,p=window.pageYOffset,a=null;const g=function(o,s,u,y){return o/=y/2,o<1?u/2*o*o+s:(o--,-u/2*(o*(o-2)-1)+s)},d=function(o){a===null&&(a=o);const s=o-a,u=g(s,p,m,n);window.scrollTo(0,u),s<n&&requestAnimationFrame(d)};requestAnimationFrame(d)}const e=document.querySelectorAll("a.scroll-to");e&&e.forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const l=this.getAttribute("href");r.mobilemenu.classList.contains("is-open")&&r.mobilemenu.classList.remove("is-open"),c(l,1e3)})})}f()})();
//# sourceMappingURL=commonHelpers.js.map
