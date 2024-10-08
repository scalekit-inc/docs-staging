"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[8540],{7611:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(4848),r=t(8453);const o={title:"Directory Sync Launch Checklist: Essential Steps for Production Deployment",description:"Comprehensive guide for deploying Directory Sync in production environments. Learn crucial steps to ensure optimal security, seamless user experience, and robust configuration for your Directory Sync implementation.",keywords:["Directory Sync deployment","Directory Sync production","Directory Sync security","Directory Sync user experience","Environment variables configuration","Client secret security","Redirect URI setup","Directory Sync branding","Admin portal customization","Directory Sync error handling","B2B application security","Identity management","Authentication best practices","Directory Sync implementation checklist","Enterprise Directory Sync deployment"]},s="Launch Checklist",c={id:"dir-sync/checklist",title:"Directory Sync Launch Checklist: Essential Steps for Production Deployment",description:"Comprehensive guide for deploying Directory Sync in production environments. Learn crucial steps to ensure optimal security, seamless user experience, and robust configuration for your Directory Sync implementation.",source:"@site/docs/dir-sync/checklist.mdx",sourceDirName:"dir-sync",slug:"/dir-sync/checklist",permalink:"/docs-staging/dir-sync/checklist",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Directory Sync Launch Checklist: Essential Steps for Production Deployment",description:"Comprehensive guide for deploying Directory Sync in production environments. Learn crucial steps to ensure optimal security, seamless user experience, and robust configuration for your Directory Sync implementation.",keywords:["Directory Sync deployment","Directory Sync production","Directory Sync security","Directory Sync user experience","Environment variables configuration","Client secret security","Redirect URI setup","Directory Sync branding","Admin portal customization","Directory Sync error handling","B2B application security","Identity management","Authentication best practices","Directory Sync implementation checklist","Enterprise Directory Sync deployment"]},sidebar:"dirSyncSidebar",previous:{title:"Quickstart",permalink:"/docs-staging/dir-sync/quickstart"},next:{title:"Setup Webhooks",permalink:"/docs-staging/dir-sync/setup-directory-events"}},a={},l=[];function d(e){const n={a:"a",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components},{LabeledCheckbox:t,SimpleCode:o,Subtitle:s}=n;return t||p("LabeledCheckbox",!0),o||p("SimpleCode",!0),s||p("Subtitle",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"launch-checklist",children:"Launch Checklist"})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)(n.p,{children:"Check these recommended steps before taking automated user provisioning in production"})}),"\n",(0,i.jsx)(n.p,{children:"As you get ready to deploy your Directory Sync implementation to production, it's important to double-check that everything is properly configured for optimal security and a seamless user experience. The checklist below outlines recommended steps to ensure your Directory Sync integration is robust, efficient, and maintainable in a live environment."}),"\n","\n",(0,i.jsx)(t,{id:"1",children:" Use appropriate environment variables "}),"\n",(0,i.jsx)(n.p,{children:"Switch from development to production credentials, including the Client ID, Client Secret, and Environment URL."}),"\n",(0,i.jsx)(t,{id:"2",children:" Secure the Client Secret "}),"\n",(0,i.jsxs)(n.p,{children:["Your client secret is akin to a key to your application. Secure it with the utmost care. Go through our ",(0,i.jsx)(n.a,{href:"/sso/guides/key-concepts/manage-client-secrets",children:"best practices guide"})," to learn how to manage the client secrets safely and securely."]}),"\n",(0,i.jsx)(t,{id:"3",children:" Configure Webhooks "}),"\n",(0,i.jsxs)(n.p,{children:["Ensure you have configured webhooks to receive real-time updates on user and group changes. Please go through our ",(0,i.jsx)(n.a,{href:"/dir-sync/webhooks",children:"webhook security guide"})," to learn how to secure your webhooks."]}),"\n",(0,i.jsx)(t,{id:"4",children:" Test the Directory Sync flows "}),"\n",(0,i.jsx)(n.p,{children:"Ensure that you have implemented and tested all possible Directory Sync workflows between your application and your customer's Identity providers. Especially, ensure you have validated for the following business cases:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Automated User Provisioning"}),"\n",(0,i.jsx)(n.li,{children:"Automated User De-provisioning"}),"\n",(0,i.jsx)(n.li,{children:"Automated User Profile Update"}),"\n",(0,i.jsx)(n.li,{children:"Automated Group Membership Update"}),"\n",(0,i.jsx)(n.li,{children:"Automated User Role Assignment"}),"\n"]}),"\n",(0,i.jsx)(t,{id:"5",children:" Finalize Branding & Theming "}),"\n",(0,i.jsx)(n.p,{children:"For a consistent and professional user experience, confirm your branding (logos, accent colors, etc) is applied to the admin portal."}),"\n",(0,i.jsx)(t,{id:"6",children:" Review Admin Portal URL "}),"\n",(0,i.jsxs)(n.p,{children:["Customize the admin portal URL to match your domain (for example, ",(0,i.jsxs)(o,{children:["https:",(0,i.jsx)("span",{}),"//admin.hero-saas.app "]}),") for a seamless brand experience. Also, Remember to update ",(0,i.jsx)(o,{children:".env"})," file post CNAME configuration. Read ",(0,i.jsx)(n.a,{href:"/dir-sync/domain-and-theme-customization",children:"customizing the admin portal"})," on how to match your brand."]}),"\n",(0,i.jsx)(t,{id:"7",children:" Graceful Error Handling "}),"\n",(0,i.jsx)(n.p,{children:"Test your integration thoroughly across all possible edge cases, including incomplete, invalid, or duplicate data submissions."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);