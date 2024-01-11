import{o as c,t as s,e as p}from"./index.8e384a50.js";const f=s(`<div class="grid grid-cols-1 gap-4 place-items-center "><h1 class=text-9xl>About</h1><pre id=pre class=mermaid>graph LR
A --- B
B-->C[fa:fa-ban forbidden]
B-->D(fa:fa-spinner hello) ;</pre><div id=katex>iint_{Sigma}\begin{vmatrix} cos alpha &amp; cos \beta &amp; cos gamma \\ cfrac{partial}{partial x} &amp; cfrac{partial}{partial y} &amp; cfrac{partial}{partial z} \\ P &amp; Q &amp; R end{vmatrix}dS=oint_{Gamma}Pdx+Qdy+Rdz    </div><button class=btn>update</button><button class=btn>update2`);function g(){const n=`graph LR
A --- B
B-->C[fa:fa-ban forbidden]
B-->D(fa:fa-spinner hello) ;`,i=`graph LR
A --- B
B-->C[fa:fa-ban forbidden]
B-->D(fa:fa-spinner hello again) ;`;c(()=>{console.log("onMount"),mermaid.initialize({startOnLoad:!0}),mermaid.run(),t()});function l(){var a=document.getElementById("pre");a.setAttribute("data-processed",""),a.innerHTML=n,mermaid.run({querySelector:".mermaid"});var e=document.getElementById("katex");katex.render(String.raw`\ce{SO4^2- + Ba^2+ -> BaSO4 v}`,e,{throwOnError:!1})}document.addEventListener("DOMContentLoaded",function(){renderMathInElement(document.body,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}],macros:{"\\ge":"\\geqslant","\\le":"\\leqslant","\\geq":"\\geqslant","\\leq":"\\leqslant"}})});function t(){var a=document.getElementById("pre");a.setAttribute("data-processed",""),a.innerHTML=i,mermaid.run({querySelector:".mermaid"});var e=document.getElementById("katex");katex.render(String.raw`\iint_{\Sigma}\begin{vmatrix} \cos \alpha & \cos \beta & \cos \gamma \\ \cfrac{\partial}{\partial x} & \cfrac{\partial}{\partial y} & \cfrac{\partial}{\partial z} \\ P & Q & R \end{vmatrix}dS=\oint_{\Gamma}Pdx+Qdy+Rdz    `,e,{throwOnError:!1})}return(()=>{const a=f(),e=a.firstChild,d=e.nextSibling,o=d.nextSibling,r=o.nextSibling,m=r.nextSibling;return r.$$click=l,m.$$click=t,a})()}p(["click"]);export{g as default};
