import{S as s,i as a,s as e,l as t,m as r,o as n,n as o,p as c,r as i,u as p}from"./client.0ccdf8ac.js";import{B as f}from"./Board.50913dbd.js";var g={segment:"fiction",category:"가상세계 이야기",description:"공상 속 어느 가상세계에서 벌어지는 일들",pages:[]};function l(s){let a,e;return a=new f({props:{pages:m}}),{c(){t(a.$$.fragment)},l(s){r(a.$$.fragment,s)},m(s,t){n(a,s,t),e=!0},p:o,i(s){e||(c(a.$$.fragment,s),e=!0)},o(s){i(a.$$.fragment,s),e=!1},d(s){p(a,s)}}}let m=g,u=m.pages;async function d(s,a){s.query.q?m.pages=g.pages.filter((a=>a.title.includes(s.query.q))):m.pages=u}class $ extends s{constructor(s){super(),a(this,s,null,l,e,{})}}export{$ as default,d as preload};
