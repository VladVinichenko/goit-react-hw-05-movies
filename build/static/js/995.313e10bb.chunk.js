"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[995],{995:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var i=s(473),a="DetailedMovieData_box__p+Zs8",n="DetailedMovieData_buttonBox__X-ZPy",c="DetailedMovieData_link__hH8BL",l="DetailedMovieData_selected__Diqyi",r=s(523),d=s(271),o=s(128),_=s(885),u=s(905),m=s(791),h={list:"Cast_list__-ZWZl",item:"Cast_item__fph6y",title:"Cast_title__j7QfX",noImage:"Cast_noImage__5Qols"},v=s(211),j=s(184);var x=function(e){var t=e.movieId,s=(0,m.useState)("idle"),i=(0,_.Z)(s,2),a=i[0],n=i[1],c=(0,m.useState)(""),l=(0,_.Z)(c,2),r=l[0],d=l[1],o=(0,m.useState)(""),x=(0,_.Z)(o,2),f=x[0],p=x[1];return(0,m.useEffect)((function(){t&&function(){try{if(r.cast)return void d("");d(""),n("pending"),(0,u.Z)("movie",t,"","credits").then((function(e){e&&(d(e),n("resolved"))})).catch((function(e){p(e),n("rejected")}))}catch(f){console.log(f)}}()}),[t]),(0,j.jsxs)(m.Fragment,{children:["pending"===a&&(0,j.jsx)(v.Z,{}),"idle"===a&&(0,j.jsx)("div",{children:"..."}),"rejected"===a&&(0,j.jsx)("strong",{className:h.strong,children:f.message}),"resolved"===a&&(0,j.jsx)("ul",{className:h.list,children:r.cast&&r.cast.map((function(e){return(0,j.jsxs)("li",{className:h.item,children:[e.profile_path?(0,j.jsx)("img",{className:h.portrait,src:"https://image.tmdb.org/t/p/w500"+e.profile_path,alt:e.name,loading:"lazy"}):(0,j.jsx)("div",{className:h.noImage,children:"No photo"}),(0,j.jsx)("h3",{className:h.title,children:e.name})]},e.cast_id)}))})]})},f={list:"Reviews_list__oGqpj",item:"Reviews_item__ZU38j",title:"Reviews_title__h7fK9",text:"Reviews_text__FPDAp",date:"Reviews_date__9Dd5f"};var p=function(e){var t=e.movieId,s=(0,m.useState)("idle"),i=(0,_.Z)(s,2),a=i[0],n=i[1],c=(0,m.useState)({}),l=(0,_.Z)(c,2),r=l[0],d=l[1],o=(0,m.useState)(""),h=(0,_.Z)(o,2),x=h[0],p=h[1];return(0,m.useEffect)((function(){if(r.results)return d({}),void n("idle");d({}),n("pending"),(0,u.Z)("movie",t,1,"reviews").then((function(e){e&&(d(e),n("resolved"))})).catch((function(e){p(e),n("rejected")}))}),[]),(0,j.jsxs)(m.Fragment,{children:["pending"===a&&(0,j.jsx)(v.Z,{}),"idle"===a&&(0,j.jsx)("div",{children:"..."}),"rejected"===a&&(0,j.jsx)("strong",{className:f.strong,children:x.message}),"resolved"===a&&(0,j.jsxs)("ul",{className:f.list,children:[0===r.results.length&&(0,j.jsx)("li",{children:"No comments"}),r.results.length>0&&r.results.map((function(e){return(0,j.jsxs)("li",{className:f.item,children:[(0,j.jsx)("h3",{className:f.title,children:e.author}),(0,j.jsx)("p",{className:f.text,children:e.content}),(0,j.jsx)("p",{className:f.date,children:e.created_at})]},e.id)}))]})]})};var g=function(){var e=(0,d.useParams)().id;return(0,j.jsx)(i.Z,{children:(0,j.jsxs)("div",{className:a,children:[(0,j.jsxs)("div",{className:n,children:[(0,j.jsx)(r.OL,{to:o.d.MOVIES+"/".concat(e)+o.d.CAST,exact:!0,activeClassName:l,className:c,children:"Cast"}),(0,j.jsx)(r.OL,{to:o.d.MOVIES+"/".concat(e)+o.d.REVIEWS,exact:!0,activeClassName:l,className:c,children:"Reviews"})]}),(0,j.jsx)(d.Route,{path:o.d.MOVIES+"/".concat(e)+o.d.CAST,render:function(t){return(0,j.jsx)(x,{movieId:e.slice(3)})}}),(0,j.jsx)(d.Route,{path:o.d.MOVIES+"/".concat(e)+o.d.REVIEWS,render:function(t){return(0,j.jsx)(p,{movieId:e.slice(3)})}})]})})}}}]);
//# sourceMappingURL=995.313e10bb.chunk.js.map