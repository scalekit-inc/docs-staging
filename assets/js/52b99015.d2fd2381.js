"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[4816],{7507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=n(4848),s=n(8453);const o={displayed_sidebar:"dirSyncSidebar"},r="Setup Directory Events",d={id:"dir-sync/simulate-directory-events",title:"Setup Directory Events",description:"Experimenting with Event Handling using the Webhook Endpoints",source:"@site/docs/dir-sync/simulate-directory-events.mdx",sourceDirName:"dir-sync",slug:"/dir-sync/simulate-directory-events",permalink:"/docs-staging/dir-sync/simulate-directory-events",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"dirSyncSidebar"},sidebar:"dirSyncSidebar",previous:{title:"Sample Apps",permalink:"/docs-staging/dir-sync/explore-sample-apps"},next:{title:"Launch Checklist",permalink:"/docs-staging/dir-sync/checklist"}},a={},c=[{value:"Setting Up Your Webhook",id:"setting-up-your-webhook",level:2},{value:"Testing Your Webhook",id:"testing-your-webhook",level:2},{value:"Next Steps",id:"next-steps",level:2}];function l(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{SimpleCode:o,Subtitle:r}=t;return o||h("SimpleCode",!0),r||h("Subtitle",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"setup-directory-events",children:"Setup Directory Events"})}),"\n",(0,i.jsx)(r,{children:"Experimenting with Event Handling using the Webhook Endpoints"}),"\n",(0,i.jsx)(t.p,{children:"To listen to events from directory providers, register a Webhook endpoint in the Scalekit console. Scalekit sends\npayloads to the registered endpoint as events occur. B2B applications can use the information in these payloads to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Create"}),"\xa0a user account in your app"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Remove"}),"\xa0or\xa0",(0,i.jsx)(t.strong,{children:"deactivate"}),"\xa0a user account in your app"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Assign"}),"\xa0or\xa0",(0,i.jsx)(t.strong,{children:"update"}),"\xa0a user role within your app"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-your-webhook",children:"Setting Up Your Webhook"}),"\n",(0,i.jsxs)(t.p,{children:["Open the Scalekit console and navigate to\xa0",(0,i.jsx)(t.strong,{children:"Webhooks"}),"\xa0on the left sidebar."]}),"\n",(0,i.jsx)("figure",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Webhook Setup",src:n(299).A+"",width:"1790",height:"757"}),"\n",(0,i.jsx)("figcaption",{children:"Scalekit's Interface for Building and Monitoring Endpoint Connections"})]})}),"\n",(0,i.jsxs)(t.p,{children:["Select ",(0,i.jsx)(t.strong,{children:"Add Endpoint"})," to proceed to the endpoint setup screen."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Endpoint URL"}),": This is the URL you create in your app to listen to events from Scalekit."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Event Subscription"}),": Subscribe to the events you want to receive from the event catalog. For directory events,\nselect all options under the directory category."]}),"\n",(0,i.jsxs)(t.li,{children:["Click\xa0",(0,i.jsx)(t.strong,{children:"Create"}),"\xa0to set up the Webhook."]}),"\n"]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Webhook Setup",src:n(8320).A+"",width:"1602",height:"1216"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:"Set Up Your Endpoint to Listen User and Group Events from your Customer\u2019s Directory Providers."})})]}),"\n",(0,i.jsxs)(t.p,{children:["The Webhook is now successfully set up. Refer to the\xa0",(0,i.jsx)(t.strong,{children:"Events Documentation"}),"\xa0to understand the properties your app\nreceives in the event payload for each event."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Play with Test Webhook Endpoints"})}),"\n",(0,i.jsxs)(t.p,{children:["If you haven't started building a Webhook endpoint yet and are still exploring, Scalekit offers a convenient way to set\nup an endpoint for testing. Simply click on\xa0",(0,i.jsx)(t.strong,{children:'"With Svix Play,"'}),"\xa0and the input field will automatically populate with a\ntest endpoint. This endpoint receives the same information as any endpoint in your B2B app, allowing you to proceed with\ntesting seamlessly."]}),"\n",(0,i.jsx)("figure",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Setting Up a Sandbox Endpoint",src:n(3145).A+"",width:"1790",height:"740"}),"\n",(0,i.jsx)("figcaption",{children:"Setting Up a Sandbox Endpoint"})]})}),"\n",(0,i.jsx)(t.h2,{id:"testing-your-webhook",children:"Testing Your Webhook"}),"\n",(0,i.jsxs)(t.p,{children:["To test how your app handles events, you can manually trigger an example payload from Scalekit. Access the list of\nregistered endpoints by navigating to\xa0",(0,i.jsx)(t.strong,{children:"Webhooks > Endpoints Tab"}),". Select the event you want to trigger and send an\nexample payload."]}),"\n",(0,i.jsx)("figure",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"List of registered Webhook endpoints in Scalekit ",src:n(3318).A+"",width:"1790",height:"709"}),"\n",(0,i.jsx)("figcaption",{children:"List of registered Webhook endpoints in Scalekit "})]})}),"\n",(0,i.jsxs)(t.p,{children:["Next, go to the\xa0",(0,i.jsx)(t.strong,{children:"Testing Tab"}),"\xa0to explore options for testing your integration. Choose an event from the available\nlist. For instance, select\xa0",(0,i.jsx)(o,{children:"scalekit.dir.user.create"}),"\xa0to view the JSON payload that will be sent\nas a test."]}),"\n",(0,i.jsx)("figure",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Simulate events using the dropdown menu to trigger example\npayloads",src:n(3295).A+"",width:"1790",height:"1107"}),"\n",(0,i.jsx)("figcaption",{children:"Simulate events using the dropdown menu to trigger example payloads"})]})}),"\n",(0,i.jsxs)(t.p,{children:["Click\xa0",(0,i.jsx)(t.strong,{children:'"Send Example"'}),"\xa0to trigger the registered endpoint with the payload. Verify the payload to ensure the\nsimulation is successful, and then proceed to build the features based on this test."]}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"With your B2B app now set up to listen to directory events, consider how to utilize the payloads to fulfill the business\nlogic of your application(s) effectively."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},299:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/setup-dir-events-1-edeec0763cc5eb511f24927868aa7db0.png"},8320:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/setup-dir-events-2-59ab2e0b3f5e56b8c66da310e476635d.png"},3145:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/setup-dir-events-3-6ec6a38370dcd07057f6a5aa0fb82bf3.png"},3318:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/setup-dir-events-4-117fb35436476d562733fd5780b69314.png"},3295:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/setup-dir-events-5-aa51c53a420a249c8a15cc053434011f.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);