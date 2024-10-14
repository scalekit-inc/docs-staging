"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[2883],{5944:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var i=t(4848),o=t(8453);const s={},c="Google as Your Sign In Option",l={id:"integrations/google-social",title:"Google as Your Sign In Option",description:"Easily add Google Sign In to your app with Scalekit",source:"@site/docs/integrations/google-social.mdx",sourceDirName:"integrations",slug:"/integrations/google-social",permalink:"/docs-staging/integrations/google-social",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"integrationsSidebar",previous:{title:"SCIM",permalink:"/docs-staging/integrations/scim"},next:{title:"Github",permalink:"/docs-staging/integrations/github-social"}},a={},r=[{value:"Overview",id:"overview",level:2},{value:"Connect Google with Scalekit",id:"connect-google-with-scalekit",level:2},{value:"Configure OAuth settings",id:"configure-oauth-settings",level:2},{value:"Test the Connection",id:"test-the-connection",level:2},{value:"Next steps",id:"next-steps",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Subtitle:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Subtitle",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"google-as-your-sign-in-option",children:"Google as Your Sign In Option"})}),"\n",(0,i.jsx)(s,{children:"Easily add Google Sign In to your app with Scalekit"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:'Scalekit enables apps to easily let users sign in using Google as their social connector. This guide walks you through\nthe process of setting up the connection between Scalekit and Google, and using the Scalekit SDK to add "Sign in with\nGoogle" to your application.'}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Overview Diagram",src:t(3403).A+"",width:"5776",height:"1924"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(n.p,{children:'A diagram showing "Your Application" connecting to "Scalekit" via OpenID Connect, which links to Google using OAuth\n2.0.'})})]}),"\n",(0,i.jsx)(n.p,{children:"By the end of this guide, you will be able to:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Set up an OAuth 2.0 connection between Scalekit and Google Use the"}),"\n",(0,i.jsx)(n.li,{children:'Scalekit SDK to add "Sign in with Google" to your application'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connect-google-with-scalekit",children:"Connect Google with Scalekit"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Navigate to Social Login settings"})}),"\n",(0,i.jsx)(n.p,{children:"Open your Scalekit dashboard and navigate to Social Login under the Authentication section."}),"\n",(0,i.jsx)("figure",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Scalekit dashboard showcasing social login setup with various platform integration\noptions.",src:t(2494).A+"",width:"2622",height:"908"}),"\n",(0,i.jsx)("figcaption",{children:"Scalekit dashboard showcasing social login setup with various platform integration options."})]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Add a new Google connection"})}),"\n",(0,i.jsx)(n.p,{children:'Click the "+ Add Connection" button and select Google from the list of available options.'}),"\n",(0,i.jsx)("figure",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Add social login connections: Google, Microsoft, GitHub, GitLab,\nSalesforce.",src:t(4520).A+"",width:"2554",height:"914"}),"\n",(0,i.jsx)("figcaption",{children:"Add social login connections: Google"})]})}),"\n",(0,i.jsx)(n.h2,{id:"configure-oauth-settings",children:"Configure OAuth settings"}),"\n",(0,i.jsx)(n.p,{children:"The OAuth Configuration details page helps you set up the connection:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Note the ",(0,i.jsx)(n.strong,{children:"Redirect URI"})," provided for your app. You'll use this URL to register with Google."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Client ID"})," and ",(0,i.jsx)(n.strong,{children:"Client Secret"})," are generated by Google when you register an OAuth App. They enable Scalekit to\nauthenticate your app and establish trust with Google."]}),"\n"]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Configure OAuth settings",src:t(4664).A+"",width:"2892",height:"1537"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(n.p,{children:"Google OAuth configuration in Scalekit, showing redirect URI, client credentials, and scopes for social login setup."})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Set up Google OAuth 2.0"})}),"\n",(0,i.jsxs)(n.p,{children:["Google lets you set up OAuth through the Google Cloud Platform.\n",(0,i.jsx)(n.a,{href:"https://support.google.com/cloud/answer/6158849",children:"Follow Google's instructions to set up OAuth 2.0"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the Redirect URI from Scalekit as the Callback URL in Google's setup"}),"\n",(0,i.jsx)(n.li,{children:"Copy the generated Client ID and Client Secret into the Scalekit Dashboard"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'After completing the setup, click "Save Changes" in Scalekit for the changes to take effect.'}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Google OAuth configuration for social login, showing redirect URI, client ID, and scopes for\nauthentication.",src:t(8998).A+"",width:"2818",height:"1594"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(n.p,{children:"Google OAuth configuration for social login, showing redirect URI, client ID, and scopes for authentication."})})]}),"\n",(0,i.jsx)(n.h2,{id:"test-the-connection",children:"Test the Connection"}),"\n",(0,i.jsx)(n.p,{children:'Click the "Test Connection" button in Scalekit. You will be redirected to the Google Consent screen to authorize access.\nA summary table will show the information that will be sent to your app.'}),"\n",(0,i.jsx)("figure",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Test connection success",src:t(9342).A+"",width:"2922",height:"1812"}),"\n",(0,i.jsx)("figcaption",{children:"Test connection success, showing the consent screen and summary table."})]})}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(n.p,{children:["Once the connection is set up, refer to our ",(0,i.jsx)(n.a,{href:"/sso/social-login",children:"Quickstart guide"})," to learn how to integrate this\nconnection into your app using the Scalekit SDK."]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2494:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/1-navigate-to-social-logins-9e10cb4180800caeb2ec155513cdee74.png"},4520:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2-list-social-logins-4af5343315c2eea7a53cb4370d28e61d.png"},4664:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/3-google-oauth-config-eff6333e47c87a3b61643669448cbcf5.png"},8998:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/4-after-oauth-config-49857ba21a0134d07482d32a3516aaf7.png"},9342:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/5-successful-test-connection-d8fef6b3723decf7247bb58042a41aab.png"},3403:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/scalekit_social-a3766a0389271c05739c72d7875dd680.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(6540);const o={},s=i.createContext(o);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);