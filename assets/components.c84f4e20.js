import{b as C,k as x,x as w,a as E,y as _,h as $,z as v,A as U,B as y,C as T,c as W,m as b,D as Z,o as B,e as M,E as G,u as k}from"./index.c8fb407c.js";const I="data-resizable-panel-id",j="data-panel-resize-handle",Y=100,X=t=>t.includes("row"),q=t=>t.includes("reverse"),J=(t,e)=>{let i=0;for(const l of t.children)l.getAttribute(I)&&(i+=l.getBoundingClientRect()[e]);return i},K=(t,e,i)=>{let l=0;const o=C(()=>X(i())?"width":"height");return x(w([t,o,e],([n,r])=>{n&&(l=J(n,r))})),()=>l},D=(t,e,i)=>t/e/i,Q=({zoom:t,scale:e})=>{let i=0,l=0;const[o,n]=E(0),[r,u]=E(0);return{deltaX:o,deltaY:r,init:a=>{i=D(a.clientX,t(),e()),l=D(a.clientY,t(),e()),_(()=>{n(0),u(0)})},updateMouseDelta:a=>{_(()=>{n(D(a.clientX,t(),e())-i),u(D(a.clientY,t(),e())-l)})}}},O=({zoom:t,scale:e,direction:i,updateLayout:l,state:o,containerRef:n})=>{const r=Q({zoom:t,scale:e}),[u,a]=E(void 0),c=g=>z=>{r.init(z),a(g)};return x(w(u,g=>{if(!g)return;const z=K(n,()=>o().layout.length,i),m=o().layout.map(d=>d.size),p=d=>r.updateMouseDelta(d),f=()=>a(void 0);document.addEventListener("mousemove",p),document.addEventListener("mouseup",f,{once:!0});const S=X(i()),P=q(i())?-1:1;x(w(()=>(S?r.deltaX():r.deltaY())*P,d=>{const h=d*Y/z();h!==0&&l(h,g,m)})),$(()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",f)})})),c},ee=t=>e=>Math.round(e*10**t)/10**t,V=ee(4),A=(t,e,i)=>Math.max(e,Math.min(t,i)),F=1e-6,N=t=>Math.abs(t)<F,te=(t,e,i,l)=>{let o=e.slice();const n=Math.sign(l)===1?"right":"left",r=Math.abs(l),u=(n==="left"?-1:1)*Math.sign(l),a=t.length,c=n==="left"?i+1:i,g=e[c]+u*r,z=A(g,t[c].minSize,t[c].maxSize);if(t[c].collapsible&&e[c]===0&&g<t[c].minSize)return e;o[c]=z;let m=Math.min(t[c].maxSize-e[c],r),p=0;const f=()=>n==="left"?i:i+1,S=d=>n==="left"?d>=0:d<a,P=d=>n==="left"?d-1:d+1;let s=f();for(;S(s);){if(e[s]===0){s=P(s);continue}const d=e[s]-u*m,h=A(d,t[s].minSize,t[s].maxSize),H=e[s]-h;if(m-=H,p+=H,o[s]=h,s=P(s),N(m))return o}for(s=f();S(s);){if(e[s]===0){s=P(s);continue}if(t[s].collapsible&&m>=t[s].minSize&&(m-=t[s].minSize,p+=t[s].minSize,o[s]=0),s=P(s),N(m))break}return m>F&&(o[c]=A(e[c]+u*p,t[c].minSize,t[c].maxSize)),o},ne=(t,e,i)=>{const[l,o]=v({layout:t},{name:"PanelStore"}),n=a=>o("layout",U(a)),r=C(()=>e()??te);return{state:l,setConfig:n,updateLayout:(a,c,g)=>{const z=l.layout.findIndex(p=>p.id===c);if(z===-1)return;const m=y(r)(l.layout,g,z,a).map(V);o(T(p=>{for(let f=0;f<m.length;f++)m[f]!==void 0&&(p.layout[f].size=m[f])})),i?.(m)}}},L=W(),R=t=>`SolidPanels: ${t}`,ie=t=>{let e=0,i=0;t.forEach(o=>{o.size?i+=o.size:e++});const l=V((Y-i)/e);return t.map(o=>{const n={id:o.id,size:o.size??l,minSize:o.minSize,maxSize:o.maxSize,collapsible:o.collapsible},r=n.size<n.minSize,u=n.size>n.maxSize;return(r||u)&&console.warn(R(`Error. Item with id="${o.id}" has wrong size limitations: its size (${n.size}%) is ${r?"less":"more"} than ${r?"minimum":"maximum"} size (${r?n.minSize:n.maxSize}%). `)),n})},oe=t=>{const e=b({tag:"div",zoom:1,scale:1,direction:"row"},t),[i,l]=E(),[o,n]=v([]),r=C(()=>ie(o)),{state:u,setConfig:a,updateLayout:c}=ne(r(),()=>e.resizeAlgorithm,e.onLayoutChange);Z(()=>{a(r())});const g=(s,d)=>n(T(h=>{d?h.splice(d,0,s):h.push(s)})),z=s=>{n(T(d=>{d=d.filter(h=>h.id!==s)}))},m=s=>C(()=>u.layout.find(d=>d.id===s)),p=O({zoom:()=>e.zoom,scale:()=>e.scale,direction:()=>e.direction,state:()=>u,containerRef:i,updateLayout:c}),[f,S]=E(!1);B(()=>S(!0));const P=()=>f()?"":"hidden";return M(L.Provider,{value:{registerPanel:g,unregisterPanel:z,useData:m,createMouseDownHandler:p},get children(){return M(G,{ref:l,get component(){return e.tag},get style(){return{"flex-direction":e.direction,visibility:P()}},get classList(){return{ResizeablePanelGroup:!0,ResizeablePanelGroup_vertical:!X(e.direction),[e.class??""]:!0}},get children(){return e.children}})}})},se=t=>{const e=b({tag:"div",minSize:0,maxSize:100,collapsible:!1},t),i=k(L);if(!i)return console.warn(R("Error: Panel component must be rendered inside PanelGroup component")),null;const{registerPanel:l,unregisterPanel:o,useData:n}=i,r=n(e.id),u=()=>r()?.size;return B(()=>{const a=e.id;l({id:a,size:e.initialSize,minSize:e.minSize,maxSize:e.maxSize,collapsible:e.collapsible},e.index),$(()=>o(a))}),x(()=>{!e.collapsible||x(w(u,(a,c)=>{if(!(a===void 0||c===void 0))return a===0&&c!==0&&e.onCollapse?.(),a!==0&&c===0&&e.onExpand?.(),a},{defer:!0}),y(u))}),x(()=>{const a=e.onResize;a&&x(w(u,c=>{c!==void 0&&a(c)},{defer:!0}))}),M(G,b(()=>({[I]:e.id}),{get component(){return e.tag},get classList(){return{["ResizeablePanelGroup-Panel"]:!0,[e.class??""]:!0}},get style(){return{"flex-grow":u(),"flex-shrink":1,"flex-basis":"0px",overflow:"hidden"}},get children(){return e.children}}))},le=t=>{const e=b({tag:"button",disabled:!1},t),i=k(L);if(!i)return console.warn(R("Error: Panel component must be rendered inside PanelGroup component")),null;const l=o=>{if(e.disabled)return;const n=o.currentTarget,r=n instanceof HTMLElement?n.previousElementSibling?.getAttribute(I):null,u=n instanceof HTMLElement?n.nextElementSibling?.getAttribute(I):null;r&&u&&i.createMouseDownHandler(r)(o)};return M(G,b({[j]:!0},{get component(){return e.tag},get disabled(){return e.disabled},get classList(){return{["ResizeablePanelGroup-ResizeHandle"]:!0,["ResizeablePanelGroup-ResizeHandle_disabled"]:e.disabled,[e.class??""]:!0}},onMouseDown:l,get children(){return e.children}}))},re=t=>M(oe,b(t,{get children(){return t.children}})),ce=t=>M(se,t);export{ce as P,le as R,re as a};
