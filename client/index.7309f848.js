import{S as e,i as t,s,l as a,m as r,o as n,n as i,p as l,r as o,u as p}from"./client.6d20083f.js";import{B as g}from"./Board.9884163b.js";var c={segment:"life",category:"살아가는 이야기",description:"살아가며 느끼는 이것저것에 대한 끄적임",pages:[{title:"아무리 바빠도",create:"2021-11-19",link:"even-too-busy"},{title:"과거를 거니는 일",create:"2021-11-13",link:"walking-through-the-past"},{title:"코딩이 아닌 글쓰기로 잔디 심기",create:"2021-11-10",link:"grass-planting"}]};function u(e){let t,s;return t=new g({props:{pages:f}}),{c(){a(t.$$.fragment)},l(e){r(t.$$.fragment,e)},m(e,a){n(t,e,a),s=!0},p:i,i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){o(t.$$.fragment,e),s=!1},d(e){p(t,e)}}}let f=c,m=f.pages;async function $(e,t){e.query.q?f.pages=c.pages.filter((t=>t.title.includes(e.query.q))):f.pages=m}class d extends e{constructor(e){super(),t(this,e,null,u,s,{})}}export{d as default,$ as preload};
