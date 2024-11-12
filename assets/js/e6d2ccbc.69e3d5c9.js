"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[2623],{3674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=r(4848),s=r(8453);const n={},a="Map User Attributes",o={id:"scim/map-user-attributes",title:"Map User Attributes",description:"Custom attributes are admin-defined data properties that can tailor and enhance user experiences in",source:"@site/docs/scim/map-user-attributes.mdx",sourceDirName:"scim",slug:"/scim/map-user-attributes",permalink:"/docs-staging/scim/map-user-attributes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},p=[{value:"Enable Attribute Mapping",id:"enable-attribute-mapping",level:2},{value:"Map Custom Attributes",id:"map-custom-attributes",level:2},{value:"Verify Attribute Mapping",id:"verify-attribute-mapping",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components},{SimpleCode:n,TermTip:a}=t;return n||u("SimpleCode",!0),a||u("TermTip",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"map-user-attributes",children:"Map User Attributes"})}),"\n",(0,i.jsx)(t.p,{children:"Custom attributes are admin-defined data properties that can tailor and enhance user experiences in\nyour application. They allow you to personalize content, features, and functionalities based on\nspecific user characteristics or preferences."}),"\n",(0,i.jsxs)(t.p,{children:["For example, if your ",(0,i.jsx)(a,{jargon:"app"})," offers analytics dashboards, you can show relevant\ndashboards based on each employee's department. However, your customer's directory provider might\nlabel this attribute as ",(0,i.jsx)(n,{children:"employee_department"}),", while your app expects"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(n,{children:"department"})," in the payload."]}),"\n",(0,i.jsx)(t.p,{children:"Scalekit solves this problem by letting customers map their attribute names to the ones your app\nexpects."}),"\n",(0,i.jsxs)("figure",{className:"width-75",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Custom attribute mapping workflow: Your App creates department attribute, customers map\nemployee_department in Admin Portal",src:r(9677).A+"",width:"2000",height:"697"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:"Custom attribute mapping workflow: Your App creates department attribute, customers map\nemployee_department in Admin Portal"})})]}),"\n",(0,i.jsxs)(t.p,{children:["Before you start, ensure the ",(0,i.jsx)(a,{jargon:"Directory Sync"})," module is enabled for your\ncustomers:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Select "Organizations" from the left sidebar'}),"\n",(0,i.jsx)(t.li,{children:"Choose the organization"}),"\n",(0,i.jsx)(t.li,{children:'Go to the "Directory Sync" tab'}),"\n",(0,i.jsx)(t.li,{children:"Enable Directory Sync"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"enable-attribute-mapping",children:"Enable Attribute Mapping"}),"\n",(0,i.jsx)(t.p,{children:"Declare the attributes your B2B SaaS app expects in the Scalekit Dashboard. Scalekit will then\ncollect these attributes from the customer's directory provider and send them to your app."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'In the Scalekit Dashboard, select "User Attributes" from the left sidebar'}),"\n",(0,i.jsx)(t.li,{children:'Choose "Directory Sync" attributes'}),"\n",(0,i.jsx)(t.li,{children:'Click "Add Attribute" to create a new attribute'}),"\n"]}),"\n",(0,i.jsxs)("figure",{className:"width-50",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Custom attribute mapping workflow: Your App creates department attribute, customers map\nemployee_department in Admin Portal",src:r(5702).A+"",width:"2000",height:"1111"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:"Custom attribute mapping workflow: Your App creates department attribute, customers map\nemployee_department in Admin Portal"})})]}),"\n",(0,i.jsx)(t.p,{children:"Once saved, this attribute will be available for your customers to map to their directory provider\nattributes."}),"\n",(0,i.jsx)(t.h2,{id:"map-custom-attributes",children:"Map Custom Attributes"}),"\n",(0,i.jsx)(t.p,{children:"After declaring the expected attributes in the Scalekit Dashboard,your customers can map them to the\ndirectory provider attributes."}),"\n",(0,i.jsx)("figure",{className:"width-75",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:r(8931).A+"",width:"2000",height:"1393"}),"\n",(0,i.jsx)("figcaption",{children:"Placeholder"})]})}),"\n",(0,i.jsxs)(t.p,{children:["Refer to the ",(0,i.jsx)(t.a,{href:"/docs-staging/scim/admin-portal",children:"Admin Portal"})," section to learn more about the Admin Portal and how\nto share a link to it with your customers."]}),"\n",(0,i.jsx)(t.h2,{id:"verify-attribute-mapping",children:"Verify Attribute Mapping"}),"\n",(0,i.jsx)(t.p,{children:"After creating custom attributes and mapping them, verify that everything works as expected:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Go to the "Events" tab in the Scalekit Dashboard'}),"\n",(0,i.jsx)(t.li,{children:"Send a test event to confirm the new attributes are sent to your app"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["By following these steps, you can ensure that your ",(0,i.jsx)(a,{jargon:"B2B app"})," receives the custom\nattributes it needs to deliver personalized experiences to your customers' users."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9677:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/map-user-attributes-1-387c64f54d1ea6cdc0538d44a2da1b16.png"},5702:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/map-user-attributes-2-992d428e59009932fb0776ad73696033.png"},8931:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/map-user-attributes-4-0cab5d05ffb3144073a058ab121026de.png"},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var i=r(6540);const s={},n=i.createContext(s);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);