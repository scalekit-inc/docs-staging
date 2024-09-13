"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7362],{1925:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(4848),r=i(8453);const a={description:"Verify SSO Connection using IdP Simulator",title:"Test Single Sign-on integration"},t="Test Single Sign-on integration",l={id:"sso/test-sso",title:"Test Single Sign-on integration",description:"Verify SSO Connection using IdP Simulator",source:"@site/docs/sso/test-sso.mdx",sourceDirName:"sso",slug:"/sso/test-sso",permalink:"/docs-staging/sso/test-sso",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Verify SSO Connection using IdP Simulator",title:"Test Single Sign-on integration"},sidebar:"ssoSidebar",previous:{title:"Admin Portal",permalink:"/docs-staging/sso/quickstart-admin-portal"},next:{title:"Launch Checklist",permalink:"/docs-staging/sso/launch-checklist"}},o={},c=[{value:"Scenario 1: Service Provider (SP) Initiated SSO",id:"scenario-1-service-provider-sp-initiated-sso",level:2},{value:"Scenario 2: User initiates SSO from IdP",id:"scenario-2-user-initiates-sso-from-idp",level:2},{value:"Scenario 3: Handle Errors",id:"scenario-3-handle-errors",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{SimpleCode:a,Subtitle:t,TabItem:l,Tabs:o}=s;return a||p("SimpleCode",!0),t||p("Subtitle",!0),l||p("TabItem",!0),o||p("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"test-single-sign-on-integration",children:"Test Single Sign-on integration"})}),"\n",(0,n.jsx)(t,{children:"Validate your SSO Integration using Scalekit's Identity Provider Simulator"}),"\n",(0,n.jsxs)(s.p,{children:["After implementing Single Sign-on using our ",(0,n.jsx)(s.a,{href:"/sso/quickstart",children:"Quickstart guide"}),", now it's time to validate your\nintegration for all possible scenarios. To make your integration testing easy and also comprehensive, we have already\nsetup your development environment with the two key components:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Identity Provider Simulator:"})," We built an Identity Provider simulator to help you test for all possible Single\nSign-on scenarios eliminating the need for you to use the likes of Okta, Microsoft Entra ID etc. This is provided at\nno cost to help you get familiar with enterprise Single Sign-on scenarios."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Test Organization:"})," As part of your development environment, we have created a test organization with an SSO\nconnection setup with our IdP Simulator so that you can test your integration for all possible scenarios. To help with\nyour testing efforts, we also added ",(0,n.jsx)(a,{children:"@example.com"})," or ",(0,n.jsx)(a,{children:"@example.org"}),"\ndomains as part of this organization."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Please ensure you test for all three below Single Sign-on scenarios to prepare you to launch your SSO workflows in\nproduction with your real customers."}),"\n",(0,n.jsx)(s.h2,{id:"scenario-1-service-provider-sp-initiated-sso",children:"Scenario 1: Service Provider (SP) Initiated SSO"}),"\n",(0,n.jsxs)(s.p,{children:["In this most common scenario, users initiate Single Sign-On (SSO) from your application's login page. If you have not\nimplemented Single Sign-on in your login page, please visit our ",(0,n.jsx)(s.a,{href:"/sso/guides/setup-sso/build-login-page",children:"how-to guide"}),"\nto help you add SSO to your login page."]}),"\n",(0,n.jsx)(s.p,{children:"Below is a quick workflow diagram of how SP Initiated SSO works:"}),"\n",(0,n.jsx)("figure",{className:"limited-width",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"SP initiated SSO",src:i(7191).A+"",width:"4936",height:"3744"}),"\n",(0,n.jsx)("figcaption",{children:"SP (Your application) Initiated SSO"})]})}),"\n",(0,n.jsx)(s.p,{children:"To validate this scenario, ensure the following:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Redirection to Identity Provider"}),": Verify that Scalekit correctly redirects the user to the appropriate identity\nprovider based on the ",(0,n.jsx)(s.a,{href:"https://docs.scalekit.com/sso/guides/key-concepts/authorization-url",children:"Authorization URL"})," you\nhave provided. This involves checking that the URL is constructed correctly and that the redirection occurs\nseamlessly."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Retrieving User Details"}),": Confirm that your application can successfully retrieve user details by exchanging\nthe\xa0",(0,n.jsx)(a,{children:"code"}),"\xa0received in the previous step."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To test this scenario, generate authorization URL using the organization ID of the Test Organization."}),"\n",(0,n.jsxs)("figure",{className:"limited-width",children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"SP initiated SSO",src:i(260).A+"",width:"2530",height:"1834"})}),(0,n.jsx)("figcaption",{children:(0,n.jsx)(s.p,{children:"The Test Organization is located at Workspace \u2192 Development \u2192 Organizations \u2192 Test Organization."})})]}),"\n",(0,n.jsxs)(s.p,{children:["Here is a code snippet that demonstrates generating an Authorization URL using an Organization ID, as outlined in Step 2\nof the sequence diagram. See the Authorization URL ",(0,n.jsx)(s.a,{href:"/sso/guides/key-concepts/authorization-url",children:"documentation"})," for more\ndetails."]}),"\n",(0,n.jsxs)(o,{groupId:"tech-stack",queryString:!0,children:[(0,n.jsx)(l,{value:"nodejs",label:"Node.js",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-js",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" options"}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {};"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"options["}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'organizationId'"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"] "}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'org_32656XXXXXX0438'"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// Generate Authorization Url"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" authorizationURL"}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekit."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"getAuthorizationUrl"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(redirectUrl, options);"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"res."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"redirect"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(authorizationUrl);"})]}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(l,{value:"python",label:"Python",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-py",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"options "}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"organizationId"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'org_32656XXXXXX0438'"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"# Generate Authorization URL"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"authorization_url "}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekit.get_authorization_url("})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    redirect_url,"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"    options,"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"redirect(authorization_url)"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(l,{value:"go",label:"Go",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-go",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"options"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"organizationId"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' "org_32656XXXXXX0438"'})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// Generate Authorization URL"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"authorizationURL"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" scalekitClient"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"GetAuthorizationUrl"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  redirectUrl"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  options"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// Redirect the user to the Authorization URL"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})}),(0,n.jsx)(l,{value:"java",label:"Java",children:(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-java",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"options"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"setOrganizationId"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"org_32656XXXXXX0438"'}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// Generate Authorization Url"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"String"}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" url "}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekitClient"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"        ."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"authentication"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"        ."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"getAuthorizationUrl"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(redirectUrl, options)"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"        ."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"toString"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// Redirect the user to the Authorization URL"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})})]}),"\n",(0,n.jsx)(s.p,{children:'The user will be redirected to the Identity Provider (IdP) Simulator, where they can select a scenario to simulate as a\nuser. Select "User Login via SSO" to view a form. This form is used to simulate the Identity Provider (IdP) passing the\nrelevant details that correspond to a user signing into your application.'}),"\n",(0,n.jsx)("figure",{className:"limited-width",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"IdP Simulator",src:i(8659).A+"",width:"2646",height:"1652"}),"\n",(0,n.jsx)("figcaption",{children:"User Login via SSO"})]})}),"\n",(0,n.jsx)(s.p,{children:"Enter the user details simulating an user signing into your application via SSO. Your app will receive the"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(a,{children:"idToken"})," indicating that your simulation was successful. The following are a details encoded in the\n",(0,n.jsx)(a,{children:"idToken"}),"."]}),"\n",(0,n.jsx)("figure",{className:"limited-width",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"IdP Simulator",src:i(4168).A+"",width:"2182",height:"1146"}),"\n",(0,n.jsx)("figcaption",{children:"Successful SSO Simulation (Test app renders response in JSON)"})]})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"To receive Custom Attributes from the IdP Simulator, ensure they are registered in Scalekit Workspace by navigating to\nDevelopment > Single Sign-On > Custom Attributes."})}),"\n",(0,n.jsx)(s.h2,{id:"scenario-2-user-initiates-sso-from-idp",children:"Scenario 2: User initiates SSO from IdP"}),"\n",(0,n.jsx)(s.p,{children:"Users can also initiate the sign-in process to your application from the Identity Provider (IdP), typically through an\napplications catalog. This flow enables them to see the applications available to them within their organization and\naccess them conveniently."}),"\n",(0,n.jsxs)(s.p,{children:["If you haven't yet implemented IdP initiated SSO workflow in your application via Scalekit, please go through our\n",(0,n.jsx)(s.a,{href:"/sso/guides/setup-sso/implement-idp-initiated-sso",children:"how-to guide"})," and come back to here to understand how to test for\nthis scenario."]}),"\n",(0,n.jsx)(s.p,{children:"Below is a quick workflow diagram of how SP Initiated SSO works:"}),"\n",(0,n.jsx)("figure",{className:"limited-width",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"IdP initiated SSO",src:i(9722).A+"",width:"4936",height:"4432"}),"\n",(0,n.jsx)("figcaption",{children:"IdP initiated SSO"})]})}),"\n",(0,n.jsx)(s.p,{children:'To test this scenario, generate the Authorization URL using the Test Organization and get redirected to the IdP\nSimulator. Select "IdP initiated SSO" from the dropdown menu and proceed to simulate the login by entering the test user\ndetails.'}),"\n",(0,n.jsx)("figure",{className:"limited-width",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"IdP initiated SSO",src:i(678).A+"",width:"2530",height:"1656"}),"\n",(0,n.jsx)("figcaption",{children:"IdP initiated SSO"})]})}),"\n",(0,n.jsxs)(s.p,{children:["Implement a condition in your callback handler to identify whether the callback from Scalekit is IdP-initiated or not to\nhandle this scenario. Learn more about\n",(0,n.jsx)(s.a,{href:"/sso/guides/setup-sso/implement-idp-initiated-sso",children:"implementing IdP initiated SSO"}),"."]}),"\n",(0,n.jsx)("figure",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"IdP initiated SSO",src:i(1357).A+"",width:"2024",height:"486"}),"\n",(0,n.jsx)("figcaption",{children:"Successful IdP initiated SSO Simulation (Test app renders response in JSON)"})]})}),"\n",(0,n.jsxs)(s.p,{children:["If the callback is IdP-initiated, retrieve the necessary details, such as ",(0,n.jsx)(a,{children:"connection_id"}),"\nor\xa0",(0,n.jsx)(a,{children:"organization_id"}),", from Scalekit to construct an Authorization URL. This step effectively\nconverts an IdP-initiated SSO into an SP-initiated SSO."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"For simulation purposes in the IdP simulator, you can select and simulate IdP-initiated SSO to test your application.\nIn an ideal scenario, users would choose your app from their Identity Provider and begin the sign-in process into your\napp."}),"\n",(0,n.jsx)(s.li,{children:"The IdP simulator uses the default redirect URL as the callback URL when a user initiates SSO from the IdP. Ensure the\ncorrect default redirect URL is configured in the Scalekit dashboard."}),"\n"]})}),"\n",(0,n.jsx)(s.h2,{id:"scenario-3-handle-errors",children:"Scenario 3: Handle Errors"}),"\n",(0,n.jsx)(s.p,{children:'Users may encounter errors in less-than-ideal scenarios. Your app should be equipped to handle these situations to meet\nuser expectations. To simulate and manage errors, after redirecting to the Authorization URL, select the "Error"\nscenario and proceed'}),"\n",(0,n.jsx)("figure",{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Error Scenario",src:i(2508).A+"",width:"2448",height:"1480"}),"\n",(0,n.jsx)("figcaption",{children:"Simulate Error Scenario"})]})}),"\n",(0,n.jsx)(s.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,n.jsxs)(s.p,{children:["After validating all scenarios, you are ready to go live. Visit our ",(0,n.jsx)(s.a,{href:"/sso/launch-checklist",children:"Launch Checklist"})," guide\nbefore you start onboarding real customers in your production environment."]}),"\n",(0,n.jsx)(s.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(s.code,{className:"language-ts",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"interface"}),(0,n.jsx)(s.span,{style:{color:"#C18401","--shiki-dark":"#B392F0"},children:" Todo"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:"  title"}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:":"}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:" string"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// ---cut---"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" todo"}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:":"}),(0,n.jsx)(s.span,{style:{color:"#C18401","--shiki-dark":"#B392F0"},children:" Readonly"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"#C18401","--shiki-dark":"#B392F0"},children:"Todo"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"> "}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  title"}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#E1E4E8"},children:":"}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'Delete inactive users'"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"toUpperCase"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(),"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"//    ^?"})}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"todo."}),(0,n.jsx)(s.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"title"}),(0,n.jsx)(s.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'Hello'"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"Number."}),(0,n.jsx)(s.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"parseInt"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(s.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'123'"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,n.jsx)(s.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"10"}),(0,n.jsx)(s.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"//      ^?"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},260:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/1.1-624f8126b25759603d035801bcf380cd.png"},7191:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/1-de15f3ce77c845566eb50fd560d12a28.png"},8659:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/2.1-50cf40b3dc7e596f93e6beac1800d22a.png"},4168:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/2.2-2261c98e1ac9de45820f54348216c585.png"},678:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/3.1-63bf1959fa6981df5df982e145f45802.png"},1357:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/3.2-611761bf8cff30df21263ddd5fc7e8c4.png"},2508:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/4.0-bcda695a3dd44c919466ea32ee5b294f.png"},9722:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/4-8c490e6db4b35a7ac94c517726b182b2.png"},8453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>l});var n=i(6540);const r={},a=n.createContext(r);function t(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);