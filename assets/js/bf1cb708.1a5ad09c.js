"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7526],{9301:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=i(4848),r=i(8453),a=i(5312);const o={title:"Admin Portal for Directory Sync Integration: Empowering IT Admins with Scalekit",description:"Discover how Scalekit's Admin Portal enables IT admins to configure Directory Sync independently, reducing engineering and support team overhead. Explore API and no-code integration options for effortless Directory Sync setup.",keywords:["Directory Sync","Admin Portal","Scalekit","API integration","no-code","IT admin","self-service","single sign-on","SDK","secure connection","SSO configuration","enterprise authentication","identity management","B2B SaaS","user provisioning"]},s="Admin Portal",c={id:"dir-sync/admin-portal",title:"Admin Portal for Directory Sync Integration: Empowering IT Admins with Scalekit",description:"Discover how Scalekit's Admin Portal enables IT admins to configure Directory Sync independently, reducing engineering and support team overhead. Explore API and no-code integration options for effortless Directory Sync setup.",source:"@site/docs/dir-sync/admin-portal.mdx",sourceDirName:"dir-sync",slug:"/dir-sync/admin-portal",permalink:"/docs-staging/dir-sync/admin-portal",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Admin Portal for Directory Sync Integration: Empowering IT Admins with Scalekit",description:"Discover how Scalekit's Admin Portal enables IT admins to configure Directory Sync independently, reducing engineering and support team overhead. Explore API and no-code integration options for effortless Directory Sync setup.",keywords:["Directory Sync","Admin Portal","Scalekit","API integration","no-code","IT admin","self-service","single sign-on","SDK","secure connection","SSO configuration","enterprise authentication","identity management","B2B SaaS","user provisioning"]},sidebar:"dirSyncSidebar",previous:{title:"Automatically Assign Roles",permalink:"/docs-staging/dir-sync/automatically-assign-roles"},next:{title:"Map Custom Attributes",permalink:"/docs-staging/dir-sync/map-user-attributes"}},l={},d=[{value:"1. No-Code Admin Portal",id:"1-no-code-admin-portal",level:2},{value:"2. Setup Admin Portal via API",id:"2-setup-admin-portal-via-api",level:2},{value:"Configure SDK",id:"configure-sdk",level:3},...a.RM];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Subtitle:o,TabItem:s,Tabs:c}=n;return o||g("Subtitle",!0),s||g("TabItem",!0),c||g("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"admin-portal",children:"Admin Portal"})}),"\n",(0,t.jsx)(o,{children:(0,t.jsx)(n.p,{children:"Empower your customers to configure and manage Directory Sync settings by themselves"})}),"\n",(0,t.jsx)(n.p,{children:"The Admin Portal is a self-service interface designed to empower your customers' IT admins to configure Directory Sync independently, thereby reducing the overhead on your engineering and support teams. Fully hosted and managed by Scalekit, the admin portal simplifies the Directory Sync setup process with comprehensive IdP-specific documentation, ensuring a fast and secure integration with just a few lines of code."}),"\n",(0,t.jsx)(n.p,{children:"Depending on your preferences, you can choose one of the two ways to integrate the Admin Portal into your application:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"No-code Portal"}),"\n",(0,t.jsx)(n.li,{children:"Setup via API (or Integrate via API)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-no-code-admin-portal",children:"1. No-Code Admin Portal"}),"\n",(0,t.jsxs)(n.p,{children:["Log in to your ",(0,t.jsx)(n.a,{href:"https://app.scalekit.com/",children:"Scalekit Dashboard"})," and navigate to the desired organization's overview section."]}),"\n",(0,t.jsx)("figure",{className:"width-50",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Integrate via Shareable\nLink",src:i(6784).A+"",width:"2740",height:"2732"})})}),"\n",(0,t.jsx)(n.p,{children:"Click 'Generate Link' to create a new, shareable Admin Portal link."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This link is valid for 7 days but can be revoked at any time from the dashboard for security purposes."}),"\n",(0,t.jsx)(n.li,{children:"The link can be distributed through communication channels such as email, Slack, etc"}),"\n",(0,t.jsx)(n.li,{children:"Exercise caution, as anyone with this link can view and update their organization's Directory Sync settings"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-setup-admin-portal-via-api",children:"2. Setup Admin Portal via API"}),"\n",(0,t.jsx)("figure",{className:"width-50",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Integrate via\nAPI",src:i(6648).A+"",width:"2816",height:"2732"})})}),"\n",(0,t.jsx)(n.h3,{id:"configure-sdk",children:"Configure SDK"}),"\n",(0,t.jsx)(n.p,{children:"Begin by installing the Scalekit SDK, which provides necessary tools for creating a secure and efficient connection to the Admin Portal."}),"\n",(0,t.jsx)(a.Ay,{}),"\n",(0,t.jsx)(n.p,{children:"Use the Generate Portal Link API to generate an Admin Portal link that is uniquely keyed to an organization. You can either embed this as an iframe in your application or redirect the user to this link for the admin to self serve configure SSO for their organization."}),"\n",(0,t.jsxs)(c,{groupId:"tech-stack",children:[(0,t.jsx)(s,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:"showLineNumbers",children:"const link = await sc.organization.generatePortalLink('org_1233222');\n\n// link.location is the Admin Portal URL\n"})})}),(0,t.jsx)(s,{value:"py",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"# generate admin portal link by sending organization id as a parameter\nlink = sc.organization.generate_portal_link('org_1233222')\n\n# link['location'] is the Admin Portal URL\n"})})}),(0,t.jsx)(s,{value:"golang",label:"Go",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:"showLineNumbers",children:'// generate admin portal link by sending organization id as a parameter\nlink, err := sc.Organization.GeneratePortalLink(\n  ctx,\n  "<org_1233222>",\n)\n\n// link.Location is the Admin Portal URL\n'})})}),(0,t.jsx)(s,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'// generate admin portal link by sending organization id as a parameter\nLink response = client\n  .organizations()\n  .generatePortalLink("org_12345");\n// response.getLocation() has the Admin Portal URL\n\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This link is designed for one-time use, expiring after 5 minutes or upon its initial access."}),"\n",(0,t.jsx)(n.li,{children:"Once activated, the IT admin can configure SSO for a longer period of time. The session will remain active until the setup is complete."}),"\n",(0,t.jsx)(n.li,{children:"Depending on your UX strategy, you may choose to redirect the IT admin to this link or embed it within your application as an iframe, allowing configuration without navigating away from your product."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},5312:(e,n,i)=>{i.d(n,{Ay:()=>s,RM:()=>a});var t=i(4848),r=i(8453);const a=[];function o(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components},{CodeWithHeader:i,TabItem:a,Tabs:o}=n;return i||c("CodeWithHeader",!0),a||c("TabItem",!0),o||c("Tabs",!0),(0,t.jsx)(i,{title:"Setup SDK",children:(0,t.jsxs)(o,{groupId:"tech-stack",queryString:!0,children:[(0,t.jsx)(a,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @scalekit-sdk/node\n"})})}),(0,t.jsx)(a,{value:"py",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"pip install scalekit-sdk-python\n"})})}),(0,t.jsx)(a,{value:"golang",label:"Go",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"go get -u github.com/scalekit-inc/scalekit-sdk-go\n"})})}),(0,t.jsxs)(a,{value:"java",label:"Java",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-groovy",children:'/* Gradle users - add the following to your dependencies in build file */\nimplementation "com.scalekit:scalekit-sdk-java:1.0.1"\n'})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"\x3c!-- Maven users - add the following to your `pom.xml` --\x3e\n<dependency>\n    <groupId>com.scalekit</groupId>\n    <artifactId>scalekit-sdk-java</artifactId>\n    <version>1.0.1</version>\n</dependency>\n"})})]})]})})}function s(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},6648:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1-integrate-w-api-6fe5527fbc74c7f749ae4bd627a8178b.png"},6784:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2-sharable-link-80179ae5bb4cc731ed5045e8daebe238.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(6540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);