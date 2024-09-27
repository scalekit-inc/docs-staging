"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[8727],{5015:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=i(4848),s=i(8453);const a={displayed_sidebar:"integrationsSidebar"},o="Okta Directory (SCIM Provisioning)",r={id:"integrations/okta-scim",title:"Okta Directory (SCIM Provisioning)",description:"Sync user lists with apps during onboarding",source:"@site/docs/integrations/okta-scim.mdx",sourceDirName:"integrations",slug:"/integrations/okta-scim",permalink:"/docs-staging/integrations/okta-scim",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"integrationsSidebar"},sidebar:"integrationsSidebar",previous:{title:"Firebase",permalink:"/docs-staging/integrations/firebase"},next:{title:"Azure AD",permalink:"/docs-staging/integrations/azure-scim"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Create an Endpoint and API Token",id:"create-an-endpoint-and-api-token",level:2},{value:"Add a New Application in Okta",id:"add-a-new-application-in-okta",level:2},{value:"Enable Sending and Receiving Events in Provisioning Settings",id:"enable-sending-and-receiving-events-in-provisioning-settings",level:2},{value:"Provisioning Options for the App being onboarded",id:"provisioning-options-for-the-app-being-onboarded",level:2},{value:"User and Group Assignment",id:"user-and-group-assignment",level:2}];function p(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Subtitle:a,TermTip:o}=n;return a||g("Subtitle",!0),o||g("TermTip",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"okta-directory-scim-provisioning",children:"Okta Directory (SCIM Provisioning)"})}),"\n",(0,t.jsx)(a,{children:"Sync user lists with apps during onboarding"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["This guide is designed to help ",(0,t.jsx)(o,{jargon:"administrator"}),"s seamlessly sync their Okta Directory with an\napplication they want to onboard to their organization. By integrating your application with Okta, you can automate user\nmanagement tasks and ensure that access rights are consistently up-to-date."]}),"\n",(0,t.jsx)(n.p,{children:"This registration sets up the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Endpoint"}),": This is the URL where Okta will send requests to the app you are onboarding. It acts as a communication\npoint between Okta and your application."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bearer Token"}),": This token is used by Okta to authenticate its requests to the endpoint. It ensures that the\nrequests are secure and authorized."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By setting up these components, you enable seamless synchronization between your application and the Okta directory."}),"\n",(0,t.jsx)(n.h2,{id:"create-an-endpoint-and-api-token",children:"Create an Endpoint and API Token"}),"\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(o,{jargon:"Admin Portal"}),' from the app being onboarded and select the "Directory Sync" tab. A list of Directory\nProviders will be displayed. Choose "Okta" as your Directory Provider. If the Admin Portal is not accessible from the\napp, request instructions from the app owner.']}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Okta SCIM",src:i(9461).A+"",width:"1436",height:"710"}),"\n",(0,t.jsx)("figcaption",{children:"Setting up Directory Sync in the admin portal of an app being onboarded: Okta selected as the provider, awaiting configuration."})]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:'If the "Directory Sync" tab is not visible, it typically indicates that the feature is not enabled for your\norganization. Contact the app owner to enable it via the Scalekit Dashboard by navigating to Organizations > Your\nOrganization > Enable Directory Sync.'})}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Okta directory sync setup: Endpoint URL and one-time visible bearer token provided.",src:i(9880).A+"",width:"1834",height:"716"}),"\n",(0,t.jsx)("figcaption",{children:"Okta directory sync setup: Endpoint URL and one-time visible bearer token provided."})]})}),"\n",(0,t.jsx)(n.p,{children:'After selecting "Okta," click "Configure." This action will generate an Endpoint URL and Bearer token for your\norganization, allowing the app to listen to events and maintain synchronization with your organization.'}),"\n",(0,t.jsx)(n.h2,{id:"add-a-new-application-in-okta",children:"Add a New Application in Okta"}),"\n",(0,t.jsx)(n.p,{children:'Log in to the Okta admin dashboard and navigate to "Applications" in the main menu.'}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Okta app catalog: SCIM 2.0 Test App integration options displayed.",src:i(5529).A+"",width:"3092",height:"1945"}),"\n",(0,t.jsx)("figcaption",{children:"Okta app catalog: SCIM 2.0 Test App integration options displayed."})]})}),"\n",(0,t.jsxs)(n.p,{children:['If you haven\'t previously created a SCIM application in Okta, select "Browse App Catalog." Otherwise, choose it from\nyour existing list of applications. In the Okta Application dashboard, search for "',(0,t.jsx)(o,{jargon:"SCIM"}),' 2.0 Test App (OAuth Bearer Token)" and select the corresponding\nresult.']}),"\n",(0,t.jsx)(n.p,{children:'Click "Add Integration" on the subsequent page.'}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Adding SCIM 2.0 Test App integration in Okta for app being onboarded",src:i(5047).A+"",width:"3024",height:"1893"}),"\n",(0,t.jsx)("figcaption",{children:"Adding SCIM 2.0 Test App integration in Okta for app being onboarded."})]})}),"\n",(0,t.jsx)(n.p,{children:'Provide a descriptive name for the app, then proceed by clicking "Next."'}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Naming the app &#39;Hero SaaS&#39; during SCIM 2.0 Test App integration in Okta.",src:i(7358).A+"",width:"3018",height:"1888"}),"\n",(0,t.jsx)("figcaption",{children:"Naming the app 'Hero SaaS' during SCIM 2.0 Test App integration in Okta."})]})}),"\n",(0,t.jsx)(n.p,{children:'The default configuration is typically sufficient for most applications. However, if your directory requires additional\nsettings, such as Attribute Statements, configure these on the Sign-On Options page. Complete the application creation\nprocess by clicking "Done."'}),"\n",(0,t.jsx)(n.h2,{id:"enable-sending-and-receiving-events-in-provisioning-settings",children:"Enable Sending and Receiving Events in Provisioning Settings"}),"\n",(0,t.jsx)(n.p,{children:'In your application\'s Enterprise Okta admin panel, navigate to the "Provisioning" tab and select "Configure API\nIntegration."'}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Enabling API Integration in Okta for app being onboarded.",src:i(9825).A+"",width:"3104",height:"1968"}),"\n",(0,t.jsx)("figcaption",{children:"Enabling API Integration in Okta for app being onboarded."})]})}),"\n",(0,t.jsxs)(n.p,{children:["Copy the Endpoint URL and Bearer Token from your Admin Portal and paste them into the ",(0,t.jsx)(n.em,{children:"SCIM 2.0 Base URL"})," field and ",(0,t.jsx)(n.em,{children:"OAuth Bearer Token"}),' field, respectively. Verify the configuration by clicking "Test API Credentials," then save the settings.']}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Verifying SCIM credentials for Hero SaaS integration in Okta",src:i(6739).A+"",width:"3018",height:"1888"}),"\n",(0,t.jsx)("figcaption",{children:"Verifying SCIM credentials for Hero SaaS integration in Okta"})]})}),"\n",(0,t.jsx)(n.p,{children:"Give provisioning permissions to the API integration. This is necessary to allow Okta to send and receive events to the app. Upon successful configuration, the Provisioning tab will display a new set of options. These options will be utilized to\ncomplete the provisioning process for your application."}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Saving verified SCIM API integration settings for Hero SaaS in Okta",src:i(5162).A+"",width:"3018",height:"1895"}),"\n",(0,t.jsx)("figcaption",{children:"Saving verified SCIM API integration settings for Hero SaaS in Okta"})]})}),"\n",(0,t.jsx)(n.h2,{id:"provisioning-options-for-the-app-being-onboarded",children:"Provisioning Options for the App being onboarded"}),"\n",(0,t.jsx)(n.p,{children:'In the "To App" navigation section, enable the following options:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create Users"}),"\n",(0,t.jsx)(n.li,{children:"Update User Attributes"}),"\n",(0,t.jsx)(n.li,{children:"Deactivate Users"}),"\n"]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Granting provisioning permissions to Hero SaaS app in Okta SCIM integration",src:i(5898).A+"",width:"3022",height:"1888"}),"\n",(0,t.jsx)("figcaption",{children:"Granting provisioning permissions to Hero SaaS app in Okta SCIM integration."})]})}),"\n",(0,t.jsx)(n.p,{children:'After enabling these options, click "Save" to apply the changes.These settings allow Okta to perform user provisioning\nactions in your application, including creating new user accounts, updating existing user information, and deactivating\nuser accounts when necessary.'}),"\n",(0,t.jsx)(n.h2,{id:"user-and-group-assignment",children:"User and Group Assignment"}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Assigning users to Hero SaaS in Okta: Options to assign to individuals or groups",src:i(8566).A+"",width:"3022",height:"1894"}),"\n",(0,t.jsx)("figcaption",{children:"Assigning users to Hero SaaS in Okta: Options to assign to individuals or groups"})]})}),"\n",(0,t.jsx)(n.p,{children:"To assign users to the SAML Application:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Navigate to the "Assignments" tab.'}),"\n",(0,t.jsx)(n.li,{children:'From the "Assign" dropdown, select "Assign to People."'}),"\n",(0,t.jsx)(n.li,{children:'Choose the users you want to provision and click "Assign."'}),"\n",(0,t.jsx)(n.li,{children:"A form will open for each user. Review and populate the user's metadata fields."}),"\n",(0,t.jsx)(n.li,{children:'Scroll to the bottom and click "Save and Go Back."'}),"\n",(0,t.jsx)(n.li,{children:'Repeat this process for all users, then select "Done."'}),"\n"]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Assigning users to Hero SaaS in Okta: Selecting individuals for access",src:i(244).A+"",width:"3022",height:"1893"}),"\n",(0,t.jsx)("figcaption",{children:"Assigning users to Hero SaaS in Okta: Selecting individuals for access"})]})}),"\n",(0,t.jsx)(n.p,{children:"To push groups and sync group membership:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Navigate to the "Push Groups" tab.'}),"\n",(0,t.jsx)(n.li,{children:'From the "Push Groups" dropdown, select "Find groups by name."'}),"\n",(0,t.jsx)(n.li,{children:"Search for and select the group you want to push."}),"\n",(0,t.jsx)(n.li,{children:'Ensure the "Push Immediately" box is checked.'}),"\n",(0,t.jsx)(n.li,{children:'Click "Save."'}),"\n"]}),"\n",(0,t.jsx)("figure",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{alt:"Pushing group memberships to SCIM 2.0 Test App: Configuring the &#39;Avengers&#39; group in Okta",src:i(1899).A+"",width:"3024",height:"1888"}),"\n",(0,t.jsx)("figcaption",{children:"Pushing group memberships to SCIM 2.0 Test App: Configuring the 'Avengers' group in Okta"})]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-about-group-push.htm",children:"Okta recommends using separate groups for push groups"})," and group assignments to ensure accurate membership\nreflection. Without this separation, manual group pushes may be required for membership changes."]})}),"\n",(0,t.jsx)(n.p,{children:"After completing these steps, verify that the users and groups are successfully synced in the Administrator Portal."})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9461:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/0-90908d79909f7481e0e09418e3eddd72.png"},5529:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1-scim-search-b8a311b9130ed9113523155d7dca6a01.png"},8566:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/10-29648a993766d243059be94c9d205b4a.png"},244:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/12-eddbec141c5a948aab8e1ce9e8d46242.png"},1899:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/15-559b4d4c09bd1bddb83b5f4e99802dec.png"},5047:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2-ffa8b0e44dba694592d209dfdebf4108.png"},7358:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/3-44b42c26473c0c9d175e5696f70ece55.png"},5898:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/4.1-1230cb51429d48e8f9b2e0021d0e0c91.png"},9825:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/4-18668e2981c1edf1b760e40f20e05c49.png"},9880:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/5-01915374f7164e21c6ba858d6e053ce7.png"},6739:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/6-f2ba521c919f564cb808ede3376e1243.png"},5162:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/7-8028d62650c0b6b22cdb22573cf09e8e.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(6540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);