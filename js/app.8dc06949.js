(function(t){function e(e){for(var c,n,s=e[0],r=e[1],u=e[2],l=0,d=[];l<s.length;l++)n=s[l],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);b&&b(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],c=!0,n=1;n<a.length;n++){var s=a[n];0!==i[s]&&(c=!1)}c&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var c={},n={app:0},i={app:0},o=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e8d6d62a"}[t]+".js"}function r(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var c="css/"+({about:"about"}[t]||t)+"."+{about:"4649546e"}[t]+".css",i=r.p+c,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===c||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===c||l===i)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var c=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete n[t],b.parentNode.removeChild(b),a(o)},b.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){n[t]=0})));var c=i[t];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise((function(e,a){c=i[t]=[e,a]}));e.push(c[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(b);var a=i[t];if(0!==a){if(a){var c=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+c+": "+n+")",d.name="ChunkLoadError",d.type=c,d.request=n,a[1](d)}i[t]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=c,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)r.d(a,c,function(e){return t[e]}.bind(null,c));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var b=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"031e":function(t,e,a){},"0e96":function(t,e,a){},1051:function(t,e,a){"use strict";a("58c0")},1808:function(t,e,a){"use strict";var c=a("7a23"),n=Object(c["E"])("data-v-51387f29");Object(c["t"])("data-v-51387f29");var i={class:"nav-container"},o=Object(c["h"])("div",{class:"logo"},[Object(c["h"])("a",{href:"/"},[Object(c["g"])("d"),Object(c["h"])("span",null,"3"),Object(c["g"])("fend")])],-1),s=Object(c["g"])("home"),r=Object(c["g"])("contact"),u=Object(c["g"])("privacy"),l=Object(c["g"])("get started"),d={class:"pc-links"},b=Object(c["g"])("home"),m=Object(c["g"])("contact"),p=Object(c["g"])("privacy"),f=Object(c["g"])("get started"),O=Object(c["h"])("span",null,null,-1),j=Object(c["h"])("span",null,null,-1),h=Object(c["h"])("span",null,null,-1),v=Object(c["h"])("i",{class:"fas fa-chevron-up"},null,-1);Object(c["r"])();var g=n((function(t,e,a,g,y,C){var w=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("nav",null,[Object(c["h"])("div",i,[o,Object(c["h"])("ul",{class:"phone-links",style:{display:t.show?"block":"none"}},[Object(c["h"])("li",null,[Object(c["h"])(w,{to:"/"},{default:n((function(){return[s]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(w,{to:"/contact"},{default:n((function(){return[r]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(w,{to:"/privacy"},{default:n((function(){return[u]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(w,{to:"/started",class:"started"},{default:n((function(){return[l]})),_:1})])],4),Object(c["h"])("ul",d,[Object(c["h"])("li",null,[Object(c["h"])(w,{to:"/"},{default:n((function(){return[b]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(w,{to:"/contact"},{default:n((function(){return[m]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(w,{to:"/privacy"},{default:n((function(){return[p]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(w,{to:"/started",class:"started"},{default:n((function(){return[f]})),_:1})])]),Object(c["h"])("div",{class:"hamburger-menu",onClick:e[1]||(e[1]=function(t){return C.toggleMenu()})},[O,j,h])]),Object(c["h"])("div",{class:"goUp",id:"goUp",onClick:e[2]||(e[2]=function(t){return C.goingUp()})},[v])])})),y={name:"Navbar",data:function(){return{show:!1,value:"one"}},methods:{toggleMenu:function(){this.show=!this.show},goingUp:function(){window.scrollTo({top:0,behavior:"smooth"})}}};a("507d");y.render=g,y.__scopeId="data-v-51387f29";e["a"]=y},"288c":function(t,e,a){"use strict";a("df6b")},"2e5b":function(t,e,a){"use strict";a("c100")},"2fe4":function(t,e,a){},"3b9d":function(t,e,a){"use strict";a("031e")},"3d5e":function(t,e,a){},"491f":function(t,e,a){},"4c03":function(t,e,a){"use strict";var c=a("7a23"),n=Object(c["E"])("data-v-10747ba5");Object(c["t"])("data-v-10747ba5");var i={class:"container"},o=Object(c["f"])('<div class="social" data-v-10747ba5><div class="logo" data-v-10747ba5><a href="/" data-v-10747ba5>d<span data-v-10747ba5>3</span>fend</a></div><ul class="links" data-v-10747ba5><li data-v-10747ba5><a href="https://www.facebook.com/profile.php?id=100008721162215" data-v-10747ba5><i class="fab fa-facebook-square" data-v-10747ba5></i></a></li><li data-v-10747ba5><a href="https://www.youtube.com" data-v-10747ba5><i class="fab fa-youtube" data-v-10747ba5></i></a></li><li data-v-10747ba5><a href="https://www.twitter.com" data-v-10747ba5><i class="fab fa-twitter" data-v-10747ba5></i></a></li><li data-v-10747ba5><a href="https://www.instagram.com" data-v-10747ba5><i class="fab fa-instagram" data-v-10747ba5></i></a></li><li data-v-10747ba5><a href="https://www.linkedin.com" data-v-10747ba5><i class="fab fa-linkedin" data-v-10747ba5></i></a></li></ul></div>',1),s={class:"links"},r=Object(c["h"])("ul",{class:"links1"},[Object(c["h"])("li",null,[Object(c["h"])("a",{href:"/",class:"active"},"home")]),Object(c["h"])("li",null,[Object(c["h"])("a",{href:"/#service"},"services")]),Object(c["h"])("li",null,[Object(c["h"])("a",{href:"/#About"},"about")])],-1),u={class:"links2"},l=Object(c["h"])("li",null,[Object(c["h"])("a",{href:"/#Strategy"},"strategy")],-1),d=Object(c["g"])("contact"),b=Object(c["g"])("privacy policy"),m={class:"copyright"},p={class:"start"},f=Object(c["h"])("span",{class:"copy"},"©D3fend, all rights reserved",-1);Object(c["r"])();var O=n((function(t,e,a,O,j,h){var v=Object(c["x"])("router-link"),g=Object(c["x"])("GetStarted");return Object(c["q"])(),Object(c["d"])("footer",null,[Object(c["h"])("div",i,[o,Object(c["h"])("div",s,[r,Object(c["h"])("ul",u,[l,Object(c["h"])("li",null,[Object(c["h"])(v,{to:"/contact"},{default:n((function(){return[d]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])(v,{to:"/privacy"},{default:n((function(){return[b]})),_:1})])])]),Object(c["h"])("div",m,[Object(c["h"])("span",p,[Object(c["h"])(g)]),f])])])})),j=a("a61c"),h={name:"Footer",components:{GetStarted:j["a"]}};a("d784");h.render=O,h.__scopeId="data-v-10747ba5";e["a"]=h},"507d":function(t,e,a){"use strict";a("dd3d")},5690:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");function n(t,e){var a=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["d"])(a)}a("866d");const i={};i.render=n;var o=i,s=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),r={class:"home App"};function u(t,e,a,n,i,o){var s=Object(c["x"])("Navbar"),u=Object(c["x"])("Landing"),l=Object(c["x"])("Services"),d=Object(c["x"])("Expert"),b=Object(c["x"])("Creativity"),m=Object(c["x"])("Steps"),p=Object(c["x"])("Best"),f=Object(c["x"])("Clients"),O=Object(c["x"])("Footer");return Object(c["q"])(),Object(c["d"])("div",r,[Object(c["h"])(s),Object(c["h"])(u),Object(c["h"])(l),Object(c["h"])(d),Object(c["h"])(b),Object(c["h"])(m),Object(c["h"])(p),Object(c["h"])(f),Object(c["h"])(O)])}var l=Object(c["E"])("data-v-11daadac");Object(c["t"])("data-v-11daadac");var d={class:"landing",id:"home"},b={class:"container"},m={class:"content","data-aos":"fade-right"},p=Object(c["h"])("p",{class:"p-1"},"creative cyber security solutions",-1),f=Object(c["h"])("h1",null,[Object(c["g"])(" we are much more a"),Object(c["h"])("br"),Object(c["g"])(" cyber security startup. ")],-1),O=Object(c["h"])("p",{class:"p-2"},[Object(c["g"])(" Lorem, ipsum dolor sit amet consectetur adipisicing elit."),Object(c["h"])("br"),Object(c["g"])(" Corporis eius molestias quaerat velit magnam et ab quas dolors! ")],-1);Object(c["r"])();var j=l((function(t,e,a,n,i,o){var s=Object(c["x"])("GetStarted");return Object(c["q"])(),Object(c["d"])("div",d,[Object(c["h"])("div",b,[Object(c["h"])("div",m,[p,f,O,Object(c["h"])(s)])])])})),h=a("a61c"),v={name:"Landing",components:{GetStarted:h["a"]}};a("e74f");v.render=j,v.__scopeId="data-v-11daadac";var g=v,y=a("1808"),C=Object(c["E"])("data-v-7cfaec26");Object(c["t"])("data-v-7cfaec26");var w={class:"services",id:"service"},q=Object(c["h"])("div",{class:"service-top","data-aos":"fade-up"},[Object(c["h"])("p",{class:"p-1"},"our services"),Object(c["h"])("h2",null,"Our Special Services"),Object(c["h"])("p",{class:"p-2"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo. ")],-1),_={class:"service-bottom"},x={class:"container"};Object(c["r"])();var k=C((function(t,e,a,n,i,o){var s=Object(c["x"])("Item");return Object(c["q"])(),Object(c["d"])("section",w,[q,Object(c["h"])("div",_,[Object(c["h"])("div",x,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(i.items,(function(t){return Object(c["q"])(),Object(c["d"])(s,{key:t.id,iName:t.iName,title:t.title,details:t.details},null,8,["iName","title","details"])})),128))])])])})),N=Object(c["E"])("data-v-56367186");Object(c["t"])("data-v-56367186");var S={class:"item","data-aos":"fade-up"};Object(c["r"])();var L=N((function(t,e,a,n,i,o){return Object(c["q"])(),Object(c["d"])("div",S,[Object(c["h"])("i",{class:a.iName},null,2),Object(c["h"])("h3",null,Object(c["z"])(a.title),1),Object(c["h"])("p",null,Object(c["z"])(a.details),1)])})),I={name:"Item",props:["id","iName","title","details"]};a("ffb1");I.render=L,I.__scopeId="data-v-56367186";var E=I,A=a("fef6"),P={data:function(){return{items:A}},name:"Services",components:{Item:E}};a("c8a3");P.render=k,P.__scopeId="data-v-7cfaec26";var T=P,J=Object(c["E"])("data-v-38833512");Object(c["t"])("data-v-38833512");var M={class:"expert",id:"About"};Object(c["r"])();var z=J((function(t,e,a,n,i,o){var s=Object(c["x"])("Content");return Object(c["q"])(),Object(c["d"])("section",M,[Object(c["h"])(s,{src:"https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1100",alt:"expert img",p1Content:"Creative Solutions",h2Content:"We Are The Trusted Experts We Keep Things Simple",info1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum\n      risus, non suscipit arcu. Quisque aliquam posuere tortor iscing elit. Duis\n      at dictum risus, non suscipit arcu.",info2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo\n      laboriosam, dolorum ducimus aliquam consequuntur!"},null,8,["src","info1","info2"])])})),D=Object(c["E"])("data-v-78c7ea56");Object(c["t"])("data-v-78c7ea56");var U={class:"img","data-aos":"fade-up"},B={class:"content","data-aos":"fade-up"},G={class:"p1"},H={class:"info info1"},W={class:"info"},F=Object(c["g"])(" know more"),K=Object(c["g"])(" know more");Object(c["r"])();var R=D((function(t,e,a,n,i,o){var s=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["h"])("div",U,[Object(c["h"])("img",{"data-src":a.src,alt:a.alt,class:"lazyload"},null,8,["data-src","alt"])]),Object(c["h"])("div",B,[Object(c["h"])("p",G,Object(c["z"])(a.p1Content),1),Object(c["h"])("h2",null,Object(c["z"])(a.h2Content),1),Object(c["h"])("p",H,Object(c["z"])(a.info1),1),Object(c["h"])("p",W,Object(c["z"])(a.info2),1),"expert img"===a.alt?(Object(c["q"])(),Object(c["d"])(s,{key:0,to:"/more_info1"},{default:D((function(){return[F]})),_:1})):Object(c["e"])("",!0),"creative img"===a.alt?(Object(c["q"])(),Object(c["d"])(s,{key:1,to:"/more_info2"},{default:D((function(){return[K]})),_:1})):Object(c["e"])("",!0)])],64)})),Q={name:"Content",props:["src","alt","p1Content","h2Content","info1","info2","dataAosImg","dataAosContent"]};a("288c");Q.render=R,Q.__scopeId="data-v-78c7ea56";var Y=Q,V={name:"Expert",components:{Content:Y}};a("3b9d");V.render=z,V.__scopeId="data-v-38833512";var X=V,Z=Object(c["E"])("data-v-7d43d5a0");Object(c["t"])("data-v-7d43d5a0");var $={class:"creativity"};Object(c["r"])();var tt=Z((function(t,e,a,n,i,o){var s=Object(c["x"])("Content");return Object(c["q"])(),Object(c["d"])("section",$,[Object(c["h"])(s,{src:"https://images.pexels.com/photos/3285203/pexels-photo-3285203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1100",alt:"creative img",p1Content:"Cloud & Cyber Security",h2Content:"Creative Cyber Security & Cloud Computing Solutions",info1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at\n            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor\n            iscing elit. Duis at dictum risus, non suscipit arcu.",info2:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo\n            laboriosam, dolorum ducimus aliquam consequuntur!"},null,8,["src","info1","info2"])])})),et={name:"Creativity",components:{Content:Y}};a("fc5e");et.render=tt,et.__scopeId="data-v-7d43d5a0";var at=et,ct=Object(c["E"])("data-v-fa6edc54");Object(c["t"])("data-v-fa6edc54");var nt={class:"steps",id:"Strategy"},it=Object(c["h"])("div",{class:"top","data-aos":"fade-up"},[Object(c["h"])("p",{class:"p1"},"Working Steps"),Object(c["h"])("h2",null,"How It Works"),Object(c["h"])("p",{class:"p2"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit sit nostrum animi quod perferendis amet, magnam veniam distinctio illum. ")],-1),ot={class:"bottom"},st={class:"container"};Object(c["r"])();var rt=ct((function(t,e,a,n,i,o){var s=Object(c["x"])("Item");return Object(c["q"])(),Object(c["d"])("section",nt,[it,Object(c["h"])("div",ot,[Object(c["h"])("div",st,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(i.items,(function(t){return Object(c["q"])(),Object(c["d"])(s,{key:t.id,iName:t.iName,title:t.h3Content,details:t.pContent},null,8,["iName","title","details"])})),128))])])])})),ut=a("98a3"),lt={data:function(){return{items:ut}},name:"Steps",components:{Item:E}};a("acf3");lt.render=rt,lt.__scopeId="data-v-fa6edc54";var dt=lt,bt=Object(c["E"])("data-v-078576a6");Object(c["t"])("data-v-078576a6");var mt={class:"best"},pt=Object(c["h"])("p",null,[Object(c["g"])(" best place to protect "),Object(c["h"])("br"),Object(c["g"])(" your company ")],-1);Object(c["r"])();var ft=bt((function(t,e,a,n,i,o){return Object(c["q"])(),Object(c["d"])("section",mt,[pt])})),Ot={name:"Best"};a("eb27");Ot.render=ft,Ot.__scopeId="data-v-078576a6";var jt=Ot,ht=Object(c["E"])("data-v-549060c4");Object(c["t"])("data-v-549060c4");var vt={class:"clients"},gt={class:"container"},yt=Object(c["h"])("div",{class:"content","data-aos":"fade-up"},[Object(c["h"])("p",{class:"p1"},"Our Testimonials"),Object(c["h"])("h2",null,"Loved By Our Clients"),Object(c["h"])("p",{class:"p2"}," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, culpa. Autem explicabo dolores commodi odit consequuntur alias, harum veniam suscipit. ")],-1),Ct={class:"slide-btns1"},wt={class:"slide-btns2"};Object(c["r"])();var qt=ht((function(t,e,a,n,i,o){var s=Object(c["x"])("Client");return Object(c["q"])(),Object(c["d"])("section",vt,[Object(c["h"])("div",gt,[yt,Object(c["h"])("div",{class:"clients-slider",style:{marginLeft:i.margin}},[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(i.clients,(function(t){return Object(c["q"])(),Object(c["d"])(s,{key:t.id,id:t.id,clientImg:t.clientImg,clientName:t.clientName,clientJob:t.clientJob,clientComment:t.clientComment},null,8,["id","clientImg","clientName","clientJob","clientComment"])})),128))],4),Object(c["h"])("div",Ct,[Object(c["h"])("span",{class:["btn-1",{clicked:"one"===i.coloring}],onClick:e[1]||(e[1]=function(t){return o.change("one","0")})},null,2),Object(c["h"])("span",{class:["btn-2",{clicked:"two"===i.coloring}],onClick:e[2]||(e[2]=function(t){return o.change("two","-97%")})},null,2),Object(c["h"])("span",{class:["btn-3",{clicked:"three"===i.coloring}],onClick:e[3]||(e[3]=function(t){return o.change("three","-194%")})},null,2),Object(c["h"])("span",{class:["btn-4",{clicked:"four"===i.coloring}],onClick:e[4]||(e[4]=function(t){return o.change("four","-290%")})},null,2)]),Object(c["h"])("div",wt,[Object(c["h"])("span",{class:["btn-1",{clicked:"one"===i.coloring}],onClick:e[5]||(e[5]=function(t){return o.change("one","0")})},null,2),Object(c["h"])("span",{class:["btn-2",{clicked:"two"===i.coloring}],onClick:e[6]||(e[6]=function(t){return o.change("two","-100.5%")})},null,2)])])])})),_t=Object(c["E"])("data-v-40947c93");Object(c["t"])("data-v-40947c93");var xt={class:"img"},kt={class:"info"},Nt={class:"p2"},St={class:"client-comment"},Lt={class:"p1"};Object(c["r"])();var It=_t((function(t,e,a,n,i,o){return Object(c["q"])(),Object(c["d"])("div",{class:"client-item",id:"cl"+a.id},[Object(c["h"])("div",xt,[Object(c["h"])("img",{"data-src":a.clientImg,alt:a.clientName,class:"lazyload"},null,8,["data-src","alt"]),Object(c["h"])("div",kt,[Object(c["h"])("h3",null,Object(c["z"])(a.clientName),1),Object(c["h"])("p",Nt,Object(c["z"])(a.clientJob),1)])]),Object(c["h"])("div",St,[Object(c["h"])("p",Lt,Object(c["z"])(a.clientComment),1)])],8,["id"])})),Et={name:"Client",props:["key","clientImg","clientName","clientJob","clientComment","id"]};a("1051");Et.render=It,Et.__scopeId="data-v-40947c93";var At=Et,Pt=a("a10e"),Tt={data:function(){return{clients:Pt,margin:0,coloring:"one"}},name:"Clients",components:{Client:At},methods:{change:function(t,e){this.margin=e,this.coloring=t}}};a("bf80");Tt.render=qt,Tt.__scopeId="data-v-549060c4";var Jt=Tt,Mt=a("4c03"),zt={name:"Home",components:{Landing:g,Navbar:y["a"],Services:T,Expert:X,Creativity:at,Steps:dt,Best:jt,Clients:Jt,Footer:Mt["a"]},created:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>=1.5*window.innerHeight?document.querySelector("#goUp").style.display="block":document.querySelector("#goUp").style.display="none"}}};zt.render=u;var Dt=zt,Ut=[{path:"/",name:"Home",component:Dt},{path:"/started",name:"About",component:function(){return a.e("about").then(a.bind(null,"3bfc"))}},{path:"/privacy",name:"Privacy",component:function(){return a.e("about").then(a.bind(null,"6f9f"))}},{path:"/more_info1",name:"ReadMore1",component:function(){return a.e("about").then(a.bind(null,"9b9f"))}},{path:"/more_info2",name:"ReadMore2",component:function(){return a.e("about").then(a.bind(null,"284d"))}},{path:"/privacy",name:"Privacy",component:function(){return a.e("about").then(a.bind(null,"6f9f"))}},{path:"/contact",name:"Contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}}],Bt=Object(s["a"])({history:Object(s["b"])("/"),routes:Ut}),Gt=Bt,Ht=a("5502"),Wt=Object(Ht["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(o).use(Wt).use(Gt).mount("#app")},"58c0":function(t,e,a){},7626:function(t,e,a){},"7f59":function(t,e,a){},"866d":function(t,e,a){"use strict";a("7f59")},"98a3":function(t){t.exports=JSON.parse('[{"id":"1","iName":"fa fa-globe","h3Content":"Add Your Security Problem","pContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "},{"id":"2","iName":"fa fa-mobile","h3Content":"Choose Security Package","pContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "},{"id":"3","iName":"fa fa-lock","h3Content":"Prepare For Security Test","pContent":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "}]')},a10e:function(t){t.exports=JSON.parse('[{"id":"1","clientImg":" https://www.bc.edu/content/bc-web/offices/human-resources/about/meet-our-staff/_jcr_content/bottompar/bc_padded_section/par/responsive_columns_794043069/col1/bc_image_content/image.img.png/1589566905809.png","clientName":"Jane Doe","clientJob":"CEO.Company","clientComment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dignissimos quibusdam, sint ducimus repellat impedit aspernatur modi, earum a perspiciatis amet distinctio vitae molestias beatae!"},{"id":"2","clientImg":"https://emaidsinc.com/wp-content/uploads/2020/02/career-img-1-300x300.png","clientName":"Martine joe","clientJob":"CEO.Company","clientComment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dignissimos quibusdam, sint ducimus repellat impedit aspernatur modi, earum a perspiciatis amet distinctio vitae molestias beatae!"},{"id":"3","clientImg":"https://www.vanderbloemen.com/hubfs/Icons%20for%20Offerings%20(2).png","clientName":"jessey penk","clientJob":"CEO.Company","clientComment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dignissimos quibusdam, sint ducimus repellat impedit aspernatur modi, earum a perspiciatis amet distinctio vitae molestias beatae!"},{"id":"4","clientImg":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhd2s2kblPTy9bojBxaOUcmaictlpWHkBxw&usqp=CAU","clientName":"Roze alberto","clientJob":"CEO.Company","clientComment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dignissimos quibusdam, sint ducimus repellat impedit aspernatur modi, earum a perspiciatis amet distinctio vitae molestias beatae!"}]')},a61c:function(t,e,a){"use strict";var c=a("7a23"),n=Object(c["E"])("data-v-14dcb23f");Object(c["t"])("data-v-14dcb23f");var i=Object(c["h"])("button",{class:"get_started"},"get started",-1);Object(c["r"])();var o=n((function(t,e,a,o,s,r){var u=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])(u,{to:"/started"},{default:n((function(){return[i]})),_:1})})),s={name:"GetStarted"};a("2e5b");s.render=o,s.__scopeId="data-v-14dcb23f";e["a"]=s},acf3:function(t,e,a){"use strict";a("e3e3")},afbe:function(t,e,a){},bf80:function(t,e,a){"use strict";a("2fe4")},c100:function(t,e,a){},c8a3:function(t,e,a){"use strict";a("afbe")},d784:function(t,e,a){"use strict";a("3d5e")},dd3d:function(t,e,a){},df6b:function(t,e,a){},e3e3:function(t,e,a){},e74f:function(t,e,a){"use strict";a("491f")},eb27:function(t,e,a){"use strict";a("0e96")},fc5e:function(t,e,a){"use strict";a("7626")},fef6:function(t){t.exports=JSON.parse('[{"id":"1","iName":"fa fa-sitemap","title":"Networking and Security","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan."},{"id":"2","iName":"fa fa-user-secret","title":"Cyber Security Solutions","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan."},{"id":"3","iName":"fa fa-share-square","title":"IT & Cloud Management","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan."},{"id":"4","iName":"fa fa-users","title":"Diployment And Migration","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan."},{"id":"5","iName":"fa fa-server","title":"Managed Web Application","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan."},{"id":"6","iName":"fa fa-cogs","title":"Cyber Disaster Planning","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan."}]')},ffb1:function(t,e,a){"use strict";a("5690")}});
//# sourceMappingURL=app.8dc06949.js.map