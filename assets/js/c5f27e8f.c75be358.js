"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[6617],{9351:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var n=i(4848),l=i(8453);const a={slug:"idtoken-claims",title:"Inspect Claims in ID Token with Scalekit",description:"Understand how to inspect and validate claims in an ID Token issued by Scalekit. Learn about the structure of ID Tokens, including their payload, and the significance of various claims for user profile information.",keywords:["ID Token","JWT","Scalekit","User Authentication","Claims","JSON Web Token","Profile Information","Secure Authentication","Token Validation","OAuth"]},r="Inspect Claims in ID Token",t={id:"sso/guides/key-concepts/idtoken-claims",title:"Inspect Claims in ID Token with Scalekit",description:"Understand how to inspect and validate claims in an ID Token issued by Scalekit. Learn about the structure of ID Tokens, including their payload, and the significance of various claims for user profile information.",source:"@site/docs/sso/guides/key-concepts/5-idtoken-claims.mdx",sourceDirName:"sso/guides/key-concepts",slug:"/sso/guides/key-concepts/idtoken-claims",permalink:"/docs-staging/sso/guides/key-concepts/idtoken-claims",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"idtoken-claims",title:"Inspect Claims in ID Token with Scalekit",description:"Understand how to inspect and validate claims in an ID Token issued by Scalekit. Learn about the structure of ID Tokens, including their payload, and the significance of various claims for user profile information.",keywords:["ID Token","JWT","Scalekit","User Authentication","Claims","JSON Web Token","Profile Information","Secure Authentication","Token Validation","OAuth"]},sidebar:"ssoSidebar",previous:{title:"Redirect URI",permalink:"/docs-staging/sso/guides/key-concepts/redirect-uri"},next:{title:"Normalized User Profile",permalink:"/docs-staging/sso/guides/key-concepts/user-profile"}},c={},d=[{value:"Sample Payload",id:"sample-payload",level:2},{value:"Full list of ID Token Claims",id:"full-list-of-id-token-claims",level:2},{value:"Usage Notes",id:"usage-notes",level:2}];function o(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components},{SimpleCode:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SimpleCode",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"inspect-claims-in-id-token",children:"Inspect Claims in ID Token"})}),"\n",(0,n.jsx)(s.p,{children:"An ID Token is a JSON Web Token (JWT) containing cryptographically signed claims about a user's profile information. This is issued by Scalekit after successful authentication. The ID Token is a Base64-encoded JSON object with three parts: header, payload, and signature."}),"\n",(0,n.jsx)(s.p,{children:"Here's an example of the payload. Note this is formatted for readability and the header and signature fields are skipped."}),"\n",(0,n.jsx)(s.h2,{id:"sample-payload",children:"Sample Payload"}),"\n",(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-js",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "iss"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"https://yoursaas.scalekit.com"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "azp"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"skc_12205605011849527"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "aud"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": ["}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"skc_12205605011849527"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"],"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "amr"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": ["}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"conn_17576372041941092"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"],"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "sub"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"conn_17576372041941092;google-oauth2|104630259163176101050"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "at_hash"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"HK6E_P6Dh8Y93mRNtsDB1Q"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "c_hash"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"HK6E_P6Dh8Y93mRNtsDB1Q"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "iat"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"1353601026"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "exp"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"1353604926"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "name"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"John Doe"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "given_name"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"John"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "family_name"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"Doe"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "picture"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"https://lh3.googleusercontent.com/a/ACg8ocKNE4TZj2kyLOj094kie_gDlUyU7JCZtbaiEma17URCEf=s96-c"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "locale"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"en"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "email"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"john.doe@acmecorp.com"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "email_verified"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"true"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})}),"\n",(0,n.jsx)(s.h2,{id:"full-list-of-id-token-claims",children:"Full list of ID Token Claims"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Claim"}),(0,n.jsx)(s.th,{children:"Presence"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"aud"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsx)(s.td,{children:"Intended audience (client ID)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"amr"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsx)(s.td,{children:"Authentication Method Reference values"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"exp"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsx)(s.td,{children:"Expiration time (Unix timestamp)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"iat"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsx)(s.td,{children:"Issuance time (Unix timestamp)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"iss"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsx)(s.td,{children:"Issuer identifier (Scalekit environment URL)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"oid"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsx)(s.td,{children:"Organization ID of the user"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"sub"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsx)(s.td,{children:"Subject identifier for the user"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"at_hash"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsx)(s.td,{children:"Access token hash"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"c_hash"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsx)(s.td,{children:"Authorization code hash"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"azp"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsxs)(s.td,{children:["Authorized presenter (usually same as ",(0,n.jsx)(s.code,{children:"aud"}),")"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"email"})}),(0,n.jsx)(s.td,{children:"Always"}),(0,n.jsx)(s.td,{children:"User's email address"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"email_verified"})}),(0,n.jsx)(s.td,{children:"Optional"}),(0,n.jsx)(s.td,{children:"Email verification status"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"name"})}),(0,n.jsx)(s.td,{children:"Optional"}),(0,n.jsx)(s.td,{children:"User's full name"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"family_name"})}),(0,n.jsx)(s.td,{children:"Optional"}),(0,n.jsx)(s.td,{children:"User's surname or last name"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"given_name"})}),(0,n.jsx)(s.td,{children:"Optional"}),(0,n.jsx)(s.td,{children:"User's given name or first name"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"locale"})}),(0,n.jsx)(s.td,{children:"Optional"}),(0,n.jsx)(s.td,{children:"User's locale (BCP 47 language tag)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(i,{className:"text--semibold",children:"picture"})}),(0,n.jsx)(s.td,{children:"Optional"}),(0,n.jsx)(s.td,{children:"URL of user's profile picture"})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The ID Token is received over a secure HTTPS channel using the client secret."}),"\n",(0,n.jsx)(s.li,{children:"Validation of the ID Token is handled automatically when using the Scalekit SDK."}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(i,{children:"sub"})," claim combines the ",(0,n.jsx)(i,{children:"connection_id"})," and the provider's unique identifier."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(i,{children:"iss"})," claim must match your Scalekit environment URL."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(i,{children:"amr"})," claim typically contains the ",(0,n.jsx)(i,{children:"connection_id"})," used for authentication."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This structure provides a neutral, factual reference for ID Token Claims in Scalekit, organized according to the data structure itself."}),"\n",(0,n.jsxs)(s.p,{children:["An ID Token is nothing but a cryptographically signed Base64-encoded JSON object containing a set of name/value pairs about the user's profile information. Essentially, it is a JWT token. Ideally, it is advised that you validate an ID token before you use it, but since you are communicating directly with Scalekit over an intermediary-free HTTPS channel and using your client secret to exchange the ",(0,n.jsx)(i,{children:"code"})," for the ID Token, you can be confident that the token you receive really comes from Scalekit and is valid."]}),"\n",(0,n.jsx)(s.p,{children:"If you are using our Scalekit SDK to exchange the code for the ID Token, the work of decoding the base64url-encoded values and parsing the JSON within, validating the JWT and accessing the claims within the ID token is automatically taken care of."})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>t});var n=i(6540);const l={},a=n.createContext(l);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);