"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[2451],{1520:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=i(4848),o=i(8453);const s={toc_max_heading_level:2,title:"Customizing the Admin Portal in Scalekit",description:"Learn how to customize the Scalekit Admin Portal to match your brand identity. This guide covers setting up a custom domain, updating the logo, colors, and favicon to ensure a cohesive user experience.",keywords:["Scalekit","Admin Portal Customization","Custom Domain","CNAME Configuration","Custom Theme","Brand Identity","Logo","Accent Color","Favicon"]},r="Customize Admin Portal",a={id:"sso/domain-and-theme-customization",title:"Customizing the Admin Portal in Scalekit",description:"Learn how to customize the Scalekit Admin Portal to match your brand identity. This guide covers setting up a custom domain, updating the logo, colors, and favicon to ensure a cohesive user experience.",source:"@site/docs/sso/domain-and-theme-customization.mdx",sourceDirName:"sso",slug:"/sso/domain-and-theme-customization",permalink:"/docs-staging/sso/domain-and-theme-customization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:2,title:"Customizing the Admin Portal in Scalekit",description:"Learn how to customize the Scalekit Admin Portal to match your brand identity. This guide covers setting up a custom domain, updating the logo, colors, and favicon to ensure a cohesive user experience.",keywords:["Scalekit","Admin Portal Customization","Custom Domain","CNAME Configuration","Custom Theme","Brand Identity","Logo","Accent Color","Favicon"]},sidebar:"ssoSidebar",previous:{title:"Fetch User Attributes from IdP",permalink:"/docs-staging/sso/guides/setup-sso/handle-user-profile"},next:{title:"Implement IdP Initiated SSO",permalink:"/docs-staging/sso/guides/setup-sso/implement-idp-initiated-sso"}},d={},c=[{value:"Custom Domain",id:"custom-domain",level:2},{value:"Custom Theme",id:"custom-theme",level:2}];function l(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{SimpleCode:i,Subtitle:s}=t;return i||h("SimpleCode",!0),s||h("Subtitle",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"customize-admin-portal",children:"Customize Admin Portal"})}),"\n",(0,n.jsx)(s,{children:(0,n.jsx)(t.p,{children:"Customize configuration portal UI to fit your brand and design needs"})}),"\n",(0,n.jsx)(t.p,{children:"Customizing the Admin Portal helps align the UI interface with your application's brand identity, ensuring a cohesive look and feel. This guide walks you through the steps to customize to suit your brand."}),"\n",(0,n.jsx)(t.h2,{id:"custom-domain",children:"Custom Domain"}),"\n",(0,n.jsxs)(t.p,{children:["Scalekit sets up your environment using a unique endpoint URL that ends with the ",(0,n.jsx)(i,{children:"scalekit.com"})," domain. However, you can customize this using CNAME configuration."]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Before"}),(0,n.jsx)(t.th,{children:"After"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsxs)(i,{children:[" https:",(0,n.jsx)("span",{}),"//b2b-app.scalekit.com "]})}),(0,n.jsx)(t.td,{children:(0,n.jsxs)(i,{children:[" https:",(0,n.jsx)("span",{}),"//sso.b2b-app.com "]})})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Users will see this web address in their browser when they visit the Admin Portal or sign in using Single Sign-On (SSO)"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"CNAME Configuration Limitation: CNAME configuration is only available for production environments."}),"\n",(0,n.jsx)(t.li,{children:"SSL Certificate Automation: After successful CNAME configuration, the SSL certificate for the custom domain will be automatically set up."}),"\n",(0,n.jsx)(t.li,{children:"Base URL: Ensure the new CNAME URL is used as the base URL after configuration."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"custom-theme",children:"Custom Theme"}),"\n",(0,n.jsx)(t.p,{children:"Customize the Admin Portal to match your brand. This includes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Logo"}),": Display your brand\u2019s logo."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Colors"}),": Update the admin portal\u2019s accent color to match your brand"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Favicon"}),": Update the favicon to fit your brand"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(6540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);