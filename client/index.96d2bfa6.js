import{S as e,i as s,s as a,l as t,m as r,o as n,n as o,p as i,r as p,u as c}from"./client.6176553e.js";import{B as g}from"./Board.35ee2851.js";var l={segment:"fiction",category:"가상세계 이야기",description:"공상 속 어느 가상세계에서 벌어지는 일들",pages:[]};function f(e){let s,a;return s=new g({props:{pages:m}}),{c(){t(s.$$.fragment)},l(e){r(s.$$.fragment,e)},m(e,t){n(s,e,t),a=!0},p:o,i(e){a||(i(s.$$.fragment,e),a=!0)},o(e){p(s.$$.fragment,e),a=!1},d(e){c(s,e)}}}let m=l,u=m.pages;async function $(e,s){e.query.q?m.pages=l.pages.filter((s=>s.title.includes(e.query.q))):m.pages=u}class d extends e{constructor(e){super(),s(this,e,null,f,a,{})}}export{d as default,$ as preload};
