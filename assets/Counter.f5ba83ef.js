import{a as l,k as y,h as L,o as z,i as s,e as p,S as M,f as a,j as S,F as T,n as E,t as e,d as I}from"./index.08fa8d8e.js";const A=e("<h1>Counter"),F=e("<br>"),K=e("<button class=btn>count is "),O=e("<div>x: "),P=e("<button class=btn>Log out"),X=e("<ul>"),j=e("<div style=background-color:#0888;width:500px;height:500px>The mouse position is <!> x "),G=e("<button class=btn>foo"),H=e("<button class=btn>bar"),J=e("<button class=btn>baz"),Q=e("<div width=256 height=256>"),R=e("<button class=btn>Log in"),U=e("<li><a target=_blank>: ");function q(){const[o,m]=l(0),[_,h]=l(!1),[f,W]=l([{id:"J---aiyznGQ",name:"Keyboard Cat"},{id:"z_AbfPXTKms",name:"Maru"},{id:"OUtn3pvWmpg",name:"Henri The Existential Cat"}]),[b,C]=l({x:0,y:0});function x(t){C({x:t.clientX,y:t.clientY})}const d=()=>h(!_());y(()=>{console.log("The count is now",o())});const k=setInterval(()=>m(o()+1),1e3);L(()=>clearInterval(k));const v=()=>o()*2,[i,u]=l("foo");let $;return z(()=>{$.innerText="On Mount"}),[A(),F(),(()=>{const t=K();return t.firstChild,t.$$click=()=>m(n=>n+1),s(t,o,null),t})(),(()=>{const t=O();return t.firstChild,s(t,v,null),t})(),p(M,{get when(){return _()},get fallback(){return(()=>{const t=R();return t.$$click=d,t})()},get children(){const t=P();return t.$$click=d,t}}),(()=>{const t=X();return s(t,p(T,{get each(){return f()},children:(n,c)=>(()=>{const g=U(),r=g.firstChild,w=r.firstChild;return s(r,()=>c()+1,w),s(r,()=>n.name,null),a(()=>S(r,"href",`https://www.youtube.com/watch?v=${n.id}`)),g})()})),t})(),(()=>{const t=j(),n=t.firstChild,c=n.nextSibling;return c.nextSibling,t.$$mousemove=x,s(t,()=>b().x,c),s(t,()=>b().y,null),t})(),(()=>{const t=G();return t.$$click=()=>u("foo"),a(()=>t.classList.toggle("selected",i()==="foo")),t})(),(()=>{const t=H();return t.$$click=()=>u("bar"),a(()=>t.classList.toggle("selected",i()==="bar")),t})(),(()=>{const t=J();return t.$$click=()=>u("baz"),a(()=>t.classList.toggle("selected",i()==="baz")),t})(),(()=>{const t=Q(),n=$;return typeof n=="function"?I(n,t):$=t,t})()]}E(["click","mousemove"]);export{q as C};
