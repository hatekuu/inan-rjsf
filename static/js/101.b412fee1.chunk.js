"use strict";(self.webpackChunkproducts=self.webpackChunkproducts||[]).push([[101],{101:(e,o,t)=>{t.r(o),t.d(o,{default:()=>r});t(5043);var n=t(6244),i=t(443),l=t(579);const d=function(e){const{handleClick:o}=e;return(0,l.jsxs)("div",{children:[e.items.map(((o,t)=>(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:o.children}),(0,l.jsx)("button",{type:"button",onClick:()=>e.onReorderClick(t,t-1),children:"Move Up"}),(0,l.jsx)("button",{type:"button",onClick:()=>e.onReorderClick(t,t+1),children:"Move Down"}),(0,l.jsx)("button",{type:"button",onClick:()=>e.onDropIndexClick(t),children:"Remove"})]},o.key))),(0,l.jsxs)("button",{type:"button",onClick:()=>o(123),children:[" ","Add"]})]})},r=()=>{const e=e=>{console.log("Removing item at index:",e)};return(0,l.jsx)("div",{children:(0,l.jsx)(n.Ay,{schema:{title:"Todo",type:"object",properties:{todos:{type:"array",items:{type:"string"}}}},uiSchema:{todos:{items:{"ui:options":{addable:!0,removable:!0}}}},onSubmit:e=>{let{formData:o}=e;console.log("Form submitted with data:",o)},validator:i.Ay,templates:{ArrayFieldTemplate:o=>(0,l.jsx)(d,{...o,handleClick:e=>(e=>{console.log("Adding new item with value:",e)})(e),onReorderClick:(e,o)=>console.log("Reordering item:",e,o),onDropIndexClick:e})}})})}}}]);
//# sourceMappingURL=101.b412fee1.chunk.js.map