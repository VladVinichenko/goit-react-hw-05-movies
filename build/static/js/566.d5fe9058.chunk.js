"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[566,307],{307:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n="Button_button__wiIYs",a=r(184),l=function(e){var t=e.name,r=e.action,l=e.children;return(0,a.jsx)("button",{className:n,name:t,onClick:r,children:l})}},566:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(907);var a=r(181);function l(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var s=r(885),o="ImageGallery_gallery__iK3au",u="ImageGallery_idle__zIrvk",d="ImageGallery_strong__cVEEb",f="ImageGallery_currentPage__hrEzj",m="ImageGallery_navBox__BGu+G",g=r(791),h=r(905),_=r(211),p="ImageGalleryItem_galleryItem__vbZf8",y="ImageGalleryItem_galleryImage__9u+1u",b="ImageGalleryItem_title__Xdol3",j="ImageGalleryItem_noImage__DtzWM",v=r(184),I=function(e){var t=e.url,r=e.alt,n=e.title,a=e.id;return(0,v.jsxs)("li",{className:p,id:a,children:[t?(0,v.jsx)("img",{className:y,src:"https://image.tmdb.org/t/p/w500"+t,alt:r,loading:"lazy"}):(0,v.jsx)("div",{className:j,children:"No title"}),(0,v.jsx)("h3",{className:b,children:n})]})},O=r(307),x=r(523),w=r(271),N=r(128);var E=function(e){var t=e.searchValue,r=e.options,n=void 0===r?"search":r,a=(0,g.useState)(""),p=(0,s.Z)(a,2),y=p[0],b=p[1],j=(0,w.useHistory)(),E=(0,w.useLocation)(),P=(0,g.useState)("search"),S=(0,s.Z)(P,2),G=S[0],Z=S[1],k=(0,g.useState)(1),D=(0,s.Z)(k,2),M=D[0],V=D[1],z=(0,g.useState)(""),A=(0,s.Z)(z,2),B=A[0],C=A[1],H=(0,g.useState)([]),F=(0,s.Z)(H,2),K=F[0],L=F[1];(0,g.useEffect)((function(){b(t)}),[t]),(0,g.useEffect)((function(){if("search"===n){var e=E.search.split("/");e[0].slice(1)?b(e[0].slice(1)):b(""),e[1]&&V(Number(e[1]))}if("trending"===n){console.log(E.search);var t=Number(E.search.slice(1));V(t>0?t:1)}}),[]);var T=function(){(y||"trending"===n)&&(L([]),Z("pending"),(0,h.Z)(n,y,M).then((function(e){if(0===e.results.length)return L([]),Promise.reject(new Error("No results were found for this: ".concat(y)));e.results[0]=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.results[0]),L(l(e.results)),Z("resolved")})).catch((function(e){C(e),Z("rejected")})))};return(0,g.useEffect)((function(){console.log(M),console.log(y),console.log(t),y&&j.replace({pathname:N.d.MOVIES,search:"".concat(y,"/").concat(M)}),"trending"===n&&j.replace({pathname:N.d.HOME,search:"".concat(M)}),"trending"===n&&Z("pending"),T()}),[y,M,j]),(0,v.jsxs)(g.Fragment,{children:["search"===G&&(0,v.jsx)("p",{className:u,children:"Input value"}),"rejected"===G&&(0,v.jsx)("strong",{className:d,children:B.message}),K.length>0&&(0,v.jsx)("ul",{className:o,children:K.map((function(e){return(0,v.jsx)(x.rU,{to:N.d.MOVIES+N.d.ONE_MOVIE+"".concat(e.id),children:(0,v.jsx)(I,{id:e.id,url:e.poster_path,alt:e.name,title:e.original_title?e.original_title:e.name})},e.id)}))}),"pending"===G&&(0,v.jsx)(_.Z,{}),(0,v.jsxs)("div",{className:m,children:["resolved"===G&&M>1?(0,v.jsxs)(O.default,{action:function(){V(M-1)},children:["Prev Page (",M-1,")"]}):"","resolved"===G&&(0,v.jsx)("p",{className:f,children:M}),"resolved"===G&&(0,v.jsxs)(O.default,{action:function(){V(M+1)},children:["Next Page (",M+1,")"]})]})]})}}}]);
//# sourceMappingURL=566.d5fe9058.chunk.js.map