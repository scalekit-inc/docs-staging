"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7413],{5564:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(4848),o=i(8453);const r={pagination_next:null,pagination_prev:null,displayed_sidebar:"integrationsSidebar"},s="OIDC",c={id:"integrations/oidc",title:"OIDC",description:"Step-by-step guide to configure Single Sign-on using OIDC with any Identity",source:"@site/docs/integrations/oidc.mdx",sourceDirName:"integrations",slug:"/integrations/oidc",permalink:"/integrations/oidc",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,displayed_sidebar:"integrationsSidebar"},sidebar:"integrationsSidebar"},a={},d=[{value:"1. OIDC Configuration",id:"1-oidc-configuration",level:3},{value:"2. Attributes Mapping",id:"2-attributes-mapping",level:3},{value:"3. Assign User/Group",id:"3-assign-usergroup",level:3},{value:"4. IdP configuration",id:"4-idp-configuration",level:3},{value:"6. Finalize App",id:"6-finalize-app",level:3},{value:"7. Test Connection",id:"7-test-connection",level:3},{value:"8. Enable connection",id:"8-enable-connection",level:3}];function l(n){const e={admonition:"admonition",h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",...(0,o.R)(),...n.components},{Subtitle:r}=e;return r||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Subtitle",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"oidc",children:"OIDC"}),"\n",(0,t.jsx)(r,{children:(0,t.jsx)(e.p,{children:"Step-by-step guide to configure Single Sign-on using OIDC with any Identity\nProvider."})}),"\n",(0,t.jsx)(e.h3,{id:"1-oidc-configuration",children:"1. OIDC Configuration"}),"\n",(0,t.jsxs)(e.p,{children:["Sign into the SSO Configuration Portal, select ",(0,t.jsx)(e.strong,{children:"Custom Provider"}),", then ",(0,t.jsx)(e.strong,{children:"OIDC,"})," and click on ",(0,t.jsx)(e.strong,{children:"Configure."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Select Custom Provider\u2192OIDC and then\nConfigure",src:i(6510).A+"",width:"2194",height:"1238"}),"\n",(0,t.jsx)("figcaption",{children:"Select Custom Provider\u2192OIDC and then Configure"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Copy the ",(0,t.jsx)(e.strong,{children:"Redirect URl"})," from the ",(0,t.jsx)(e.strong,{children:"SSO Configuration Portal"}),"."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Copy Redirect\nURI",src:i(7847).A+"",width:"2206",height:"460"}),"\n",(0,t.jsx)("figcaption",{children:"Copy Redirect URI"})]})}),"\n",(0,t.jsx)(e.p,{children:"On your Identity Provider portal, select OIDC as the integration method, and Web Applications as application type."}),"\n",(0,t.jsx)(e.p,{children:"Paste this Redirect URI in the sign in redirect URI space on your identity provider portal"}),"\n",(0,t.jsx)(e.h3,{id:"2-attributes-mapping",children:"2. Attributes Mapping"}),"\n",(0,t.jsx)(e.p,{children:"On your identity provider portal, if attribute mapping is required, map the given attributes exactly as shown below."}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"Usually, you don't have to configure any attributes and by default - most identity providers support standard OIDC claims to send user information as part of ID Token or User Info endpoint."})}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Map exact attributes shown\n",src:i(9372).A+"",width:"2182",height:"724"}),"\n",(0,t.jsx)("figcaption",{children:"Map exact attributes shown"})]})}),"\n",(0,t.jsx)(e.h3,{id:"3-assign-usergroup",children:"3. Assign User/Group"}),"\n",(0,t.jsx)(e.p,{children:"Choose who can access the app by assigning users to your app on your identity provider portal."}),"\n",(0,t.jsx)(e.h3,{id:"4-idp-configuration",children:"4. IdP configuration"}),"\n",(0,t.jsx)(e.p,{children:"Find the client ID from your identity provider portal. Paste this in the space for Client ID on your SSO Configuration Portal."}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Enter copied Client ID in the SSO Configuration\nPortal",src:i(2261).A+"",width:"2162",height:"832"})}),(0,t.jsx)("figcaption",{children:(0,t.jsx)(e.p,{children:"Enter copied Client ID in the SSO Configuration Portal"})})]}),"\n",(0,t.jsx)(e.p,{children:"Similarly, generate and copy the Client Secret from your SSO Configuration Portal and paste it under Client Secret under IdP Configuration."}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Enter copied Client Secret in the SSO Configuration\nPortal",src:i(7962).A+"",width:"2168",height:"826"})}),(0,t.jsx)("figcaption",{children:(0,t.jsx)(e.p,{children:"Enter copied Client Secret in the SSO Configuration Portal"})})]}),"\n",(0,t.jsxs)(e.p,{children:["Find and copy the Issuer URL from your custom provider\u2019s portal.Paste the above URL in the ",(0,t.jsx)(e.strong,{children:"SSO configuration Portal"})," under ",(0,t.jsx)(e.strong,{children:"Issuer URL"}),". Click on Update."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Enter copied Issuer URL, and click\nUpdate",src:i(9539).A+"",width:"2176",height:"826"}),"\n",(0,t.jsx)("figcaption",{children:"Enter copied Issuer URL, and click Update"})]})}),"\n",(0,t.jsxs)(e.admonition,{type:"info",children:[(0,t.jsx)(e.p,{children:"We support configuring Issuer URL field with Discovery Endpoint also."}),(0,t.jsx)(e.p,{children:"Discovery Endpoints usually end with ./well-known/openid-configuration"})]}),"\n",(0,t.jsx)(e.h3,{id:"6-finalize-app",children:"6. Finalize App"}),"\n",(0,t.jsx)(e.p,{children:"Your IdP configuration section on the SSO Configuration Portal should look something like this once you\u2019re done configuring it."}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Completed view of IdP configuration on the SSO Configuration\nPortal",src:i(2680).A+"",width:"2226",height:"1170"})}),(0,t.jsx)("figcaption",{children:(0,t.jsx)(e.p,{children:"Completed view of IdP configuration on the SSO Configuration Portal"})})]}),"\n",(0,t.jsx)(e.h3,{id:"7-test-connection",children:"7. Test Connection"}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Test Connection."})," If everything is done correctly, you will see a ",(0,t.jsx)(e.strong,{children:"Success"})," response as shown below."]}),"\n",(0,t.jsx)(e.p,{children:"If the connection fails, you\u2019ll see an error, the reason for the error, and a way to solve that error right on the screen."}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Test SSO\nConfiguration",src:i(2625).A+"",width:"2190",height:"982"}),"\n",(0,t.jsx)("figcaption",{children:"Test SSO Configuration"})]})}),"\n",(0,t.jsx)(e.h3,{id:"8-enable-connection",children:"8. Enable connection"}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Enable Connection."})," This will let all your selected users login to the new application via OIDC."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Enable OIDC Connection\n",src:i(1142).A+"",width:"2194",height:"250"}),"\n",(0,t.jsx)("figcaption",{children:"Enable OIDC Connection"})]})}),"\n",(0,t.jsx)(e.p,{children:"With this, we are done configuring your application for an OIDC login setup."})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},6510:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/0-bcb443cb77670efcae4931656616f6ad.png"},7847:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/1-9a4d1eca58eeedfd3c7644d36542e436.png"},9372:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/2-655e1e8d9c6f03f7f2708d705bbcb498.png"},2261:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/3-8e965679b7113f059bca945dfc360764.png"},7962:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/4-b23f58f6046f0838b1655173602b3929.png"},9539:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/5-3195b142fe51813e738350105bf0cbfa.png"},2680:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/6-e01e6037e7820988f8bf32d26dd592be.png"},2625:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/7-66b42190a2783f0faff297cd171544f5.png"},1142:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/8-c3ed9eeb03fbebe0f3cb7e367df38f3f.png"},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var t=i(6540);const o={},r=t.createContext(o);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);