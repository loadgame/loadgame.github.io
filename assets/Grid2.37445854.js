import{a as C,i as v,e as p,n as S,t as f,b as P}from"./index.2002d894.js";import{A as _}from"./index.faed450e.js";import"./ag-theme-alpine.911277b5.js";const M=f("<div><div><button>Update Data</button><button>Call API</button><button>Set Row Data</button></div><div class=ag-theme-alpine>"),u="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",k=()=>{const r=["Black","Red","Green","Orange","White"],n=[];for(var t=0;t<100;t++)n.push({id:t,a:t*33%100,b:t*77%100,c:t*17%100,text:u.substring(0,(t+5)*77*33%u.length),color:r[t%r.length]});const[m,g]=C(n),h=[{headerName:"Group 1",children:[{field:"a",checkboxSelection:!0,rowDrag:!0},{field:"b",cellEditorPopup:!0,cellEditorPopupPosition:"under"}]},{field:"c"},{field:"color",cellRenderer:e=>["# ",P(()=>e.value)]},{field:"text",width:300}],b={detailGridOptions:{columnDefs:[{field:"a"},{field:"b"},{field:"c"}],defaultColDef:{flex:1}},getDetailRowData:e=>{const o=[];for(let l=0;l<8;l++)o.push({a:Math.random(),b:Math.random(),c:Math.random()});e.successCallback(o)}},w={resizable:!0,filter:!0,sortable:!0,editable:!0,floatingFilter:!0},D=e=>e.data.id,R=()=>{const e=()=>Math.floor(Math.random()*1e3);a.api.applyTransaction({update:[{id:"1",a:e(),b:e(),c:e()}]})},$=()=>{const e=a.api.getRowNode("1");console.log("row node",e);const o=a.api.getCellRendererInstances({columns:["a","b","c"],rowNodes:[e]});console.log("instances",o),o?.forEach(l=>{l.myMethod&&l.myMethod()})},x=()=>{g([{id:0},{id:1},{id:2}])};let a;return(()=>{const e=M(),o=e.firstChild,l=o.firstChild,i=l.nextSibling,y=i.nextSibling,s=o.nextSibling;return e.style.setProperty("height","100%"),e.style.setProperty("display","flex"),e.style.setProperty("flex-direction","column"),l.$$click=R,i.$$click=$,y.$$click=x,s.style.setProperty("flex-grow","1"),v(s,p(_,{columnDefs:h,rowDragManaged:!0,defaultColDef:w,detailCellRendererParams:b,getRowId:D,rowSelection:"multiple",detailRowAutoHeight:!0,suppressRowClickSelection:!0,get rowData(){return m()},ref(c){const d=a;typeof d=="function"?d(c):a=c}})),e})()};S(["click"]);const A=f('<div class="grid grid-cols-1 place-content-center place-items-center h-96 w-all text-7xl"><div>Grid2');function N(){return[A(),p(k,{})]}export{N as default};
