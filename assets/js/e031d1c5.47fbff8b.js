"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[1673,3201],{7127:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(4848),a=i(8453),r=i(5632);const o={sidebar_position:1},s="Integrate Admin Portal",l={id:"admin-portal/quickstart-admin-portal",title:"Integrate Admin Portal",description:"Overview",source:"@site/docs/admin-portal/quickstart-admin-portal.md",sourceDirName:"admin-portal",slug:"/admin-portal/quickstart-admin-portal",permalink:"/admin-portal/quickstart-admin-portal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Go-live",permalink:"/single-sign-on/golive-checklist"},next:{title:"Custom Domain",permalink:"/admin-portal/custom-domain"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"1. Integration via API",id:"1-integration-via-api",level:2},{value:"Configure SDK",id:"configure-sdk",level:3},...r.toc,{value:"Generate Magic Link",id:"generate-magic-link",level:3},{value:"2. Integration via Shareable Link",id:"2-integration-via-shareable-link",level:2},{value:"Generate Link",id:"generate-link",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{TabItem:o,Tabs:s}=n;return o||p("TabItem",!0),s||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"integrate-admin-portal",children:"Integrate Admin Portal"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Admin Portal is a self-service interface that empowers your customers' IT admins to configure SSO on their own. Designed to streamline the SSO setup process, it reduces the demand on your engineering resources and provides comprehensive IdP-specific documentation. Fully hosted and managed by Scalekit, the Admin Portal simplifies the SSO config experience, ensuring a fast and secure integration with only a few lines of code."}),"\n",(0,t.jsx)(n.p,{children:"Depending on your architecture and UX preferences, you can choose one of the two methods to integrate the Admin Portal into your application:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Integration via API"}),"\n",(0,t.jsx)(n.li,{children:"Integration via Shareable Link"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-integration-via-api",children:"1. Integration via API"}),"\n",(0,t.jsx)("figure",{className:"width-50",children:(0,t.jsx)(n.img,{alt:"Integrate via API",src:i(4668).A+"",width:"2816",height:"2732"})}),"\n",(0,t.jsx)(n.h3,{id:"configure-sdk",children:"Configure SDK"}),"\n",(0,t.jsx)(n.p,{children:"Begin by installing the Scalekit SDK, which provides necessary tools for creating a secure and efficient connection to the Admin Portal."}),"\n",(0,t.jsx)(r.default,{}),"\n",(0,t.jsx)(n.h3,{id:"generate-magic-link",children:"Generate Magic Link"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.a,{href:"/api-reference#tag/customer-portal/put/api/v1/organizations/%7Bid%7D/portal_links",children:"generatePortalLink"})," API to generate an Admin Portal link that is uniquely keyed to an organization. You can either embed this as an iframe in your application or redirect the user to this link for the admin to self serve configure SSO for their organization."]}),"\n",(0,t.jsx)(s,{groupId:"tech-stack",children:(0,t.jsx)(o,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:"showLineNumbers",children:"\n// generate admin portal link by sending organization id as a parameter\nconst link = await sc.organization.generatePortalLink('org_1233222');\n\n// link.location is the Admin Portal url\n"})})})}),"\n",(0,t.jsx)(n.p,{children:"Note:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This link is designed for one-time use, expiring after 5 minutes or upon its initial access."}),"\n",(0,t.jsx)(n.li,{children:"Once activated, the IT admin can configure SSO for a longer period of time. The session will remain active until the setup is complete."}),"\n",(0,t.jsx)(n.li,{children:"Depending on your UX strategy, you may choose to redirect the IT admin to this link or embed it within your application as an iframe, allowing configuration without navigating away from your product."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-integration-via-shareable-link",children:"2. Integration via Shareable Link"}),"\n",(0,t.jsx)("figure",{className:"width-50",children:(0,t.jsx)(n.img,{alt:"Integrate via Shareable Link",src:i(9344).A+"",width:"2740",height:"2732"})}),"\n",(0,t.jsx)(n.p,{children:"Log in to your Scalekit Dashboard and navigate to the desired organization's overview section."}),"\n",(0,t.jsx)(n.h3,{id:"generate-link",children:"Generate Link"}),"\n",(0,t.jsx)(n.p,{children:"Click 'Generate Link' to create a new, shareable Admin Portal link."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This link is valid for 7 days but can be revoked at any time from the dashboard for security purposes."}),"\n",(0,t.jsx)(n.li,{children:"The link can be distributed through communication channels such as email, Slack, etc"}),"\n",(0,t.jsx)(n.li,{children:"Exercise caution, as anyone with this link can view and update their organization's SSO settings"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},5632:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(4848),a=i(8453);const r={},o=void 0,s={id:"templates/install-sdk",title:"install-sdk",description:"--\x3e",source:"@site/docs/templates/install-sdk.md",sourceDirName:"templates",slug:"/templates/install-sdk",permalink:"/templates/install-sdk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components},{TabItem:i,Tabs:r}=n;return i||u("TabItem",!0),r||u("Tabs",!0),(0,t.jsx)(r,{groupId:"tech-stack",children:(0,t.jsx)(i,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-command-line",children:"$ npm install @scalekit-sdk/node\n"})})})})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4668:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/IntegrateviaAPI-6fe5527fbc74c7f749ae4bd627a8178b.png"},9344:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/Shareablelink-80179ae5bb4cc731ed5045e8daebe238.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(6540);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);