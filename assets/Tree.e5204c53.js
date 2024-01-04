import{i as H,e as S,b as C,S as W,F as G,f as R,g as U,n as T,t as V,I as d,w as Y,a as J,u as K,o as Q,k as X,B as A,Y as ee,a0 as le}from"./index.7077744e.js";let te={data:""},ne=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||te,re=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ie=/\/\*[^]*?\*\/|  +/g,O=/\n+/g,M=(e,l)=>{let c="",h="",f="";for(let i in e){let a=e[i];i[0]=="@"?i[1]=="i"?c=i+" "+a+";":h+=i[1]=="f"?M(a,i):i+"{"+M(a,i[1]=="k"?"":l)+"}":typeof a=="object"?h+=M(a,l?l.replace(/([^,])+/g,o=>i.replace(/(^:.*)|([^,])+/g,s=>/&/.test(s)?s.replace(/&/g,o):o?o+" "+s:s)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),f+=M.p?M.p(i,a):i+":"+a+";")}return c+(l&&f?l+"{"+f+"}":f)+h},z={},j=e=>{if(typeof e=="object"){let l="";for(let c in e)l+=c+j(e[c]);return l}return e},ae=(e,l,c,h,f)=>{let i=j(e),a=z[i]||(z[i]=(s=>{let p=0,v=11;for(;p<s.length;)v=101*v+s.charCodeAt(p++)>>>0;return"go"+v})(i));if(!z[a]){let s=i!==e?e:(p=>{let v,x,L=[{}];for(;v=re.exec(p.replace(ie,""));)v[4]?L.shift():v[3]?(x=v[3].replace(O," ").trim(),L.unshift(L[0][x]=L[0][x]||{})):L[0][v[1]]=v[2].replace(O," ").trim();return L[0]})(e);z[a]=M(f?{["@keyframes "+a]:s}:s,c?"":"."+a)}let o=c&&z.g?z.g:null;return c&&(z.g=z[a]),((s,p,v,x)=>{x?p.data=p.data.replace(x,s):p.data.indexOf(s)===-1&&(p.data=v?s+p.data:p.data+s)})(z[a],l,h,o),a},oe=(e,l,c)=>e.reduce((h,f,i)=>{let a=l[i];if(a&&a.call){let o=a(c),s=o&&o.props&&o.props.className||/^go/.test(o)&&o;a=s?"."+s:o&&typeof o=="object"?o.props?"":M(o,""):o===!1?"":o}return h+f+(a??"")},"");function E(e){let l=this||{},c=e.call?e(l.p):e;return ae(c.unshift?c.raw?oe(c,[].slice.call(arguments,1),l.p):c.reduce((h,f)=>Object.assign(h,f&&f.call?f(l.p):f),{}):c,ne(l.target),l.g,l.o,l.k)}let ce=E.bind({g:1});E.bind({k:1});const se=V("<li class=empty>"),fe=V("<li class=leaf>"),de=V("<li class=branch><div class=branch-label>"),ue=V("<ul>");function he(e){return(()=>{const l=se();return H(l,()=>e.get.emptyLabel(e.prefix)),l})()}function ve(e){return(()=>{const l=fe();return H(l,()=>e.get.leafLabel(e.node,e.prefix)),l})()}function me(e){const l=()=>e.classNameExpanded||"expanded",c=()=>e.get.path(e.node,e.prefix),h=()=>e.get.childNodes(e.node);return(()=>{const f=de(),i=f.firstChild;return i.$$click=a=>{console.log("branch-label clicked===>",a);let o=a.target;for(;o&&o.localName!="li";)o=o.parentNode;if(!o)throw{error:"li not found",event:a};if(o.classList.toggle(l()),e.onFolderSelected&&e.onFolderSelected(e.node,e.prefix),o.classList.contains("expanded")){const s=o.querySelector("i");s.className="far fa-folder-open"}else{const s=o.querySelector("i");s.className="far fa-folder"}o.classList.contains(l())&&e.load&&e.load(e.node,e.prefix,e.get)},H(i,()=>e.get.branchLabel(e.node,e.prefix)),H(f,()=>e.recurse({...e,data:h(),prefix:c()}),null),f})()}const pe=function e(l){return(()=>{const c=ue();return H(c,S(G,{get each(){return C(()=>!!l.filter)()?l.data.filter(l.filter):l.data},get fallback(){return C(()=>!!l.component?.empty)()?l.component.empty(l):he(l)},children:(h,f)=>{const i=()=>({...l,node:h,nodeIdx:f,recurse:e});return S(W,{get when(){return l.get.isLeaf(h)},get fallback(){return C(()=>!!l.component?.branch)()?l.component.branch(i()):me(i())},get children(){return C(()=>!!l.component?.leaf)()?l.component.leaf(i()):ve(i())}})}})),R(()=>U(c,(()=>"tree-view "+(l.prefix?"":"root ")+l.className)())),c})()},we=pe;T(["click"]);function ke(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z"/>'},e)}function Se(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M7.71 3h6.79l.51.5v10l-.5.5h-13l-.5-.5v-11l.5-.5h5l.35.15.85.85zm6.28 10v-1.51l.01-4v-1.5H7.7l-.86.86-.35.15H2v6h11.99zm-6.5-8h6.5l.01-.99H7.5l-.36-.15-.85-.85H2v3h4.28l.86-.86.35-.15zm2.29 4.07L8.42 7.7l.74-.69 2.22 2.22v.71l-2.29 2.21-.7-.72 1.4-1.35H8.42a2 2 0 0 0-1.35.61A1.8 1.8 0 0 0 6.54 12h-1a2.76 2.76 0 0 1 .81-2 3 3 0 0 1 2-.93h1.43z" clip-rule="evenodd"/>'},e)}function Fe(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="m13.71 4.29-3-3L10 1H4L3 2v12l1 1h9l1-1V5l-.29-.71zM13 14H4V2h5v4h4v8zm-3-9V2l3 3h-3z" clip-rule="evenodd"/>'},e)}function Be(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M1.5 14h11l.48-.37 2.63-7-.48-.63H14V3.5l-.5-.5H7.71l-.86-.85L6.5 2h-5l-.5.5v11l.5.5zM2 3h4.29l.86.85.35.15H13v2H8.5l-.35.15-.86.85H3.5l-.47.34-1 3.08L2 3zm10.13 10H2.19l1.67-5H7.5l.35-.15.86-.85h5.79l-2.37 6z"/>'},e)}function Ne(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M14.5 3H7.71l-.85-.85L6.51 2h-5l-.5.5v11l.5.5h13l.5-.5v-10L14.5 3zm-.51 8.49V13h-12V7h4.49l.35-.15.86-.86H14v1.5l-.01 4zm0-6.49h-6.5l-.35.15-.86.86H2v-3h4.29l.85.85.36.15H14l-.01.99z"/>'},e)}function Ae(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M9.1 4.4 8.6 2H7.4l-.5 2.4-.7.3-2-1.3-.9.8 1.3 2-.2.7-2.4.5v1.2l2.4.5.3.8-1.3 2 .8.8 2-1.3.8.3.4 2.3h1.2l.5-2.4.8-.3 2 1.3.8-.8-1.3-2 .3-.8 2.3-.4V7.4l-2.4-.5-.3-.8 1.3-2-.8-.8-2 1.3-.7-.2zM9.4 1l.5 2.4L12 2.1l2 2-1.4 2.1 2.4.4v2.8l-2.4.5L14 12l-2 2-2.1-1.4-.5 2.4H6.6l-.5-2.4L4 13.9l-2-2 1.4-2.1L1 9.4V6.6l2.4-.5L2.1 4l2-2 2.1 1.4.4-2.4h2.8zm.6 7c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8 9c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z"/>'},e)}function Oe(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M13.507 12.324a7 7 0 0 0 .065-8.56A7 7 0 0 0 2 4.393V2H1v3.5l.5.5H5V5H2.811a6.008 6.008 0 1 1-.135 5.77l-.887.462a7 7 0 0 0 11.718 1.092zm-3.361-.97.708-.707L8 7.792V4H7v4l.146.354 3 3z" clip-rule="evenodd"/>'},e)}function Te(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M2.287 2.326 2.692 2h.677v3h-.708V2.792l-.374.281v-.747zM5 3h10v1H5V3zm0 4h10v1H5V7zm10 4H5v1h10v-1zM3.742 7.626l.029-.039.065-.09a.84.84 0 0 0 .156-.507c0-.12-.02-.24-.057-.354a.848.848 0 0 0-.492-.529 1.123 1.123 0 0 0-.452-.082 1.094 1.094 0 0 0-.458.087.867.867 0 0 0-.479.522A1.038 1.038 0 0 0 2 6.957v.05h.81v-.05a.3.3 0 0 1 .046-.157.174.174 0 0 1 .057-.054.19.19 0 0 1 .172 0 .188.188 0 0 1 .056.06.24.24 0 0 1 .031.081.445.445 0 0 1-.036.29 1.309 1.309 0 0 1-.12.182l-1 1.138-.012.013v.54h1.988v-.7h-.9l.65-.724zm-.037 3.817c.046.032.086.07.12.114a.841.841 0 0 1 .167.55c0 .107-.017.213-.05.314a.792.792 0 0 1-.487.5 1.288 1.288 0 0 1-.48.079c-.115 0-.23-.016-.341-.049a.94.94 0 0 1-.258-.123.751.751 0 0 1-.182-.177 1.063 1.063 0 0 1-.116-.2A1.038 1.038 0 0 1 2 12.078v-.049h.814v.049c0 .027.003.055.009.082a.207.207 0 0 0 .03.074.14.14 0 0 0 .053.052.2.2 0 0 0 .157.008.159.159 0 0 0 .056-.039.22.22 0 0 0 .042-.075.417.417 0 0 0 .017-.126.483.483 0 0 0-.022-.163.2.2 0 0 0-.051-.08.138.138 0 0 0-.06-.029.537.537 0 0 0-.077-.007h-.161v-.645h.168a.241.241 0 0 0 .069-.011.164.164 0 0 0 .065-.034.175.175 0 0 0 .048-.067.286.286 0 0 0 .021-.121.28.28 0 0 0-.016-.1.166.166 0 0 0-.097-.099.2.2 0 0 0-.156.007.164.164 0 0 0-.055.053.344.344 0 0 0-.04.156v.049H2v-.049a.987.987 0 0 1 .18-.544.8.8 0 0 1 .179-.186.87.87 0 0 1 .262-.133c.114-.036.234-.053.354-.051.116-.001.231.01.344.036.092.021.18.055.263.1a.757.757 0 0 1 .32.318.73.73 0 0 1 .09.347.81.81 0 0 1-.167.528.562.562 0 0 1-.12.114z" clip-rule="evenodd"/>'},e)}function je(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M4 9H13V10H4z"/><path d="M4 12H11V13H4z"/><path d="M4 6H14V7H4z"/><path d="M1 3H12V4H1z"/><path d="M4 4H5V13H4z"/>'},e)}function Ee(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M6.345 5h2.1v6.533H6.993l.055-5.31-1.774 5.31H4.072l-1.805-5.31c.04.644.06 5.31.06 5.31H1V5h2.156s1.528 4.493 1.577 4.807L6.345 5zm6.71 3.617v-3.5H11.11v3.5H9.166l2.917 2.916L15 8.617h-1.945z"/>'},e)}function Ze(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="m9.5 1.1 3.4 3.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9 2v3h2.9L9 2zm4 14h-1v-3H9v-1h3V9h1v3h3v1h-3v3z" clip-rule="evenodd"/>'},e)}function De(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M14.5 2H7.71l-.85-.85L6.51 1h-5l-.5.5v11l.5.5H7v-1H1.99V6h4.49l.35-.15.86-.86H14v1.5l-.001.51h1.011V2.5L14.5 2zm-.51 2h-6.5l-.35.15-.86.86H2v-3h4.29l.85.85.36.15H14l-.01.99zM13 16h-1v-3H9v-1h3V9h1v3h3v1h-3v3z" clip-rule="evenodd"/>'},e)}function Pe(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M3 1h11l1 1v5.3a3.21 3.21 0 0 0-1-.3V2H9v10.88L7.88 14H3l-1-1V2l1-1zm0 12h5V2H3v11zm10.379-4.998a2.53 2.53 0 0 0-1.19.348h-.03a2.51 2.51 0 0 0-.799 3.53L9 14.23l.71.71 2.35-2.36c.325.22.7.358 1.09.4a2.47 2.47 0 0 0 1.14-.13 2.51 2.51 0 0 0 1-.63 2.46 2.46 0 0 0 .58-1 2.63 2.63 0 0 0 .07-1.15 2.53 2.53 0 0 0-1.35-1.81 2.53 2.53 0 0 0-1.211-.258zm.24 3.992a1.5 1.5 0 0 1-.979-.244 1.55 1.55 0 0 1-.56-.68 1.49 1.49 0 0 1-.08-.86 1.49 1.49 0 0 1 1.18-1.18 1.49 1.49 0 0 1 .86.08c.276.117.512.311.68.56a1.5 1.5 0 0 1-1.1 2.324z" clip-rule="evenodd"/>'},e)}function qe(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M10 6h3.9A5.006 5.006 0 0 0 10 2.1V6Zm0-4.917A6.005 6.005 0 0 1 15 7H9V1c.34 0 .675.028 1 .083ZM7 8l1 1h4.9A5.002 5.002 0 0 1 3 8a5.002 5.002 0 0 1 4-4.9V8Zm1 6a6.002 6.002 0 0 0 6-6H8V2a6.002 6.002 0 0 0 0 12Z" clip-rule="evenodd"/>'},e)}function ge(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M4.681 3H2V2h3.5l.5.5V6H5V4a5 5 0 1 0 4.53-.761l.302-.954A6 6 0 1 1 4.681 3z" clip-rule="evenodd"/>'},e)}function Ie(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="m14.85 2.65-1.5-1.5L13 1H4.48l-.5.5V4H1.5l-.5.5v10l.5.5h10l.5-.5V12h2.5l.5-.5V3l-.15-.35zM11 14H2V5h1v3.07h6V5h.79L11 6.21V14zM6 7V5h2v2H6zm8 4h-2V6l-.15-.35-1.5-1.5L10 4H5V2h7.81l1.21 1.21L14 11z"/>'},e)}function We(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M11.04 1.33 12.71 3l.29.71v.33h-.5l-.5.5v-.83l-1.67-1.67H10v4H4v-4H2v10h3l-.5 1H2l-1-1v-10l1-1h8.33l.71.29zM7 5h2V2H7v3zm6.5 0L15 6.5l-.02.69-5.5 5.5-.13.12-.37.37-.1.09-3 1.5-.67-.67 1.5-3 .09-.1.37-.37.12-.13 5.5-5.5h.71zm-6.22 7.24-.52 1 1.04-.48-.52-.52zm.69-1.03.79.79 5.15-5.15-.79-.79-5.15 5.15z" clip-rule="evenodd"/>'},e)}function Ge(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="m13.353 1.146 1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z" clip-rule="evenodd"/>'},e)}function Re(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" clip-rule="evenodd"/>'},e)}function Ue(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M5 7V5a3 3 0 0 1 5.83-1h1.044A4.002 4.002 0 0 0 4 5v2H3L2 8v6l1 1h10l1-1V8l-1-1H5zm6 1h2v6H3V8h8z" clip-rule="evenodd"/>'},e)}function Ye(e){return d({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 11h1v2h14v-2h1v3H0v-3Z" clip-rule="evenodd"/><path d="M6.84 11h-.88v-.86h-.022c-.383.66-.947.989-1.692.989-.548 0-.977-.145-1.289-.435-.308-.29-.462-.675-.462-1.155 0-1.028.605-1.626 1.816-1.794l1.649-.23c0-.935-.378-1.403-1.134-1.403-.662 0-1.26.226-1.794.677v-.902c.541-.344 1.164-.516 1.87-.516 1.292 0 1.938.684 1.938 2.052V11Zm-.88-2.782L4.633 8.4c-.408.058-.716.16-.924.307-.208.143-.311.399-.311.768 0 .268.095.488.284.66.194.168.45.253.768.253a1.41 1.41 0 0 0 1.08-.457c.286-.308.43-.696.43-1.165v-.548ZM9.348 10.205h-.022V11h-.88V2.857h.88v3.61h.021c.434-.73 1.068-1.096 1.902-1.096.705 0 1.257.247 1.654.741.401.49.602 1.15.602 1.977 0 .92-.224 1.658-.672 2.213-.447.551-1.06.827-1.837.827-.726 0-1.276-.308-1.649-.924Zm-.022-2.218v.768c0 .455.147.841.44 1.16.298.315.674.473 1.128.473.534 0 .951-.204 1.252-.613.304-.408.456-.975.456-1.702 0-.613-.141-1.092-.424-1.44-.283-.347-.666-.52-1.15-.52-.511 0-.923.178-1.235.536-.311.355-.467.8-.467 1.338Z"/>'},e)}const He=V("<span class=name>"),Ve=V("<span class=link-target>"),$e=V('<i class="far fa-folder">'),ze=V('<span class=link-source><i class="far fa-file"></i> '),xe=V('<span class=file><i class="far fa-file"></i> '),Le=V("<button>"),be=V('<div class="h-full ">');var B="",r="linux-find";B+=`
  .${r}.tree-view.root { margin-left: 1px; margin-right: 1px; }
  .${r}.tree-view.root { height: 100%; /* fit to container */; overflow: auto; /* scroll on demand */ }
  .${r}.tree-view { text-align: left; }
  .${r}.tree-view,
  .${r}.tree-view ul { list-style: none; padding: 0; }
  .${r}.tree-view li { white-space: pre; /* dont wrap on x overflow. TODO fix width on overflow */ }
  .${r}.tree-view li.branch > span { color: blue; font-family: monospace; }
  .${r}.tree-view li.branch > ul { display: none; /* default collapsed */ }
  .${r}.tree-view li.branch.expanded { outline: solid 1px grey; }
  .${r}.tree-view li.branch.expanded > ul { display: block; }
  .${r}.tree-view li.empty { font-style: italic; }
  .${r}.tree-view span.link-source { color: green; }
  .${r}.tree-view span.link-source,
  .${r}.tree-view div.branch-label,
  .${r}.tree-view span.file,
  .${r}.tree-view span.name,
  .${r}.tree-view span.prefix { font-family: monospace; cursor: pointer; }
  /* .${r}.tree-view span.prefix { opacity: 0.6; } */ /* this looks worse than expected */
`;var r="file-tree";B+=`
  .${r}.tree-view.root { margin-left: 1px; margin-right: 1px; }
  .${r}.tree-view.root { height: 100%; /* fit to container */; overflow: auto; /* scroll on demand */ }
  .${r}.tree-view { text-align: left; }
  .${r}.tree-view,
  .${r}.tree-view ul { width:100%;list-style: none; padding: 0; }
  .${r}.tree-view ul { padding-left: 0.5em; margin-left: 0.5em; border-left: solid 1px grey; }
  .${r}.tree-view li { white-space: pre; white-space: nowrap;/* dont wrap on x overflow. TODO fix width on overflow */ }
  .${r}.tree-view li.branch > span { color: blue; font-family: monospace; }
  .${r}.tree-view li.branch > ul { display: none; /* default collapsed */ }
  .${r}.tree-view li.branch.expanded {  }
  .${r}.tree-view li.branch.expanded > ul { display: block; }
  .${r}.tree-view li.empty { font-style: italic; }
  .${r}.tree-view span.link-source { color: green; }
  .${r}.tree-view span.link-source,
  .${r}.tree-view div.branch-label,
  .${r}.tree-view span.file,
  .${r}.tree-view span.name { font-family: monospace; cursor: pointer; }
  .${r}.tree-view span.name:bexfore {    content: "\\f07b";    font-family: "Font Awesome 5 Free"; padding-right: 5px; }
`;ce(B);function ye(e){const[l,c]=Y({fileList:[],fileSelected:""}),[h,f]=J({}),[i]=K(ee);async function a(){le({rootDirectory:".",excludeFilter:".*"},m=>{f(m),v()},m=>{toast(m)})}async function o(){c("fileList",[]),await a()}Q(async()=>{await a()}),X(async()=>{console.log("createEffect..."),i()&&await a(),i()||c("fileList",[])});const s="/";function p(t,m){if(t.length>1&&t.endsWith("/")&&(t=t.substring(0,t.length-1)),t.startsWith("/")||(t="/"+t),t=="/")return m;let $=t.split("/");$.shift();for(const g of m)if(g.n===$[0])return $.length===1?typeof g.c<"u"?g.c:[]:p($.slice(1).join("/"),g.c);return[]}async function v(t=null,m="",$=null){const g=t&&$?$.path(t,m):s,b=["fileList"],_=3;let n=l.fileList;if(g.split("/").filter(Boolean).forEach((y,P)=>{const N=n.findIndex(([Me,q,I,_e])=>q=="d"&&I==y);b.push(N),n=n[N],b.push(_),n=n[_]}),n.length>0)return;const w=g.split("/").filter(Boolean).length;console.log(`loadFiles path = "${g}" + depth "${w}" + prefix "${m}"`);var u=h();if(typeof u.files>"u")return;var k=p(g,u.files.c);g=="/"&&(k=u.files.c);const F={files:k.map((y,P)=>{if(y.d)return[w,"d",y.n,[]];if(!y.d)return[w,"f",y.n,y.s]})};console.log(F),!l.fileList||l.fileList.length==0?c("fileList",F.files):c(...b,F.files)}function x(t){e.onSelected&&e.onSelected(t)}function L(t,m){typeof m>"u"&&(m=""),e.onFolderSelected&&e.onFolderSelected(t[2],m)}function Z(){const t={};t.isLeaf=n=>n[1]!="d",t.name=n=>n[2]+(n[1]=="d"?"/":""),t.path=(n,w)=>(w||s)+t.name(n),t.childNodes=n=>n[3],t.emptyLabel=n=>" - - -";const m=n=>n[1]=="l",$=n=>n[1]=="f",g=n=>n[3],b=(n,w)=>(()=>{const u=He();return H(u,()=>t.name(n)),u})(),_=(n,w)=>()=>{c("fileSelected",t.path(n,w)),x(t.path(n,w))};return t.branchLabel=(n,w)=>[$e()," ",C(()=>b(n))],t.leafLabel=(n,w)=>{if(m(n))return[(()=>{const u=ze();return u.firstChild.nextSibling,A(u,"click",_(n,w),!0),H(u,()=>b(n),null),u})()," -> ",(()=>{const u=Ve();return H(u,()=>g(n)),u})()];if($(n))return(()=>{const u=xe();return u.firstChild.nextSibling,A(u,"click",_(n,w),!0),H(u,()=>b(n),null),u})()},t}function D(){return t=>t[2][0]!="."}return[(()=>{const t=Le();return t.$$click=o,H(t,S(ge,{})),t})(),(()=>{const t=be();return H(t,S(we,{get data(){return l.fileList},get get(){return Z()},get filter(){return D()},onFolderSelected:L,load:v,className:"file-tree"})),t})()]}T(["click"]);const Je=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"}));export{ye as T,ke as V,We as a,Ie as b,Fe as c,Be as d,Ne as e,Ae as f,Oe as g,Ye as h,Ee as i,Se as j,ge as k,Pe as l,je as m,Ue as n,Re as o,De as p,Ze as q,Ge as r,Te as s,qe as t,Je as u};
