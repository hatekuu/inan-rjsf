"use strict";(self.webpackChunkproducts=self.webpackChunkproducts||[]).push([[431],{4157:(e,l,n)=>{n.d(l,{A:()=>t});n(5043);var o=n(579);const t=e=>{let{isOpen:l,onClose:n,message:t,array:s}=e;return l?1===s?(0,o.jsx)("div",{className:"modal-overlay",onClick:n,children:(0,o.jsxs)("div",{className:"modal-content",children:[(0,o.jsx)("div",{className:"close-wrapper",children:(0,o.jsx)("button",{className:"close-button",onClick:()=>{n(),window.location.reload(!0)},children:"X"})}),null===t||void 0===t?void 0:t.map(((e,l)=>(0,o.jsx)("div",{children:e},l)))]})}):(0,o.jsx)("div",{className:"modal-overlay",onClick:n,children:(0,o.jsxs)("div",{className:"modal-content",onClick:e=>e.stopPropagation(),children:[(0,o.jsx)("div",{className:"close-wrapper",children:(0,o.jsx)("button",{className:"close-button",onClick:n,children:"X"})}),(0,o.jsx)("p",{children:t})]})}):null}},3431:(e,l,n)=>{n.r(l),n.d(l,{default:()=>u});var o=n(5043),t=n(3216),s=n(6244),a=n(443),i=n(3402),d=n(579);const r=e=>{const l=new i.qw({id:"inan-rjsf-dongdocreate-mrlmk"}),[n,t]=(0,o.useState)(!1),[s,a]=(0,o.useState)(""),[r,c]=(0,o.useState)([]),[u,v]=(0,o.useState)(!1);(0,o.useEffect)((()=>{t(e.showModal2)}),[e]);const m=l=>()=>{e.items[l].onDropIndexClick(l)(),e.handleRemove()};return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:e.items.map(((e,l)=>(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"flex-grow",children:e.children}),(0,d.jsx)("button",{type:"button",className:"ml-2 px-2 py-1 bg-red-500 text-white rounded",onClick:m(l),children:"X\xf3a s\u1ea3n ph\u1ea9m"})]},l)))}),e.canAdd&&(0,d.jsx)("button",{type:"button",className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",onClick:()=>t(!0),children:"Th\xeam s\u1ea3n ph\u1ea9m"}),n&&(0,d.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75",children:(0,d.jsxs)("div",{className:"bg-white p-4 border rounded shadow-lg",children:[(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Search:"}),(0,d.jsx)("input",{className:"w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500",type:"text",value:s,onChange:async e=>{if(a(e.target.value),""!==e.target.value){var n;const o=await(null===l||void 0===l||null===(n=l.currentUser)||void 0===n?void 0:n.callFunction("autoComplete",e.target.value));c(o),v(!0)}else c([]),v(!1)}}),u&&(null===r||void 0===r?void 0:r.length)>0&&(0,d.jsx)("div",{className:"absolute bg-white border rounded shadow-lg mt-1 w-auto",children:(0,d.jsx)("ul",{children:null===r||void 0===r?void 0:r.map(((e,l)=>(0,d.jsx)("li",{className:" px-4 py-2 hover:bg-gray-100 cursor-pointer",onClick:()=>(async e=>{v(!1),a(e)})(null===e||void 0===e?void 0:e.productName),children:null===e||void 0===e?void 0:e.productName},l)))})})]}),(0,d.jsx)("button",{className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",onClick:()=>{e.handleClick(s),a("")},children:" th\xeam"}),(0,d.jsx)("button",{className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded",onClick:()=>t(!1),children:"\u0110\xf3ng"})]})})]})};var c=n(4157);const u=()=>{const e=new i.qw({id:"inan-rjsf-dongdocreate-mrlmk"}),[l,n]=(0,o.useState)([]),[u,v]=(0,o.useState)(!1),[m,h]=(0,o.useState)([]),[p,x]=(0,o.useState)([]),[g,j]=(0,o.useState)([]),[b,f]=(0,o.useState)([]),[y,w]=(0,o.useState)([]),[N,S]=(0,o.useState)(!0),[C,k]=(0,o.useState)(!1),[U,A]=(0,o.useState)(""),[D,F]=(0,o.useState)(!1),[T,E]=(0,o.useState)([]),[X,q]=(0,o.useState)(null),L=(0,t.Zp)(),M=async()=>{try{var l;if(null!==e&&void 0!==e&&null!==(l=e.currentUser)&&void 0!==l&&l.accessToken){var o,t,s,a,i,d,r,c,u,v,m,p,g,b,y,N,C,k,U,A;await(null===e||void 0===e||null===(o=e.currentUser)||void 0===o?void 0:o.refreshAccessToken());const l="form",D=await(null===e||void 0===e||null===(t=e.currentUser)||void 0===t?void 0:t.callFunction(l));n(null===(s=D[0])||void 0===s||null===(a=s.public)||void 0===a||null===(i=a.input)||void 0===i?void 0:i.jsonData),h(null===(d=D[0])||void 0===d||null===(r=d.public)||void 0===r||null===(c=r.input)||void 0===c?void 0:c.jsonSchema),x(null===(u=D[0])||void 0===u||null===(v=u.public)||void 0===v||null===(m=v.input)||void 0===m?void 0:m.uiSchema),f(null===(p=D[0])||void 0===p||null===(g=p.public)||void 0===g||null===(b=g.output)||void 0===b?void 0:b.jsonSchema),w(null===(y=D[0])||void 0===y||null===(N=y.public)||void 0===N||null===(C=N.output)||void 0===C?void 0:C.uiSchema),j(null===(k=D[0])||void 0===k||null===(U=k.public)||void 0===U||null===(A=U.output)||void 0===A?void 0:A.jsonData),S(!1)}else L("/inan-rjsf/login")}catch(D){console.error("Error fetching products:",D),S(!1)}};(0,o.useEffect)((()=>{M()}),[]);const O=async()=>{console.log("remove")};return(0,d.jsxs)(d.Fragment,{children:[N?(0,d.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,d.jsx)("div",{className:"text-gray-600 text-lg",children:"Loading..."})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex justify-center",children:l&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Ay,{className:"w-full max-w-md p-8 bg-white rounded-lg shadow-lg",formData:l,validator:a.Ay,schema:m,uiSchema:p,onSubmit:async l=>{var n;let{formData:o}=l;const t=[U,null===e||void 0===e||null===(n=e.currentUser)||void 0===n?void 0:n.id];if(""!==U)try{var s;const l=await(null===e||void 0===e||null===(s=e.currentUser)||void 0===s?void 0:s.callFunction("AddToCart",...t));M(),F(!0),E(null===l||void 0===l?void 0:l.message),q(0),v(!1),A("")}catch(a){console.log(a)}else M()},onChange:async l=>{let{formData:n}=l;try{var o,t;const l=[null===e||void 0===e||null===(o=e.currentUser)||void 0===o?void 0:o.id,null===n||void 0===n?void 0:n.products],s=await(null===e||void 0===e||null===(t=e.currentUser)||void 0===t?void 0:t.callFunction("updateCart",...l));(null===s||void 0===s?void 0:s.message.length)>0&&(M(),E(s.message),F(!0),q(1))}catch(s){console.log(s)}},templates:{ArrayFieldTemplate:e=>(0,d.jsx)(r,{showModal2:u,...e,handleClick:e=>(async e=>{A(e)})(e),isLoading:C,handleRemove:O})}})," "]})}),0!==(null===g||void 0===g?void 0:g.totalValue)&&(0,d.jsx)("div",{className:"flex justify-center mt-8",children:(0,d.jsx)(s.Ay,{className:"w-full max-w-md p-8 bg-white rounded-lg shadow-lg",validator:a.Ay,schema:b,uiSchema:y,formData:g,onSubmit:async()=>{var l;const n=await e.currentUser.refreshCustomData(),o=[null===e||void 0===e||null===(l=e.currentUser)||void 0===l?void 0:l.customData,null===n||void 0===n?void 0:n.cart];try{var t;const l=await(null===e||void 0===e||null===(t=e.currentUser)||void 0===t?void 0:t.callFunction("ToTempCart",...o));F(!0),E(null===l||void 0===l?void 0:l.message),q(0),M()}catch(s){alert(s.error),E(s.error),F(!0)}}})})]}),(0,d.jsx)("div",{children:(0,d.jsx)(c.A,{isOpen:D,onClose:()=>{F(!1)},message:T,array:X})})]})}}}]);
//# sourceMappingURL=431.9fc3d90c.chunk.js.map