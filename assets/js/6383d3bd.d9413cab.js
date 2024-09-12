"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[2164],{2415:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var n=i(4848),a=i(8453),r=i(5312);const l={title:"Admin Portal for SSO Integration: Empowering IT Admins with Scalekit",description:"Discover how Scalekit's Admin Portal enables IT admins to configure SSO independently, reducing engineering and support team overhead. Explore API and no-code integration options for effortless SSO setup.",keywords:["SSO","Admin Portal","Scalekit","API integration","no-code","IT admin","self-service","single sign-on","SDK","secure connection","SSO configuration","enterprise authentication","identity management","B2B SaaS","user provisioning"]},o="Admin Portal",t={id:"sso/quickstart-admin-portal",title:"Admin Portal for SSO Integration: Empowering IT Admins with Scalekit",description:"Discover how Scalekit's Admin Portal enables IT admins to configure SSO independently, reducing engineering and support team overhead. Explore API and no-code integration options for effortless SSO setup.",source:"@site/docs/sso/quickstart-admin-portal.mdx",sourceDirName:"sso",slug:"/sso/quickstart-admin-portal",permalink:"/docs-staging/sso/quickstart-admin-portal",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Admin Portal for SSO Integration: Empowering IT Admins with Scalekit",description:"Discover how Scalekit's Admin Portal enables IT admins to configure SSO independently, reducing engineering and support team overhead. Explore API and no-code integration options for effortless SSO setup.",keywords:["SSO","Admin Portal","Scalekit","API integration","no-code","IT admin","self-service","single sign-on","SDK","secure connection","SSO configuration","enterprise authentication","identity management","B2B SaaS","user provisioning"]},sidebar:"ssoSidebar",previous:{title:"SSO - Quickstart",permalink:"/docs-staging/sso/quickstart"},next:{title:"Test SSO",permalink:"/docs-staging/sso/test-sso"}},c={},d=[{value:"1. Setup Admin Portal via API:",id:"1-setup-admin-portal-via-api",level:2},{value:"Configure SDK",id:"configure-sdk",level:3},...r.RM,{value:"2. No-Code Admin Portal",id:"2-no-code-admin-portal",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Subtitle:l,TabItem:o,Tabs:t}=s;return l||p("Subtitle",!0),o||p("TabItem",!0),t||p("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"admin-portal",children:"Admin Portal"})}),"\n",(0,n.jsx)(l,{children:(0,n.jsx)(s.p,{children:"Empower your customers to configure and manage SSO connections by\nthemselves"})}),"\n",(0,n.jsx)(s.p,{children:"The Admin Portal is a self-service interface designed to empower your customers' IT admins to configure SSO independently, thereby reducing the overhead on your engineering and support teams. Fully hosted and managed by Scalekit, the admin portal simplifies the SSO setup process with comprehensive IdP-specific documentation, ensuring a fast and secure integration with just a few lines of code."}),"\n",(0,n.jsx)(s.p,{children:"Depending on your preferences, you can choose one of the two ways to integrate the Admin Portal into your application:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Setup via API (or Integrate via API)"}),"\n",(0,n.jsx)(s.li,{children:"No-code Portal"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"1-setup-admin-portal-via-api",children:"1. Setup Admin Portal via API:"}),"\n",(0,n.jsx)("figure",{className:"width-50",children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Integrate via\nAPI",src:i(6648).A+"",width:"2816",height:"2732"})})}),"\n",(0,n.jsx)(s.h3,{id:"configure-sdk",children:"Configure SDK"}),"\n",(0,n.jsx)(s.p,{children:"Begin by installing the Scalekit SDK, which provides necessary tools for creating a secure and efficient connection to the Admin Portal."}),"\n",(0,n.jsx)(r.Ay,{}),"\n",(0,n.jsx)(s.p,{children:"Use the Generate Portal Link API to generate an Admin Portal link that is uniquely keyed to an organization. You can either embed this as an iframe in your application or redirect the user to this link for the admin to self serve configure SSO for their organization."}),"\n",(0,n.jsxs)(t,{groupId:"tech-stack",children:[(0,n.jsx)(o,{value:"nodejs",label:"Node.js",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-javascript",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" link"}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(s.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" await"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" sc."}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"organization"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"generatePortalLink"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'org_1233222'"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// link.location is the Admin Portal URL"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(o,{value:"py",label:"Python",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-python",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"# generate admin portal link by sending organization id as a parameter"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"link "}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" sc.organization.generate_portal_link("}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'org_1233222'"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"# link['location'] is the Admin Portal URL"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(o,{value:"golang",label:"Go",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-go",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// generate admin portal link by sending organization id as a parameter"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"link"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"err"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" sc"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"Organization"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"GeneratePortalLink"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  ctx"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "<org_1233222>"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// link.Location is the Admin Portal URL"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(o,{value:"java",label:"Java",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-java",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// generate admin portal link by sending organization id as a parameter"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"Link"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" response "}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" client"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  ."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"organizations"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  ."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"generatePortalLink"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"org_12345"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// response.getLocation() has the Admin Portal URL"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This link is designed for one-time use, expiring after 5 minutes or upon its initial access."}),"\n",(0,n.jsx)(s.li,{children:"Once activated, the IT admin can configure SSO for a longer period of time. The session will remain active until the setup is complete."}),"\n",(0,n.jsx)(s.li,{children:"Depending on your UX strategy, you may choose to redirect the IT admin to this link or embed it within your application as an iframe, allowing configuration without navigating away from your product."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"2-no-code-admin-portal",children:"2. No-Code Admin Portal"}),"\n",(0,n.jsxs)(s.p,{children:["Log in to your ",(0,n.jsx)(s.a,{href:"https://app.scalekit.com/",children:"Scalekit Dashboard"})," and navigate to the desired organization's overview section."]}),"\n",(0,n.jsx)("figure",{className:"width-50",children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Integrate via Shareable\nLink",src:i(6784).A+"",width:"2740",height:"2732"})})}),"\n",(0,n.jsx)(s.p,{children:"Click 'Generate Link' to create a new, shareable Admin Portal link."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"This link is valid for 7 days but can be revoked at any time from the dashboard for security purposes."}),"\n",(0,n.jsx)(s.li,{children:"The link can be distributed through communication channels such as email, Slack, etc"}),"\n",(0,n.jsx)(s.li,{children:"Exercise caution, as anyone with this link can view and update their organization's SSO settings"}),"\n"]})]})}function k(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},5312:(e,s,i)=>{i.d(s,{Ay:()=>o,RM:()=>r});var n=i(4848),a=i(8453);const r=[];function l(e){const s={code:"code",pre:"pre",span:"span",...(0,a.R)(),...e.components},{CodeWithHeader:i,TabItem:r,Tabs:l}=s;return i||t("CodeWithHeader",!0),r||t("TabItem",!0),l||t("Tabs",!0),(0,n.jsx)(i,{title:"Setup SDK",children:(0,n.jsxs)(l,{groupId:"tech-stack",queryString:!0,children:[(0,n.jsx)(r,{value:"nodejs",label:"Node.js",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-bash",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"npm"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" install"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" @scalekit-sdk/node"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(r,{value:"py",label:"Python",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-shellscript",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"pip"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" install"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" scalekit-sdk-python"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(r,{value:"golang",label:"Go",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-sh",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"go"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" get"}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" -u"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" github.com/scalekit-inc/scalekit-sdk-go"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsxs)(r,{value:"java",label:"Java",children:[(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-groovy",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"/* Gradle users - add the following to your dependencies in build file */"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"implementation "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"com.scalekit:scalekit-sdk-java:1.0.1"'})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})}),(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-xml",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"\x3c!-- Maven users - add the following to your `pom.xml` --\x3e"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"dependency"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"groupId"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">com.scalekit</"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"groupId"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"artifactId"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">scalekit-sdk-java</"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"artifactId"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"version"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">1.0.1</"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"version"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#85E89D"},children:"dependency"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]})})}function o(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}function t(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},6648:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/1-integrate-w-api-6fe5527fbc74c7f749ae4bd627a8178b.png"},6784:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/2-sharable-link-80179ae5bb4cc731ed5045e8daebe238.png"},8453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>o});var n=i(6540);const a={},r=n.createContext(a);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);