"use strict";(self.webpackChunkproducts=self.webpackChunkproducts||[]).push([[518],{2518:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});var o=n(5043),t=n(3216),c=n(3402),r=n(579);const a=()=>{const[e,s]=(0,o.useState)(!1),[n,a]=(0,o.useState)(null),[i,l]=(0,o.useState)(!1),d=(0,t.Zp)();(0,o.useEffect)((()=>{(async()=>{const s=new c.qw({id:"inan-rjsf-dongdocreate-mrlmk"}),n=new URLSearchParams(window.location.search),o=n.get("token"),t=n.get("tokenId");if(o&&t&&e)try{l(!0),await s.emailPasswordAuth.confirmUser({token:o,tokenId:t}),console.log("User confirmed successfully!"),a("User confirmed successfully!"),d("/inan-rjsf")}catch(r){console.error("User confirmation failed:",r),a("User confirmation failed")}finally{l(!1)}})()}),[e,d]);return(0,r.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,r.jsxs)("div",{className:"bg-white p-8 rounded shadow-md w-96",children:[(0,r.jsx)("p",{className:"mb-4",children:n}),(0,r.jsx)("button",{className:"bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ".concat(i?"opacity-50 cursor-not-allowed":""),onClick:()=>{s(!0)},disabled:i,children:i?"Confirming...":"Confirm User"})]})})}}}]);
//# sourceMappingURL=518.7b4e77d3.chunk.js.map