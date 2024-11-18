"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7212],{2796:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(4848),t=n(8453);const r={pagination_next:null,pagination_prev:null,displayed_sidebar:"integrationsSidebar",title:"Integrating Scalekit with Firebase for Seamless Single Sign-on Authentication",description:"Learn how to integrate Scalekit with your Firebase application using OpenID Connect (OIDC) for streamlined Single Sign-on (SSO) Authentication.",keywords:["Scalekit","Firebase","OpenID Connect","OIDC","Single Sign-on","SSO","Authentication","Identity Platform"]},a="Firebase",l={id:"integrations/firebase",title:"Integrating Scalekit with Firebase for Seamless Single Sign-on Authentication",description:"Learn how to integrate Scalekit with your Firebase application using OpenID Connect (OIDC) for streamlined Single Sign-on (SSO) Authentication.",source:"@site/docs/integrations/firebase.mdx",sourceDirName:"integrations",slug:"/integrations/firebase",permalink:"/docs-staging/integrations/firebase",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,displayed_sidebar:"integrationsSidebar",title:"Integrating Scalekit with Firebase for Seamless Single Sign-on Authentication",description:"Learn how to integrate Scalekit with your Firebase application using OpenID Connect (OIDC) for streamlined Single Sign-on (SSO) Authentication.",keywords:["Scalekit","Firebase","OpenID Connect","OIDC","Single Sign-on","SSO","Authentication","Identity Platform"]},sidebar:"integrationsSidebar"},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Before getting started",id:"before-getting-started",level:2},{value:"Setting up Firebase",id:"setting-up-firebase",level:2},{value:"Retrieve Configuration Details from Scalekit",id:"retrieve-configuration-details-from-scalekit",level:3},{value:"Add Redirect URI in Scalekit API Config",id:"add-redirect-uri-in-scalekit-api-config",level:3},{value:"Enable Single Sign-on in your Login Page",id:"enable-single-sign-on-in-your-login-page",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Subtitle:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Subtitle",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"firebase",children:"Firebase"})}),"\n",(0,s.jsx)(r,{children:"Learn how to integrate Scalekit with Firebase via OpenID Connect (OIDC)"}),"\n",(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(i.p,{children:"This guide is designed to streamline the integration process of Scalekit with Firebase applications, thereby\nfacilitating seamless Single Sign-on (SSO) Authentication for your users. We will walk you through the process of\nconfiguring your Firebase project with Scalekit. We will also provide you with practical sample code, demonstrating how\nto effectively manage Scalekit SSO from within your app's Firebase environment."}),"\n",(0,s.jsx)(i.p,{children:"To begin, we'll start with an overview of the SSO workflow, laying the foundation for the subsequent integration steps."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Scalekit - Firebase Integration",src:n(5508).A+"",width:"3270",height:"954"}),"\n",(0,s.jsx)("figcaption",{children:"Scalekit - Firebase Integration"})]})}),"\n",(0,s.jsx)(i.p,{children:"Scalekit is engineered as a fully compatible OpenID Connect Provider, thus streamlining the integration process. We'll\ndemonstrate how to configure Scalekit so that Firebase can automatically handle much of the workflow. With just a few\nlines of code, you'll be able to seamlessly integrate Single Sign-On capability into your product."}),"\n",(0,s.jsx)(i.h2,{id:"before-getting-started",children:"Before getting started"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Ensure you have access to Firebase Authentication with Identity Platform. ",(0,s.jsx)(i.strong,{children:"Please note"})," that OpenID Connect feature\nis not available in the Legacy Firebase Authentication.\n",(0,s.jsx)(i.a,{href:"https://cloud.google.com/identity-platform/docs/product-comparison",children:"Refer here"})," for more information."]}),"\n",(0,s.jsx)(i.li,{children:"Access to your Scalekit account"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"setting-up-firebase",children:"Setting up Firebase"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Adding Scalekit as Open ID Connect provider in the Firebase project"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Login to your ",(0,s.jsx)(i.a,{href:"https://console.firebase.google.com/",children:"Firebase Management Console"})," and access your project. Go to the\n",(0,s.jsx)(i.strong,{children:"Authentication"})," section to configure appropriate authentication methods for your project. Select ",(0,s.jsx)(i.strong,{children:"Sign-in method"}),"\ntab."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Sign-in tab in your Firebase Console",src:n(8013).A+"",width:"2952",height:"2474"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Click on ",(0,s.jsx)(i.strong,{children:"Add new provider"})," and select ",(0,s.jsx)(i.strong,{children:"OpenID Connect"})," to start configuring Scalekit as an authentication method\nin your Firebase project"]}),"\n",(0,s.jsx)(i.li,{children:"This opens up a window where you have to Define new OIDC provider settings in your Firebase project"}),"\n",(0,s.jsx)(i.li,{children:"Choose Code flow in the Grant Type option and set Name as Scalekit"}),"\n",(0,s.jsx)(i.li,{children:"To setup a successful OIDC connection, you would need to enter the details of Client ID, Issuer URL, Client secret. To\nget these details, you need to access the API Config from your Scalekit account."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"retrieve-configuration-details-from-scalekit",children:"Retrieve Configuration Details from Scalekit"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Login to your Scalekit Dashboard. Navigate to the API Config section in the Settings to identify the appropriate\nconfiguration elements.","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"copy Client ID from the Scalekit API Config and paste in your Firebase project's Client ID"}),"\n",(0,s.jsx)(i.li,{children:"copy Environment URL from the Scalekit API Config and paste it in your Firebase project's Issuer URL"}),"\n",(0,s.jsx)(i.li,{children:"Generate a new Client secret from the Scalekit API Config and paste it in your Firebase project's Client secret"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Copy credentials from your Scalekit Dashboard",src:n(7334).A+"",width:"3380",height:"2474"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Paste in your Firebase Console",src:n(5423).A+"",width:"3380",height:"2474"})}),"\n",(0,s.jsx)(i.h3,{id:"add-redirect-uri-in-scalekit-api-config",children:"Add Redirect URI in Scalekit API Config"}),"\n",(0,s.jsx)(i.p,{children:"After defining new OIDC provider, you would need to Configure OIDC Integration in your Firebase project. Copy the\nCallback URL from your Firebase project and add it as a new Redirect URI in your Scalekit API Config"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Copy Redirect URI from your Firebase Console",src:n(6768).A+"",width:"3380",height:"2474"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add Redirect URI in your Scalekit Dashboard",src:n(1593).A+"",width:"3380",height:"2474"})}),"\n",(0,s.jsx)(i.h2,{id:"enable-single-sign-on-in-your-login-page",children:"Enable Single Sign-on in your Login Page"}),"\n",(0,s.jsx)(i.p,{children:"After you have successfully configured Scalekit as OIDC provider in your Firebase project, it's time to modify your\napp's login page - to invoke Single Sign-on and send the request to Scalekit with the user details."}),"\n",(0,s.jsx)(i.p,{children:"You can follow the below sample code in your app's login page to understand how to configure SSO through Scalekit using\nFirebase JS script."}),"\n",(0,s.jsx)(i.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,s.jsxs)(i.code,{className:"language-javascript",children:[(0,s.jsx)(i.span,{className:"line"}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// Initialize Scalekit as OIDC provider"})}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// get the provider id from your firebase project"})}),"\n",(0,s.jsxs)(i.span,{className:"line",children:[(0,s.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"const"}),(0,s.jsx)(i.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" scalekitProvider"}),(0,s.jsx)(i.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,s.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" new"}),(0,s.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" OAuthProvider"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,s.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'oidc.scalekit'"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,s.jsx)(i.span,{className:"line"}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// add custom parameters to this provider. use any of organization_id, connection_id or domain"})}),"\n",(0,s.jsxs)(i.span,{className:"line",children:[(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"scalekitProvider."}),(0,s.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"setCustomParameters"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"({"}),(0,s.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"domain"}),(0,s.jsx)(i.span,{style:{color:"#0184BC","--shiki-dark":"#E1E4E8"},children:":"}),(0,s.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'email@yourcustomer.com'"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"});"})]}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"//scalekitProvider.setCustomParameters({organization_id: 'org_123445'});"})}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"//scalekitProvider.setCustomParameters({connection_id: 'conn_1234323214'});"})}),"\n",(0,s.jsx)(i.span,{className:"line"}),"\n",(0,s.jsx)(i.span,{className:"line"}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// when user clicks Login with SSO"})}),"\n",(0,s.jsxs)(i.span,{className:"line",children:[(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"loginbtn."}),(0,s.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"onclick"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(){"})]}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" // start sign-in and get the user details"})}),"\n",(0,s.jsxs)(i.span,{className:"line",children:[(0,s.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"  signInWithPopup"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(auth, scalekitProvider)"})]}),"\n",(0,s.jsxs)(i.span,{className:"line",children:[(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    ."}),(0,s.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"then"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(("}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:"result"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:") "}),(0,s.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"=>"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"    // Get the OAuth access token and ID Token"})}),"\n",(0,s.jsxs)(i.span,{className:"line",children:[(0,s.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"    const"}),(0,s.jsx)(i.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" credential"}),(0,s.jsx)(i.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" OAuthProvider."}),(0,s.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"credentialFromResult"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(result);"})]}),"\n",(0,s.jsxs)(i.span,{className:"line",children:[(0,s.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"    const"}),(0,s.jsx)(i.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" user"}),(0,s.jsx)(i.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" result."}),(0,s.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"user"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,s.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"providerData"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"["}),(0,s.jsx)(i.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"0"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"];"})]}),"\n",(0,s.jsx)(i.span,{className:"line"}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"    // access user details via user.email, user.displayName etc"})}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  })"})}),"\n",(0,s.jsxs)(i.span,{className:"line",children:[(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    ."}),(0,s.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"catch"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(("}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:"error"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:") "}),(0,s.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"=>"}),(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"    // Handle Errors here."})}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"    // ..."})}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  });"})}),"\n",(0,s.jsx)(i.span,{className:"line",children:(0,s.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,s.jsx)(i.span,{className:"line"})]})})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5508:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/0-9588bf62bd04942f52ad9ead939ac920.png"},8013:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/1-57276da8df983a59804aa4f48146a8f6.png"},7334:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/2-095c02e3fb37481aaada136c56431234.png"},5423:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/3-f4f928178c627217ace4c6fd97e4d33b.png"},6768:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/4-b8b1a2c2d16d2f88e14e2836a68f801f.png"},1593:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/5-f0b478268f0edec8da7a6bb27bf5ddbb.png"},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var s=n(6540);const t={},r=s.createContext(t);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);