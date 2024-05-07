"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[1941],{230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(4848),o=n(8453),a=n(6365);const s={excerpt:"This article describes how to integrate Scalekit with your Auth0 implementation",metadata:{description:"This document provides a guide on integrating Scalekit with Auth0 applications for seamless Single Sign-on Authentication. It includes steps on configuring Scalekit as an OpenID Connect provider in your Auth0 tenant."}},r="Auth0",c={id:"integrations/auth0",title:"Auth0",description:"Learn how to integrate Scalekit with Auth0 via OpenID Connect (OIDC)",source:"@site/docs/integrations/auth0.md",sourceDirName:"integrations",slug:"/integrations/auth0",permalink:"/integrations/auth0",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715109434e3,frontMatter:{excerpt:"This article describes how to integrate Scalekit with your Auth0 implementation",metadata:{description:"This document provides a guide on integrating Scalekit with Auth0 applications for seamless Single Sign-on Authentication. It includes steps on configuring Scalekit as an OpenID Connect provider in your Auth0 tenant."}},sidebar:"integrationsSidebar",previous:{title:"Firebase",permalink:"/integrations/firebase"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Setting up Auth0",id:"setting-up-auth0",level:2},{value:"Adding Scalekit as OpenID Connect Connection",id:"adding-scalekit-as-openid-connect-connection",level:3},{value:"Add Redirect URI in Scalekit API Config",id:"add-redirect-uri-in-scalekit-api-config",level:3},{value:"Enable Home Realm Discovery",id:"enable-home-realm-discovery",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"auth0",children:"Auth0"}),"\n",(0,i.jsx)(a.Ay,{children:"Learn how to integrate Scalekit with Auth0 via OpenID Connect (OIDC)"}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"This guide is designed to provide you a walkthrough of integrating Scalekit with Auth0, thereby facilitating seamless Single Sign-on (SSO) authentication for your application's users. In this guide, the assumption is that Auth0 acts as an identity management solution for your users and the login, session management functionality is powered by Auth0."}),"\n",(0,i.jsx)(t.p,{children:"To begin, we'll start with an overview of the SSO workflow, laying the foundation for the subsequent integration steps."}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.img,{alt:"Scalekit - Auth0 Integration",src:n(2274).A+"",width:"3270",height:"954"}),"\n",(0,i.jsx)("figcaption",{children:"Scalekit - Auth0 Integration"})]}),"\n",(0,i.jsx)(t.p,{children:"Scalekit is engineered as a fully compatible OpenID Connect Provider, thus streamlining the integration process. We'll demonstrate how to configure Scalekit so that Auth0 can automatically handle much of the workflow. As Auth0 manages the integration with Scalekit, you'll be able to seamlessly integrate Single Sign-On capability into your product without having to write a single line of code."}),"\n",(0,i.jsx)(t.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ensure you have access to Auth0 Management Dashboard. ",(0,i.jsx)(t.strong,{children:"Please note"})," that OpenID Connect feature is only available in some pricing plans of Auth0. Please check whether your current plan has access to creating Enterprise Connections with OpenID Connect providers."]}),"\n",(0,i.jsx)(t.li,{children:"Access to your Scalekit account"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-auth0",children:"Setting up Auth0"}),"\n",(0,i.jsx)(t.h3,{id:"adding-scalekit-as-openid-connect-connection",children:"Adding Scalekit as OpenID Connect Connection"}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"info",children:(0,i.jsxs)(t.p,{children:["Because of an ",(0,i.jsx)(t.a,{href:"https://community.auth0.com/t/creating-an-oidc-connection-fails-with-options-issuer-is-required-error/128189",children:"existing issue"})," in adding OIDC Providers via Auth0 Management Console, you are required to use Auth0 API to create OpenID Connect Connections via API"]})}),"\n",(0,i.jsx)(t.p,{children:"You need to use the Auth0 Management API to create Scalekit as a OpenID connection for your tenant. See the sample curl command below"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:"showLineNumbers",children:'\ncurl --request POST \\\n  --url \'https://<AUTH0_TENANT_DOMAIN>.us.auth0.com/api/v2/connections\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Accept: application/json\' \\\n  --header \'authorization: Bearer <API_TOKEN>\' \\\n  --data \'{ "strategy": "oidc", "name": "Scalekit", "options": { "type": "back_channel", "discovery_url": "<SCALEKIT_ENV_URL>/.well-known/openid-configuration", "client_secret" : "<SCALEKIT_CLIENT_SECRET>", "client_id" : "<SCALEKIT_CLIENT_ID>",  "scopes": "openid profile" } }\'\n\n'})}),"\n",(0,i.jsx)(t.p,{children:"After the successful execution of the above API call, you will see a new OpenID Connect Connection created in your Auth0 tenant."}),"\n",(0,i.jsx)(t.h3,{id:"add-redirect-uri-in-scalekit-api-config",children:"Add Redirect URI in Scalekit API Config"}),"\n",(0,i.jsx)(t.p,{children:"After creating Scalekit as a new OIDC connection, you need to copy the Callback URL from your Auth0 Dashboard and add it as a new Redirect URI in your Scalekit API Config section."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Copy Redirect URI from your Auth0 Dashboard",src:n(3227).A+"",width:"3158",height:"2252"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Add Redirect URI in your Scalekit Dashboard",src:n(5159).A+"",width:"3158",height:"2252"})}),"\n",(0,i.jsx)(t.h2,{id:"enable-home-realm-discovery",children:"Enable Home Realm Discovery"}),"\n",(0,i.jsx)(t.p,{children:"After you have successfully configured Scalekit as OIDC provider in your Auth0 project, it's time to onboard your enterprise customers and enable home realm discovery for their domains so that they will be automatically routed to SSO connection based on their email domain and Auth0 will route the requests to Scalekit."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Add domains for HRD",src:n(6665).A+"",width:"3158",height:"2252"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6365:(e,t,n)=>{n.d(t,{Ay:()=>s,Iu:()=>o,Wu:()=>a});n(6540);var i=n(4848);function o(e){let{children:t}=e;return(0,i.jsx)("code",{className:"simple_code",children:t})}function a(e){let{url:t,imageSrc:n,title:o,description:a}=e;return(0,i.jsx)("article",{className:"col col--4 margin-bottom--lg",children:(0,i.jsxs)("a",{className:"card padding--lg cardContainer",href:t,children:[(0,i.jsxs)("h3",{children:[(0,i.jsx)("img",{alt:o,src:n}),(0,i.jsx)("p",{children:o})]}),(0,i.jsx)("p",{children:a})]})})}function s(e){let{children:t}=e;return(0,i.jsxs)("p",{style:{marginTop:"-15px",fontStyle:"italic"},children:[" ",t," "]})}},2274:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/How Scalekit connects with Auth0-8f04a01f5ff3db223c4b0b519bc4d82d.png"},3227:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/SCR-20240507-omfj-4f97f61fb42a0e85f6c53fbd48ce2449.png"},5159:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/SCR-20240507-omtp-ac7d5066e9ab59c84b18d3344120282e.png"},6665:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/SCR-20240507-onbs-9979ae185ccc9e60debdcfaf50091d98.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(6540);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);