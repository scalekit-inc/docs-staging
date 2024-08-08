"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[4482],{4416:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=i(4848),s=i(8453);const o={sidebar_position:2,title:"Okta SAML",description:"SSO Configuration Guide for Okta",pagination_next:null,displayed_sidebar:"integrationsSidebar"},a="Okta SAML",r={id:"integrations/okta-saml",title:"Okta SAML",description:"SSO Configuration Guide for Okta",source:"@site/docs/integrations/okta-saml.mdx",sourceDirName:"integrations",slug:"/integrations/okta-saml",permalink:"/integrations/okta-saml",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Okta SAML",description:"SSO Configuration Guide for Okta",pagination_next:null,displayed_sidebar:"integrationsSidebar"},sidebar:"integrationsSidebar",previous:{title:"Overview",permalink:"/integrations/"}},c={},d=[{value:"1. Create Enterprise Application",id:"1-create-enterprise-application",level:3},{value:"2. SAML Configuration",id:"2-saml-configuration",level:3},{value:"3. Attribute Mapping",id:"3-attribute-mapping",level:3},{value:"4. Assign User/Group",id:"4-assign-usergroup",level:3},{value:"5. Finalize App",id:"5-finalize-app",level:3},{value:"6. Upload IdP Metadata URL",id:"6-upload-idp-metadata-url",level:3},{value:"7. Test Connection",id:"7-test-connection",level:3},{value:"8. Enable connection",id:"8-enable-connection",level:3}];function l(n){const e={h1:"h1",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.R)(),...n.components},{Subtitle:o}=e;return o||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Subtitle",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"okta-saml",children:"Okta SAML"}),"\n",(0,t.jsx)(o,{children:(0,t.jsx)(e.p,{children:"Step-by-step guide to configure Single Sign-on with Okta as the Identity\nProvider."})}),"\n",(0,t.jsx)(e.h3,{id:"1-create-enterprise-application",children:"1. Create Enterprise Application"}),"\n",(0,t.jsxs)(e.p,{children:["Login to your ",(0,t.jsx)(e.strong,{children:"Okta Admin Console"}),". Go to ",(0,t.jsx)(e.strong,{children:"Applications\u2192 Applications."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Locate Applications",src:i(3319).A+"",width:"1542",height:"892"}),"\n",(0,t.jsx)("figcaption",{children:"Locate Applications"})]})}),"\n",(0,t.jsxs)(e.p,{children:["In the ",(0,t.jsx)(e.strong,{children:"Applications"})," tab, click on ",(0,t.jsx)(e.strong,{children:"Create App Integration."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Click on Create App\nIntegration",src:i(174).A+"",width:"1406",height:"922"}),"\n",(0,t.jsx)("figcaption",{children:"Click on Create App Integration"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Choose ",(0,t.jsx)(e.strong,{children:"SAML 2.0,"})," and click on ",(0,t.jsx)(e.strong,{children:"Next."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Select SAML 2.0 ",src:i(1653).A+"",width:"1840",height:"1108"}),"\n",(0,t.jsx)("figcaption",{children:"Select SAML 2.0 "})]})}),"\n",(0,t.jsxs)(e.p,{children:["Give your app a name, choose your app visibility settings, and click on ",(0,t.jsx)(e.strong,{children:"Next."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"General Settings for SAML\nintegration",src:i(5740).A+"",width:"1368",height:"1084"}),"\n",(0,t.jsx)("figcaption",{children:"General Settings for SAML integration"})]})}),"\n",(0,t.jsx)(e.h3,{id:"2-saml-configuration",children:"2. SAML Configuration"}),"\n",(0,t.jsxs)(e.p,{children:["Copy the ",(0,t.jsx)(e.strong,{children:"SSO URL"})," from the ",(0,t.jsx)(e.strong,{children:"SSO Configuration Portal"}),". Paste this link in the space for ",(0,t.jsx)(e.strong,{children:"SSO URL"})," on the ",(0,t.jsx)(e.strong,{children:"Okta Admin Console"}),"."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Copy SSO URL on Configuration\nPortal",src:i(3139).A+"",width:"2292",height:"1116"}),"\n",(0,t.jsx)("figcaption",{children:"Copy SSO URL on Configuration Portal"})]})}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Paste SSO URL on Okta Admin\nConsole",src:i(1226).A+"",width:"1894",height:"1398"}),"\n",(0,t.jsx)("figcaption",{children:"Paste SSO URL on Okta Admin Console"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Similarly, copy the ",(0,t.jsx)(e.strong,{children:"Audience URI (SP Entity ID)"})," from the SSO Configuration Portal, and paste it in your ",(0,t.jsx)(e.strong,{children:"Okta Admin Console"})," in the space for ",(0,t.jsx)(e.strong,{children:"Audience URI."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Copy Audience URI on SSO Configuration\nPortal",src:i(8657).A+"",width:"2292",height:"1116"}),"\n",(0,t.jsx)("figcaption",{children:"Copy Audience URI on SSO Configuration Portal"})]})}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Paste Audience URI on Okta Admin\nConsole",src:i(7528).A+"",width:"1898",height:"1400"}),"\n",(0,t.jsx)("figcaption",{children:"Paste Audience URI on Okta Admin Console "})]})}),"\n",(0,t.jsx)(e.p,{children:"You can leave the Default Relay State as blank. Similarly, select your preferences for the Name ID format, Application Username, and Update application username on fields."}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Selecting preferences on Okta Admin\nConsole",src:i(2335).A+"",width:"1496",height:"696"}),"\n",(0,t.jsx)("figcaption",{children:"Selecting preferences on Okta Admin Console"})]})}),"\n",(0,t.jsx)(e.h3,{id:"3-attribute-mapping",children:"3. Attribute Mapping"}),"\n",(0,t.jsxs)(e.p,{children:["Check the ",(0,t.jsx)(e.strong,{children:"Attribute Mapping"})," section in the ",(0,t.jsx)(e.strong,{children:"SSO Configuration Portal"}),", and carefully map the same attributes on your Okta Admin Console."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Attribute mapping on SSO Configuration Portal\n",src:i(790).A+"",width:"2206",height:"752"}),"\n",(0,t.jsx)("figcaption",{children:"Attribute mapping on SSO Configuration Portal"})]})}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Attribute mapping on Okta Admin Console\n",src:i(4796).A+"",width:"1516",height:"786"}),"\n",(0,t.jsx)("figcaption",{children:"Attribute mapping on Okta Admin Console"})]})}),"\n",(0,t.jsx)(e.h3,{id:"4-assign-usergroup",children:"4. Assign User/Group"}),"\n",(0,t.jsxs)(e.p,{children:["Go to the ",(0,t.jsx)(e.strong,{children:"Assignments"})," tab."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Locate Assignments tab",src:i(709).A+"",width:"1682",height:"874"}),"\n",(0,t.jsx)("figcaption",{children:"Locate Assignments tab"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Assign"})," on the top navigation bar, select ",(0,t.jsx)(e.strong,{children:"Assign to People/Groups."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Select Assign to People or Groups\n",src:i(4958).A+"",width:"1204",height:"478"}),"\n",(0,t.jsx)("figcaption",{children:"Select Assign to People or Groups"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Assign"})," next to the people you want to assign it to. Click on ",(0,t.jsx)(e.strong,{children:"Save and Go Back"}),", and click on ",(0,t.jsx)(e.strong,{children:"Done."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Assign specific individuals or groups to\napp",src:i(7447).A+"",width:"1218",height:"1070"}),"\n",(0,t.jsx)("figcaption",{children:"Assign specific individuals or groups to app"})]})}),"\n",(0,t.jsx)(e.h3,{id:"5-finalize-app",children:"5. Finalize App"}),"\n",(0,t.jsxs)(e.p,{children:["Preview your SAML Assertion generated, and click on ",(0,t.jsx)(e.strong,{children:"Next."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Preview SAML Assertion",src:i(7832).A+"",width:"1542",height:"706"}),"\n",(0,t.jsx)("figcaption",{children:"Preview SAML Assertion"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Fill the feedback form, and click on ",(0,t.jsx)(e.strong,{children:"Finish"})," once done."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Feedback form after configuring\nSAML",src:i(8049).A+"",width:"1680",height:"1358"}),"\n",(0,t.jsx)("figcaption",{children:"Feedback form after configuring SAML"})]})}),"\n",(0,t.jsx)(e.h3,{id:"6-upload-idp-metadata-url",children:"6. Upload IdP Metadata URL"}),"\n",(0,t.jsxs)(e.p,{children:["On the ",(0,t.jsx)(e.strong,{children:"Sign On"})," tab copy the ",(0,t.jsx)(e.strong,{children:"Metadata URL"})," from the ",(0,t.jsx)(e.strong,{children:"Metadata Details"})," section on ",(0,t.jsx)(e.strong,{children:"Okta Admin Console."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Copy Metadata URL from Okta Admin\nConsole",src:i(6938).A+"",width:"1198",height:"1332"}),"\n",(0,t.jsx)("figcaption",{children:"Copy Metadata URL from Okta Admin Console"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Under ",(0,t.jsx)(e.strong,{children:"Identify Provider Configuration,"})," select ",(0,t.jsx)(e.strong,{children:"Configure using Metadata URL,"})," and paste it under ",(0,t.jsx)(e.strong,{children:"App Federation Metadata URL"})," on the ",(0,t.jsx)(e.strong,{children:"SSO Configuration Portal."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Paste Metadata URL on SSO Configuration\nPortal",src:i(3424).A+"",width:"2180",height:"672"}),"\n",(0,t.jsx)("figcaption",{children:"Paste Metadata URL on SSO Configuration Portal"})]})}),"\n",(0,t.jsx)(e.h3,{id:"7-test-connection",children:"7. Test Connection"}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Test Connection."})," If everything is done correctly, you will see a ",(0,t.jsx)(e.strong,{children:"Success"})," response as shown below."]}),"\n",(0,t.jsx)(e.p,{children:"If the connection fails, you\u2019ll see an error, the reason for the error, and a way to solve that error right on the screen."}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Test SSO configuration",src:i(820).A+"",width:"2198",height:"978"}),"\n",(0,t.jsx)("figcaption",{children:"Test SSO configuration"})]})}),"\n",(0,t.jsx)(e.h3,{id:"8-enable-connection",children:"8. Enable connection"}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Enable Connection."})," This will let all your selected users login to the new application via your Okta SSO."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Enable SSO on Okta Admin\nConsole",src:i(4717).A+"",width:"2194",height:"250"}),"\n",(0,t.jsx)("figcaption",{children:"Enable SSO on Okta Admin Console"})]})}),"\n",(0,t.jsx)(e.p,{children:"With this, we are done configuring your Okta application for an SSO login setup."})]})}function g(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},3319:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/0-888641ad5c91bb2695accb96e9f02b25.png"},174:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/1-99c62d8e9b1e624888e659455462a823.png"},4796:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/10-fb8745b29d1752234d61a0f5ea3d1490.png"},709:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/11-fcf9b305ea934b51d0bc0ba8919e9475.png"},4958:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/12-c2a68c21b93a6a3bbb34474f207e552f.png"},7447:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/13-4ef88fdc39b2abbfb9a209da4f6bd39c.png"},7832:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/14-e81a166d9753c13bc3188d8a51662587.png"},8049:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/15-bb4f10c702a4b07491de7bf9e5bc6a74.png"},6938:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/16-21781c4b4947fb5d473eb77ef0522677.png"},3424:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/17-02399e0c690e2bbfed79b04163f0341b.png"},820:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/18-d927059d4de4f9d360023b673934ddf4.png"},4717:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/19-c3ed9eeb03fbebe0f3cb7e367df38f3f.png"},1653:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/2-8ea985fbad29a9527a34531c1edc0172.png"},5740:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/3-4758cee172fdd912d7395b9a5498003a.png"},3139:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/4-f5493400aefef1abc1c07a4b79cf5b5e.png"},1226:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/5-02122f8506a72e67367209dadbdda6e3.png"},8657:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/6-67169890bcaf9f65da524cf006e67da6.png"},7528:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/7-267878e9d39ad18bad7c8f18f2d1d75e.png"},2335:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/8-8162eabfb1574510a2a9415013afa5a2.png"},790:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/9-3ce7432f49f9d47abadb109bd21590e5.png"},8453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);