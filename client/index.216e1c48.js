import{S as e,i as t,s as a,l as s,m as r,o as i,n,p as l,r as o,u as p}from"./client.4a07e911.js";import{B as c}from"./Board.6079f8ea.js";var g={segment:"life",category:"살아가는 이야기",description:"살아가며 느끼는 이것저것에 대한 끄적임",pages:[{title:"약속",create:"2021-12-23",link:"promise"},{title:"재촉한다는 것",create:"2021-12-02",link:"urge-to-do-quickly"},{title:"글의 셔터 누르기",create:"2021-11-21",link:"press-the-shutter-of-the-writing"},{title:"아무리 바빠도",create:"2021-11-19",link:"even-too-busy"},{title:"과거를 거니는 일",create:"2021-11-13",link:"walking-through-the-past"},{title:"코딩이 아닌 글쓰기로 잔디 심기",create:"2021-11-10",link:"grass-planting"}]};function u(e){let t,a;return t=new c({props:{pages:f}}),{c(){s(t.$$.fragment)},l(e){r(t.$$.fragment,e)},m(e,s){i(t,e,s),a=!0},p:n,i(e){a||(l(t.$$.fragment,e),a=!0)},o(e){o(t.$$.fragment,e),a=!1},d(e){p(t,e)}}}let f=g,m=f.pages;async function k(e,t){e.query.q?f.pages=g.pages.filter((t=>t.title.includes(e.query.q))):f.pages=m}class $ extends e{constructor(e){super(),t(this,e,null,u,a,{})}}export{$ as default,k as preload};
