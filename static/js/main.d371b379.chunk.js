(this.webpackJsonpshoothole=this.webpackJsonpshoothole||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/popeen.9579f6fd.jpg"},32:function(e,t,a){e.exports=a(72)},37:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),i=a.n(o),s=(a(37),a(38),a(8)),l=a(2),c=a(73),m=a(3),d=a(19);var p=function(){var e=new Map([[456888321,{header:{title:"A potential article about rust smart pointer",tag:["rust","smark-pointer","memory-management"],source:["rustbook"],time:new Date("2020-07-03T00:00:00.000Z"),id:456888321},content:"<h2>A potential article about rust smart pointer.</h2>\n<p>A pointer is a general concept for a variable that contains an address <strong>in memory</strong>. This address refers to, or &quot;point at&quot;, some other data. The most common   kind of pointer in Rust is a reference, which you learned about in <code>chapter 4</code>.   References are ndicated by the &amp; symbol and borrow the value they point to.   They don't have any special capabilities other than referring to data. Also,   they don't have any overhead and are the kind of pointer we use most often.<br>\nWe've already encountered a few smart pointers in this book, such as String a  nd Vec&lt;T&gt; in Chapter 8. alghough we didn't call them smart pinters at the tim  e. Both these types count as smart pointers because they own some memory and   allow you to manipulate it. THey also have metadata (such as their capacity)   and extra capabilitiesor guarantees (uch as with String ensuring its data wil  l always be valid UTF-8).<br>\ndata they point to.<br>\ni<br>\nSmart pointers, on the other hand, are data structures that not only act like   a pointer but also have aditional metadata and capabilities. The concept of   smart pointers isn't unique to Rust: smart pointers originated in C++ and exi  st in other languages as well. In Rust, the different smart pointers defined   in the standard library provide unctionality beyond that provided by referenc  es. One example that we'll explore in this chapter is the reference counting   smart pointer type. This pointer enables you to have multiple owners of data   by keeping track of the number of owners and, when no owners remain, cleaning   up the data.</p>\n<pre><code class=\"language-rust\">fn good() -&gt; uint8 {\n    2;\n}\n</code></pre>\n<p>In Rust, which uses the concept of ownership and borrwowing, and additional d  ifference between references and smart pointers is that references are pointe  rs that only borrow data; In contrast, in many cases, smart pointers own the   data they point to.</p>\n<pre><code>namespace cvalgo {\ntemplate &lt;typename T, typename U&gt;\nauto conv(Mat&lt;T&gt; &amp;mat, Mat&lt;U&gt; &amp;kern) -&gt; Mat&lt;T&gt; { // convolution is assositive\nstatic_assert(kern.cls == kern.rows, &quot;filter needs to be square matrix&quot;);\nauto result = Mat&lt;T&gt;::zeros(mat.size());\nauto width = kern.cols;\n\nfor (size_t i = 0; i &lt; mat.rows; ++i) {\n  for (size_t j = 0; j &lt; mat.cols; ++j) {\n    // if at boundary.\n    // TODO\n    // normal case\n  }\n}\nreturn result;\n}\n</code></pre>\n<p>We've already encountered a few smart pointers in this book, such as String a  nd Vec&lt;T&gt; in Chapter 8. alghough we didn't call them smart pinters at the tim  e. Both these types count as smart pointers because they own some memory and   allow you to manipulate it. THey also have metadata (such as their capacity)   and extra capabilitiesor guarantees (uch as with String ensuring its data wil  l always be valid UTF-8).<br>\ndata they point to.<br>\n(a^2 + b^2 = c^2)<br>\n[ e = sum_(n=0)^oo 1/n! ]<br>\n<math><mo>f</mo><mrow><mo>or</mo><mi>a</mi><mi>l</mi><mi>l</mi></mrow><mi>x</mi><mo>i</mo><mi>n</mi><mi>X</mi><mo>,</mo><mo>q</mo><mrow><mi>u</mi><mi>a</mi><mi>d</mi></mrow><mo>e</mo><mrow><mi>x</mi><mi>i</mi><mi>s</mi><mi>t</mi><mi>s</mi></mrow><mi>y</mi><mo>l</mo><mrow><mi>e</mi><mi>q</mi></mrow><mo>e</mo><mi>p</mi><mi>s</mi><mi>i</mi><mi>l</mi><mi>o</mi><mi>n</mi></math><br>\ni<br>\nWe've already encountered a few smart pointers in this book, such as String a  nd Vec&lt;T&gt; in Chapter 8. alghough we didn't call them smart pinters at the tim  e. Both these types count as smart pointers because they own some memory and   allow you to manipulate it. THey also have metadata (such as their capacity)   and extra capabilitiesor guarantees (uch as with String ensuring its data wil  l always be valid UTF-8).<br>\ndata they point to.<br>\np<br>\ni</p>\n"}],[3687350243,{header:{title:"babel",tag:["babel","ast","compiler"],source:["babel-website"],time:new Date("2020-07-02T00:00:00.000Z"),id:3687350243},content:"<h1>Babel</h1>\n<p>Babel transform AST</p>\n"}],[1980160726,{header:{title:"Greeting",tag:["whatever"],source:["me"],time:new Date("2020-07-08T00:00:00.000Z"),id:1980160726},content:"<p>#Greeting</p>\n<p>The first post on the blog!</p>\n"}]]),t=new Map,a=new Map;return t.set("rust",[e.get(456888321)]),t.set("smark-pointer",[e.get(456888321)]),t.set("memory-management",[e.get(456888321)]),t.set("babel",[e.get(3687350243)]),t.set("ast",[e.get(3687350243)]),t.set("compiler",[e.get(3687350243)]),t.set("whatever",[e.get(1980160726)]),a.set("2020-07-03T00:00:00.000Z",[e.get(456888321)]),a.set("2020-07-02T00:00:00.000Z",[e.get(3687350243)]),a.set("2020-07-08T00:00:00.000Z",[e.get(1980160726)]),{db:e,indexTag:t,indexTime:a}}(),u=p.db,h=p.indexTag,g=p.indexTime;function b(){return function(e){var t,a=[],n=Object(d.a)(e);try{for(n.s();!(t=n.n()).done;){var r,o=t.value,i=Object(d.a)(o);try{for(i.s();!(r=i.n()).done;){var s=r.value;a.push(s)}}catch(l){i.e(l)}finally{i.f()}}}catch(l){n.e(l)}finally{n.f()}return a}(Array.from(g.keys()).sort().map((function(e){return g.get(e)})).filter((function(e){return void 0!==e}))).reverse()}Object(m.css)({display:"flex",alignItems:"center"});var f=Object(m.css)({fontFamily:"Ubuntu",fontSize:"22px",lineHeight:2.1}),y=(Object(m.css)({paddingTop:"10px",paddingLeft:"30px"}),{textDecoration:"none",color:"black"});function w(){var e=Object(l.f)().id,t=u.get(Number.parseInt(e));return r.a.createElement(x,{markdown:t})}var v=Object(m.css)(f,{marginLeft:"250px",marginRight:"200px",paddingLeft:"101px",paddingTop:"30px",overflow:"hidden"});function x(e){var t,a=e.markdown,n=e.style,o=null!==(t=null===a||void 0===a?void 0:a.content)&&void 0!==t?t:"Oppsy Doopsy!";return r.a.createElement(c.a,null!==n&&void 0!==n?n:v,r.a.createElement("div",Object(m.css)({width:"90%",wordBreak:"break-word"}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))}var E=a(31),T=a(7),k=a(74),j=a(75),O=a(22),S=Object(m.css)({position:"fixed",height:"100%",width:"100%",background:"WhiteSmoke",paddingTop:"30px",paddingLeft:"30px",top:0});function B(e){return r.a.createElement(c.a,S,r.a.createElement(z,{name:"tags",link:"tags"}),r.a.createElement(z,{name:"tags",link:"tags"}))}var L=Object(m.css)({marginTop:"20px",marginLeft:"20px",marginBottom:"20px",fontSize:20});function z(e){var t=e.name,a=e.link;return r.a.createElement(k.a,L,r.a.createElement(s.b,{to:a,style:Object(T.a)(Object(T.a)({},y),{},{fontFamily:"monospace",color:"SlateGray"})},t))}var M=a(30),q=a.n(M),C=Object(m.css)({height:"100px",width:"100%",paddingTop:"28px",paddingRight:"40px",paddingLeft:"20px",marginBottom:"30px"});function R(){return r.a.createElement(c.a,null,r.a.createElement(k.a,Object.assign({},C,{xs:8}),r.a.createElement(j.a,null,r.a.createElement(s.b,{to:"/home",style:Object(T.a)(Object(T.a)({},y),{},{color:"LightCoral"})},r.a.createElement("h1",{style:{fontWeight:"bolder",textShadow:"0px 1px, 1px 0px, 1px 1px"}},r.a.createElement(O.b,{size:45}),r.a.createElement("b",null,"\xa0 A Bag of Words ")))),r.a.createElement(k.a,null,r.a.createElement(I,null))),r.a.createElement(k.a,null,r.a.createElement(A,null)),r.a.createElement("hr",Object(m.css)({paddingBottom:"30px",marginTop:"50px"})))}var W=Object(m.css)({paddingLeft:"100px",width:"100%"});function A(){return r.a.createElement(k.a,W,r.a.createElement(j.a,{xs:3},r.a.createElement("img",{src:q.a,width:150,height:150,style:{border:"1px solid SlateGray",borderRadius:90}})),r.a.createElement(j.a,Object(m.css)({paddingTop:"30px"}),r.a.createElement(k.a,null,"Jimmy Yao's blog"),r.a.createElement(k.a,null,"github: https://github.com/jummy233"),r.a.createElement(k.a,null,"email: jimmy123good@hotmail.com")))}function I(){var e=Object(m.css)({cursor:"pointer",paddingTop:"4px"}),t=Object(n.useState)(!1),a=Object(E.a)(t,2),o=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(B,{setSidebarOn:i}):r.a.createElement(O.a,Object.assign({size:35},e,{style:{color:"LightCoral"},onClick:function(){i((function(e){return!e}))}})))}var D=a(76),F=Object(m.css)(f,{paddingBottom:"50px"});function G(e){var t=e.markdown.header,a=t.id,n=t.title,o=t.tag,i=t.time;return r.a.createElement(c.a,F,r.a.createElement(j.a,null,r.a.createElement(s.b,{to:"/article/".concat(a),style:Object(T.a)(Object(T.a)({},y),{},{color:"LightCoral"})},r.a.createElement("h2",null,r.a.createElement("b",null,n)))),r.a.createElement(j.a,Object(m.css)({fontSize:20,paddingLeft:"50px",color:"SlateGray"}),i.toJSON().replace(/-/gi,".").split("T")[0]),r.a.createElement(j.a,Object(m.css)({paddingLeft:"45px"}),r.a.createElement("h4",null,null===o||void 0===o?void 0:o.map((function(e){return r.a.createElement("span",{key:e},r.a.createElement(D.a,{variant:"light"},r.a.createElement(s.b,{to:"/tag/".concat(e),style:Object(T.a)(Object(T.a)({},y),{},{color:"SlateGray"})},e)),"\xa0")})))))}function U(e){var t=e.markdowns.map((function(e){return r.a.createElement(G,{markdown:e,key:e.header.id})}));return r.a.createElement(c.a,null,t)}function Z(){return r.a.createElement(U,{markdowns:b()})}function _(){var e,t=Object(l.f)().tag;return r.a.createElement(U,{markdowns:null!==(e=h.get(t))&&void 0!==e?e:[]})}var H=function(){return r.a.createElement(s.a,null,r.a.createElement(R,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/article/:id",component:w}),r.a.createElement(l.a,{exact:!0,path:"/home",component:Z}),r.a.createElement(l.a,{exact:!0,path:"/tag/:tag",component:_})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.d371b379.chunk.js.map