"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[8164],{711:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var n=i(4848),r=i(8453),s=i(6365);const d={},l="Normalized User Profile",o={id:"best-practices/user-profile",title:"Normalized User Profile",description:"When a user logs in with SSO using their Identity Provider via Scalekit, we normalize the user profile information in standard fields so that you can easily access the user profile information regardless of the format, the Identity Provider chooses to send it in.",source:"@site/docs/best-practices/user-profile.md",sourceDirName:"best-practices",slug:"/best-practices/user-profile",permalink:"/best-practices/user-profile",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:17147428e5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ID Token Claims",permalink:"/best-practices/idtoken-claims"},next:{title:"Handling IdP Initiated SSO",permalink:"/best-practices/handling-idp-initiated"}},c={},a=[{value:"Example User Profile payload",id:"example-user-profile-payload",level:2},{value:"Full list of User Profile attributes",id:"full-list-of-user-profile-attributes",level:2},{value:"Identity Object attributes",id:"identity-object-attributes",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"normalized-user-profile",children:"Normalized User Profile"}),"\n",(0,n.jsx)(t.p,{children:"When a user logs in with SSO using their Identity Provider via Scalekit, we normalize the user profile information in standard fields so that you can easily access the user profile information regardless of the format, the Identity Provider chooses to send it in."}),"\n",(0,n.jsx)(t.h2,{id:"example-user-profile-payload",children:"Example User Profile payload"}),"\n",(0,n.jsx)(t.p,{children:"Below is the sample normalized user profile information in json."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"wordWrap=true",children:'{\n    "email": "john.doe@acmecorp.com",\n    "email_verified": true,\n    "family_name": "Doe",\n    "given_name": "John",\n    "locale": "en",\n    "name": "John Doe",\n    "picture": "https://lh3.googleusercontent.com/a/ACg8ocKNE4TZj2kyxZrxrwLOj094k7JCZtbaiEma17URCEf=s96-c",\n    "sub": "conn_17576372041941092;google-oauth2|104630259163176101050",\n    "identities": [\n        {\n            "connection_id": "conn_17576372041941092",\n            "organization_id": "org_17002852291444836",\n            "connection_type": "OIDC",\n            "provider_name": "AUTH0",\n            "social": false,\n            "provider_raw_attributes": {\n                "aud": "ztTgHijLLguDXJQab0oiPyIcDLXXrJX6",\n                "email": "john.doe@acmecorp.com",\n                "email_verified": true,\n                "exp": 1714580633,\n                "family_name": "Doe",\n                "given_name": "John",\n                "iat": 1714544633,\n                "iss": "https://dev-rmmfmus2g7vverbf.us.auth0.com/",\n                "locale": "en",\n                "name": "John Doe",\n                "nickname": "john.doe",\n                "nonce": "Lof9SpxEzs9dhUlJzgrrbQ==",\n                "picture": "https://lh3.googleusercontent.com/a/ACg8ocKNE4TZj2kyxZrxrwLOj094k7JCZtbaiEma17URCEf=s96-c",\n                "sid": "5yqRJIfjPh8c7lr1s2N-IbY6WR8VyaIZ",\n                "sub": "google-oauth2|104630259163176101050",\n                "updated_at": "2024-04-30T10:02:30.988Z"\n            }\n        }\n    ]\n}\n\n'})}),"\n",(0,n.jsx)(t.h2,{id:"full-list-of-user-profile-attributes",children:"Full list of User Profile attributes"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Profile Attribute"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"sub"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"An identifier for the user, as submitted by the Identity Provider that completed the Single Sign-on."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"email"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The user's email address."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"email_verified"})}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"True if the user's e-mail address has been verified as claimed by the Identity Provider; otherwise false."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"name"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Fully formatted user's name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"family_name"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The user's surname or last name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"given_name"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The user's given name or first name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"locale"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The user's locale, represented by a BCP 47 language tag. Example: 'en'"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"picture"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The user's profile picture in URL format"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"identities"})}),(0,n.jsxs)(t.td,{children:["Array of ",(0,n.jsx)(t.a,{href:"#identity-object-attributes",children:"Identity Objects"})]}),(0,n.jsx)(t.td,{children:"Array of all identity information received from the Identity Providers in the raw format"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"identity-object-attributes",children:"Identity Object attributes"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Identity Attribute"}),(0,n.jsx)(t.th,{children:"Data Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"organization_id"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Unique ID of the organization to which this user belongs to"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"connection_id"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"Unique ID of the connection for which this identity data is fetched from"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"connection_type"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"type of the connection: SAML or OIDC"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"provider_name"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"name of the connection provider. Example: Okta, Google, Auth0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"social"})}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Is the connection a social provider (like Google, Microsoft, Github etc) or an enterprise connection."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(s.Iu,{children:"provider_raw_attributes"})}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"key-value map of all the raw attributes received from the connection provider as-is"})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6365:(e,t,i)=>{i.d(t,{Ay:()=>d,Iu:()=>r,Wu:()=>s});i(6540);var n=i(4848);function r(e){let{children:t}=e;return(0,n.jsx)("code",{className:"simple_code",children:t})}function s(e){let{url:t,imageSrc:i,title:r,description:s}=e;return(0,n.jsx)("article",{className:"col col--4 margin-bottom--lg",children:(0,n.jsxs)("a",{className:"card padding--lg cardContainer",href:t,children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)("img",{alt:r,src:i}),(0,n.jsx)("p",{children:r})]}),(0,n.jsx)("p",{children:s})]})})}function d(e){let{children:t}=e;return(0,n.jsxs)("p",{style:{marginTop:"-15px",fontStyle:"italic"},children:[" ",t," "]})}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>l});var n=i(6540);const r={},s=n.createContext(r);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);