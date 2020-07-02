(this.webpackJsonpshoothole=this.webpackJsonpshoothole||[]).push([[0],{27:function(e,t,a){e.exports=a(67)},32:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),i=a.n(o),s=(a(32),a(33),function(){var e=new Map([[456888321,{header:{title:"A potential article about rust smart pointer",tag:["rust","smark-pointer","memory-management"],source:["rustbook"],time:new Date("2020-06-29T00:00:00.000Z"),id:456888321},content:"<h2>A potential article about rust smart pointer.</h2>\n<p>A pointer is a general concept for a variable that contains an address <strong>in memory</strong>. This address refers to, or &quot;point at&quot;, some other data. The most common   kind of pointer in Rust is a reference, which you learned about in <code>chapter 4</code>.   References are ndicated by the &amp; symbol and borrow the value they point to.   They don't have any special capabilities other than referring to data. Also,   they don't have any overhead and are the kind of pointer we use most often.<br>\nWe've already encountered a few smart pointers in this book, such as String a  nd Vec&lt;T&gt; in Chapter 8. alghough we didn't call them smart pinters at the tim  e. Both these types count as smart pointers because they own some memory and   allow you to manipulate it. THey also have metadata (such as their capacity)   and extra capabilitiesor guarantees (uch as with String ensuring its data wil  l always be valid UTF-8).<br>\ndata they point to.<br>\ni<br>\nSmart pointers, on the other hand, are data structures that not only act like   a pointer but also have aditional metadata and capabilities. The concept of   smart pointers isn't unique to Rust: smart pointers originated in C++ and exi  st in other languages as well. In Rust, the different smart pointers defined   in the standard library provide unctionality beyond that provided by referenc  es. One example that we'll explore in this chapter is the reference counting   smart pointer type. This pointer enables you to have multiple owners of data   by keeping track of the number of owners and, when no owners remain, cleaning   up the data.</p>\n<pre><code class=\"language-rust\">fn good() -&gt; uint8 {\n    2;\n}\n</code></pre>\n<p>In Rust, which uses the concept of ownership and borrwowing, and additional d  ifference between references and smart pointers is that references are pointe  rs that only borrow data; In contrast, in many cases, smart pointers own the   data they point to.</p>\n<pre><code>namespace cvalgo {\ntemplate &lt;typename T, typename U&gt;\nauto conv(Mat&lt;T&gt; &amp;mat, Mat&lt;U&gt; &amp;kern) -&gt; Mat&lt;T&gt; { // convolution is assositive\nstatic_assert(kern.cls == kern.rows, &quot;filter needs to be square matrix&quot;);\nauto result = Mat&lt;T&gt;::zeros(mat.size());\nauto width = kern.cols;\n\nfor (size_t i = 0; i &lt; mat.rows; ++i) {\n  for (size_t j = 0; j &lt; mat.cols; ++j) {\n    // if at boundary.\n    // TODO\n    // normal case\n  }\n}\nreturn result;\n}\n</code></pre>\n<p>We've already encountered a few smart pointers in this book, such as String a  nd Vec&lt;T&gt; in Chapter 8. alghough we didn't call them smart pinters at the tim  e. Both these types count as smart pointers because they own some memory and   allow you to manipulate it. THey also have metadata (such as their capacity)   and extra capabilitiesor guarantees (uch as with String ensuring its data wil  l always be valid UTF-8).<br>\ndata they point to.<br>\n(a^2 + b^2 = c^2)<br>\n[ e = sum_(n=0)^oo 1/n! ]<br>\n<math><mo>f</mo><mrow><mo>or</mo><mi>a</mi><mi>l</mi><mi>l</mi></mrow><mi>x</mi><mo>i</mo><mi>n</mi><mi>X</mi><mo>,</mo><mo>q</mo><mrow><mi>u</mi><mi>a</mi><mi>d</mi></mrow><mo>e</mo><mrow><mi>x</mi><mi>i</mi><mi>s</mi><mi>t</mi><mi>s</mi></mrow><mi>y</mi><mo>l</mo><mrow><mi>e</mi><mi>q</mi></mrow><mo>e</mo><mi>p</mi><mi>s</mi><mi>i</mi><mi>l</mi><mi>o</mi><mi>n</mi></math><br>\ni<br>\nWe've already encountered a few smart pointers in this book, such as String a  nd Vec&lt;T&gt; in Chapter 8. alghough we didn't call them smart pinters at the tim  e. Both these types count as smart pointers because they own some memory and   allow you to manipulate it. THey also have metadata (such as their capacity)   and extra capabilitiesor guarantees (uch as with String ensuring its data wil  l always be valid UTF-8).<br>\ndata they point to.<br>\np<br>\ni</p>\n"}],[3687350243,{header:{title:"babel",tag:["babel","ast","compiler"],source:["babel-website"],time:new Date("2020-07-01T00:00:00.000Z"),id:3687350243},content:"<h1>Babel</h1>\n<p>Babel transform AST</p>\n"}]]),t=new Map;return t.set("rust",[e.get(456888321)]),t.set("smark-pointer",[e.get(456888321)]),t.set("memory-management",[e.get(456888321)]),t.set("babel",[e.get(3687350243)]),t.set("ast",[e.get(3687350243)]),t.set("compiler",[e.get(3687350243)]),{db:e,indexTag:t}}()),m=s.db,l=(s.indexTag,a(9)),c=a(2),d=a(68),p=a(6),h=(Object(p.css)({display:"flex",alignItems:"center"}),Object(p.css)({font:"Lato",fontSize:"22px",lineHeight:2.1})),u=(Object(p.css)({paddingTop:"10px",paddingLeft:"30px"}),{textDecoration:"none",color:"black"}),g=Object(p.css)(h,{marginLeft:"250px",marginRight:"200px",paddingLeft:"101px",paddingTop:"30px",overflow:"hidden"});function b(){var e=Object(c.f)().id,t=m.get(Number.parseInt(e));return r.a.createElement(w,{markdown:t})}function w(e){var t,a=e.markdown,n=e.style,o=null!==(t=null===a||void 0===a?void 0:a.content)&&void 0!==t?t:"Oppsy Doopsy!";return console.log(o),r.a.createElement(d.a,null!==n&&void 0!==n?n:g,r.a.createElement("div",Object(p.css)({width:"90%",wordBreak:"break-word"}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))}var y=a(69),f=a(70),v=a(18),E=Object(p.css)({height:"100px",width:"100%",paddingTop:"28px",paddingRight:"40px",paddingLeft:"20px",marginBottom:"130px"});function x(){return r.a.createElement(d.a,null,r.a.createElement(y.a,Object.assign({},E,{xs:8}),r.a.createElement(f.a,null,r.a.createElement(l.b,{to:"/home",style:u},r.a.createElement("h1",null,r.a.createElement(v.b,{size:45})," ",r.a.createElement("b",null,"\xa0 A Bag of Words ")))),r.a.createElement(y.a,null,r.a.createElement(v.a,{size:35}))),r.a.createElement("hr",null))}var T=a(71),k=Object(p.css)(h,{paddingBottom:"80px"});function O(e){var t=e.markdown.header,a=t.id,n=t.title,o=t.tag,i=t.time;return r.a.createElement(d.a,k,r.a.createElement(f.a,{style:{paddingBottom:"12px"}},r.a.createElement(l.b,{to:"/article/".concat(a),style:u},r.a.createElement("h2",null,r.a.createElement("b",null,n)))),r.a.createElement(f.a,Object(p.css)({fontSize:20,paddingLeft:"20px"}),i.toJSON().replace(/-/gi," . ").split("T")[0]),r.a.createElement(f.a,null,r.a.createElement("h4",null,null===o||void 0===o?void 0:o.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{variant:"danger"},e),"\xa0")})))))}function j(e){var t=e.markdowns.map((function(e){return r.a.createElement(O,{markdown:e})}));return r.a.createElement(d.a,null,t)}var S=function(){return r.a.createElement(l.a,null,r.a.createElement(x,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/article/:id",component:b}),r.a.createElement(c.a,{exact:!0,path:"/home"},r.a.createElement("div",null,r.a.createElement(j,{markdowns:Array.from(m.values())})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.1197e496.chunk.js.map