function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i;function c(e,t,n,r){if(e){const o=f(e,t,n,r);return e[0](o)}}function f(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function l(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}function u(e,t,n,r,o,s){if(o){const a=f(t,n,r,s);e.p(a,o)}}function d(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function h(e){return null==e?"":e}let p,_=!1;function m(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function g(e,t){if(_){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const s=t[e].claim_order,a=(o>0&&t[n[o]].claim_order<=s?o+1:m(1,o,(e=>t[n[e]].claim_order),s))-1;r[e]=n[a]+1;const i=a+1;n[i]=e,o=Math.max(i,o)}const s=[],a=[];let i=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(s.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);s.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<s.length&&a[t].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;e.insertBefore(a[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function v(e,t,n){_&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function S(){return E(" ")}function P(){return E("")}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e){return Array.from(e.childNodes)}function w(e,t,n,r,o=!1){!function(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}(e);const s=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const s=e[r];if(t(s)){const t=n(s);return void 0===t?e.splice(r,1):e[r]=t,o||(e.claim_info.last_index=r),s}}for(let r=e.claim_info.last_index-1;r>=0;r--){const s=e[r];if(t(s)){const t=n(s);return void 0===t?e.splice(r,1):e[r]=t,o?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,s}}return r()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function I(e,t,n){return function(e,t,n,r){return w(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const o=e.attributes[r];n[o.name]||t.push(o.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}(e,t,n,b)}function j(e,t){return w(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function A(e){return j(e," ")}function C(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function q(e,t){e.value=null==t?"":t}function R(e,t=document.body){return Array.from(t.querySelectorAll(e))}function T(e){p=e}function O(){if(!p)throw new Error("Function called outside component initialization");return p}const k=[],L=[],J=[],U=[],B=Promise.resolve();let M=!1;function V(e){J.push(e)}let z=!1;const D=new Set;function K(){if(!z){z=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];T(t),H(t.$$)}for(T(null),k.length=0;L.length;)L.pop()();for(let e=0;e<J.length;e+=1){const t=J[e];D.has(t)||(D.add(t),t())}J.length=0}while(k.length);for(;U.length;)U.pop()();M=!1,z=!1,D.clear()}}function H(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}const G=new Set;let W;function Y(){W={r:0,c:[],p:W}}function F(){W.r||o(W.c),W=W.p}function X(e,t){e&&e.i&&(G.delete(e),e.i(t))}function Q(e,t,n,r){if(e&&e.o){if(G.has(e))return;G.add(e),W.c.push((()=>{G.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function Z(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const a=e[s],i=t[s];if(i){for(const e in a)e in i||(r[e]=1);for(const e in i)o[e]||(n[e]=i[e],o[e]=1);e[s]=i}else for(const e in a)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ee(e){return"object"==typeof e&&null!==e?e:{}}function te(e){e&&e.c()}function ne(e,t){e&&e.l(t)}function re(e,t,r,a){const{fragment:i,on_mount:c,on_destroy:f,after_update:l}=e.$$;i&&i.m(t,r),a||V((()=>{const t=c.map(n).filter(s);f?f.push(...t):o(t),e.$$.on_mount=[]})),l.forEach(V)}function oe(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){-1===e.$$.dirty[0]&&(k.push(e),M||(M=!0,B.then(K)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(t,n,s,a,i,c,f,l=[-1]){const u=p;T(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:r(),dirty:l,skip_bound:!1,root:n.target||u.$$.root};f&&f(d.root);let h=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),h&&se(t,e)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){_=!0;const e=N(n.target);d.fragment&&d.fragment.l(e),e.forEach($)}else d.fragment&&d.fragment.c();n.intro&&X(t.$$.fragment),re(t,n.target,n.anchor,n.customElement),_=!1,K()}T(u)}class ie{$destroy(){oe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ce=[];function fe(t,n=e){let r;const o=new Set;function s(e){if(a(t,e)&&(t=e,r)){const e=!ce.length;for(const e of o)e[1](),ce.push(e,t);if(e){for(let e=0;e<ce.length;e+=2)ce[e][0](ce[e+1]);ce.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(a,i=e){const c=[a,i];return o.add(c),1===o.size&&(r=n(s)||e),a(t),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}const le={};function ue(t){let n,r,o,s,a,c,f,l,u,d,p,_,m,y,P,w,C,R,T,O,k,L,J,U,B,M,V,z,D,K,H,G,W,Y,F,X,Q,Z,ee,te;return{c(){n=b("nav"),r=b("a"),o=E("danhwi.log"),s=S(),a=b("ul"),c=b("li"),f=b("a"),l=E("살아가는 이야기"),p=S(),_=b("li"),m=b("a"),y=E("가상세계 이야기"),C=S(),R=b("li"),T=b("a"),O=E("언젠가의 이야기"),J=S(),U=b("div"),B=b("input"),M=S(),V=b("button"),z=E("🔍"),H=S(),G=b("span"),W=b("button"),Y=b("img"),X=S(),Q=b("span"),Z=E("×"),this.h()},l(e){n=I(e,"NAV",{id:!0,class:!0});var t=N(n);r=I(t,"A",{href:!0,class:!0});var i=N(r);o=j(i,"danhwi.log"),i.forEach($),s=A(t),a=I(t,"UL",{class:!0});var u=N(a);c=I(u,"LI",{class:!0});var d=N(c);f=I(d,"A",{href:!0,class:!0,"aria-current":!0});var h=N(f);l=j(h,"살아가는 이야기"),h.forEach($),d.forEach($),p=A(u),_=I(u,"LI",{class:!0});var g=N(_);m=I(g,"A",{href:!0,class:!0,"aria-current":!0});var v=N(m);y=j(v,"가상세계 이야기"),v.forEach($),g.forEach($),C=A(u),R=I(u,"LI",{class:!0});var b=N(R);T=I(b,"A",{href:!0,class:!0,"aria-current":!0});var E=N(T);O=j(E,"언젠가의 이야기"),E.forEach($),b.forEach($),u.forEach($),J=A(t),U=I(t,"DIV",{class:!0});var S=N(U);B=I(S,"INPUT",{type:!0,class:!0}),M=A(S),V=I(S,"BUTTON",{onclick:!0,class:!0});var P=N(V);z=j(P,"🔍"),P.forEach($),S.forEach($),t.forEach($),H=A(e),G=I(e,"SPAN",{class:!0,id:!0});var x=N(G);W=I(x,"BUTTON",{class:!0,id:!0,onclick:!0});var w=N(W);Y=I(w,"IMG",{src:!0,alt:!0,class:!0}),X=A(w),Q=I(w,"SPAN",{class:!0});var q=N(Q);Z=j(q,"×"),q.forEach($),w.forEach($),x.forEach($),this.h()},h(){var e,o;x(r,"href","."),x(r,"class","logo svelte-1fhquoy"),x(f,"href","life"),x(f,"class",u=h("life"===t[0]?"":"hvr-curl-bottom-right")+" svelte-1fhquoy"),x(f,"aria-current",d="life"===t[0]?"page":void 0),x(c,"class","svelte-1fhquoy"),x(m,"href","fiction"),x(m,"class",P=h("fiction"===t[0]?"":"hvr-curl-bottom-right")+" svelte-1fhquoy"),x(m,"aria-current",w="fiction"===t[0]?"page":void 0),x(_,"class","svelte-1fhquoy"),x(T,"href","trace"),x(T,"class",k=h("trace"===t[0]?"":"hvr-curl-bottom-right")+" svelte-1fhquoy"),x(T,"aria-current",L="trace"===t[0]?"page":void 0),x(R,"class","svelte-1fhquoy"),x(a,"class","svelte-1fhquoy"),x(B,"type","text"),x(B,"class","svelte-1fhquoy"),x(V,"onclick",D="location.href='"+t[0]+"?q="+t[1]+"'"),V.disabled=K=!t[1],x(V,"class","svelte-1fhquoy"),x(U,"class","search svelte-1fhquoy"),x(n,"id","nav"),x(n,"class","off svelte-1fhquoy"),e=Y.src,o=F="logo-192.png",i||(i=document.createElement("a")),i.href=o,e!==i.href&&x(Y,"src","logo-192.png"),x(Y,"alt","danhwi.log"),x(Y,"class","svelte-1fhquoy"),x(Q,"class","svelte-1fhquoy"),x(W,"class","menu svelte-1fhquoy"),x(W,"id","mobile-nav"),x(W,"onclick","document.getElementById('nav').classList.toggle('off');document.getElementById('mobile-nav').classList.toggle('on');"),x(G,"class","mobile-nav on svelte-1fhquoy"),x(G,"id","mobile-nav")},m(e,i){var u,d,h,$;v(e,n,i),g(n,r),g(r,o),g(n,s),g(n,a),g(a,c),g(c,f),g(f,l),g(a,p),g(a,_),g(_,m),g(m,y),g(a,C),g(a,R),g(R,T),g(T,O),g(n,J),g(n,U),g(U,B),q(B,t[1]),g(U,M),g(U,V),g(V,z),v(e,H,i),v(e,G,i),g(G,W),g(W,Y),g(W,X),g(W,Q),g(Q,Z),ee||(u=B,d="input",h=t[2],u.addEventListener(d,h,$),te=()=>u.removeEventListener(d,h,$),ee=!0)},p(e,[t]){1&t&&u!==(u=h("life"===e[0]?"":"hvr-curl-bottom-right")+" svelte-1fhquoy")&&x(f,"class",u),1&t&&d!==(d="life"===e[0]?"page":void 0)&&x(f,"aria-current",d),1&t&&P!==(P=h("fiction"===e[0]?"":"hvr-curl-bottom-right")+" svelte-1fhquoy")&&x(m,"class",P),1&t&&w!==(w="fiction"===e[0]?"page":void 0)&&x(m,"aria-current",w),1&t&&k!==(k=h("trace"===e[0]?"":"hvr-curl-bottom-right")+" svelte-1fhquoy")&&x(T,"class",k),1&t&&L!==(L="trace"===e[0]?"page":void 0)&&x(T,"aria-current",L),2&t&&B.value!==e[1]&&q(B,e[1]),3&t&&D!==(D="location.href='"+e[0]+"?q="+e[1]+"'")&&x(V,"onclick",D),2&t&&K!==(K=!e[1])&&(V.disabled=K)},i:e,o:e,d(e){e&&$(n),e&&$(H),e&&$(G),ee=!1,te()}}}function de(e,t,n){let r,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment)},[o,r,function(){r=this.value,n(1,r)}]}class he extends ie{constructor(e){super(),ae(this,e,de,ue,a,{segment:0})}}function pe(e){let t,n;return t=new he({props:{segment:e[0]}}),{c(){te(t.$$.fragment)},l(e){ne(t.$$.fragment,e)},m(e,r){re(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.segment=e[0]),t.$set(r)},i(e){n||(X(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function _e(e){let t,n,r,o,s=void 0!==e[0]&&pe(e);const a=e[2].default,i=c(a,e,e[1],null);return{c(){s&&s.c(),t=S(),n=b("main"),i&&i.c(),this.h()},l(e){s&&s.l(e),t=A(e),n=I(e,"MAIN",{class:!0});var r=N(n);i&&i.l(r),r.forEach($),this.h()},h(){x(n,"class",r=h(void 0===e[0]?"index-main":"")+" svelte-1k2wihy")},m(e,r){s&&s.m(e,r),v(e,t,r),v(e,n,r),i&&i.m(n,null),o=!0},p(e,[c]){void 0!==e[0]?s?(s.p(e,c),1&c&&X(s,1)):(s=pe(e),s.c(),X(s,1),s.m(t.parentNode,t)):s&&(Y(),Q(s,1,1,(()=>{s=null})),F()),i&&i.p&&(!o||2&c)&&u(i,a,e,e[1],o?l(a,e[1],c,null):d(e[1]),null),(!o||1&c&&r!==(r=h(void 0===e[0]?"index-main":"")+" svelte-1k2wihy"))&&x(n,"class",r)},i(e){o||(X(s),X(i,e),o=!0)},o(e){Q(s),Q(i,e),o=!1},d(e){s&&s.d(e),e&&$(t),e&&$(n),i&&i.d(e)}}}function me(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(1,o=e.$$scope)},[s,o,r]}class ge extends ie{constructor(e){super(),ae(this,e,me,_e,a,{segment:0})}}function ve(e){let t,n,r=e[1].stack+"";return{c(){t=b("pre"),n=E(r)},l(e){t=I(e,"PRE",{});var o=N(t);n=j(o,r),o.forEach($)},m(e,r){v(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&C(n,r)},d(e){e&&$(t)}}}function $e(t){let n,r,o,s,a,i,c,f,l,u=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&ve(t);return{c(){r=S(),o=b("h1"),s=E(t[0]),a=S(),i=b("p"),c=E(u),f=S(),d&&d.c(),l=P(),this.h()},l(e){R('[data-svelte="svelte-1o9r2ue"]',document.head).forEach($),r=A(e),o=I(e,"H1",{class:!0});var n=N(o);s=j(n,t[0]),n.forEach($),a=A(e),i=I(e,"P",{class:!0});var h=N(i);c=j(h,u),h.forEach($),f=A(e),d&&d.l(e),l=P(),this.h()},h(){x(o,"class","svelte-8od9u6"),x(i,"class","svelte-8od9u6")},m(e,t){v(e,r,t),v(e,o,t),g(o,s),v(e,a,t),v(e,i,t),g(i,c),v(e,f,t),d&&d.m(e,t),v(e,l,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&C(s,e[0]),2&t&&u!==(u=e[1].message+"")&&C(c,u),e[2]&&e[1].stack?d?d.p(e,t):(d=ve(e),d.c(),d.m(l.parentNode,l)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&$(r),e&&$(o),e&&$(a),e&&$(i),e&&$(f),d&&d.d(e),e&&$(l)}}}function ye(e,t,n){let{status:r}=t,{error:o}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,o=e.error)},[r,o,false]}class be extends ie{constructor(e){super(),ae(this,e,ye,$e,a,{status:0,error:1})}}function Ee(e){let n,r,o;const s=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&te(n.$$.fragment),r=P()},l(e){n&&ne(n.$$.fragment,e),r=P()},m(e,t){n&&re(n,e,t),v(e,r,t),o=!0},p(e,t){const o=16&t?Z(s,[ee(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){Y();const e=n;Q(e.$$.fragment,1,0,(()=>{oe(e,1)})),F()}a?(n=new a(i()),te(n.$$.fragment),X(n.$$.fragment,1),re(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(e){o||(n&&X(n.$$.fragment,e),o=!0)},o(e){n&&Q(n.$$.fragment,e),o=!1},d(e){e&&$(r),n&&oe(n,e)}}}function Se(e){let t,n;return t=new be({props:{error:e[0],status:e[1]}}),{c(){te(t.$$.fragment)},l(e){ne(t.$$.fragment,e)},m(e,r){re(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(X(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function Pe(e){let t,n,r,o;const s=[Se,Ee],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=s[t](e),{c(){n.c(),r=P()},l(e){n.l(e),r=P()},m(e,n){a[t].m(e,n),v(e,r,n),o=!0},p(e,o){let c=t;t=i(e),t===c?a[t].p(e,o):(Y(),Q(a[c],1,1,(()=>{a[c]=null})),F(),n=a[t],n?n.p(e,o):(n=a[t]=s[t](e),n.c()),X(n,1),n.m(r.parentNode,r))},i(e){o||(X(n),o=!0)},o(e){Q(n),o=!1},d(e){a[t].d(e),e&&$(r)}}}function xe(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let s={$$slots:{default:[Pe]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)s=t(s,o[e]);return n=new ge({props:s}),{c(){te(n.$$.fragment)},l(e){ne(n.$$.fragment,e)},m(e,t){re(n,e,t),r=!0},p(e,[t]){const r=12&t?Z(o,[4&t&&{segment:e[2][0]},8&t&&ee(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(X(n.$$.fragment,e),r=!0)},o(e){Q(n.$$.fragment,e),r=!1},d(e){oe(n,e)}}}function Ne(e,t,n){let{stores:r}=t,{error:o}=t,{status:s}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:f}=t;var l,u,d;return l=f,O().$$.after_update.push(l),u=le,d=r,O().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,s=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,f=e.notify)},[o,s,a,i,c,r,f]}class we extends ie{constructor(e){super(),ae(this,e,Ne,xe,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ie=[],je=[{js:()=>Promise.all([import("./index.26a5f035.js"),__inject_styles(["client-d7870034.css","index-1ef6590f.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./index.f1439470.js"),__inject_styles(["client-d7870034.css","Board-c62a8c25.css","index-c93c364b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./index.8a48cbfa.js"),__inject_styles(["client-d7870034.css","Board-c62a8c25.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./emotional-ups-and-downs.375ea01b.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css","emotional-ups-and-downs-2a13f173.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./software-engineering.ad4bde14.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./unconscious-judgment.7cd380b5.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css","unconscious-judgment-ac99ed46.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./act-engineering.0c602395.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./deux-message.2092ba16.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./act-agile.82d8652b.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css","act-agile-ac99ed46.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./index.216e1c48.js"),__inject_styles(["client-d7870034.css","Board-c62a8c25.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./press-the-shutter-of-the-writing.abeb052a.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css","press-the-shutter-of-the-writing-ac99ed46.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./walking-through-the-past.5d82b933.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css","walking-through-the-past-ac99ed46.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./urge-to-do-quickly.18f008bd.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./grass-planting.9fd7e963.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./even-too-busy.df17d03d.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./promise.f818ae6a.js"),__inject_styles(["client-d7870034.css","Post-21c1fb0b.css"])]).then((function(e){return e[0]}))}],Ae=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/fiction\/?$/,parts:[{i:1}]},{pattern:/^\/trace\/?$/,parts:[{i:2}]},{pattern:/^\/trace\/emotional-ups-and-downs\/?$/,parts:[null,{i:3}]},{pattern:/^\/trace\/software-engineering\/?$/,parts:[null,{i:4}]},{pattern:/^\/trace\/unconscious-judgment\/?$/,parts:[null,{i:5}]},{pattern:/^\/trace\/act-engineering\/?$/,parts:[null,{i:6}]},{pattern:/^\/trace\/deux-message\/?$/,parts:[null,{i:7}]},{pattern:/^\/trace\/act-agile\/?$/,parts:[null,{i:8}]},{pattern:/^\/life\/?$/,parts:[{i:9}]},{pattern:/^\/life\/press-the-shutter-of-the-writing\/?$/,parts:[null,{i:10}]},{pattern:/^\/life\/walking-through-the-past\/?$/,parts:[null,{i:11}]},{pattern:/^\/life\/urge-to-do-quickly\/?$/,parts:[null,{i:12}]},{pattern:/^\/life\/grass-planting\/?$/,parts:[null,{i:13}]},{pattern:/^\/life\/even-too-busy\/?$/,parts:[null,{i:14}]},{pattern:/^\/life\/promise\/?$/,parts:[null,{i:15}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ce(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))}function qe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let Re,Te=1;const Oe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ke={};let Le,Je;function Ue(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((e=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r})),t}function Be(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Le))return null;let t=e.pathname.slice(Le.length);if(""===t&&(t="/"),!Ie.some((e=>e.test(t))))for(let n=0;n<Ae.length;n+=1){const r=Ae[n],o=r.pattern.exec(t);if(o){const n=Ue(e.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:o,page:i}}}}function Me(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=qe(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Be(o);if(s){De(s,null,t.hasAttribute("sapper:noscroll"),o.hash),e.preventDefault(),Oe.pushState({id:Re},"",o.href)}}function Ve(){return{x:pageXOffset,y:pageYOffset}}function ze(e){if(ke[Re]=Ve(),e.state){const t=Be(new URL(location.href));t?De(t,e.state.id):location.href=location.href}else Te=Te+1,function(e){Re=e}(Te),Oe.replaceState({id:Re},"",location.href)}function De(e,t,n,r){return Ce(this,void 0,void 0,(function*(){const o=!!t;if(o)Re=t;else{const e=Ve();ke[Re]=e,Re=t=++Te,ke[Re]=n?e:{x:0,y:0}}if(yield Je(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ke[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ke[Re]=n,o||e?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ke(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let He,Ge=null;function We(e){const t=qe(e.target);t&&"prefetch"===t.rel&&function(e){const t=Be(new URL(e,Ke(document)));if(t)Ge&&e===Ge.href||(Ge={href:e,promise:ut(t)}),Ge.promise}(t.href)}function Ye(e){clearTimeout(He),He=setTimeout((()=>{We(e)}),20)}function Fe(e,t={noscroll:!1,replaceState:!1}){const n=Be(new URL(e,Ke(document)));return n?(Oe[t.replaceState?"replaceState":"pushState"]({id:Re},"",e),De(n,null,t.noscroll)):(location.href=e,new Promise((()=>{})))}const Xe="undefined"!=typeof __SAPPER__&&__SAPPER__;let Qe,Ze,et,tt=!1,nt=[],rt="{}";const ot={page:function(e){const t=fe(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:fe(null),session:fe(Xe&&Xe.session)};let st,at,it;function ct(e,t){const{error:n}=e;return Object.assign({error:n},t)}function ft(e){return Ce(this,void 0,void 0,(function*(){Qe&&ot.preloading.set(!0);const t=function(e){return Ge&&Ge.href===e.href?Ge.promise:ut(e)}(e),n=Ze={},r=yield t,{redirect:o}=r;if(n===Ze)if(o)yield Fe(o.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield lt(n,t,ct(t,e.page))}}))}function lt(e,t,n){return Ce(this,void 0,void 0,(function*(){ot.page.set(n),ot.preloading.set(!1),Qe?Qe.$set(t):(t.stores={page:{subscribe:ot.page.subscribe},preloading:{subscribe:ot.preloading.subscribe},session:ot.session},t.level0={props:yield et},t.notify=ot.page.notify,Qe=new we({target:it,props:t,hydrate:!0})),nt=e,rt=JSON.stringify(n.query),tt=!0,at=!1}))}function ut(e){return Ce(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{s.error="string"==typeof t?new Error(t):t,s.status=e}};if(!et){const e=()=>({});et=Xe.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},st)}let i,c=1;try{const o=JSON.stringify(n.query),f=t.pattern.exec(n.path);let l=!1;i=yield Promise.all(t.parts.map(((t,i)=>Ce(this,void 0,void 0,(function*(){const u=r[i];if(function(e,t,n,r){if(r!==rt)return!0;const o=nt[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,u,f,o)&&(l=!0),s.segments[c]=r[i+1],!t)return{segment:u};const d=c++;if(!at&&!l&&nt[i]&&nt[i].part===t.i)return nt[i];l=!1;const{default:h,preload:p}=yield je[t.i].js();let _;return _=tt||!Xe.preloaded[i+1]?p?yield p.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},st):{}:Xe.preloaded[i+1],s[`level${d}`]={component:h,props:_,segment:u,match:f,part:t.i}})))))}catch(e){s.error=e,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var dt,ht,pt;ot.session.subscribe((e=>Ce(void 0,void 0,void 0,(function*(){if(st=e,!tt)return;at=!0;const t=Be(new URL(location.href)),n=Ze={},{redirect:r,props:o,branch:s}=yield ut(t);n===Ze&&(r?yield Fe(r.location,{replaceState:!0}):yield lt(s,o,ct(o,t.page)))})))),dt={target:document.querySelector("#sapper")},ht=dt.target,it=ht,pt=Xe.baseUrl,Le=pt,Je=ft,"scrollRestoration"in Oe&&(Oe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Oe.scrollRestoration="auto"})),addEventListener("load",(()=>{Oe.scrollRestoration="manual"})),addEventListener("click",Me),addEventListener("popstate",ze),addEventListener("touchstart",We),addEventListener("mousemove",Ye),Xe.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:o,status:s,error:a}=Xe;et||(et=o&&o[0]);const i={error:a,status:s,session:r,level0:{props:et},level1:{props:{status:s,error:a},component:be},segments:o},c=Ue(n);lt([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;Oe.replaceState({id:Te},"",t);const n=Be(new URL(location.href));if(n)return De(n,Te,!0,e)}));export{d as A,l as B,ie as S,S as a,A as b,I as c,$ as d,b as e,N as f,j as g,x as h,ae as i,g as j,v as k,te as l,ne as m,e as n,re as o,X as p,R as q,Q as r,a as s,E as t,oe as u,P as v,C as w,y as x,c as y,u as z};

import __inject_styles from './inject_styles.5607aec6.js';