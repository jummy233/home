(this.webpackJsonpshoothole=this.webpackJsonpshoothole||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/popeen.9579f6fd.jpg"},32:function(e,t,a){e.exports=a(73)},37:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),i=a.n(o),c=(a(37),a(38),a(8)),l=a(2),s=a(74),m=a(3),u=a(20);var p=function(){var e=new Map([[1980160726,{header:{title:"Greeting",tag:["whatever"],source:["me"],time:new Date("2020-07-03T00:00:00.000Z"),id:1980160726},content:"<p>#Greeting</p>\n<p>Hellow world!</p>\n"}],[1281438764,{header:{title:"Replicate xv6 on rust #0 Table of content",tag:["rust","OS","riscv"],source:["xv6-reference"],time:new Date("2020-07-03T00:00:00.000Z"),id:1281438764},content:'<h1>Replicate xv6 on rust #0 Table of content</h1>\n<p>This is a series intents to replicate famous <a href="https://github.com/mit-pdos/xv6-public">xv6</a> -- a simple UNIX like operating system, with rust. I have been thought about doing it for a long, long time, but never had enough incentive to take the action. Thanks to covid-19 I will be stuck at my room for at least 2 month, and I think it\'s about time to do it!</p>\n<p>Xv6 is a pedagogical operating system for a MIT undergraduate course. Historically it was written for x86 architecture, but now it is switched to <a href="https://en.wikipedia.org/wiki/RISC-V">RISC-V</a>, an ISA shares some similarities with <a href="https://en.wikipedia.org/wiki/MIPS_architecture">MIPS</a>. The C code is largely unchanged, and RISC-V is one of the <a href="https://github.com/rust-embedded/riscv">official target</a> provided by <code>rustc</code>, which one to choose is just a matter of preference. We a going to use RISC-V in this series for no particular reason.</p>\n<p>The first principle of an operating system is to provide a easy to use interface for hardwares. This is a very generic goal, and to me, all other functionalities can be regarded as an extension of it. If you take a look at what comprise an operating system, those components are seemingly arbitrary: processes, file system, drivers, etc, which has little to do with each other (logically). While if you take a look at a compiler, it\'s subsystem are all chained together tightly with a more specific goal -- to transform some form of text to another. Because the goal of operating system is so generic, any handy abstractions over hardware can be considered to be part of it; and those components we see in Unix today are some well studied, well constructed ones that shapes the way we use computer.</p>\n<p>This series will have multiple articles. Here is a table of them (updating):</p>\n<ul>\n<li><a href="http://www.url.com">RISCV overview</a></li>\n</ul>\n'}],[3393109657,{header:{title:"Replicate xv6 on rust #1 RISC-V",tag:["rust","OS","riscv"],source:["xv6-reference"],time:new Date("2020-07-03T00:00:00.000Z"),id:3393109657},content:"<h1>title Replicate xv6 on rust #1 RISC-V</h1>\n"}]]),t=new Map,a=new Map;return t.set("whatever",[e.get(1980160726)]),t.set("rust",[e.get(1281438764),e.get(3393109657)]),t.set("OS",[e.get(1281438764),e.get(3393109657)]),t.set("riscv",[e.get(1281438764),e.get(3393109657)]),a.set("2020-07-03T00:00:00.000Z",[e.get(1980160726),e.get(1281438764),e.get(3393109657)]),{db:e,indexTag:t,indexTime:a}}(),d=p.db,h=p.indexTag,g=p.indexTime;function f(){return function(e){var t,a=[],n=Object(u.a)(e);try{for(n.s();!(t=n.n()).done;){var r,o=t.value,i=Object(u.a)(o);try{for(i.s();!(r=i.n()).done;){var c=r.value;a.push(c)}}catch(l){i.e(l)}finally{i.f()}}}catch(l){n.e(l)}finally{n.f()}return a}(Array.from(g.keys()).sort().map((function(e){return g.get(e)})).filter((function(e){return void 0!==e}))).reverse()}Object(m.css)({display:"flex",alignItems:"center"});var b=Object(m.css)({fontFamily:"Ubuntu",fontSize:"22px",lineHeight:2.1}),v=(Object(m.css)({paddingTop:"10px",paddingLeft:"30px"}),{textDecoration:"none",color:"black"});function w(){var e=Object(l.f)().id,t=d.get(Number.parseInt(e));return r.a.createElement(y,{markdown:t})}var E=Object(m.css)(b,{paddingLeft:"101px",paddingTop:"30px",overflow:"hidden"});function y(e){var t,a=e.markdown,n=e.style,o=null!==(t=null===a||void 0===a?void 0:a.content)&&void 0!==t?t:"Oppsy Doopsy!";return console.log(o),r.a.createElement(s.a,null!==n&&void 0!==n?n:E,r.a.createElement("div",Object(m.css)({width:"90%",wordBreak:"break-word"}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))}var x=a(31),O=a(5),j=a(75),k=a(76),S=a(14),T=Object(m.css)({position:"fixed",height:"100%",width:"100%",background:"WhiteSmoke",paddingTop:"30px",paddingLeft:"30px",top:0});function I(e){var t=e.setSidebarOn;return r.a.createElement(s.a,T,r.a.createElement(S.c,{style:{marginLeft:"10px",color:"Salmon",cursor:"pointer",marginBottom:"30px"},onClick:function(){return t((function(e){return!e}))}}),r.a.createElement(L,{name:"home",link:"/home"}),r.a.createElement(L,{name:"tags",link:"/tags"}))}var C=Object(m.css)({marginTop:"20px",marginLeft:"20px",marginBottom:"20px",fontSize:20});function L(e){var t=e.name,a=e.link;return r.a.createElement(j.a,C,r.a.createElement(c.b,{to:a,style:Object(O.a)(Object(O.a)({},v),{},{fontFamily:"monospace",color:"SlateGray"})},t))}var R=a(30),B=a.n(R),M=Object(m.css)({height:"100px",width:"100%",paddingTop:"28px",paddingRight:"40px",paddingLeft:"20px",marginBottom:"30px"});function G(){return r.a.createElement(s.a,null,r.a.createElement(j.a,Object.assign({},M,{xs:8}),r.a.createElement(k.a,null,r.a.createElement(c.b,{to:"/home",style:Object(O.a)(Object(O.a)({},v),{},{color:"LightCoral"})},r.a.createElement("h1",{style:{fontWeight:"bolder",textShadow:"0px 1px, 1px 0px, 1px 1px"}},r.a.createElement(S.b,{size:45}),r.a.createElement("b",null,"\xa0 >>= A Bag of Words ")))),r.a.createElement(j.a,null,r.a.createElement(z,null))),r.a.createElement(j.a,null,r.a.createElement(W,null)),r.a.createElement("hr",Object(m.css)({paddingBottom:"30px",marginTop:"50px"})))}var V=Object(m.css)({paddingLeft:"100px",width:"100%"});function W(){return r.a.createElement(j.a,V,r.a.createElement(k.a,{xs:3},r.a.createElement("img",{src:B.a,width:150,height:150,style:{border:"1px solid SlateGray",borderRadius:90}})),r.a.createElement(k.a,Object(m.css)({paddingTop:"30px"}),r.a.createElement(j.a,null," Jimmy Yao's blog "),r.a.createElement(j.a,null," github: https://github.com/jummy233 "),r.a.createElement(j.a,null," email: jimmy123good@hotmail.com ")))}function z(){var e=Object(m.css)({cursor:"pointer",paddingTop:"4px"}),t=Object(n.useState)(!1),a=Object(x.a)(t,2),o=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(I,{setSidebarOn:i}):r.a.createElement(S.a,Object.assign({size:35},e,{style:{color:"LightCoral"},onClick:function(){i((function(e){return!e}))}})))}var A=a(77),D=Object(m.css)(b,{paddingBottom:"50px"});function H(e){var t=e.markdown.header,a=t.id,n=t.title,o=t.tag,i=t.time;return r.a.createElement(s.a,D,r.a.createElement(k.a,null,r.a.createElement(c.b,{to:"/article/".concat(a),style:Object(O.a)(Object(O.a)({},v),{},{color:"LightCoral"})},r.a.createElement("h2",null,r.a.createElement("b",null,n)))),r.a.createElement(k.a,Object(m.css)({fontSize:20,paddingLeft:"50px",color:"SlateGray"}),i.toJSON().replace(/-/gi,".").split("T")[0]),r.a.createElement(k.a,Object(m.css)({paddingLeft:"45px"}),r.a.createElement("h4",null,null===o||void 0===o?void 0:o.map((function(e){return r.a.createElement("span",{key:e},r.a.createElement(A.a,{variant:"light"},r.a.createElement(c.b,{to:"/tag/".concat(e),style:Object(O.a)(Object(O.a)({},v),{},{color:"SlateGray"})},e)),"\xa0")})))))}function J(e){var t=e.markdowns.map((function(e){return r.a.createElement(H,{markdown:e,key:e.header.id})}));return r.a.createElement(s.a,null,t)}function Z(){return r.a.createElement(J,{markdowns:f()})}function F(){var e,t=Object(l.f)().tag;return r.a.createElement(J,{markdowns:null!==(e=h.get(t))&&void 0!==e?e:[]})}function N(){var e=Array.from(h.keys());return r.a.createElement(s.a,null,r.a.createElement("h3",{style:{color:"SlateGray"}},"All Tags"),r.a.createElement("div",{style:Object(O.a)(Object(O.a)({},v),{},{fontSize:25})},e.map((function(e){return r.a.createElement(A.a,{variant:"light"},r.a.createElement(c.b,{to:"/tag/".concat(e),style:Object(O.a)(Object(O.a)({},v),{},{color:"LightCoral"})},e))}))))}a(72);var U=function(){return r.a.createElement(c.a,null,r.a.createElement(G,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/article/:id",component:w}),r.a.createElement(l.a,{exact:!0,path:"/home",component:Z}),r.a.createElement(l.a,{exact:!0,path:"/tag/:tag",component:F}),r.a.createElement(l.a,{exact:!0,path:"/tags",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.97fd2080.chunk.js.map