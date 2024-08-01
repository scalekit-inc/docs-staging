"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7996],{5156:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=i(4848),o=i(8453);const r={pagination_next:null,pagination_prev:null,displayed_sidebar:"integrationsSidebar"},a="SAML",s={id:"integrations/saml",title:"SAML",description:'Configure Single Sign-on using SAML with any Identity Provider.{" "}',source:"@site/docs/integrations/saml.mdx",sourceDirName:"integrations",slug:"/integrations/saml",permalink:"/integrations/saml",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null,displayed_sidebar:"integrationsSidebar"},sidebar:"integrationsSidebar"},l={},d=[{value:"0. Create a SAML application",id:"0-create-a-saml-application",level:2},{value:"1. Service Provider Configuration",id:"1-service-provider-configuration",level:2},{value:"via SAML Metadata URL",id:"via-saml-metadata-url",level:3},{value:"via SAML Metadata File",id:"via-saml-metadata-file",level:3},{value:"via Manual Configuration",id:"via-manual-configuration",level:3},{value:"2. Attribute Mapping &amp; Assigning Users/Groups",id:"2-attribute-mapping--assigning-usersgroups",level:2},{value:"3. Identity Provider Configuration",id:"3-identity-provider-configuration",level:2},{value:"Automated Configuration (recommended)",id:"automated-configuration-recommended",level:3},{value:"Manual Configuration",id:"manual-configuration",level:3},{value:"4. Test Single Sign-on",id:"4-test-single-sign-on",level:2},{value:"5. Enable Single Sign-on",id:"5-enable-single-sign-on",level:2}];function c(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Subtitle:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Subtitle",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"saml",children:"SAML"}),"\n",(0,t.jsx)(r,{children:(0,t.jsxs)(n.p,{children:["Configure Single Sign-on using SAML with any Identity Provider."," "]})}),"\n",(0,t.jsx)(n.h2,{id:"0-create-a-saml-application",children:"0. Create a SAML application"}),"\n",(0,t.jsx)(n.p,{children:"Login to your Identity Provider portal as an admin and create a new Application with SAML as the single sign-on method."}),"\n",(0,t.jsx)(n.h2,{id:"1-service-provider-configuration",children:"1. Service Provider Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Depending on your Identity Provider, they may allow you to configure ",(0,t.jsx)(n.strong,{children:"Service Provider section"})," in your SAML application via either of the three following methods:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"via SAML Metadata URL"}),"\n",(0,t.jsx)(n.li,{children:"via SAML Metadata file"}),"\n",(0,t.jsx)(n.li,{children:"via copying ACS URL and Entity ID manually"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"via-saml-metadata-url",children:"via SAML Metadata URL"}),"\n",(0,t.jsxs)(n.p,{children:["Copy the ",(0,t.jsx)(n.strong,{children:"Metadata URL"})," content in your Identity Provider portal"]}),"\n",(0,t.jsx)(n.h3,{id:"via-saml-metadata-file",children:"via SAML Metadata File"}),"\n",(0,t.jsxs)(n.p,{children:["Under ",(0,t.jsx)(n.strong,{children:"Service Provider Details,"})," click on ",(0,t.jsx)(n.strong,{children:"Download Metadata XML"})," and upload in your Identity Portal"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Download Metadata XML",src:i(681).A+"",width:"1350",height:"512"})}),"\n",(0,t.jsx)(n.p,{children:"Download Metadata XML"}),"\n",(0,t.jsx)(n.h3,{id:"via-manual-configuration",children:"via Manual Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Copy the ",(0,t.jsx)(n.strong,{children:"ACS URL (Assertion Consumer Service)"})," and ",(0,t.jsx)(n.strong,{children:"Service Provider Entity ID"})," from the Service Provider Details section and paste them in the appropriate sections in your Identity Provider Portal."]}),"\n",(0,t.jsx)(n.h2,{id:"2-attribute-mapping--assigning-usersgroups",children:"2. Attribute Mapping & Assigning Users/Groups"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"2.1 Attribute Mapping"})}),"\n",(0,t.jsx)(n.p,{children:"SAML Attributes need to be configured in your Identity Provider portal so that the user profile details are shared with us at the time of user login as part of SAML Response payload."}),"\n",(0,t.jsx)(n.p,{children:"User profile details that are needed for seamless user login are-"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Email Address of the user"}),"\n",(0,t.jsx)(n.li,{children:"First Name of the user"}),"\n",(0,t.jsx)(n.li,{children:"Last Name of the user"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To configure these attributes, locate ",(0,t.jsx)(n.strong,{children:"Attribute Settings"})," section in the SAML Configuration page in your Identity Provider\u2019s application, and carefully map the attributes with the Attribute names exactly as shown in the below image."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Attribute Mapping section in SSO Configuration Portal ",src:i(5856).A+"",width:"2208",height:"742"})}),"\n",(0,t.jsx)(n.p,{children:"Attribute Mapping section in SSO Configuration Portal"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"2.2 Assign User/Group"})}),"\n",(0,t.jsx)(n.p,{children:"To finish the Service Provider section of the SAML configuration, you need to \u201cAssign\u201d the users who need to access to this application."}),"\n",(0,t.jsx)(n.p,{children:"Find the User/Group assignment section in your Identity Provider application and select and assign all the required users or user groups that need access to this application via Single Sign-On."}),"\n",(0,t.jsx)(n.h2,{id:"3-identity-provider-configuration",children:"3. Identity Provider Configuration"}),"\n",(0,t.jsx)(n.p,{children:"After you have completed the Service Provider configuration, you now need to configure the Identity Provider details in our SSO Configuration page."}),"\n",(0,t.jsx)(n.p,{children:"Depending on your Identity Provider, you can choose either of the below methods-"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automated Configuration (configuration via Metadata URL)"}),"\n",(0,t.jsx)(n.li,{children:"Manual Configuration (configuration via individual fields)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"automated-configuration-recommended",children:"Automated Configuration (recommended)"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"If you supply the Identity Provider Metadata URL, our system will automatically fetch the necessary configuration details required like Login URL, Identity Provider Entity ID, X.509 Certificate to complete the SAML SSO configuration."}),(0,t.jsx)(n.p,{children:"Also, we will periodically scan this url to keep the configuration up-to-date incase any of this information changes in your Identity Provider reducing the manual effort needed from your side."})]}),"\n",(0,t.jsx)(n.p,{children:"Locate and copy the Identity Provider Metadata URL from your Identity Provider\u2019s application."}),"\n",(0,t.jsxs)(n.p,{children:["Under ",(0,t.jsx)(n.strong,{children:"Identify Provider Configuration,"})," select ",(0,t.jsx)(n.strong,{children:"Configure using Metadata URL,"})," and paste it under ",(0,t.jsx)(n.strong,{children:"Metadata URL"})," on the ",(0,t.jsx)(n.strong,{children:"SSO Configuration Portal."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Paste Issuer URL on SSO Configuration Portal ",src:i(4187).A+"",width:"2182",height:"704"})}),"\n",(0,t.jsx)(n.p,{children:"Paste Issuer URL on SSO Configuration Portal"}),"\n",(0,t.jsx)(n.h3,{id:"manual-configuration",children:"Manual Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Choose \u201cConfigure Manually\u201d option in the \u201cIdentity Provider Configuration\u201d section"}),"\n",(0,t.jsxs)(n.li,{children:["Carefully copy the below configuration details from your Identity Provider section and paste them in the appropriate fields-","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Issuer (also referred to as Identity Provider Entity ID)"}),"\n",(0,t.jsx)(n.li,{children:"Sign-on URL (also referred to as SSO URL or Single Sign-on URL)"}),"\n",(0,t.jsxs)(n.li,{children:["Signing Certificate (also referred to as X.509 certificate)","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"You can also upload the certificate file instead of copying the contents manually."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"4-test-single-sign-on",children:"4. Test Single Sign-on"}),"\n",(0,t.jsxs)(n.p,{children:["To verify whether the SAML SSO configuration is completed correctly, click on ",(0,t.jsx)(n.strong,{children:"Test Connection"})," on the SSO Configuration Portal."]}),"\n",(0,t.jsxs)(n.p,{children:["If everything is done correctly, you will see a ",(0,t.jsx)(n.strong,{children:"Success"})," response as shown below."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Test your SAML application for SSO configuration ",src:i(9970).A+"",width:"2198",height:"978"})}),"\n",(0,t.jsx)(n.p,{children:"Test your SAML application for SSO configuration"}),"\n",(0,t.jsx)(n.p,{children:"If there\u2019s a misconfiguration, our test will identify the errors and will offer you a way to correct the configuration right on the screen."}),"\n",(0,t.jsx)(n.h2,{id:"5-enable-single-sign-on",children:"5. Enable Single Sign-on"}),"\n",(0,t.jsx)(n.p,{children:"After you successfully verified that the connection is configured correctly, you can enable the connection to let your users login to this application via Single Sign-on."}),"\n",(0,t.jsxs)(n.p,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Enable Connection."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Enable Single Sign-on",src:i(2477).A+"",width:"2194",height:"250"})}),"\n",(0,t.jsx)(n.p,{children:"Enable Single Sign-on"}),"\n",(0,t.jsx)(n.p,{children:"With this, we are done configuring your application for an SSO login setup."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},681:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/0-4d6721b580a95c2a2b6c8d827fcdeae9.png"},5856:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1-f1800e4148d478ea6569f9f449d19be0.png"},4187:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2-9d0fd035b866590a5d1fe92d270b18d6.png"},9970:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/3-d927059d4de4f9d360023b673934ddf4.png"},2477:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/4-c3ed9eeb03fbebe0f3cb7e367df38f3f.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(6540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);