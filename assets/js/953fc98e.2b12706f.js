"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[5359],{8091:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>t});var r=i(4848),n=i(8453);const l={displayed_sidebar:"scimSidebar"},a="Automatic Role Assignment",o={id:"scim/automatically-assign-roles",title:"Automatic Role Assignment",description:"Assign App Roles from Directory Group Memberships",source:"@site/docs/scim/automatically-assign-roles.mdx",sourceDirName:"scim",slug:"/scim/automatically-assign-roles",permalink:"/docs-staging/scim/automatically-assign-roles",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"scimSidebar"},sidebar:"scimSidebar",previous:{title:"Launch Checklist",permalink:"/docs-staging/scim/checklist"},next:{title:"Webhook Best Practices",permalink:"/docs-staging/scim/webhooks"}},c={},t=[{value:"Introduction",id:"introduction",level:2},{value:"Enabling Group-Based Role Assignment",id:"enabling-group-based-role-assignment",level:2},{value:"Listening to Events",id:"listening-to-events",level:2}];function d(s){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...(0,n.R)(),...s.components},{CodeWithHeader:l,SimpleCode:a,Subtitle:o,TabItem:c,Tabs:t}=e;return l||k("CodeWithHeader",!0),a||k("SimpleCode",!0),o||k("Subtitle",!0),c||k("TabItem",!0),t||k("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"automatic-role-assignment",children:"Automatic Role Assignment"})}),"\n",(0,r.jsx)(o,{children:"Assign App Roles from Directory Group Memberships"}),"\n",(0,r.jsx)(e.p,{children:"Manually assigning roles to users in your application, such as viewer, member, editor, or admin, can\nbe a time-consuming task for administrators, particularly in large enterprises where access needs\nfrequently change. Scalekit streamlines this process by allowing administrators to establish\nworkflows that automatically update your app about the roles to assign to users."}),"\n",(0,r.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(e.p,{children:"A common strategy for managing varying access levels is to group users based on their specific\naccess requirements. For example, if you are developing an application similar to GitHub with roles\nlike maintainer, writer, and viewer, customer administrators can create user groups for each role\nwithin their directory provider."}),"\n",(0,r.jsx)("figure",{children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.img,{alt:"SCIM User Provisioning Flow Directory to Scalekit to Your B2B\nApp",src:i(7313).A+"",width:"5164",height:"1860"}),"\n",(0,r.jsx)("figcaption",{children:"SCIM User Provisioning Flow Directory to Scalekit to Your App"})]})}),"\n",(0,r.jsx)(e.p,{children:"Scalekit notifies your application when administrators create groups or add users to them, enabling\nyou to take necessary actions such as creating or modifying user roles as directed by the\norganization\u2019s administrator. Regardless of the directory provider your customers use, Scalekit\ndelivers normalized information, eliminating the need for data transformation across different\nproviders."}),"\n",(0,r.jsx)(e.h2,{id:"enabling-group-based-role-assignment",children:"Enabling Group-Based Role Assignment"}),"\n",(0,r.jsx)(e.p,{children:"To enable administrators to map groups to roles in your app:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Go to the Scalekit Dashboard"}),"\n",(0,r.jsx)(e.li,{children:'Select "SCIM Provisioning"'}),"\n",(0,r.jsx)(e.li,{children:'Switch to the "Role Assignment" tab'}),"\n",(0,r.jsx)(e.li,{children:"Create your app's roles"}),"\n"]}),"\n",(0,r.jsx)("figure",{className:"width-75",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.img,{alt:"How Scalekit works",src:i(408).A+"",width:"2664",height:"1102"}),"\n",(0,r.jsx)("figcaption",{children:"Registering roles in Scalekit dashboard."})]})}),"\n",(0,r.jsx)(e.p,{children:'The first role you create in your app becomes the default role automatically. This means users who\ndon\'t belong to any specific group will be assigned this role upon account creation. To change the\ndefault role, navigate to the role settings, click the "..." menu next to the desired role, select\n"Edit," and toggle the "Set as default role" option.'}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"Choose clear Display Names and Descriptions for your roles to help customers understand and align\nwith the access levels in the Admin Portal."})}),"\n",(0,r.jsx)(e.h2,{id:"listening-to-events",children:"Listening to Events"}),"\n",(0,r.jsx)(e.p,{children:"Scalekit continuously monitors updates from your customers\u2019 directory providers and sends event\npayloads to your application via a registered webhook endpoint. To set up these endpoints and manage\nsubscriptions, refer to the Scalekit Dashboard documentation."}),"\n",(0,r.jsxs)(e.p,{children:["In this scenario, you will listen for the ",(0,r.jsx)(a,{children:"scalekit.dir.user.update"})," event to\ndetermine a user's role from the payload. Scalekit automatically includes a role property relevant\nto your app, based on the role information configured in the Scalekit Dashboard."]}),"\n",(0,r.jsx)(l,{title:"Webhook Endpoint for Role Updates",children:(0,r.jsxs)(t,{groupId:"tech-stack",queryString:!0,children:[(0,r.jsx)(c,{value:"Node.js",label:"Node.js",children:(0,r.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,r.jsxs)(e.code,{className:"language-javascript",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// Webhook endpoint"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"app."}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"post"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'/api/webhook/role-assignment'"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"async"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" ("}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:"req"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:"res"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:") "}),(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" event"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" req."}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"body"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" { "}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"email"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"name"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"roles"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" } "}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:"="}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" event."}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"data"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  console."}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"log"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'Admin added user to Viewer Group -> Scalekit informs Your App"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:"\\n"}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Destructure role_name from roles array"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" roleName"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" roles."}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#79B8FF"},children:"length"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" >"}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" 0"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ?"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" roles["}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"0"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"]."}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"role_name"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" :"}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" null"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  console."}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"log"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'Role name received:'"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", roleName);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Logic to update user role and permissions"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  await"}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" assignRole"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(roleName, email);"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  console."}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"log"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'App updated access for user:'"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", email);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  res."}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"status"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"201"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")."}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"json"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"({ "}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"message"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#E1E4E8"},children:":"}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'Role assigned'"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" });"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"});"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})}),(0,r.jsx)(c,{value:"nextjs",label:"Next.js",children:(0,r.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,r.jsxs)(e.code,{className:"language-javascript",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" { "}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"NextRequest"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"NextResponse"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" } "}),(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'next/server'"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"/**"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" * Webhook Endpoint: /api/webhook/role-assignment"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" * app/api"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" * \u2514\u2500\u2500 webhook"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" *     \u2514\u2500\u2500 role-assignment"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" *         \u2514\u2500\u2500 route.ts"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:" */"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" async"}),(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" function"}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" POST"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:"req"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:":"}),(0,r.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#B392F0"},children:" NextRequest"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" event"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" req."}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"body"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" { "}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"email"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"name"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"roles"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" } "}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:"="}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" event."}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"data"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  console."}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"log"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'Admin added user to Viewer Group -> Scalekit informs Your App"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:"\\n"}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Destructure role_name from roles array"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  const"}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" roleName"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" roles."}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#79B8FF"},children:"length"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" >"}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" 0"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ?"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" roles["}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"0"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"]."}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"role_name"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" :"}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" null"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  console."}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"log"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'Role name received:'"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", roleName);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Logic to update user role and permissions"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  await"}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" assignRole"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(roleName, email);"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  console."}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"log"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'App updated access for user:'"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", email);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  return"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" NextResponse."}),(0,r.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"json"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"({ "}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"message"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#E1E4E8"},children:":"}),(0,r.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' "Role assigned"'}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" }, { "}),(0,r.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"status"}),(0,r.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#E1E4E8"},children:":"}),(0,r.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" 201"}),(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" });"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})})]})}),"\n",(0,r.jsx)(l,{title:"Terminal Output",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"Admin added user to Viewer Group -> Scalekit informs Your App\n\nRole name received: viewer\nApp updated access for user: jerry@acmecorp.com\n"})})}),"\n",(0,r.jsxs)(e.p,{children:["See the ",(0,r.jsx)(e.a,{href:"/apis#tag/Webhooks/scalekit.dir.user.update",children:"User Event Payload Reference"})," for more\ninformation about the payload structure."]}),"\n",(0,r.jsx)(e.p,{children:"By utilizing Scalekit's group-based role assignment feature, you can simplify access management for\nyour enterprise customers and ensure that user roles remain synchronized with their directory\nprovider."})]})}function h(s={}){const{wrapper:e}={...(0,n.R)(),...s.components};return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(d,{...s})}):d(s)}function k(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},408:(s,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/automatically-assign-roles-4-0a8499e62802385f0bb350a161437af4.png"},7313:(s,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/gbra-1-d86e47755f0794fd2b6e4fb17ef0b44f.png"},8453:(s,e,i)=>{i.d(e,{R:()=>a,x:()=>o});var r=i(6540);const n={},l=r.createContext(n);function a(s){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function o(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:a(s.components),r.createElement(l.Provider,{value:e},s.children)}}}]);