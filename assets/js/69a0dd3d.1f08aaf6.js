"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7530],{4515:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=i(4848),s=i(8453);const o={pagination_next:null,pagination_prev:null,displayed_sidebar:"integrationsSidebar",title:"Configuring OneLogin SAML for Single Sign-On",description:"A step-by-step guide to setting up Single Sign-On with OneLogin as the Identity Provider, including creating an enterprise application, configuring SAML, attribute mapping, assigning users, uploading IdP metadata, testing the connection, and enabling SSO.",keywords:["OneLogin SAML","Single Sign-On","SSO","Identity Provider","Enterprise Application","SAML Configuration","Attribute Mapping","User Assignment","IdP Metadata","Connection Testing"]},r="OneLogin SAML",a={id:"integrations/onelogin-saml",title:"Configuring OneLogin SAML for Single Sign-On",description:"A step-by-step guide to setting up Single Sign-On with OneLogin as the Identity Provider, including creating an enterprise application, configuring SAML, attribute mapping, assigning users, uploading IdP metadata, testing the connection, and enabling SSO.",source:"@site/docs/integrations/onelogin-saml.mdx",sourceDirName:"integrations",slug:"/integrations/onelogin-saml",permalink:"/docs-staging/integrations/onelogin-saml",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,displayed_sidebar:"integrationsSidebar",title:"Configuring OneLogin SAML for Single Sign-On",description:"A step-by-step guide to setting up Single Sign-On with OneLogin as the Identity Provider, including creating an enterprise application, configuring SAML, attribute mapping, assigning users, uploading IdP metadata, testing the connection, and enabling SSO.",keywords:["OneLogin SAML","Single Sign-On","SSO","Identity Provider","Enterprise Application","SAML Configuration","Attribute Mapping","User Assignment","IdP Metadata","Connection Testing"]},sidebar:"integrationsSidebar"},c={},d=[{value:"1. Creating Enterprise Application",id:"1-creating-enterprise-application",level:3},{value:"2. SAML Configuration",id:"2-saml-configuration",level:3},{value:"3. Attribute Mapping",id:"3-attribute-mapping",level:3},{value:"4. Assign User/Group",id:"4-assign-usergroup",level:3},{value:"5. Upload IdP Metadata URL",id:"5-upload-idp-metadata-url",level:3},{value:"6. Test Connection",id:"6-test-connection",level:3},{value:"7. Enable Connection",id:"7-enable-connection",level:3}];function l(n){const e={h1:"h1",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,s.R)(),...n.components},{Subtitle:o}=e;return o||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Subtitle",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"onelogin-saml",children:"OneLogin SAML"})}),"\n",(0,t.jsx)(o,{children:"Step-by-step guide to configure Single Sign-on with OneLogin as the Identity Provider."}),"\n",(0,t.jsx)(e.h3,{id:"1-creating-enterprise-application",children:"1. Creating Enterprise Application"}),"\n",(0,t.jsxs)(e.p,{children:["Login to your ",(0,t.jsx)(e.strong,{children:"OneLogin Portal"}),". Go to ",(0,t.jsx)(e.strong,{children:"Applications\u2192 Applications."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Locate Applications",src:i(4210).A+"",width:"2086",height:"1062"}),"\n",(0,t.jsx)("figcaption",{children:"Locate Applications"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Add App."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Click on Add App",src:i(8427).A+"",width:"2586",height:"762"}),"\n",(0,t.jsx)("figcaption",{children:"Click on Add App"})]})}),"\n",(0,t.jsxs)(e.p,{children:["In the ",(0,t.jsx)(e.strong,{children:"Find Application"})," search box, type in ",(0,t.jsx)(e.strong,{children:"SAML Custom Connector (Advanced)"}),", and select it from the drop down\nlist."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Select SAML Custom Connector from drop down (GIF)",src:i(5846).A+"",width:"1566",height:"873"}),"\n",(0,t.jsx)("figcaption",{children:"Select SAML Custom Connector from drop down (GIF)"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Give your app a name that reflects the application you'll be connecting it to, so users can easily recognize it in their\nOneLogin portal., select your icon (optional) and then click on ",(0,t.jsx)(e.strong,{children:"Save."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Click on Save",src:i(96).A+"",width:"2540",height:"1296"}),"\n",(0,t.jsx)("figcaption",{children:"Click on Save"})]})}),"\n",(0,t.jsx)(e.h3,{id:"2-saml-configuration",children:"2. SAML Configuration"}),"\n",(0,t.jsxs)(e.p,{children:["On the Application page click on ",(0,t.jsx)(e.strong,{children:"Configuration."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Locate Configuration ",src:i(4921).A+"",width:"2308",height:"1276"}),"\n",(0,t.jsx)("figcaption",{children:"Locate Configuration "})]})}),"\n",(0,t.jsxs)(e.p,{children:["From your ",(0,t.jsx)(e.strong,{children:"SSO Configuration Portal"}),", copy the ",(0,t.jsx)(e.strong,{children:"ACS (Consumer) URL"}),". Go back to your ",(0,t.jsx)(e.strong,{children:"OneLogin Admin Portal"}),", and\npaste it in the ",(0,t.jsx)(e.strong,{children:"Recipient"})," and ",(0,t.jsx)(e.strong,{children:"ACS (Consumer) URL Validator"})," fields."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Copy ACS (Consumer) URL on SSO Configuration Portal ",src:i(5094).A+"",width:"2194",height:"1060"}),"\n",(0,t.jsx)("figcaption",{children:"Copy ACS (Consumer) URL on SSO Configuration Portal "})]})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"OneLogin Admin Portal"})}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Paste it in Recipient, ACS URL Validator, and ACS(Consumer) URL fields on OneLogin Admin\nPortal",src:i(1423).A+"",width:"2540",height:"1304"})}),(0,t.jsx)("figcaption",{children:(0,t.jsx)(e.p,{children:"Paste it in Recipient, ACS URL Validator, and ACS(Consumer) URL fields on OneLogin Admin Portal"})})]}),"\n",(0,t.jsxs)(e.p,{children:["Similarly, copy the ",(0,t.jsx)(e.strong,{children:"Audience (Entity ID) f"}),"rom your SSO Configuration Portal. Go back to your ",(0,t.jsx)(e.strong,{children:"OneLogin Admin\nPortal"}),", and paste it in the ",(0,t.jsx)(e.strong,{children:"Audience (EntityID)."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Copy Audience (Entity ID) on SSO Configuration Portal",src:i(6772).A+"",width:"2198",height:"1068"}),"\n",(0,t.jsx)("figcaption",{children:"Copy Audience (Entity ID) on SSO Configuration Portal"})]})}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Paste copied URL in Audience (EntityID) on OneLogin Admin\nPortal",src:i(6717).A+"",width:"2538",height:"1292"}),"\n",(0,t.jsx)("figcaption",{children:"Paste copied URL in Audience (EntityID) on OneLogin Admin Portal"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Save"}),"."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Locate Save",src:i(6858).A+"",width:"2582",height:"922"}),"\n",(0,t.jsx)("figcaption",{children:"Locate Save"})]})}),"\n",(0,t.jsx)(e.h3,{id:"3-attribute-mapping",children:"3. Attribute Mapping"}),"\n",(0,t.jsxs)(e.p,{children:["Go to the ",(0,t.jsx)(e.strong,{children:"Parameters"})," tab on ",(0,t.jsx)(e.strong,{children:"OneLogin Admin Portal"}),", and click on the plus (+) sign to add attributes."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Locate Parameters tab ",src:i(4435).A+"",width:"2617",height:"1044"}),"\n",(0,t.jsx)("figcaption",{children:"Locate Parameters tab "})]})}),"\n",(0,t.jsxs)(e.p,{children:["Check the ",(0,t.jsx)(e.strong,{children:"Attribute Mapping"})," section in the ",(0,t.jsx)(e.strong,{children:"SSO Configuration Portal"}),", and carefully map the ",(0,t.jsx)(e.strong,{children:"exact"})," ",(0,t.jsx)(e.strong,{children:"same\nattributes"})," on your ",(0,t.jsx)(e.strong,{children:"OneLogin Admin Portal"}),"."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Check attributes on SSO Configuration Portal ",src:i(4115).A+"",width:"1838",height:"662"}),"\n",(0,t.jsx)("figcaption",{children:"Check attributes on SSO Configuration Portal "})]})}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Paste attributes on OneLogin Admin Portal",src:i(7934).A+"",width:"1927",height:"852"}),"\n",(0,t.jsx)("figcaption",{children:"Paste attributes on OneLogin Admin Portal"})]})}),"\n",(0,t.jsx)(e.h3,{id:"4-assign-usergroup",children:"4. Assign User/Group"}),"\n",(0,t.jsxs)(e.p,{children:["Go to the ",(0,t.jsx)(e.strong,{children:"Users"})," tab."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Locate Users under Users tab",src:i(3354).A+"",width:"1638",height:"806"}),"\n",(0,t.jsx)("figcaption",{children:"Locate Users under Users tab"})]})}),"\n",(0,t.jsx)(e.p,{children:"Click the user you want to assign to the application."}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Select user to assign",src:i(2337).A+"",width:"2558",height:"576"}),"\n",(0,t.jsx)("figcaption",{children:"Select user to assign"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Click on the ",(0,t.jsx)(e.strong,{children:"Applications"})," tab. Click on the ",(0,t.jsx)(e.strong,{children:"+"})," sign to assign the newly created application."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Add application to previously selected user",src:i(9624).A+"",width:"2556",height:"766"}),"\n",(0,t.jsx)("figcaption",{children:"Add application to previously selected user"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Select the newly created application from the drop down, and click on ",(0,t.jsx)(e.strong,{children:"Continue."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Select application from drop-down",src:i(9239).A+"",width:"1244",height:"706"}),"\n",(0,t.jsx)("figcaption",{children:"Select application from drop-down"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Save"}),"."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Save user assignment to application",src:i(5598).A+"",width:"1244",height:"706"}),"\n",(0,t.jsx)("figcaption",{children:"Save user assignment to application"})]})}),"\n",(0,t.jsx)(e.h3,{id:"5-upload-idp-metadata-url",children:"5. Upload IdP Metadata URL"}),"\n",(0,t.jsxs)(e.p,{children:["On ",(0,t.jsx)(e.strong,{children:"OneLogin Admin Portal"}),", click on SSO. Copy the ",(0,t.jsx)(e.strong,{children:"Issuer URL"}),"."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Copy Issuer URL on OneLogin Admin Portal",src:i(8021).A+"",width:"2062",height:"1336"}),"\n",(0,t.jsx)("figcaption",{children:"Copy Issuer URL on OneLogin Admin Portal"})]})}),"\n",(0,t.jsxs)(e.p,{children:["Under ",(0,t.jsx)(e.strong,{children:"Identify Provider Configuration,"})," select ",(0,t.jsx)(e.strong,{children:"Configure using Metadata URL,"})," and paste it under ",(0,t.jsx)(e.strong,{children:"App Federation\nMetadata URL"})," on the ",(0,t.jsx)(e.strong,{children:"SSO Configuration Portal."})]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Paste Issuer URL on SSO Configuration Portal ",src:i(508).A+"",width:"2184",height:"716"}),"\n",(0,t.jsx)("figcaption",{children:"Paste Issuer URL on SSO Configuration Portal "})]})}),"\n",(0,t.jsx)(e.h3,{id:"6-test-connection",children:"6. Test Connection"}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Test Connection."})," If everything is done correctly, you will see a ",(0,t.jsx)(e.strong,{children:"Success"})," response as shown below."]}),"\n",(0,t.jsx)(e.p,{children:"If the connection fails, you\u2019ll see an error, the reason for the error, and a way to solve that error right on the\nscreen."}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Test SSO Configuration",src:i(811).A+"",width:"2198",height:"978"}),"\n",(0,t.jsx)("figcaption",{children:"Test SSO Configuration"})]})}),"\n",(0,t.jsx)(e.h3,{id:"7-enable-connection",children:"7. Enable Connection"}),"\n",(0,t.jsxs)(e.p,{children:["Click on ",(0,t.jsx)(e.strong,{children:"Enable Connection."})," This will let all your selected users login to the new application via your ",(0,t.jsx)(e.strong,{children:"OneLogin\nAdmin Portal"})," SSO."]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.img,{alt:"Enable SSO on Onelogin Admin Console",src:i(7154).A+"",width:"2216",height:"268"}),"\n",(0,t.jsx)("figcaption",{children:"Enable SSO on Onelogin Admin Console"})]})}),"\n",(0,t.jsxs)(e.p,{children:["With this, we are done configuring your ",(0,t.jsx)(e.strong,{children:"OneLogin Admin Portal"})," application for an SSO login setup."]})]})}function g(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},4210:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/0-7038913156f2520bb00e7381003f37c1.png"},8427:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/1-3f80ae941df7c66bed4e1b2a9dc723b5.png"},7934:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/10-5-39c985fd2f7263a07427b2312f189c0e.gif"},4115:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/10-56dd9ae6a58276eee4296e9f37879f15.png"},3354:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/11-27a2deea90128e7f199a26ab9137b2a4.png"},2337:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/12-d9ef03669f4c151f07c5af2650702037.png"},9624:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/13-04e7820c07adb2eb6078683b37997b02.png"},9239:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/14-8a2a4ddacd064d0152bd670600c48b8a.png"},5598:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/15-8a2a4ddacd064d0152bd670600c48b8a.png"},8021:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/16-8aaef45ed07cea19a1d53a5fc01d1a85.png"},508:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/17-26912e72077cb4cbe89ad8a35278b7b9.png"},811:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/18-d927059d4de4f9d360023b673934ddf4.png"},7154:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/19-f6fd0926b510ac273c73380261aad088.png"},5846:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/2-5-8163115ac05b31ffae8a6df4567c9e6b.gif"},96:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/2-6e1311cf15d7b40f330c87e303dbf068.png"},4921:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/3-745f8f6b4e469ef4e60b80c83550ca93.png"},5094:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/4-9b0d548cac1235d095dfb9ca82858a6b.png"},1423:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/5-0afdd3bfdbfd41de0c30198f46ed73e2.png"},6772:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/6-22c332a49bb049bf60435282c0860f4a.png"},6717:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/7-b823d27a36c99bbb0d2950067a2a471a.png"},6858:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/8-28cf48cd4ce8f2ec6dacd5c49df2aa7b.png"},4435:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/9-c7f52d3cedd30011911884de6229cd08.png"},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var t=i(6540);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);