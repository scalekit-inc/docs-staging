"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[1629],{2598:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>t,frontMatter:()=>n,metadata:()=>o,toc:()=>h});var l=i(4848),r=i(8453);const n={},a="Best Practices for Webhooks",o={id:"scim/webhooks",title:"Best Practices for Webhooks",description:"Webhooks are HTTP endpoints that you register with a system, allowing that system to inform your",source:"@site/docs/scim/webhooks.mdx",sourceDirName:"scim",slug:"/scim/webhooks",permalink:"/docs-staging/scim/webhooks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"scimSidebar",previous:{title:"Automated Role Assignment",permalink:"/docs-staging/scim/automatically-assign-roles"},next:{title:"Admin Portal",permalink:"/docs-staging/scim/admin-portal"}},c={},h=[{value:"Subscribe to the Minimum Number of Events",id:"subscribe-to-the-minimum-number-of-events",level:2},{value:"Verify Webhook Signatures",id:"verify-webhook-signatures",level:2},{value:"Check the Event Type Before Processing",id:"check-the-event-type-before-processing",level:2},{value:"Redeliver Missed Events",id:"redeliver-missed-events",level:2},{value:"Avoid Webhook Timeouts",id:"avoid-webhook-timeouts",level:2}];function d(s){const e={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...(0,r.R)(),...s.components},{CodeWithHeader:i,TabItem:n,Tabs:a}=e;return i||k("CodeWithHeader",!0),n||k("TabItem",!0),a||k("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"best-practices-for-webhooks",children:"Best Practices for Webhooks"})}),"\n",(0,l.jsx)(e.p,{children:"Webhooks are HTTP endpoints that you register with a system, allowing that system to inform your\napplication about events by sending HTTP POST requests with event information in the body."}),"\n",(0,l.jsx)(e.p,{children:"Developers register their applications' webhook endpoints with Scalekit to listen to events from the\ndirectory providers of their enterprise customers. Here are some common best practices developers\nfollow to ensure their apps are secure and performant:"}),"\n",(0,l.jsx)(e.h2,{id:"subscribe-to-the-minimum-number-of-events",children:"Subscribe to the Minimum Number of Events"}),"\n",(0,l.jsx)(e.p,{children:"While you can listen to all events from Scalekit, it's best to subscribe only to the events your app\nneeds. This approach has several benefits:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Your app doesn't have to process every event"}),"\n",(0,l.jsx)(e.li,{children:"You can avoid overloading a single execution context by handling every event type"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"verify-webhook-signatures",children:"Verify Webhook Signatures"}),"\n",(0,l.jsxs)(e.p,{children:["Scalekit sends POST requests to your registered webhook endpoint. To ensure the request is coming\nfrom Scalekit and not a malicious actor, you should verify the request using the Signing Secret\nfound in the Scalekit Dashboard > Webhook > ",(0,l.jsx)(e.em,{children:"Any Endpoint"}),"."]}),"\n",(0,l.jsx)(e.p,{children:"Here's an example of how to verify webhooks using the Svix library:"}),"\n",(0,l.jsx)(i,{title:"Webhook Signature Verification",children:(0,l.jsxs)(a,{children:[(0,l.jsx)(n,{label:"Next.js",value:"Next",children:(0,l.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(e.code,{className:"language-javascript",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" async"}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" function"}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" POST"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:"req"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#B392F0"},children:" NextRequest"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Parse the JSON body of the request"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" event"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" await"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" req."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"json"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Get headers from the request"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" headers"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" req."}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"headers"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Secret from Scalekit Dasbhoard > Webhooks"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" secret"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" process."}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"env"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"SCALEKIT_WEBHOOK_SECRET"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  try"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"    // Verify the webhook payload using the secret, headers, and event data"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"    await"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekit."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"verifyWebhookPayload"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(secret, headers, event);"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  } "}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"catch"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" (error) {"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"    // Return a 400 response if the signature is invalid"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"    return"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" NextResponse."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"json"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"({ "}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"error"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#E1E4E8"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'Invalid signature'"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" }, { "}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"status"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#E1E4E8"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" 400"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" });"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})}),(0,l.jsx)(n,{label:"Python",value:"Python",children:(0,l.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(e.code,{className:"language-python",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" svix.webhooks "}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" Webhook"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"secret "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' "<WEBHOOK_SIGNING_SECRET>"'})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"# These were all sent from the server"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"headers "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "svix-id"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"msg_p5jXN8AQM9LWM0D4loKWxJek"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "svix-timestamp"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"1614265330"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "svix-signature"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE="'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"payload "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' \'{"event": "directory_payload"}\''})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"wh "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" Webhook(secret)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"# Throws on error, returns the verified content on success"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"payload "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" wh.verify(payload, headers)"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})}),(0,l.jsx)(n,{label:"Go",value:"Go",children:(0,l.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(e.code,{className:"language-go",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" ("})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"    svix"}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' "'}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#B392F0"},children:"github.com/svix/svix-webhooks/go"}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"'})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"secret"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"'})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// These were all sent from the server"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"headers"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#B392F0"},children:" http"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#B392F0"},children:"Header"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"{}"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"headers"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Set"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"svix-id"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"msg_p5jXN8AQM9LWM0D4loKWxJek"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"headers"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Set"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"svix-timestamp"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"1614265330"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"headers"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Set"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"svix-signature"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE="'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"payload"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" []"}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"byte"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'`{"test": 2432232314}`'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"wh"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"err"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" svix"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"NewWebhook"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"secret"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"err"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" wh"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Verify"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"payload"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"headers"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// returns nil on success, error otherwise"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})}),(0,l.jsx)(n,{label:"Java",value:"Java",children:(0,l.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(e.code,{className:"language-java",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:" com.svix.Webhook"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"String"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" secret "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// These were all sent from the server"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"HashMap"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#F97583"},children:"String"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"List"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#F97583"},children:"String"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:">> headerMap "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" new"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:" HashMap"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#F97583"},children:"String"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"List"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#F97583"},children:"String"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">>();"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"headerMap"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"put"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"svix-id"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"Arrays"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"asList"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"msg_p5jXN8AQM9LWM0D4loKWxJek"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"));"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"headerMap"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"put"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"svix-timestamp"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"Arrays"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"asList"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"1614265330"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"));"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"headerMap"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"put"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"svix-signature"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"Arrays"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"asList"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE="'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"));"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"HttpHeaders"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" headers "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" HttpHeaders"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"of"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(headerMap, "}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"BiPredicate"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"String, String"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"String"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" payload "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' "{'}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:'\\"'}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"test"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:'\\"'}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:': 2432232314}"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"Webhook"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" webhook "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" new"}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" Webhook"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(secret);"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"webhook"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"verify"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(payload, headers)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// throws WebhookVerificationError exception on failure."})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})})]})}),"\n",(0,l.jsx)(e.h2,{id:"check-the-event-type-before-processing",children:"Check the Event Type Before Processing"}),"\n",(0,l.jsx)(e.p,{children:"Make sure to check the event.type before consuming the data received by the webhook endpoint. This\nensures that your application relies on accurate information, even if more events are added in the\nfuture."}),"\n",(0,l.jsx)(i,{title:"",children:(0,l.jsx)(a,{children:(0,l.jsx)(n,{label:"Next.js",value:"Next",children:(0,l.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(e.code,{className:"language-javascript",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" async"}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" function"}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" POST"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:"req"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#B392F0"},children:" NextRequest"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" event"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" await"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" req."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"json"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  if"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" (event."}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"type"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" =="}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' "scalekit.dir.user.create"'}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"    const"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" { "}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"email"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"name"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" } "}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" event."}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"data"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"    await"}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" createUserAccount"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(email, name);"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  }"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  return"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" NextResponse."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"json"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"({ "}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"status"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#E1E4E8"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" 201"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" });"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})})})}),"\n",(0,l.jsx)(e.h2,{id:"redeliver-missed-events",children:"Redeliver Missed Events"}),"\n",(0,l.jsx)(e.p,{children:"If your app experiences downtime and misses events sent by Scalekit, you can redeliver those events\nfrom the Scalekit Dashboard:"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"Navigate to Webhooks"}),"\n",(0,l.jsx)(e.li,{children:'Click the three dots and select "Replay"'}),"\n",(0,l.jsx)(e.li,{children:'Choose "Resent all failed message since" to resend all messages your app failed to acknowledge\nduring its downtime'}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"avoid-webhook-timeouts",children:"Avoid Webhook Timeouts"}),"\n",(0,l.jsx)(e.p,{children:"To avoid unnecessary timeouts, respond to the webhook trigger with a response code of 201 and\nprocess the event asynchronously."}),"\n",(0,l.jsx)(e.p,{children:"By following these best practices, you can ensure that your application effectively handles events\nfrom Scalekit, maintaining optimal performance and security."})]})}function t(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(d,{...s})}):d(s)}function k(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(s,e,i)=>{i.d(e,{R:()=>a,x:()=>o});var l=i(6540);const r={},n=l.createContext(r);function a(s){const e=l.useContext(n);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:a(s.components),l.createElement(n.Provider,{value:e},s.children)}}}]);