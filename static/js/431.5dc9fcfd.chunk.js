"use strict";(self.webpackChunkproducts=self.webpackChunkproducts||[]).push([[431],{28:(e,l,t)=>{t.d(l,{A:()=>n});var s=t(5043),a=t(579);const n=e=>{let{isOpen:l,onClose:t,message:n,array:o}=e;const[i,r]=(0,s.useState)(l);(0,s.useEffect)((()=>{r(l)}),[l]);return(0,a.jsxs)("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-auto transition-opacity ".concat(i?"opacity-100":"opacity-0 pointer-events-none"),children:[(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"}),(0,a.jsxs)("div",{className:"relative w-full max-w-md p-6 mx-auto bg-white rounded shadow-lg border border-gray-300 transition-transform transform",children:[(0,a.jsx)("div",{className:"absolute top-0 right-0 p-2",children:(0,a.jsx)("button",{className:"text-gray-600 hover:text-gray-800",onClick:()=>{r(!1),t(),1===o&&window.location.reload(!0)},children:(0,a.jsx)("svg",{className:"w-6 h-6 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"})})})}),(0,a.jsx)("div",{className:"p-4",children:Array.isArray(n)?n.map(((e,l)=>(0,a.jsx)("div",{className:"mb-2",children:e},l))):(0,a.jsx)("p",{children:n})})]})]})}},3431:(e,l,t)=>{t.r(l),t.d(l,{default:()=>u});var s=t(5043),a=t(3216),n=t(6244),o=t(443),i=t(3402),r=t(579);const d=e=>{const l=new i.qw({id:"inan-rjsf-dongdocreate-mrlmk"}),[t,a]=(0,s.useState)(!1),[n,o]=(0,s.useState)(""),[d,c]=(0,s.useState)([]),[u,v]=(0,s.useState)(!1);(0,s.useEffect)((()=>{a(e.showModal2)}),[e]);const m=l=>()=>{e.items[l].onDropIndexClick(l)(),e.handleRemove()};return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:e.items.map(((e,l)=>(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"flex-grow",children:e.children}),(0,r.jsx)("button",{type:"button",className:"ml-2 px-2 py-1 bg-red-500 text-white rounded",onClick:m(l),children:"X\xf3a s\u1ea3n ph\u1ea9m"})]},l)))}),e.canAdd&&(0,r.jsx)("button",{type:"button",className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",onClick:()=>a(!0),children:"Th\xeam s\u1ea3n ph\u1ea9m"}),t&&(0,r.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75",children:(0,r.jsxs)("div",{className:"bg-white p-4 border rounded shadow-lg",children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Search:"}),(0,r.jsx)("input",{className:"w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500",type:"text",value:n,onChange:async e=>{if(o(e.target.value),""!==e.target.value){var t;const s=await(null===l||void 0===l||null===(t=l.currentUser)||void 0===t?void 0:t.callFunction("autoComplete",e.target.value));c(s),v(!0)}else c([]),v(!1)}}),u&&(null===d||void 0===d?void 0:d.length)>0&&(0,r.jsx)("div",{className:"absolute bg-white border rounded shadow-lg mt-1 w-auto",children:(0,r.jsx)("ul",{children:null===d||void 0===d?void 0:d.map(((e,l)=>(0,r.jsx)("li",{className:" px-4 py-2 hover:bg-gray-100 cursor-pointer",onClick:()=>(async e=>{v(!1),o(e)})(null===e||void 0===e?void 0:e.productName),children:null===e||void 0===e?void 0:e.productName},l)))})})]}),(0,r.jsx)("button",{className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",onClick:()=>{e.handleClick(n),o("")},children:" th\xeam"}),(0,r.jsx)("button",{className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",onClick:()=>a(!1),children:"\u0110\xf3ng"})]})})]})};var c=t(28);const u=()=>{const e=new i.qw({id:"inan-rjsf-dongdocreate-mrlmk"}),[l,t]=(0,s.useState)([]),[u,v]=(0,s.useState)(!1),[m,h]=(0,s.useState)([]),[x,p]=(0,s.useState)([]),[g,f]=(0,s.useState)([]),[j,y]=(0,s.useState)([]),[b,w]=(0,s.useState)([]),[N,S]=(0,s.useState)(!0),[k,C]=(0,s.useState)(!1),[A,U]=(0,s.useState)(""),[D,F]=(0,s.useState)(!1),[T,L]=(0,s.useState)([]),[E,M]=(0,s.useState)(null),q=(0,a.Zp)(),z=async()=>{var l;(e.currentUser.accessToken||q("/inan-rjsf/login"),e.currentUser.accessToken)&&await(null===e||void 0===e||null===(l=e.currentUser)||void 0===l?void 0:l.refreshAccessToken());try{var s,a,n,o,i,r,d,c,u,v,m,x,g,j,b,N,k,C,A,U;await(null===e||void 0===e||null===(s=e.currentUser)||void 0===s?void 0:s.refreshAccessToken());const l="form",D=await(null===e||void 0===e||null===(a=e.currentUser)||void 0===a?void 0:a.callFunction(l));t(null===(n=D[0])||void 0===n||null===(o=n.public)||void 0===o||null===(i=o.input)||void 0===i?void 0:i.jsonData),h(null===(r=D[0])||void 0===r||null===(d=r.public)||void 0===d||null===(c=d.input)||void 0===c?void 0:c.jsonSchema),p(null===(u=D[0])||void 0===u||null===(v=u.public)||void 0===v||null===(m=v.input)||void 0===m?void 0:m.uiSchema),y(null===(x=D[0])||void 0===x||null===(g=x.public)||void 0===g||null===(j=g.output)||void 0===j?void 0:j.jsonSchema),w(null===(b=D[0])||void 0===b||null===(N=b.public)||void 0===N||null===(k=N.output)||void 0===k?void 0:k.uiSchema),f(null===(C=D[0])||void 0===C||null===(A=C.public)||void 0===A||null===(U=A.output)||void 0===U?void 0:U.jsonData),S(!1)}catch(D){console.error("Error fetching products:",D),S(!1)}};(0,s.useEffect)((()=>{z()}),[]);const O=async()=>{console.log("remove")};return(0,r.jsxs)(r.Fragment,{children:[N?(0,r.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,r.jsx)("div",{className:"text-gray-600 text-lg",children:"Loading..."})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flex justify-center",children:l&&m&&x&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Ay,{className:"w-full max-w-md p-8 bg-white rounded-lg shadow-lg",formData:l,validator:o.Ay,schema:m,uiSchema:x,onSubmit:async l=>{var t;let{formData:s}=l;const a=[A,null===e||void 0===e||null===(t=e.currentUser)||void 0===t?void 0:t.id];if(""!==A)try{var n;const l=await(null===e||void 0===e||null===(n=e.currentUser)||void 0===n?void 0:n.callFunction("AddToCart",...a));z(),F(!0),L(null===l||void 0===l?void 0:l.message),M(0),v(!1),U("")}catch(o){console.log(o)}else z()},onChange:async l=>{let{formData:t}=l;try{var s,a;const l=[null===e||void 0===e||null===(s=e.currentUser)||void 0===s?void 0:s.id,null===t||void 0===t?void 0:t.products],n=await(null===e||void 0===e||null===(a=e.currentUser)||void 0===a?void 0:a.callFunction("updateCart",...l));(null===n||void 0===n?void 0:n.message.length)>0&&(z(),L(n.message),F(!0),M(1))}catch(n){console.log(n)}},templates:{ArrayFieldTemplate:e=>(0,r.jsx)(d,{showModal2:u,...e,handleClick:e=>(async e=>{U(e)})(e),isLoading:k,handleRemove:O})}})," "]})}),0!==(null===g||void 0===g?void 0:g.totalValue)&&(0,r.jsx)("div",{className:"flex justify-center mt-8",children:(0,r.jsx)(n.Ay,{className:"w-full max-w-md p-8 bg-white rounded-lg shadow-lg",validator:o.Ay,schema:j,uiSchema:b,formData:g,onSubmit:async()=>{var l;const t=await e.currentUser.refreshCustomData(),s=[null===e||void 0===e||null===(l=e.currentUser)||void 0===l?void 0:l.customData,null===t||void 0===t?void 0:t.cart];try{var a;const l=await(null===e||void 0===e||null===(a=e.currentUser)||void 0===a?void 0:a.callFunction("ToTempCart",...s));F(!0),L(null===l||void 0===l?void 0:l.message),M(0),z()}catch(n){alert(n.error),L(n.error),F(!0)}}})})]}),(0,r.jsx)("div",{children:(0,r.jsx)(c.A,{isOpen:D,onClose:()=>{F(!1)},message:T,array:E})})]})}}}]);
//# sourceMappingURL=431.5dc9fcfd.chunk.js.map