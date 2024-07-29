"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[3482],{1022:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(4848),n=t(8453);const r={},o="Implement Identity Provider (IdP) initiated SSO",a={id:"sso/guides/setup-sso/implement-idp-initiated-sso",title:"Implement Identity Provider (IdP) initiated SSO",description:"IdP-initiated SSO allows users to log into your application directly from their identity provider's portal. While convenient, it poses security risks such as stolen SAML assertions.",source:"@site/docs/sso/guides/setup-sso/implement-idp-initiated-sso.mdx",sourceDirName:"sso/guides/setup-sso",slug:"/sso/guides/setup-sso/implement-idp-initiated-sso",permalink:"/sso/guides/setup-sso/implement-idp-initiated-sso",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"homeSidebar",previous:{title:"Customize Admin Portal",permalink:"/sso/domain-and-theme-customization"},next:{title:"Handle SSO Errors",permalink:"/sso/guides/setup-sso/error-handling"}},d={},c=[{value:"Security Risks",id:"security-risks",level:2},{value:"How Attackers Steal SAML Assertions",id:"how-attackers-steal-saml-assertions",level:3},{value:"The Challenge for Service Providers",id:"the-challenge-for-service-providers",level:3},{value:"Mitigating Security Risks: Convert IdP-initiated to SP-initiated SSO",id:"mitigating-security-risks-convert-idp-initiated-to-sp-initiated-sso",level:2},{value:"Advantages",id:"advantages",level:2}];function l(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{SimpleCode:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SimpleCode",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"implement-identity-provider-idp-initiated-sso",children:"Implement Identity Provider (IdP) initiated SSO"}),"\n",(0,s.jsx)(i.p,{children:"IdP-initiated SSO allows users to log into your application directly from their identity provider's portal. While convenient, it poses security risks such as stolen SAML assertions."}),"\n",(0,s.jsx)(i.p,{children:"In IdP initiated SSO:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"The user logs into their identity provider portal and selects your application."}),"\n",(0,s.jsx)(i.li,{children:"The identity provider sends the user's details as assertions to your application."}),"\n",(0,s.jsx)(i.li,{children:"Your application validates the assertions, retrieves the user information, and if everything checks out, logs the user in."}),"\n"]}),"\n",(0,s.jsx)("figure",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"IdP initiated SSO\nworkflow",src:t(4853).A+"",width:"3536",height:"2168"}),"\n",(0,s.jsx)("figcaption",{children:"IdP initiated SSO workflow"})]})}),"\n",(0,s.jsx)(i.p,{children:"Since the login is initiated from the identity provider's portal, this flow is called IdP-initiated SSO."}),"\n",(0,s.jsx)(i.h2,{id:"security-risks",children:"Security Risks"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Stolen SAML Assertions"}),": Attackers can steal these assertions and use them to gain unauthorized access. If an attacker manages to steal these assertions, they can:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Inject them into another service provider, gaining access to that user's account"}),"\n",(0,s.jsx)(i.li,{children:"Inject them back into your application with altered assertions, potentially elevating their privileges"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"With a stolen SAML assertion, an attacker can gain access to your application as the compromised user, bypassing the usual authentication process. This compromised behavior is much harder with Service Provider (SP) initiated SSO flow."}),"\n",(0,s.jsx)(i.h3,{id:"how-attackers-steal-saml-assertions",children:"How Attackers Steal SAML Assertions"}),"\n",(0,s.jsx)(i.p,{children:"Attackers can steal SAML assertions through various methods:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Man-In-The-Middle (MITM) Attacks"}),": Intercepting and replacing the SAML response during transmission."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Open Redirect Attacks"}),": Exploiting improper endpoint validation to redirect the SAML response to a malicious server."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Leaky Logs and Headers"}),": Sensitive information, including SAML assertions, can be leaked through logs or headers."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Browser-Based Attacks"}),": Exploiting browser vulnerabilities to steal SAML assertions"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"the-challenge-for-service-providers",children:"The Challenge for Service Providers"}),"\n",(0,s.jsx)(i.p,{children:"The chief problem with stolen assertions is that everything appears legitimate to the service provider. The message and assertion are valid, issued by the expected identity provider, and signed with the expected key.\nHowever, the service provider cannot verify whether the assertions are stolen or not. This makes it difficult to detect and prevent unauthorized access through stolen SAML assertions."}),"\n",(0,s.jsx)(i.h2,{id:"mitigating-security-risks-convert-idp-initiated-to-sp-initiated-sso",children:"Mitigating Security Risks: Convert IdP-initiated to SP-initiated SSO"}),"\n",(0,s.jsx)(i.p,{children:"Despite the security risks, IdP initiated SSO offers significant convenience to end users, allowing them to easily log into various applications used within their organization. As such, it's important for your application to support it.\nTo support it securely, convert the incoming IdP-initiated request to an SP-initiated SSO flow. Refer the below diagram for the recommended workflow from Scalekit."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Scalekit&#39;s recommended workflow for IdP initiated SSO",src:t(2714).A+"",width:"4936",height:"4432"}),"\n",(0,s.jsx)("figcaption",{children:"Scalekit's recommended workflow for IdP initiated SSO"})]})}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["When Scalekit receives an IdP-initiated SSO request from one of your customers, it pings your configured default ",(0,s.jsx)(r,{children:"redirect_uri"})," with the ",(0,s.jsx)(r,{children:"connection_id"})," as a request parameter:"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sh",children:"https://default_redirect_uri?idp_initiated_login=success&connection_id=conn_12442\n"})}),"\n",(0,s.jsxs)(i.ol,{start:"2",children:["\n",(0,s.jsxs)(i.li,{children:["In your redirect URI handler, check for the ",(0,s.jsx)(r,{children:"idp_initiated_login"}),' parameter. If it\'s present and set to "success", construct a new authorization URL using the ',(0,s.jsx)(r,{children:"connection_id"}),":"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",metastring:'showLineNumbers title="handle_redirect_url.js"',children:"const {\n  code,\n  error,\n  error_description,\n  idp_initiated_login,\n  connection_id,\n  relay_state,\n} = req.query;\n\nif (error) {\n  // handle errors\n}\n\n// check if this is an idp initiated login\nif (idp_initiated_login && idp_initiated_login === 'success') {\n  // handle idp initiated login\n  const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n    connectionId: connection_id,\n    ...(relay_state && { state: relay_state }), // optionally pass relay state as state parameter\n  });\n\n  // next step is to redirect the user to this authorizationURL\n}\n\n// check if state received is same as what was sent as part of authorization-url\n\n// if there are no errors and if this is not an IdP initiated SSO, then authenticate with the code\nconst res = await sc.authenticateWithCode({\n  code: code,\n  redirectUri: redirectUri,\n});\n\n// res.user has the authenticated user's details\nconst userEmail = res.user.email;\n\n// next step is to create a session for this user and allow access to your application resources\n"})}),"\n",(0,s.jsx)(i.h2,{id:"advantages",children:"Advantages"}),"\n",(0,s.jsx)(i.p,{children:"The advantages of using this approach are:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Enhanced Security"}),": Overcomes the security risks of handling IdP-initiated SSO"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Seamless Experience"}),": The additional redirect is almost instantaneous, providing a smooth user experience"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"By following these steps, you can support IdP-initiated SSO while maintaining a high level of security for your users"})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4853:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/idp-initiated-sso-54c30d596f68dfa60e0e44861ac41e32.png"},2714:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/idp_initiated_sso_with_scalekit-8c490e6db4b35a7ac94c517726b182b2.png"},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var s=t(6540);const n={},r=s.createContext(n);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);