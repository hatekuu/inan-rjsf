"use strict";(self.webpackChunkproducts=self.webpackChunkproducts||[]).push([[943],{4157:(e,s,n)=>{n.d(s,{A:()=>t});n(5043);var a=n(579);const t=e=>{let{isOpen:s,onClose:n,message:t,array:o}=e;return s?1===o?(0,a.jsx)("div",{className:"modal-overlay",onClick:n,children:(0,a.jsxs)("div",{className:"modal-content",children:[(0,a.jsx)("div",{className:"close-wrapper",children:(0,a.jsx)("button",{className:"close-button",onClick:()=>{n(),window.location.reload(!0)},children:"X"})}),null===t||void 0===t?void 0:t.map(((e,s)=>(0,a.jsx)("div",{children:e},s)))]})}):(0,a.jsx)("div",{className:"modal-overlay",onClick:n,children:(0,a.jsxs)("div",{className:"modal-content",onClick:e=>e.stopPropagation(),children:[(0,a.jsx)("div",{className:"close-wrapper",children:(0,a.jsx)("button",{className:"close-button",onClick:n,children:"X"})}),(0,a.jsx)("p",{children:t})]})}):null}},1943:(e,s,n)=>{n.r(s),n.d(s,{default:()=>d});var a=n(5043),t=n(3216),o=n(5475),r=n(3402),l=n(4157),c=n(579);const d=()=>{const[e,s]=(0,a.useState)(""),[n,d]=(0,a.useState)(""),[i,u]=(0,a.useState)(!1),[m,h]=(0,a.useState)(!1),[p,x]=(0,a.useState)([]),v=(0,t.Zp)(),j=(0,a.useMemo)((()=>new r.qw({id:"inan-rjsf-dongdocreate-mrlmk"})),[]);(0,a.useEffect)((()=>{f()}),[]),(0,a.useEffect)((()=>{try{r.fH()}catch(e){}}),[]);const f=async()=>{try{var e,s,n,a;"normal"===(null===(e=j.currentUser)||void 0===e||null===(s=e.customData)||void 0===s?void 0:s.type)?v("/inan-rjsf/products/Mycart"):"Admin"===(null===(n=j.currentUser)||void 0===n||null===(a=n.customData)||void 0===a?void 0:a.type)&&v("/inan-rjsf/admin/addproduct")}catch(t){h(!0),x(t.error)}},y=async()=>{if(!i){u(!0);try{var s,a,t;const o=r.Ji.emailPassword(e,n),l=await j.logIn(o);"normal"===(null===(s=l.customData)||void 0===s?void 0:s.type)?v("/inan-rjsf/products/Mycart"):"Admin"===(null===(a=l.customData)||void 0===a?void 0:a.type)?(v("/inan-rjsf/admin/addproduct"),console.log(j.currentUser)):"Manager"===(null===(t=l.customData)||void 0===t?void 0:t.type)&&v("/inan-rjsf/manager")}catch(o){const e=o.error;h(!0),x(e)}finally{u(!1)}}},b=e=>{"Enter"===e.key&&y()};return(0,c.jsxs)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:[(0,c.jsxs)("div",{className:"bg-white p-8 rounded shadow-md w-96 border border-gray-300",children:[(0,c.jsx)("h2",{className:"text-2xl font-bold mb-4 text-center",children:"\u0110\u0103ng Nh\u1eadp"}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email:"}),(0,c.jsx)("input",{className:"w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500",type:"text",value:e,onChange:e=>s(e.target.value),onKeyDown:b})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"M\u1eadt kh\u1ea9u:"}),(0,c.jsx)("input",{className:"w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500",type:"password",value:n,onChange:e=>d(e.target.value),onKeyDown:b})]}),(0,c.jsx)("button",{className:"w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ".concat(i?"opacity-50 cursor-not-allowed":""),onClick:y,disabled:i,children:i?"\u0110ang \u0111\u0103ng nh\u1eadp...":"\u0110\u0103ng nh\u1eadp"}),(0,c.jsxs)("p",{className:"mt-4 text-center",children:["Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? ",(0,c.jsx)(o.N_,{to:"/inan-rjsf/register",className:"text-indigo-500",children:"\u0110\u0103ng k\xfd"})]}),(0,c.jsxs)("p",{className:"mt-4 text-center",children:["Qu\xean m\u1eadt kh\u1ea9u? ",(0,c.jsx)(o.N_,{to:"/inan-rjsf/resetpassword",className:"text-indigo-500",children:"T\xecm m\u1eadt kh\u1ea9u ngay!"})]})]}),(0,c.jsx)(l.A,{})]})}}}]);
//# sourceMappingURL=943.2274d6b1.chunk.js.map