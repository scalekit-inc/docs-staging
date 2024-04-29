"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[6884],{6047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(4848),r=n(8453);const i={},o="Managing Client Secrets",a={id:"best-practices/manage-client-secrets",title:"Managing Client Secrets",description:"Client ID and Client Secret are a form of API credentials, like a username and password. You are responsible for keeping Client Secrets safe and secure. Below are some best practices for how you can keep your secrets safe and how you can leverage some of the functionality offered by us to help you do the same.",source:"@site/docs/best-practices/manage-client-secrets.md",sourceDirName:"best-practices",slug:"/best-practices/manage-client-secrets",permalink:"/best-practices/manage-client-secrets",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714227404e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Branding & Theming",permalink:"/admin-portal/branding-theming"},next:{title:"Redirect URI",permalink:"/best-practices/redirect-uri"}},c={},l=[{value:"<strong>Protecting against key leakage</strong>",id:"protecting-against-key-leakage",level:2},{value:"Rotating Client Secrets",id:"rotating-client-secrets",level:2}];function d(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"managing-client-secrets",children:"Managing Client Secrets"}),"\n",(0,s.jsx)(t.p,{children:"Client ID and Client Secret are a form of API credentials, like a username and password. You are responsible for keeping Client Secrets safe and secure. Below are some best practices for how you can keep your secrets safe and how you can leverage some of the functionality offered by us to help you do the same."}),"\n",(0,s.jsx)(t.h2,{id:"protecting-against-key-leakage",children:(0,s.jsx)(t.strong,{children:"Protecting against key leakage"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Use secure key management systems (KMS) to store client secrets."}),"\xa0\nWhenever you generate a client secret from the Scalekit Dashboard, it is only shown once. You cannot recover this secret again as we only store the hash of the secret and never the raw secret with us. Immediately copy the key to a KMS, which is designed to handle sensitive information with encryption and access controls. Make sure you don\u2019t leave a copy of the key in the local file."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Don\u2019t share secret keys using insecure means."}),"\xa0\nDon\u2019t share keys in emails, Slack, or customer support messages."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Don\u2019t store keys in in your source code or repositories."}),"\xa0\nNever keep the client secrets as hard coded strings within your source code and always store them as part of your properties file or environments file. Never checkin these properties file in your source code repository either."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Prepare to Rotate Secrets."}),"\nEstablish a Standard Operating Procedure internally to rotate Client Secrets in the event of accidental secret leaking. By having these processes in place, you are better prepared to respond to any emergencies with minimal business impact."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Grant access only to those who need it."}),"\xa0\nDefine a clear policy on which users have permission to create, update or read keys. Limit the access only to those who need it. Audit the access periodically to avoid excess privilege on keys."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Audit API request logs to monitor suspicious activities."}),"\xa0\nWe recommend that you regularly audit or monitor API\xa0logs to proactively identify misused API keys. Make sure your developers aren\u2019t using live mode keys when a test mode key is appropriate."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"rotating-client-secrets",children:"Rotating Client Secrets"}),"\n",(0,s.jsx)(t.p,{children:"If you detected anomalous behavior or suspect a secret leak, immediately revoke the secret from Scalekit Dashboard and generate a new one. When in doubt, always exercise your right to generate a new secret and revoke the existing secret."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);