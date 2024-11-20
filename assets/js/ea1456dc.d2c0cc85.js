"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[6104],{8824:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>t,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=i(4848),a=i(8453),r=i(5312);const l={title:"Admin Portal to configure SCIM Provisioning: Empowering IT Admins with Scalekit",description:"Discover how Scalekit's Admin Portal enables IT admins to configure SCIM Provisioning independently, reducing engineering and support team overhead. Explore API and no-code integration options for effortless SCIM provisioning.",keywords:["SCIM Provisioning","Admin Portal","Scalekit","API integration","no-code","IT admin","self-service","single sign-on","SDK","secure connection","SSO configuration","enterprise authentication","identity management","B2B SaaS","user provisioning"]},o="Admin Portal",d={id:"scim/admin-portal",title:"Admin Portal to configure SCIM Provisioning: Empowering IT Admins with Scalekit",description:"Discover how Scalekit's Admin Portal enables IT admins to configure SCIM Provisioning independently, reducing engineering and support team overhead. Explore API and no-code integration options for effortless SCIM provisioning.",source:"@site/docs/scim/admin-portal.mdx",sourceDirName:"scim",slug:"/scim/admin-portal",permalink:"/docs-staging/scim/admin-portal",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Admin Portal to configure SCIM Provisioning: Empowering IT Admins with Scalekit",description:"Discover how Scalekit's Admin Portal enables IT admins to configure SCIM Provisioning independently, reducing engineering and support team overhead. Explore API and no-code integration options for effortless SCIM provisioning.",keywords:["SCIM Provisioning","Admin Portal","Scalekit","API integration","no-code","IT admin","self-service","single sign-on","SDK","secure connection","SSO configuration","enterprise authentication","identity management","B2B SaaS","user provisioning"]},sidebar:"scimSidebar",previous:{title:"Webhook Best Practices",permalink:"/docs-staging/scim/webhooks"},next:{title:"Customize Admin Portal",permalink:"/docs-staging/scim/domain-and-theme-customization"}},t={},c=[{value:"1. No-Code Admin Portal",id:"1-no-code-admin-portal",level:2},{value:"Generate a Shareable Link",id:"generate-a-shareable-link",level:3},{value:"2. Embedded Admin Portal",id:"2-embedded-admin-portal",level:2},...r.RM];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{CodeWithHeader:l,SimpleCode:o,Subtitle:d,TabItem:t,Tabs:c}=s;return l||p("CodeWithHeader",!0),o||p("SimpleCode",!0),d||p("Subtitle",!0),t||p("TabItem",!0),c||p("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"admin-portal",children:"Admin Portal"})}),"\n",(0,n.jsx)(d,{children:(0,n.jsx)(s.p,{children:"Empower your customers to configure settings for SCIM Provisioning by themselves"})}),"\n",(0,n.jsx)(s.p,{children:"The Admin Portal allows enterprise organizations to easily configure connections between your app\nand their identity or directory providers. By providing a self-serve portal, you can reduce\nback-and-forth communication between your team and your customers' teams. Scalekit fully hosts and\nmanages the Admin Portal, offering two integration options:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"No-Code Admin Portal: Generate a shareable link to the portal and distribute it to your customers\nthrough regular communication channels."}),"\n",(0,n.jsx)(s.li,{children:"Embedded Admin Portal: Seamlessly integrate the Admin Portal into your application using an\niframe."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"1-no-code-admin-portal",children:"1. No-Code Admin Portal"}),"\n",(0,n.jsx)(s.h3,{id:"generate-a-shareable-link",children:"Generate a Shareable Link"}),"\n",(0,n.jsxs)(s.p,{children:["Log in to your ",(0,n.jsx)(s.a,{href:"https://app.scalekit.com/",children:"Scalekit Dashboard"}),"."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:'In the Scalekit Dashboard, navigate to the "Organizations" tab.'}),"\n",(0,n.jsx)(s.li,{children:"Select the organization you want to provide with access to the portal."}),"\n",(0,n.jsx)(s.li,{children:'Click "Generate Link" to create a new, shareable Admin Portal link.'}),"\n"]}),"\n",(0,n.jsx)("figure",{children:(0,n.jsx)(s.img,{alt:"Integrate via Shareable Link",src:i(901).A+"",width:"2768",height:"1720"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Important Considerations"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This link is valid for 7 days but can be revoked at any time from the dashboard for security\npurposes."}),"\n",(0,n.jsx)(s.li,{children:"The link can be distributed through communication channels such as email, Slack, etc"}),"\n",(0,n.jsx)(s.li,{children:"Exercise caution, as anyone with this link can view and update their organization's SCIM\nprovisioning settings"}),"\n"]}),"\n",(0,n.jsx)("figure",{children:(0,n.jsx)(s.img,{alt:"Integrate via Shareable Link",src:i(4316).A+"",width:"1812",height:"1176"})}),"\n",(0,n.jsx)(s.h2,{id:"2-embedded-admin-portal",children:"2. Embedded Admin Portal"}),"\n",(0,n.jsx)(s.p,{children:"Embedding the Admin Portal within your app provides advantages such as Easy discoverability,\nConvenient access for making changes on the go, and Reduced navigation barriers for IT admins."}),"\n",(0,n.jsx)("figure",{children:(0,n.jsx)(s.img,{alt:"Integrate via API",src:i(3171).A+"",width:"1440",height:"881"})}),"\n",(0,n.jsxs)(s.p,{children:["Install the Scalekit SDK, which includes the ",(0,n.jsx)(o,{children:"generatePortalLink()"})," method:"]}),"\n",(0,n.jsx)(r.Ay,{}),"\n",(0,n.jsx)(s.p,{children:"Use the Generate Portal Link API to create a unique and embeddable Admin Portal link for an\norganization:"}),"\n",(0,n.jsx)(l,{title:"Generate Portal Link",children:(0,n.jsxs)(c,{groupId:"tech-stack",queryString:!0,children:[(0,n.jsx)(t,{value:"nodejs",label:"Node.js",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-javascript",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"async"}),(0,n.jsx)(s.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" function"}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" generatePortalLink"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:"orgID"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" link"}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(s.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" await"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekit."}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"organization"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"generatePortalLink"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(orgID);"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  console."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"log"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"JSON"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"stringify"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(link, "}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"2"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"));"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(t,{value:"python",label:"Python",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-python",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"portal_link "}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekit_client"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"                .organization"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"                .generate_portal_link("}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'<organization_id>'"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(t,{value:"go",label:"Go",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsx)(s.code,{className:"language-go",children:(0,n.jsx)(s.span,{className:"line"})})})}),(0,n.jsx)(t,{value:"java",label:"Java",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsx)(s.code,{className:"language-java",children:(0,n.jsx)(s.span,{className:"line"})})})})]})}),"\n",(0,n.jsx)(s.p,{children:"The API will return a JSON object containing the"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(o,{children:"location"})," property, which is the URL to the Admin Portal."]}),"\n",(0,n.jsx)(l,{title:"Generate Portal Link (Response Object)",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-json",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#79B8FF"},children:'  "id"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"8930509d-68cf-4e2c-8c6d-94d2b5e2db43"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#79B8FF"},children:'  "location"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"https://random-subdomain.scalekit.dev/magicLink/8930509d-68cf-4e2c-8c6d-94d2b5e2db43"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#79B8FF"},children:'  "expireTime"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"2024-10-03T13:35:50.563013Z"'})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),"\n",(0,n.jsxs)(s.p,{children:["Access the ",(0,n.jsx)(o,{children:"location"})," property and set it as the ",(0,n.jsx)(o,{children:"src"}),"\nattribute of an iframe in your web pages."]}),"\n",(0,n.jsx)(l,{title:"Embed Admin Portal in an Iframe",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-html",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"body"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"h1"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">Admin Portal (Embed)</"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"h1"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"iframe"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#B392F0"},children:"    src"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"https://random-subdomain.scalekit.dev/magicLink/8930509d-68cf-4e2c-8c6d-94d2b5e2db43"'})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#B392F0"},children:"    width"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"100%"'})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#B392F0"},children:"    height"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"600px"'})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#B392F0"},children:"    frameborder"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"0"'})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  >"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  </"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"iframe"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"body"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Important Considerations"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The generated link is designed for one-time use and expires after 5 minutes or upon its initial\naccess."}),"\n",(0,n.jsx)(s.li,{children:"Ensure your domain is listed as one of the Redirect URIs in the Scalekit Dashboard > API Config."}),"\n",(0,n.jsx)(s.li,{children:"Once activated, the IT admin can configure SSO for an extended period. The session remains active\nuntil the setup is complete."}),"\n",(0,n.jsx)(s.li,{children:"For local development, use tools like Svix or Ngrok to expose localhost URLs to the internet.\nRegister the generated HTTPS URLs in the Scalekit Dashboard > API Config, and access the webpage\nusing the Svix or Ngrok URL."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The Admin Portal can be customized to match your brand's logo and colors. Refer to the\n",(0,n.jsx)(s.a,{href:"/scim/domain-and-theme-customization",children:"Customize Admin Portal Guide"})," for more information."]})]})}function k(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},5312:(e,s,i)=>{i.d(s,{Ay:()=>o,RM:()=>r});var n=i(4848),a=i(8453);const r=[];function l(e){const s={code:"code",pre:"pre",span:"span",...(0,a.R)(),...e.components},{CodeWithHeader:i,TabItem:r,Tabs:l}=s;return i||d("CodeWithHeader",!0),r||d("TabItem",!0),l||d("Tabs",!0),(0,n.jsx)(i,{title:"Setup SDK",children:(0,n.jsxs)(l,{groupId:"tech-stack",queryString:!0,children:[(0,n.jsx)(r,{value:"nodejs",label:"Node.js",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-bash",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"npm"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" install"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" @scalekit-sdk/node"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(r,{value:"py",label:"Python",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-shellscript",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"pip"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" install"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" scalekit-sdk-python"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(r,{value:"golang",label:"Go",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-sh",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"go"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" get"}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" -u"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" github.com/scalekit-inc/scalekit-sdk-go"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsxs)(r,{value:"java",label:"Java",children:[(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-groovy",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"/* Gradle users - add the following to your dependencies in build file */"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"implementation "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"com.scalekit:scalekit-sdk-java:1.0.1"'})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})}),(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-xml",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"\x3c!-- Maven users - add the following to your `pom.xml` --\x3e"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"dependency"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"groupId"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">com.scalekit</"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"groupId"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"artifactId"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">scalekit-sdk-java</"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"artifactId"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"version"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">1.0.1</"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"version"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"dependency"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]})})}function o(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function d(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},901:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/1-admin-portal-6927926130a1198ed65003b1178f0717.png"},4316:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/2-admin-portal-51d119abf7580936f1787f2488222bf9.png"},3171:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/3-admin-portal-f0d724cad04a67a8960f9fb6405134b5.png"},8453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>o});var n=i(6540);const a={},r=n.createContext(a);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);