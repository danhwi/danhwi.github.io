import{r as t,_ as n,a as e,b as r,c as a,i as s,d as c,S as o,s as u,e as f,u as i,q as l,g as p,h as d,v as g,n as m,w as v,x as y,y as h,z as $,A as q}from"./client.c8e3f3f7.js";import{_ as R,B as w}from"./Board.d38850ef.js";var x={segment:"life",category:"살아가는 이야기",description:"살아가며 느끼는 이것저것에 대한 끄적임",pages:[]};function B(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var c=e(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return r(this,a)}}function b(t){var n,e,r,a;return document.title=n="단휘로그::"+j.category,r=new w({props:{pages:j}}),{c:function(){e=f(),i(r.$$.fragment)},l:function(t){l('[data-svelte="svelte-acbapn"]',document.head).forEach(p),e=d(t),g(r.$$.fragment,t)},m:function(t,n){m(t,e,n),v(r,t,n),a=!0},p:function(t,e){var r=y(e,1)[0];(!a||0&r)&&n!==(n="단휘로그::"+j.category)&&(document.title=n)},i:function(t){a||(h(r.$$.fragment,t),a=!0)},o:function(t){$(r.$$.fragment,t),a=!1},d:function(t){t&&p(e),q(r,t)}}}var j=x,_=j.pages;function k(t,n){return z.apply(this,arguments)}function z(){return(z=R(t.mark((function n(e,r){return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.query.q?j.pages=x.pages.filter((function(t){return t.title.includes(e.query.q)})):j.pages=_;case 1:case"end":return t.stop()}}),n)})))).apply(this,arguments)}var A=function(t){n(r,o);var e=B(r);function r(t){var n;return a(this,r),n=e.call(this),s(c(n),t,null,b,u,{}),n}return r}();export{A as default,k as preload};
