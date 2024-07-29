"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[5833],{3582:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(4848),n=i(8453);const r={},a="Customize User Attributes",o={id:"sso/guides/setup-sso/customize-user-attributes",title:"Customize User Attributes",description:"Scalekit simplifies Single Sign-On (SSO) by managing user information between Identity Providers (IdPs) and B2B applications. The IdPs provide standard user properties, such as email and firstname, to your application, thus helping recognize the user.",source:"@site/docs/sso/guides/setup-sso/customize-user-attributes.mdx",sourceDirName:"sso/guides/setup-sso",slug:"/sso/guides/setup-sso/customize-user-attributes",permalink:"/sso/guides/setup-sso/customize-user-attributes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"homeSidebar",previous:{title:"Handle SSO Errors",permalink:"/sso/guides/setup-sso/error-handling"},next:{title:"Integrate with Auth0",permalink:"/sso/guides/integrate-with-your-auth-system/auth0"}},d={},l=[{value:"Create a New Attribute",id:"create-a-new-attribute",level:2},{value:"Setup IdP Attribute Relay",id:"setup-idp-attribute-relay",level:2},{value:"<strong>Testing SSO for New Attributes</strong>",id:"testing-sso-for-new-attributes",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"customize-user-attributes",children:"Customize User Attributes"}),"\n",(0,s.jsx)(t.p,{children:"Scalekit simplifies Single Sign-On (SSO) by managing user information between Identity Providers (IdPs) and B2B applications. The IdPs provide standard user properties, such as email and firstname, to your application, thus helping recognize the user."}),"\n",(0,s.jsx)(t.p,{children:"Consider that we want to get employee number of the user logging into the application. This guide demonstrate how to add your own custom attribute (such as employee number) and map it\u2019s value from the Identity Provider."}),"\n",(0,s.jsx)(t.p,{children:"Broadly, we'll go through two steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create a new attribute in Scalekit"}),"\n",(0,s.jsx)(t.li,{children:"Set up the value that the Identity Provider should relay to this attribute."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"create-a-new-attribute",children:"Create a New Attribute"}),"\n",(0,s.jsx)(t.p,{children:"Let's begin by signing into Scalekit dashboard:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'Navigate to the "SSO" section'}),"\n",(0,s.jsx)(t.li,{children:'In the "User Attributes" section, click on "Add Attribute"'}),"\n",(0,s.jsx)(t.li,{children:'Add "Employee Number" as Display name'}),"\n"]}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"add\nattribute",src:i(1969).A+"",width:"1146",height:"600"})})}),"\n",(0,s.jsx)(t.p,{children:"You'll now notice \"Employee Number\" in the list of user attributes. Scalekit is now ready to receive this attribute from your customers' identity providers (IdPs)"}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"see\nattribute",src:i(5552).A+"",width:"1146",height:"600"})})}),"\n",(0,s.jsx)(t.h2,{id:"setup-idp-attribute-relay",children:"Setup IdP Attribute Relay"}),"\n",(0,s.jsxs)(t.p,{children:["Now, we'll set up an Identity Provider to transmit these details. For the purposes of this guide, we'll use Okta as IdP to relay the ",(0,s.jsx)(t.code,{children:"employee_number"})," to Scalekit. However, similar functionality can be achieved using any other IdP."]}),"\n",(0,s.jsxs)(t.p,{children:['Note that in this specific Okta instance, the "Employee Number" is a default attribute that hasn\'t been utilized yet. Before we proceed forward, it\'s important to modify the profile\u2019s "employee_number" attribute with any desired number for this example (For example, ',(0,s.jsx)(t.code,{children:"1729"}),"). For a detailed guide on how to achieve this, consult ",(0,s.jsx)(t.a,{href:"https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-edit-user-attributes.htm#:~:text=Click%20the%20Profile%20tab",children:"Okta\u2019s dedicated help article on updating profile attributes"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Alternatively, you can ",(0,s.jsx)(t.a,{href:"https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-add-custom-user-attributes.htm#:~:text=In%20the%20Admin%20Console%20%2C%20go%20to%20Directory%20Profile%20Editor",children:"add a new custom attribute in the Okta Profile Editor"}),"."]}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"map\nattribute",src:i(8683).A+"",width:"2764",height:"1578"})})}),"\n",(0,s.jsx)(t.h2,{id:"testing-sso-for-new-attributes",children:(0,s.jsx)(t.strong,{children:"Testing SSO for New Attributes"})}),"\n",(0,s.jsx)(t.p,{children:"In the Scalekit dashboard, navigate to Organizations."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Select the Organization that you'd like to add custom attribute."}),"\n",(0,s.jsx)(t.li,{children:"Navigate to the SSO Connection."}),"\n",(0,s.jsxs)(t.li,{children:["Go to ",(0,s.jsx)(t.strong,{children:"Test Connection"})," - you'll find this if the IdP has already been established"]}),"\n"]}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"map attr\nscalekit",src:i(4671).A+"",width:"2764",height:"1578"})})}),"\n",(0,s.jsx)(t.p,{children:"Upon testing the connection, if notice the update user profile (employee_number as\n1729 in this example), this signifies a successful test."}),"\n",(0,s.jsx)(t.p,{children:"Subsequently, these details will be integrated into your B2B application through Scalekit.This ensures seamless recognition and handling of customer user attributes during the SSO authentication process."})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1969:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/1-add-attribute-scalekit-525d252039bba747f14623d9aad57a99.png"},5552:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/2-see-attribute-scalekit-42b4c724b05608d0a5794336e671a795.png"},8683:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/3-map-attribute-okta-26c6202fadc5892ee81216ca6e5df6c2.png"},4671:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/4-map-attribute-scalekit-17373b70735d00bb04c89fb2cc8f5cf3.png"},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var s=i(6540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);