import{n as et,m as at,a as z,p as it,i as U,f as rt,j as nt,s as ut,t as N,e as K,F as ct}from"./index.f5d3ac10.js";function V(a,u){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(a);u&&(c=c.filter(function(h){return Object.getOwnPropertyDescriptor(a,h).enumerable})),r.push.apply(r,c)}return r}function M(a){for(var u=1;u<arguments.length;u++){var r=arguments[u]!=null?arguments[u]:{};u%2?V(Object(r),!0).forEach(function(c){st(a,c,r[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(r,c))})}return a}function B(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */B=function(){return a};var a={},u=Object.prototype,r=u.hasOwnProperty,c=typeof Symbol=="function"?Symbol:{},h=c.iterator||"@@iterator",m=c.asyncIterator||"@@asyncIterator",p=c.toStringTag||"@@toStringTag";function l(e,t,o){return Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch{l=function(t,o,n){return t[o]=n}}function b(e,t,o,n){var i=t&&t.prototype instanceof T?t:T,s=Object.create(i.prototype),d=new G(n||[]);return s._invoke=function(g,S,f){var w="suspendedStart";return function($,C){if(w==="executing")throw new Error("Generator is already running");if(w==="completed"){if($==="throw")throw C;return H()}for(f.method=$,f.arg=C;;){var X=f.delegate;if(X){var y=Y(X,f);if(y){if(y===_)continue;return y}}if(f.method==="next")f.sent=f._sent=f.arg;else if(f.method==="throw"){if(w==="suspendedStart")throw w="completed",f.arg;f.dispatchException(f.arg)}else f.method==="return"&&f.abrupt("return",f.arg);w="executing";var I=P(g,S,f);if(I.type==="normal"){if(w=f.done?"completed":"suspendedYield",I.arg===_)continue;return{value:I.arg,done:f.done}}I.type==="throw"&&(w="completed",f.method="throw",f.arg=I.arg)}}}(e,o,d),s}function P(e,t,o){try{return{type:"normal",arg:e.call(t,o)}}catch(n){return{type:"throw",arg:n}}}a.wrap=b;var _={};function T(){}function D(){}function k(){}var L={};l(L,h,function(){return this});var x=Object.getPrototypeOf,v=x&&x(x(R([])));v&&v!==u&&r.call(v,h)&&(L=v);var O=k.prototype=T.prototype=Object.create(L);function j(e){["next","throw","return"].forEach(function(t){l(e,t,function(o){return this._invoke(t,o)})})}function E(e,t){function o(i,s,d,g){var S=P(e[i],e,s);if(S.type!=="throw"){var f=S.arg,w=f.value;return w&&typeof w=="object"&&r.call(w,"__await")?t.resolve(w.__await).then(function($){o("next",$,d,g)},function($){o("throw",$,d,g)}):t.resolve(w).then(function($){f.value=$,d(f)},function($){return o("throw",$,d,g)})}g(S.arg)}var n;this._invoke=function(i,s){function d(){return new t(function(g,S){o(i,s,g,S)})}return n=n?n.then(d,d):d()}}function Y(e,t){var o=e.iterator[t.method];if(o===void 0){if(t.delegate=null,t.method==="throw"){if(e.iterator.return&&(t.method="return",t.arg=void 0,Y(e,t),t.method==="throw"))return _;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var n=P(o,e.iterator,t.arg);if(n.type==="throw")return t.method="throw",t.arg=n.arg,t.delegate=null,_;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,t.method!=="return"&&(t.method="next",t.arg=void 0),t.delegate=null,_):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,_)}function W(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function G(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(W,this),this.reset(!0)}function R(e){if(e){var t=e[h];if(t)return t.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length)){var o=-1,n=function i(){for(;++o<e.length;)if(r.call(e,o))return i.value=e[o],i.done=!1,i;return i.value=void 0,i.done=!0,i};return n.next=n}}return{next:H}}function H(){return{value:void 0,done:!0}}return D.prototype=k,l(O,"constructor",k),l(k,"constructor",D),D.displayName=l(k,p,"GeneratorFunction"),a.isGeneratorFunction=function(e){var t=typeof e=="function"&&e.constructor;return!!t&&(t===D||(t.displayName||t.name)==="GeneratorFunction")},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,l(e,p,"GeneratorFunction")),e.prototype=Object.create(O),e},a.awrap=function(e){return{__await:e}},j(E.prototype),l(E.prototype,m,function(){return this}),a.AsyncIterator=E,a.async=function(e,t,o,n,i){i===void 0&&(i=Promise);var s=new E(b(e,t,o,n),i);return a.isGeneratorFunction(t)?s:s.next().then(function(d){return d.done?d.value:s.next()})},j(O),l(O,p,"Generator"),l(O,h,function(){return this}),l(O,"toString",function(){return"[object Generator]"}),a.keys=function(e){var t=[];for(var o in e)t.push(o);return t.reverse(),function n(){for(;t.length;){var i=t.pop();if(i in e)return n.value=i,n.done=!1,n}return n.done=!0,n}},a.values=R,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)t.charAt(0)==="t"&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(S,f){return s.type="throw",s.arg=e,t.next=S,f&&(t.method="next",t.arg=void 0),!!f}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],s=i.completion;if(i.tryLoc==="root")return o("end");if(i.tryLoc<=this.prev){var d=r.call(i,"catchLoc"),g=r.call(i,"finallyLoc");if(d&&g){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(d){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!g)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&(e==="break"||e==="continue")&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,_):this.complete(s)},complete:function(e,t){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&t&&(this.next=t),_},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.finallyLoc===e)return this.complete(o.completion,o.afterLoc),A(o),_}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc===e){var n=o.completion;if(n.type==="throw"){var i=n.arg;A(o)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:R(e),resultName:t,nextLoc:o},this.method==="next"&&(this.arg=void 0),_}},a}function q(a,u,r,c,h,m,p){try{var l=a[m](p),b=l.value}catch(P){r(P);return}l.done?u(b):Promise.resolve(b).then(c,h)}function F(a){return function(){var u=this,r=arguments;return new Promise(function(c,h){var m=a.apply(u,r);function p(b){q(m,c,h,p,l,"next",b)}function l(b){q(m,c,h,p,l,"throw",b)}p(void 0)})}}function st(a,u,r){return u in a?Object.defineProperty(a,u,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[u]=r,a}function J(a,u){return ft(a)||lt(a,u)||pt(a,u)||ht()}function ft(a){if(Array.isArray(a))return a}function lt(a,u){var r=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var c=[],h=!0,m=!1,p,l;try{for(r=r.call(a);!(h=(p=r.next()).done)&&(c.push(p.value),!(u&&c.length===u));h=!0);}catch(b){m=!0,l=b}finally{try{!h&&r.return!=null&&r.return()}finally{if(m)throw l}}return c}}function pt(a,u){if(!!a){if(typeof a=="string")return Q(a,u);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Q(a,u)}}function Q(a,u){(u==null||u>a.length)&&(u=a.length);for(var r=0,c=new Array(u);r<u;r++)c[r]=a[r];return c}function ht(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ot={style:{},threshold:300,minSpeed:0,rotationMultiplier:7.5,maxRotation:90,snapBackDuration:300,smoothDuration:40,bouncePower:.1,onSwipe:function(){},onSnapBack:function(){},apiRef:{}},dt=function(u,r){var c=r.x-u.x,h=r.y-u.y,m=(r.timestamp-u.timestamp)/1e3,p=c/m,l=h/m;return{x:p,y:l}},vt=function(u){return Math.abs(u.x)>Math.abs(u.y)?u.x>=0?"right":"left":u.y>=0?"up":"down"},Z=function(u){return{x:u.clientX,y:u.clientY}},tt=function(u){return{x:u.touches[0].clientX,y:u.touches[0].clientY}},mt=function(u){for(var r={},c=Object.keys(ot),h=0,m=Object.keys(u);h<m.length;h++){var p=m[h];c.includes(p)||(r[p]=u[p])}return r};const yt=N("<div></div>",2);var gt=function(u){var r=at(ot,u),c=mt(r),h={},m=z(!1),p=J(m,2),l=p[0],b=p[1],P=z({}),_=J(P,2),T=_[0],D=_[1],k=!1,L=0,x={x:0,y:0},v={x:0,y:0,timestamp:new Date().getTime()},O={x:0,y:0},j=function(n){var i={x:n.x-O.x,y:n.y-O.y,timestamp:new Date().getTime()};x=dt(v,i),L=k?x.x/1e3*r.rotationMultiplier:0,D({transform:"translate(".concat(i.x,"px, ").concat(i.y,`px)
            rotate(`).concat(L,"deg)"),transition:"ease-out ".concat(r.smoothDuration/1e3,"s")}),v=i},E=function(){var o=F(B().mark(function n(){return B().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!l()){s.next=8;break}return b(!1),D({transform:"translate(".concat(v.x*-r.bouncePower,"px, ").concat(v.y*-r.bouncePower,`px)
                rotate(`).concat(L*-r.bouncePower,"deg)"),transition:"ease-out ".concat(r.snapBackDuration/1e3,"s")}),v={x:0,y:0,timestamp:new Date().getTime()},s.next=6,new Promise(function(d){return setTimeout(function(){D({transform:"none","transition-property":"all","transition-timing-function":"cubic-bezier(0.4, 0, 0.2, 1)","transition-duration":r.snapBackDuration/2+"ms"}),d()},r.snapBackDuration+25)});case 6:x={x:0,y:0},r.onSnapBack();case 8:case"end":return s.stop()}},n)}));return function(){return o.apply(this,arguments)}}(),Y=function(){var n=Math.hypot(x.x,x.y);if(k=!1,n<r.threshold)j(O);else{var i=Math.hypot(document.body.clientWidth,document.body.clientHeight),s=i/n,d={x:x.x/n,y:x.y/n},g=n>=r.minSpeed?{x:v.x+x.x*s,y:v.y+x.y*s}:{x:v.x+d.x*r.minSpeed*s,y:v.y+d.y*r.minSpeed*s},S=L+r.maxRotation*(Math.random()-.5);D({transform:"translate(".concat(g.x,"px, ").concat(g.y,`px)
                rotate(`).concat(S,"deg)"),transition:"ease-out ".concat(s,"s")}),v=M(M({},v),g),b(!0),r.onSwipe(vt(x))}},W=function(){var o=F(B().mark(function n(i,s){var d,g,S,f,w,$,C;return B().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(!l()){y.next=2;break}return y.abrupt("return");case 2:d=s||r.minSpeed||r.threshold,g=Math.hypot(document.body.clientWidth,document.body.clientHeight),S=g/d,f=0,w=0,y.t0=i,y.next=y.t0==="right"?10:y.t0==="left"?12:y.t0==="up"?14:y.t0==="down"?16:18;break;case 10:return f=1,y.abrupt("break",18);case 12:return f=-1,y.abrupt("break",18);case 14:return w=-1,y.abrupt("break",18);case 16:return w=1,y.abrupt("break",18);case 18:$={x:v.x+d*f*S,y:v.y+d*w*S},C=L+r.maxRotation*(Math.random()-.5),D({transform:"translate(".concat($.x,"px, ").concat($.y,`px)
                rotate(`).concat(C,"deg)"),transition:"ease-out ".concat(S,"s")}),v=M(M({},v),$),b(!0),r.onSwipe(i);case 24:case"end":return y.stop()}},n)}));return function(i,s){return o.apply(this,arguments)}}(),A=function(n){n.preventDefault(),l()||(k=!0,O=Z(n))},G=function(n){n.preventDefault(),l()||(k=!0,O=tt(n))},R=function(n){n.preventDefault(),k&&j(Z(n))},H=function(n){n.preventDefault(),k&&j(tt(n))},e=function(n){n.preventDefault(),k&&Y()},t=function(){var o=yt.cloneNode(!0);return o.$$touchend=e,o.$$mouseup=e,o.addEventListener("mouseleave",e),o.$$touchstart=G,o.$$mousedown=A,o.$$touchmove=H,o.$$mousemove=R,it(o,c,!1,!0),U(o,function(){return r.children}),rt(function(n){var i=r.id,s=M(M({},r.style),T());return i!==n._v$&&nt(o,"data-testid",n._v$=i),n._v$2=ut(o,s,n._v$2),n},{_v$:void 0,_v$2:void 0}),o}();return r.apiRef.snapBack=E,r.apiRef.swipe=W,r.apiRef.swiped=l,{element:t,ref:r.ref,apiRef:h}};et(["mousemove","touchmove","mousedown","touchstart","mouseup","touchend"]);var wt=function(u){var r=gt(u),c=r.element;return c};const bt=N("<button>sw"),_t=N('<div class="w-[300px] h-[500px] relative bg-base-200">'),St=N("<div><img>");function kt(){const a=[{img:"https://picsum.photos/id/65/300/500"},{img:"https://picsum.photos/id/61/300/500"},{img:"https://picsum.photos/id/62/300/500"},{img:"https://picsum.photos/id/63/300/500"}],[u,r]=z(a);function c(p){console.log("Swiped "+p)}const h={};function m(p){h.snapBack()}return[(()=>{const p=bt();return p.$$click=m,p})(),(()=>{const p=_t();return U(p,K(ct,{get each(){return u()},children:(l,b)=>K(wt,{onSwipe:c,rotationMultiplier:20,apiRef:h,class:"absolute top-0 left-0",get children(){const P=St(),_=P.firstChild;return rt(()=>nt(_,"src",l.img)),P}})})),p})()]}et(["click"]);const $t=N('<div class="grid grid-cols-1 gap-4 place-items-center "><h1 class=text-9xl>Hello</h1><div class=mockup-code><pre data-prefix=$><code>npm i daisyui</code></pre></div><img class="mask mask-decagon"src=https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg><div class=join><button class="join-item btn">\xAB</button><button class="join-item btn">1</button><button class="join-item btn">2</button><button class="join-item btn">...</button><button class="join-item btn">99</button><button class="join-item btn">100</button><button class="join-item btn">\xBB');function Ot(){return(()=>{const a=$t(),u=a.firstChild;return U(a,K(kt,{}),u),a})()}export{Ot as default};
