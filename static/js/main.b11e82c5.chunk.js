(this["webpackJsonpredux-test"]=this["webpackJsonpredux-test"]||[]).push([[0],{14:function(t,e,n){t.exports={CounterControl:"CounterControl_CounterControl__3Bue0"}},15:function(t,e,n){t.exports={CounterOutput:"CounterOutput_CounterOutput__3KYjz"}},22:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),c=n(4),u=n.n(c),i=(n(22),n(5)),s=n(6),a=n(9),l=n(8),d=n(14),j=n.n(d),b=function(t){return Object(r.jsx)("div",{className:j.a.CounterControl,onClick:t.clicked,children:t.label})},f=n(15),p=n.n(f),h=function(t){return Object(r.jsxs)("div",{className:p.a.CounterOutput,children:["Current Counter: ",t.value]})},O=n(7),v="INCREMENT",C="DECREMENT",g="ADD",w="SUBTRACT",x="STORE_RESULT",m="DELETE_RESULT",k=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)(h,{value:this.props.ctr}),Object(r.jsx)(b,{label:"Increment",clicked:this.props.onIncrementCounter}),Object(r.jsx)(b,{label:"Decrement",clicked:this.props.onDecrementCounter}),Object(r.jsx)(b,{label:"Add 30",clicked:this.props.onAddCounter}),Object(r.jsx)(b,{label:"Subtract 15",clicked:this.props.onSubtractCounter}),Object(r.jsx)("hr",{}),Object(r.jsx)("button",{onClick:function(){return t.props.onStoreResult(t.props.ctr)},children:"Store Result"}),Object(r.jsx)("ul",{children:this.props.storedResults.map((function(e){return Object(r.jsx)("li",{onClick:function(){return t.props.onDeleteResult(e.id)},children:e.value},e.id)}))})]})}}]),n}(o.Component),E=Object(O.b)((function(t){return{ctr:t.ctr.counter,storedResults:t.res.results}}),(function(t){return{onIncrementCounter:function(){return t({type:v})},onDecrementCounter:function(){return t({type:C})},onAddCounter:function(){return t({type:g,val:30})},onSubtractCounter:function(){return t({type:w,val:15})},onStoreResult:function(e){return t({type:x,result:e})},onDeleteResult:function(e){return t({type:m,resultElId:e})}}}))(k),y=(n(29),function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(E,{})})}}]),n}(o.Component)),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var S=n(3),N=n(2),T={counter:0},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:var n=Object.assign({},t);return n.counter=t.counter+1,n;case C:return Object(N.a)(Object(N.a)({},t),{},{counter:t.counter-1});case g:return Object(N.a)(Object(N.a)({},t),{},{counter:t.counter+e.val});case w:return Object(N.a)(Object(N.a)({},t),{},{counter:t.counter-e.val})}return t},A={results:[]},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return Object(N.a)(Object(N.a)({},t),{},{results:t.results.concat({id:new Date,value:e.result})});case m:var n=t.results.filter((function(t){return t.id!==e.resultElId}));return Object(N.a)(Object(N.a)({},t),{},{results:n})}return t},L=Object(S.b)({ctr:_,res:I}),B=Object(S.c)(L);u.a.render(Object(r.jsx)(O.a,{store:B,children:Object(r.jsx)(y,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/redux-test",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/redux-test","/service-worker.js");R?function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):D(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t):D(t)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.b11e82c5.chunk.js.map