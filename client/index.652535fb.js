import{S as a,i as e,s,a as t,l as r,q as n,d as c,c as o,m as l,j as p,o as i,p as f,r as g,u as m}from"./client.35fcf381.js";import{B as u}from"./Board.bae0a34f.js";var d={segment:"trace",category:"언젠가의 이야기",description:"이곳저곳에서 발견되곤 하는 과거의 흔적들",pages:[]};function $(a){let e,s,d,$;return document.title=e="단휘로그::"+y.category,d=new u({props:{pages:y}}),{c(){s=t(),r(d.$$.fragment)},l(a){n('[data-svelte="svelte-acbapn"]',document.head).forEach(c),s=o(a),l(d.$$.fragment,a)},m(a,e){p(a,s,e),i(d,a,e),$=!0},p(a,[s]){(!$||0&s)&&e!==(e="단휘로그::"+y.category)&&(document.title=e)},i(a){$||(f(d.$$.fragment,a),$=!0)},o(a){g(d.$$.fragment,a),$=!1},d(a){a&&c(s),m(d,a)}}}let y=d,q=y.pages;async function h(a,e){a.query.q?y.pages=d.pages.filter((e=>e.title.includes(a.query.q))):y.pages=q}class j extends a{constructor(a){super(),e(this,a,null,$,s,{})}}export{j as default,h as preload};
