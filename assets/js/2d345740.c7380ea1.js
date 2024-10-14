"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[1136],{6783:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(4848),r=i(8453);i(5312);const a={},l="Quickstart",o={id:"scim/quickstart",title:"Quickstart",description:"Automate User Provisioning and Deprovisioning",source:"@site/docs/scim/quickstart.mdx",sourceDirName:"scim",slug:"/scim/quickstart",permalink:"/docs-staging/scim/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"scimSidebar",next:{title:"Sample Apps",permalink:"/docs-staging/scim/explore-sample-apps"}},t={},c=[{value:"Realtime User Provisioning with Webhooks",id:"realtime-user-provisioning-with-webhooks",level:2},{value:"1. Create a Webhook Endpoint",id:"1-create-a-webhook-endpoint",level:3},{value:"2. Register Webhook Endpoint",id:"2-register-webhook-endpoint",level:3},{value:"3. Receive Event Payloads",id:"3-receive-event-payloads",level:3},{value:"On-Demand User Provisioning with REST APIs",id:"on-demand-user-provisioning-with-rest-apis",level:2}];function d(s){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...s.components},{CodeWithHeader:a,JsonViewer:l,SimpleCode:o,Subtitle:t,TabItem:c,Tabs:d}=e;return a||k("CodeWithHeader",!0),l||k("JsonViewer",!0),o||k("SimpleCode",!0),t||k("Subtitle",!0),c||k("TabItem",!0),d||k("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,n.jsx)(t,{children:"Automate User Provisioning and Deprovisioning"}),"\n",(0,n.jsx)(e.p,{children:"Enterprises need to automatically provision and de-provision employee access to\napplications to ensure security. Scalekit simplifies this process by providing a\nsingle interface to your app, abstracting the complexities of various directory\nproviders."}),"\n",(0,n.jsx)(e.p,{children:"With Scalekit, you can:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Use ",(0,n.jsx)(e.strong,{children:"Webhooks"})," to listen to events from your customer's directory provider"]}),"\n",(0,n.jsxs)(e.li,{children:["Consume ",(0,n.jsx)(e.strong,{children:"REST APIs"})," to list users, groups, and directories on-demand"]}),"\n"]}),"\n",(0,n.jsxs)("figure",{className:"width-75",children:[(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(3618).A+"",width:"5776",height:"1924"})}),(0,n.jsx)("figcaption",{})]}),"\n",(0,n.jsx)(e.p,{children:"Scalekit enables you to sync user accounts with the latest data in the directory\nprovider. This allows you to:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Create accounts for new hires during onboarding"}),"\n",(0,n.jsx)(e.li,{children:"Deactivate accounts when employees depart"}),"\n",(0,n.jsx)(e.li,{children:"Adjust access levels as employees change roles"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"realtime-user-provisioning-with-webhooks",children:"Realtime User Provisioning with Webhooks"}),"\n",(0,n.jsx)(e.h3,{id:"1-create-a-webhook-endpoint",children:"1. Create a Webhook Endpoint"}),"\n",(0,n.jsx)(e.p,{children:"To receive realtime events from directory providers, create a webhook endpoint\nand register it in the Scalekit dashboard."}),"\n",(0,n.jsx)(d,{groupId:"tech-stack",queryString:!0,children:(0,n.jsx)(c,{value:"nodejs",label:"Next.js",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-javascript",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" { "}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"NextRequest"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"NextResponse"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" } "}),(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'next/server'"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"/**"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" * Webhook Endpoint using Next.js App Router v14.2"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" * "}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"@"}),(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"endpoint"}),(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" /api/webhook/user-access"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" * app/api"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" * \u2514\u2500\u2500 webhook"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" *     \u2514\u2500\u2500 user-access"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" *         \u2514\u2500\u2500 route.ts"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" */"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" async"}),(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" function"}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" POST"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:"req"}),(0,n.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#B392F0"},children:" NextRequest"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Parse the JSON body of the request"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,n.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" event"}),(0,n.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" await"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" req."}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"json"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Destructure to get necessary data from the event"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" { "}),(0,n.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"email"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"name"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" } "}),(0,n.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" event."}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"data"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Call a function to perform business logic"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  await"}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" createUserAccount"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(email, name);"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Return a JSON response with a status code of 201"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  return"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" NextResponse."}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"json"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"({ "}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"message"}),(0,n.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#E1E4E8"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' "User account created"'}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" }, { "}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"status"}),(0,n.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#E1E4E8"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" 201"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" });"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})})}),"\n",(0,n.jsxs)(e.p,{children:["In this example, the endpoint URL is\n",(0,n.jsxs)(o,{children:["https://",(0,n.jsx)("span",{}),"www",(0,n.jsx)("span",{}),".hero-saas.",(0,n.jsx)("span",{}),"app/api/webhook/user-access"]})]}),"\n",(0,n.jsxs)(e.p,{children:["When the endpoint receives an HTTP POST request with event data, it extracts the\nname and email from the payload and calls\n",(0,n.jsx)(o,{children:"createUserAccount()"})," to perform the necessary business\nlogic \u2014 in this case, creating a user account."]}),"\n",(0,n.jsx)(e.h3,{id:"2-register-webhook-endpoint",children:"2. Register Webhook Endpoint"}),"\n",(0,n.jsxs)(e.p,{children:['First, navigate to the "Webhooks" tab in the Scalekit Dashboard. Click on the\n"+Add Endpoint" button and enter the endpoint URL along with a meaningful\ndescription. Finally, select the desired event types, such as\n',(0,n.jsx)(o,{children:"scalekit.dir.user.*"}),", to subscribe to the relevant\nevents."]}),"\n",(0,n.jsx)("figure",{className:"width-75",children:(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:i(6637).A+"",width:"2400",height:"2084"})})}),"\n",(0,n.jsx)(e.p,{children:'Click "Create." Once registered, the webhook endpoint will start receiving event\npayloads from the directory providers.'}),"\n",(0,n.jsxs)(e.p,{children:["Refer to the ",(0,n.jsx)(e.a,{href:"/apis#tag/Webhooks",children:"API reference"})," for the list of all available\nevent types and ",(0,n.jsx)(e.a,{href:"/docs-staging/scim/webhooks",children:"setting up webhooks"})," to explore testing webhooks with test\nendpoints."]}),"\n",(0,n.jsx)(e.h3,{id:"3-receive-event-payloads",children:"3. Receive Event Payloads"}),"\n",(0,n.jsx)(e.p,{children:"Scalekit sends event payloads to your app for consumption and standardizes the\npayload structure across different directory providers your customers may use.\nSince we subscribed to user events, let's log an example of a new hire gaining\naccess to your app when Scalekit sends a user creation event."}),"\n",(0,n.jsxs)(d,{groupId:"tech-stack",queryString:!0,children:[(0,n.jsx)(c,{value:"nextjs",label:"Next.js",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-javascript",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" event"}),(0,n.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" await"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" req."}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"json"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"console."}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(event);"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})}),(0,n.jsx)(c,{value:"nodejs",label:"Node.js",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-javascript",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" event"}),(0,n.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" await"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" req."}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"json"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"console."}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(event);"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})})]}),"\n",(0,n.jsx)(e.p,{children:"Here is the response you receive from Scalekit when a new user is assigned\naccess to your app:"}),"\n",(0,n.jsx)(a,{title:"User Creation Event Payload",children:(0,n.jsx)(l,{src:{data:{active:!0,division:"Engineering",dp_id:"00ujrox2diV2lNQQi5d7",email:"santhosh@acmecorp.com",family_name:"Jegan",given_name:"Santhosh",groups:null,id:"diruser_38065705475637839",locale:"en-US",name:"Santhosh Jegan",organization_id:"org_38065303543874127",preferred_username:"santhosh@acmecorp.com",raw_attributes:{active:!0,displayName:"Santhosh Jegan",emails:[{primary:!0,type:"work",value:"santhosh@acmecorp.com"}],externalId:"00ujrox2diV2lNQQi5d7",locale:"en-US",name:{familyName:"Jegan",givenName:"Santhosh"},password:"Fg1hy7bY","urn:ietf:params:scim:schemas:extension:enterprise:2.0:User":{division:"Engineering"},userName:"santhosh@acmecorp.com"}},environment_id:"env_33245698191261706",id:"evt_38073034552115294",object:"DirectoryUser",occurred_at:"2024-09-19T15:41:37.002602567Z",organization_id:"org_38065303543874127",spec_version:"1",type:"scalekit.dir.user.create"}})}),"\n",(0,n.jsx)(e.p,{children:"You have successfully created a webhook endpoint in your app, registered it with\nScalekit, and received event payloads to support your business use cases. Now,\nlet's explore another approach where we use APIs instead of Webhooks!"}),"\n",(0,n.jsx)(e.h2,{id:"on-demand-user-provisioning-with-rest-apis",children:"On-Demand User Provisioning with REST APIs"}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.em,{children:"Coming soon"})})]})}function h(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(d,{...s})}):d(s)}function k(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},5312:(s,e,i)=>{i.d(e,{Ay:()=>o,RM:()=>a});var n=i(4848),r=i(8453);const a=[];function l(s){const e={code:"code",pre:"pre",span:"span",...(0,r.R)(),...s.components},{CodeWithHeader:i,TabItem:a,Tabs:l}=e;return i||t("CodeWithHeader",!0),a||t("TabItem",!0),l||t("Tabs",!0),(0,n.jsx)(i,{title:"Setup SDK",children:(0,n.jsxs)(l,{groupId:"tech-stack",queryString:!0,children:[(0,n.jsx)(a,{value:"nodejs",label:"Node.js",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-bash",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"npm"}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" install"}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" @scalekit-sdk/node"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})}),(0,n.jsx)(a,{value:"py",label:"Python",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-shellscript",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"pip"}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" install"}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" scalekit-sdk-python"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})}),(0,n.jsx)(a,{value:"golang",label:"Go",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-sh",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"go"}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" get"}),(0,n.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" -u"}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" github.com/scalekit-inc/scalekit-sdk-go"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})}),(0,n.jsxs)(a,{value:"java",label:"Java",children:[(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-groovy",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"/* Gradle users - add the following to your dependencies in build file */"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"implementation "}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"com.scalekit:scalekit-sdk-java:1.0.1"'})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})}),(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-xml",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"\x3c!-- Maven users - add the following to your `pom.xml` --\x3e"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"dependency"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"groupId"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">com.scalekit</"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"groupId"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"artifactId"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">scalekit-sdk-java</"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"artifactId"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    <"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"version"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">1.0.1</"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"version"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"</"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"dependency"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})})}function o(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(l,{...s})}):l(s)}function t(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},3618:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/1-quickstart-dir-sync-a6a87bf394c3d37ce324c75d85d230e0.png"},6637:(s,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/2-quickstart-dir-sync-8a2dc8e66021915c544b56a6d9b98ee0.png"},8453:(s,e,i)=>{i.d(e,{R:()=>l,x:()=>o});var n=i(6540);const r={},a=n.createContext(r);function l(s){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:l(s.components),n.createElement(a.Provider,{value:e},s.children)}}}]);