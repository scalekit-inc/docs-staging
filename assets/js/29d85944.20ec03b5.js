"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[9790],{7438:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(4848),o=t(8453);const r={excerpt:"This article describes how to integrate Scalekit with your Firebase application",metadata:{description:"This document provides a guide on integrating Scalekit with Firebase applications for seamless Single Sign-on Authentication. It includes steps on configuring Scalekit as an OpenID Connect provider in Firebase and provides sample code for managing SSO within the app's Firebase environment."}},s="Integrate with Firebase",a={id:"sso/guides/integrate-with-your-auth-system/firebase",title:"Integrate with Firebase",description:"Learn how to integrate Scalekit with Firebase via OpenID Connect",source:"@site/docs/sso/guides/integrate-with-your-auth-system/firebase.mdx",sourceDirName:"sso/guides/integrate-with-your-auth-system",slug:"/sso/guides/integrate-with-your-auth-system/firebase",permalink:"/sso/guides/integrate-with-your-auth-system/firebase",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{excerpt:"This article describes how to integrate Scalekit with your Firebase application",metadata:{description:"This document provides a guide on integrating Scalekit with Firebase applications for seamless Single Sign-on Authentication. It includes steps on configuring Scalekit as an OpenID Connect provider in Firebase and provides sample code for managing SSO within the app's Firebase environment."}},sidebar:"homeSidebar",previous:{title:"Integrate with Auth0",permalink:"/sso/guides/integrate-with-your-auth-system/auth0"},next:{title:"Authorization URL",permalink:"/sso/guides/key-concepts/authorization-url"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Before getting started",id:"before-getting-started",level:2},{value:"Setting up Firebase",id:"setting-up-firebase",level:2},{value:"Retrieve Configuration Details from Scalekit",id:"retrieve-configuration-details-from-scalekit",level:3},{value:"Add Redirect URI in Scalekit API Config",id:"add-redirect-uri-in-scalekit-api-config",level:3},{value:"Enable Single Sign-on in your Login Page",id:"enable-single-sign-on-in-your-login-page",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Subtitle:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Subtitle",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"integrate-with-firebase",children:"Integrate with Firebase"}),"\n",(0,n.jsx)(r,{children:(0,n.jsx)(i.p,{children:"Learn how to integrate Scalekit with Firebase via OpenID Connect\n(OIDC)"})}),"\n",(0,n.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(i.p,{children:"This guide is designed to streamline the integration process of Scalekit with Firebase applications, thereby facilitating seamless Single Sign-on (SSO) Authentication for your users. We will walk you through the process of configuring your Firebase project with Scalekit. We will also provide you with practical sample code, demonstrating how to effectively manage Scalekit SSO from within your app's Firebase environment."}),"\n",(0,n.jsx)(i.p,{children:"To begin, we'll start with an overview of the SSO workflow, laying the foundation for the subsequent integration steps."}),"\n",(0,n.jsx)("figure",{children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Scalekit - Firebase\nIntegration",src:t(8472).A+"",width:"3270",height:"954"}),"\n",(0,n.jsx)("figcaption",{children:"Scalekit - Firebase Integration"})]})}),"\n",(0,n.jsx)(i.p,{children:"Scalekit is engineered as a fully compatible OpenID Connect Provider, thus streamlining the integration process. We'll demonstrate how to configure Scalekit so that Firebase can automatically handle much of the workflow. With just a few lines of code, you'll be able to seamlessly integrate Single Sign-On capability into your product."}),"\n",(0,n.jsx)(i.h2,{id:"before-getting-started",children:"Before getting started"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Ensure you have access to Firebase Authentication with Identity Platform. ",(0,n.jsx)(i.strong,{children:"Please note"})," that OpenID Connect feature is not available in the Legacy Firebase Authentication. ",(0,n.jsx)(i.a,{href:"https://cloud.google.com/identity-platform/docs/product-comparison",children:"Refer here"})," for more information."]}),"\n",(0,n.jsx)(i.li,{children:"Access to your Scalekit account"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"setting-up-firebase",children:"Setting up Firebase"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Adding Scalekit as Open ID Connect provider in the Firebase project"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Login to your ",(0,n.jsx)(i.a,{href:"https://console.firebase.google.com/",children:"Firebase Management Console"})," and access your project. Go to the ",(0,n.jsx)(i.strong,{children:"Authentication"})," section to configure appropriate authentication methods for your project. Select ",(0,n.jsx)(i.strong,{children:"Sign-in method"})," tab."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Sign-in tab in your Firebase Console",src:t(6737).A+"",width:"2952",height:"2474"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Click on ",(0,n.jsx)(i.strong,{children:"Add new provider"})," and select ",(0,n.jsx)(i.strong,{children:"OpenID Connect"})," to start configuring Scalekit as an authentication method in your Firebase project"]}),"\n",(0,n.jsx)(i.li,{children:"This opens up a window where you have to Define new OIDC provider settings in your Firebase project"}),"\n",(0,n.jsx)(i.li,{children:"Choose Code flow in the Grant Type option and set Name as Scalekit"}),"\n",(0,n.jsx)(i.li,{children:"To setup a successful OIDC connection, you would need to enter the details of Client ID, Issuer URL, Client secret. To get these details, you need to access the API Config from your Scalekit account."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"retrieve-configuration-details-from-scalekit",children:"Retrieve Configuration Details from Scalekit"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Login to your Scalekit Dashboard. Navigate to the API Config section in the Settings to identify the appropriate configuration elements.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"copy Client ID from the Scalekit API Config and paste in your Firebase project's Client ID"}),"\n",(0,n.jsx)(i.li,{children:"copy Environment URL from the Scalekit API Config and paste it in your Firebase project's Issuer URL"}),"\n",(0,n.jsx)(i.li,{children:"Generate a new Client secret from the Scalekit API Config and paste it in your Firebase project's Client secret"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Copy credentials from your Scalekit Dashboard",src:t(7754).A+"",width:"3380",height:"2474"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Paste in your Firebase Console",src:t(2963).A+"",width:"3380",height:"2474"})}),"\n",(0,n.jsx)(i.h3,{id:"add-redirect-uri-in-scalekit-api-config",children:"Add Redirect URI in Scalekit API Config"}),"\n",(0,n.jsx)(i.p,{children:"After defining new OIDC provider, you would need to Configure OIDC Integration in your Firebase project. Copy the Callback URL from your Firebase project and add it as a new Redirect URI in your Scalekit API Config"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Copy Redirect URI from your Firebase Console",src:t(3004).A+"",width:"3380",height:"2474"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Add Redirect URI in your Scalekit Dashboard",src:t(2421).A+"",width:"3380",height:"2474"})}),"\n",(0,n.jsx)(i.h2,{id:"enable-single-sign-on-in-your-login-page",children:"Enable Single Sign-on in your Login Page"}),"\n",(0,n.jsx)(i.p,{children:"After you have successfully configured Scalekit as OIDC provider in your Firebase project, it's time to modify your app's login page - to invoke Single Sign-on and send the request to Scalekit with the user details."}),"\n",(0,n.jsx)(i.p,{children:"You can follow the below sample code in your app's login page to understand how to configure SSO through Scalekit using Firebase JS script."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",metastring:'title="Login.js" showLineNumbers',children:"\n// Initialize Scalekit as OIDC provider\n// get the provider id from your firebase project\nconst scalekitProvider = new OAuthProvider('oidc.scalekit');\n\n// add custom parameters to this provider. use any of organization_id, connection_id or domain\nscalekitProvider.setCustomParameters({domain: 'email@yourcustomer.com'});\n//scalekitProvider.setCustomParameters({organization_id: 'org_123445'});\n//scalekitProvider.setCustomParameters({connection_id: 'conn_1234323214'});\n\n\n// when user clicks Login with SSO\nloginbtn.onclick(){\n // start sign-in and get the user details\n  signInWithPopup(auth, scalekitProvider)\n    .then((result) => {\n    // Get the OAuth access token and ID Token\n    const credential = OAuthProvider.credentialFromResult(result);\n    const user = result.user.providerData[0];\n\n    // access user details via user.email, user.displayName etc\n  })\n    .catch((error) => {\n    // Handle Errors here.\n    // ...\n  });\n}\n"})})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8472:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/0-9588bf62bd04942f52ad9ead939ac920.png"},6737:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/1-57276da8df983a59804aa4f48146a8f6.png"},7754:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/2-095c02e3fb37481aaada136c56431234.png"},2963:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/3-f4f928178c627217ace4c6fd97e4d33b.png"},3004:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/4-b8b1a2c2d16d2f88e14e2836a68f801f.png"},2421:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/5-f0b478268f0edec8da7a6bb27bf5ddbb.png"},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(6540);const o={},r=n.createContext(o);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);