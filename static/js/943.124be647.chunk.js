"use strict";(self.webpackChunkproducts=self.webpackChunkproducts||[]).push([[943],{1943:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var o=t(5043),s=t(3216),a=t(5475),r=t(3402),l=t(579);const d=()=>{const[e,n]=(0,o.useState)(""),[t,d]=(0,o.useState)(""),[c,i]=(0,o.useState)(!1),u=(0,s.Zp)(),m=(0,o.useMemo)((()=>new r.qw({id:"inan-rjsf-dongdocreate-mrlmk"})),[]);(0,o.useEffect)((()=>{p()}),[]);const p=async()=>{try{var e,n,t,o;"normal"===(null===(e=m.currentUser)||void 0===e||null===(n=e.customData)||void 0===n?void 0:n.type)?u("/inan-rjsf/products"):"Admin"===(null===(t=m.currentUser)||void 0===t||null===(o=t.customData)||void 0===o?void 0:o.type)&&u("/inan-rjsf/admin/addproduct")}catch(s){console.error("Error fetching data:",s)}};return(0,l.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:(0,l.jsxs)("div",{className:"bg-white p-8 rounded shadow-md w-96 border border-gray-300",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4 text-center",children:"\u0110\u0103ng Nh\u1eadp"}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email:"}),(0,l.jsx)("input",{className:"w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500",type:"text",value:e,onChange:e=>n(e.target.value)})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"M\u1eadt kh\u1ea9u:"}),(0,l.jsx)("input",{className:"w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500",type:"password",value:t,onChange:e=>d(e.target.value)})]}),(0,l.jsx)("button",{className:"w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ".concat(c?"opacity-50 cursor-not-allowed":""),onClick:async()=>{if(!c){i(!0);try{var n,o;const s=r.Ji.emailPassword(e,t),a=await m.logIn(s);"normal"===(null===(n=a.customData)||void 0===n?void 0:n.type)?u("/inan-rjsf/products"):"Admin"===(null===(o=a.customData)||void 0===o?void 0:o.type)&&u("/inan-rjsf/admin/addproduct")}catch(s){console.error("Login failed:",s)}finally{i(!1)}}},disabled:c,children:c?"\u0110ang \u0111\u0103ng nh\u1eadp...":"\u0110\u0103ng nh\u1eadp"}),(0,l.jsxs)("p",{className:"mt-4 text-center",children:["Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n? ",(0,l.jsx)(a.N_,{to:"/inan-rjsf/register",className:"text-indigo-500",children:"\u0110\u0103ng k\xfd"})]}),(0,l.jsxs)("p",{className:"mt-4 text-center",children:["Qu\xean m\u1eadt kh\u1ea9u? ",(0,l.jsx)(a.N_,{to:"/inan-rjsf/resetpassword",className:"text-indigo-500",children:"T\xecm m\u1eadt kh\u1ea9u ngay!"})]}),(0,l.jsxs)("div",{className:"flex items-center justify-center mt-4  mb-4",children:[(0,l.jsx)("span",{className:"mr-4 border-b w-1/4"}),(0,l.jsx)("p",{children:"Ho\u1eb7c"}),(0,l.jsx)("span",{className:"ml-4 border-b w-1/4"})]}),(0,l.jsx)("button",{className:"w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ".concat(c?"opacity-50 cursor-not-allowed":""),onClick:async()=>{try{var e,n;const t="http://localhost:3000/inan-rjsf/api/auth/callback/google",o=r.Ji.google({redirectUrl:t}),s=await m.logIn(o);"normal"===(null===(e=s.customData)||void 0===e?void 0:e.type)?u("/inan-rjsf/products"):"Admin"===(null===(n=s.customData)||void 0===n?void 0:n.type)&&u("/inan-rjsf/admin/addproduct")}catch(t){console.error(t)}},disabled:c,children:"\u0110\u0103ng nh\u1eadp b\u1eb1ng Google"})]})})}}}]);
//# sourceMappingURL=943.124be647.chunk.js.map