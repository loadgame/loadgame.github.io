import{c as u,a as w,o as x,b as $,T as B,d as C,s as I,t as _,g as E,e as S,k as q,f as n}from"./index.ade6d239.js";const D=_('<div class="hero bg-base-200 grow h-[800px]"><div class="hero-content flex-col lg:flex-row-reverse"><div class="card mt-12 shrink-0 w-full max-w-md shadow-2xl bg-base-100"><form id=signin class=card-body><div class=form-control><label class=label><span class=label-text>\u7528\u6237\u540D</span></label><input id=signupname type=text name=name placeholder=\u7528\u6237\u540D class="input input-bordered"required></div><div class=form-control><label class=label><span class=label-text>\u5BC6\u7801</span></label><input type=password name=password placeholder=\u5BC6\u7801 class="input input-bordered"required></div><div class=form-control><label class=label><span class=label-text>\u518D\u8F93\u5165\u4E00\u6B21\u5BC6\u7801</span></label><input type=password name=passwordagain placeholder=\u5BC6\u7801\u786E\u8BA4 class="input input-bordered"required></div><div class=form-control><label class=label><span class=label-text>Code</span></label><input id=codeinput type=text name=captcha placeholder=\u9A8C\u8BC1\u7801 class="input input-bordered"required></div><div class="form-control bg-gray-100"><img id=captcha></div><div class="form-control mt-6 grid grid-cols-2 gap-4 "><button class="btn btn-primary ">\u6CE8\u518C\u7528\u6237</button><a href=/ class="btn btn-primary ">\u8FD4\u56DE');function M(){const[g,b]=u(""),[f,d]=u("");w(()=>{});var h="data:image/gif;base64,R0lGODdhlgBQAIAAAAAAAP///yH5BAQAAAAALAAAAACWAFAAAAKBjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnpWVQAADs=";x(()=>{d(h),s(),document.title="MD Hub - Signup",document.getElementById("home").className="hidden";var e=document.getElementById("signin");e.addEventListener("submit",function(l){l.preventDefault();var a=new FormData(l.target),i=a.get("name"),c=a.get("password"),o=a.get("passwordagain"),r=a.get("captcha");q({name:i,pass:c,passagain:o,captchaid:g(),captcha:r},t=>{n(t.msg),t.code==0?(alert("\u7528\u6237\u6CE8\u518C\u6210\u529F\uFF01"),window.location.href="/"):t.code==501?(s(),document.getElementById("codeinput").focus(),document.getElementById("codeinput").select()):(console.log(t.code),document.getElementById("codeinput").value="",s(),document.getElementById("signupname").focus(),document.getElementById("signupname").select())},t=>{n(t)})})});function v(){console.log("callsignup")}function s(){E({},e=>{e.code==0?(b(e.captchaId),d(e.data),document.getElementById("captchainput").focus(),document.getElementById("captchainput").select()):n(e.msg)},e=>{n(e)})}return[$(B,{position:"top-center",gutter:8}),(()=>{const e=D(),l=e.firstChild,a=l.firstChild,i=a.firstChild,c=i.firstChild,o=c.nextSibling,r=o.nextSibling,t=r.nextSibling,p=t.nextSibling,m=p.firstChild,A=p.nextSibling,y=A.firstChild;return m.$$click=s,y.$$click=v,C(()=>I(m,"src",f())),e})()]}S(["click"]);export{M as default};
