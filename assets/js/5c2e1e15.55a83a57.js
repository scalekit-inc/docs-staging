"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[2947],{4342:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(4848),s=t(8453);const o={displayed_sidebar:"homeSidebar",slug:"overview",id:"overview"},r="Introduction to Single Sign-on",a={id:"sso/overview",title:"Introduction to Single Sign-on",description:"Single Sign-On (SSO) streamlines user access by enabling a single authentication event to grant access to multiple applications with the same credentials. For example, logging into one Google service, such as Gmail, automatically authenticates you to YouTube, Google Drive, and other Google platforms.",source:"@site/docs/sso/1-overview-of-sso.mdx",sourceDirName:"sso",slug:"/sso/overview",permalink:"/sso/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{displayed_sidebar:"homeSidebar",slug:"overview",id:"overview"},sidebar:"homeSidebar",next:{title:"SSO - Quickstart",permalink:"/sso/quickstart"}},d={},l=[{value:"How Single Sign-On (SSO) works",id:"how-single-sign-on-sso-works",level:2},{value:"SAML",id:"saml",level:2},{value:"Service Provider initiated SSO",id:"service-provider-initiated-sso",level:3},{value:"Identity Provider initiated SSO",id:"identity-provider-initiated-sso",level:3},{value:"Risks with IdP initiated SSO",id:"risks-with-idp-initiated-sso",level:4},{value:"OIDC",id:"oidc",level:2},{value:"How does Scalekit help",id:"how-does-scalekit-help",level:2}];function c(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"introduction-to-single-sign-on",children:"Introduction to Single Sign-on"}),"\n",(0,n.jsx)(i.p,{children:"Single Sign-On (SSO) streamlines user access by enabling a single authentication event to grant access to multiple applications with the same credentials. For example, logging into one Google service, such as Gmail, automatically authenticates you to YouTube, Google Drive, and other Google platforms."}),"\n",(0,n.jsx)(i.p,{children:"There are two key benefits to the users and organizations with a secure single sign-on implementation:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"User can seamlessly access multiple applications using only one set of credentials."}),"\n",(0,n.jsx)(i.li,{children:"User credentials are managed in a centralized identity system. This enables Admins to easily configure and manage authentication policies for all their users from the centralized identity provider."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Furthermore, this integrated SSO mechanism enhances user convenience, boosts productivity, and reduces the risks associated with password fatigue and reuse. These security & administration benefits are driving factors for enterprise organizations to only procure SaaS applications that offer SSO-based authentication."}),"\n",(0,n.jsx)(i.h2,{id:"how-single-sign-on-sso-works",children:"How Single Sign-On (SSO) works"}),"\n",(0,n.jsx)(i.p,{children:"Fundamentally, Single Sign-on works by exchanging user information in a pre-determined format between two trusted parties - your application and your customer's identity provider (aka IdP). Most of these interactions happen in the browser context as some steps need user intervention."}),"\n",(0,n.jsx)(i.p,{children:"To ensure secure exchange of user information between your application and your customer's identity provider, most IdPs support two protocols: Secure Assertion Markup Language (SAML) or OpenID Connect (OIDC). The objective of both these protocols is same: allow secure user information exchange between the Service Provider (your application) and Identity Provider (your customer's identity system). These protocols differ in how these systems trust each other, communicate, and exchange user information."}),"\n",(0,n.jsx)(i.p,{children:"Let's understand these protocols at a high level."}),"\n",(0,n.jsx)(i.h2,{id:"saml",children:"SAML"}),"\n",(0,n.jsx)(i.p,{children:"SAML 2.0 (Secure Assertion Markup Language) has been in use since 2005 and is also most widely implemented protocol. SAML exchanges user information using XML files via HTTPS or SOAP. But, before the user information is exchanged between the two parties, they need to establish the trust between them. Trust is established by exchanging information about each other as part of SAML configuration parameters like Assetion Consumer Service URL (ACS URL), Entity ID, X.509 Certificates, etc."}),"\n",(0,n.jsx)(i.p,{children:"After the trust has been established, subsequent user information can be exchanged in two ways -"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"your application requesting for a user's information - this is Service Provider initiated login flow"}),"\n",(0,n.jsx)(i.li,{children:"Or the identity provider directly shares user details via a pre-configured ACS URL - this is Identity Provider initiated Login flow"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Lets understand these two SSO flows."}),"\n",(0,n.jsx)(i.h3,{id:"service-provider-initiated-sso",children:"Service Provider initiated SSO"}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)(i.img,{alt:"SP initiated SSO workflow",src:t(3315).A+"",width:"3536",height:"2644"}),(0,n.jsx)("figcaption",{children:"SP initiated SSO workflow"})]}),"\n",(0,n.jsx)(i.p,{children:"For service provider initiated SSO flow,"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"User tries to access your application and your app identifies that the user's credentials need to be verified by their identity provider."}),"\n",(0,n.jsx)(i.li,{children:"Your application requests the identity provider for the user's information."}),"\n",(0,n.jsx)(i.li,{children:'The identity provider authenticates the user and returns user details as "assertions" to your application.'}),"\n",(0,n.jsx)(i.li,{children:"You validate assertions, retrieve the user information, and if everything checks, allow the user to successfully login yo your application."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"As you can imagine, in this workflow, the user login behaviour starts from your application and thats why this is termed as service provider initiated SSO (aka SP-initiated SSO)"}),"\n",(0,n.jsx)(i.h3,{id:"identity-provider-initiated-sso",children:"Identity Provider initiated SSO"}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)(i.img,{alt:"IdP initiated SSO workflow",src:t(4853).A+"",width:"3536",height:"2168"}),(0,n.jsx)("figcaption",{children:"IdP initiated SSO workflow"})]}),"\n",(0,n.jsx)(i.p,{children:"In case of Identity Provider initiated SSO,"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"User logs into their identity provider\nportal and selects your application from within the IdP portal."}),"\n",(0,n.jsx)(i.li,{children:"Identity Provider sends the user details as assertions to your application."}),"\n",(0,n.jsx)(i.li,{children:"You validate assertions, retrieve the user information, and if everything checks, allow the user to successfully\nlogin yo your application."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Since the user login workflow starts from the Identity Provider portal (and not from your application), this flow is called as Identity Provider initiated SSO (aka IdP-initiated SSO)."}),"\n",(0,n.jsx)(i.h4,{id:"risks-with-idp-initiated-sso",children:"Risks with IdP initiated SSO"}),"\n",(0,n.jsxs)(i.p,{children:["IdP initiated SSO is susceptible for common security attacks like Man In the Middle attack, Stolen Assertion attack or Assertion Replay attack etc. Read the ",(0,n.jsx)(i.a,{href:"/sso/guides/setup-sso/implement-idp-initiated-sso",children:"IdP initiated SSO"})," guide to understand these risks and how to mitigate them."]}),"\n",(0,n.jsx)(i.h2,{id:"oidc",children:"OIDC"}),"\n",(0,n.jsx)(i.p,{children:"OpenID\xa0Connect (OIDC) is an authentication protocol based on top of OAuth 2.0 to simplify the user information exchange process between Relying Party (your application) and the OpenID Provider (your customer's Identity Provider). The OIDC protocol exchanges user information via signed JSON Web Tokens (JWT) over HTTPS. Because of the simplified nature of handling JWTs, it is often used in modern web applications, native desktop clients and mobile applications. With the latest extensions to the OIDC procotol like Proof Key of Code Exchange (PKCE) and Demonstrating Proof of Possession (DPoP), the overall security of user exchange information is strengthened."}),"\n",(0,n.jsx)(i.p,{children:"In it's current format, OIDC only supports SP initiated Login. In this flow:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"User tries to access your application. You identify that this users credentials need to be verified by their Identity Provider."}),"\n",(0,n.jsx)(i.li,{children:"Your application requests the user's Identity Provider for the user's information via an OAuth2 request."}),"\n",(0,n.jsx)(i.li,{children:"Identity Provider authenticates the user and sends the users details with an authorization_code to a pre-registered redirect_url on your server."}),"\n",(0,n.jsx)(i.li,{children:"You will exchange the code for the actual user details by providing your information with the Identity provider."}),"\n",(0,n.jsx)(i.li,{children:"Identity Provider will then send the user information in the form of JWTs. You retrieve the user information from those assertions and if everything is valid, you will allow the user inside your application."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"how-does-scalekit-help",children:"How does Scalekit help"}),"\n",(0,n.jsx)(i.p,{children:"Scalekit serves as an intermediary, abstracting the complexities involved in handling SSO with SAML and OIDC protocols. By integrating with Scalekit in just a few lines of code, your application can connect with numerous IdPs efficiently, ensuring security and compliance."}),"\n",(0,n.jsxs)(i.p,{children:["Explore our ",(0,n.jsx)(i.a,{href:"/sso/quickstart",children:"Quick Start"})," guide to integrate your application with Scalekit in just a few steps, leveraging our robust SSO solution."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4853:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/idp-initiated-sso-54c30d596f68dfa60e0e44861ac41e32.png"},3315:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/sp-initiated-sso-6cb12c832fac1f191e912eec1f0b8ad3.png"},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(6540);const s={},o=n.createContext(s);function r(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);