"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[8727],{5015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(4848),s=t(8453);const o={displayed_sidebar:"integrationsSidebar"},r="Okta Directory",a={id:"integrations/okta-scim",title:"Okta Directory",description:"Allow user list to sync with your apps",source:"@site/docs/integrations/okta-scim.mdx",sourceDirName:"integrations",slug:"/integrations/okta-scim",permalink:"/docs-staging/integrations/okta-scim",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"integrationsSidebar"},sidebar:"integrationsSidebar",previous:{title:"Firebase",permalink:"/docs-staging/integrations/firebase"},next:{title:"Azure AD",permalink:"/docs-staging/integrations/azure-scim"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Create an Endpoint and API Token in Your App",id:"create-an-endpoint-and-api-token-in-your-app",level:2},{value:"Add a New Application in Okta",id:"add-a-new-application-in-okta",level:2},{value:"Enable Sending and Receiving Events in Provisioning Settings",id:"enable-sending-and-receiving-events-in-provisioning-settings",level:2},{value:"Choose User and Group Attributes to Send to Your App",id:"choose-user-and-group-attributes-to-send-to-your-app",level:2},{value:"User and Group Assignment",id:"user-and-group-assignment",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Subtitle:t,TermTip:o}=n;return t||h("Subtitle",!0),o||h("TermTip",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"okta-directory",children:"Okta Directory"})}),"\n",(0,i.jsx)(t,{children:"Allow user list to sync with your apps"}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This guide is designed to help ",(0,i.jsx)(o,{jargon:"administrator"}),"s seamlessly sync their Okta Directory with an\napplication they want to onboard to their organization. By integrating your application with Okta, you can automate user\nmanagement tasks and ensure that access rights are consistently up-to-date."]}),"\n",(0,i.jsx)(n.p,{children:"This registration sets up the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Endpoint"}),": This is the URL where Okta will send requests to the app you are onboarding. It acts as a communication\npoint between Okta and your application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bearer Token"}),": This token is used by Okta to authenticate its requests to the endpoint. It ensures that the\nrequests are secure and authorized."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By setting up these components, you enable seamless synchronization between your application and the Okta directory."}),"\n",(0,i.jsx)(n.h2,{id:"create-an-endpoint-and-api-token-in-your-app",children:"Create an Endpoint and API Token in Your App"}),"\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(o,{jargon:"Admin Portal"}),' from the app and select the "Directory Sync" tab. A list of Directory\nProviders will be displayed. Choose "Okta" as your Directory Provider. If the Admin Portal is not accessible from the\napp, request a link from the app owner.']}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'If the "Directory Sync" tab is not visible, it typically indicates that the feature is not enabled for your\norganization. Contact the app owner to enable it via the Scalekit Dashboard by navigating to Organizations > Your\nOrganization > Enable Directory Sync.'})}),"\n",(0,i.jsx)(n.p,{children:'After selecting "Okta," click "Configure." This action will generate an Endpoint URL and Bearer token for your\norganization, allowing the app to listen to events and maintain synchronization with your organization.'}),"\n",(0,i.jsx)(n.h2,{id:"add-a-new-application-in-okta",children:"Add a New Application in Okta"}),"\n",(0,i.jsx)(n.p,{children:'Log in to the Okta admin dashboard and navigate to "Applications" in the main menu.'}),"\n",(0,i.jsx)(n.p,{children:'If you haven\'t previously created a SCIM application in Okta, select "Browse App Catalog." Otherwise, choose it from\nyour existing list of applications.'}),"\n",(0,i.jsxs)(n.p,{children:['In the Okta Application dashboard, search for "SCIM 2.0 Test App (OAuth Bearer Token)" and select the corresponding\nresult. (\u2139\ufe0f ',(0,i.jsx)(n.a,{href:"https://example.org",children:"What is SCIM ?"}),")"]}),"\n",(0,i.jsx)(n.p,{children:'Click "Add Integration" on the subsequent page.'}),"\n",(0,i.jsx)(n.p,{children:'Provide a descriptive name for the app, then proceed by clicking "Next."'}),"\n",(0,i.jsx)(n.p,{children:'The default configuration is typically sufficient for most applications. However, if your directory requires additional\nsettings, such as Attribute Statements, configure these on the Sign-On Options page. Complete the application creation\nprocess by clicking "Done."'}),"\n",(0,i.jsx)(n.h2,{id:"enable-sending-and-receiving-events-in-provisioning-settings",children:"Enable Sending and Receiving Events in Provisioning Settings"}),"\n",(0,i.jsx)(n.p,{children:'In your application\'s Enterprise Okta admin panel, navigate to the "Provisioning" tab and select "Configure API\nIntegration."'}),"\n",(0,i.jsx)(n.p,{children:"Enable API Integration by checking the corresponding box. Copy the Endpoint URL and Bearer"}),"\n",(0,i.jsx)(n.p,{children:"Token from your Admin Portal and paste them into the SCIM 2.0 Base URL field and OAuth Bearer Token field, respectively."}),"\n",(0,i.jsx)(n.p,{children:'Verify the configuration by clicking "Test API Credentials," then save the settings.'}),"\n",(0,i.jsx)(n.p,{children:"Upon successful configuration, the Provisioning tab will display a new set of options. These options will be utilized to\ncomplete the provisioning process for your application."}),"\n",(0,i.jsx)(n.h2,{id:"choose-user-and-group-attributes-to-send-to-your-app",children:"Choose User and Group Attributes to Send to Your App"}),"\n",(0,i.jsx)(n.p,{children:'In the "To App" navigation section, enable the following options:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create Users"}),"\n",(0,i.jsx)(n.li,{children:"Update User Attributes"}),"\n",(0,i.jsx)(n.li,{children:"Deactivate Users"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'After enabling these options, click "Save" to apply the changes.These settings allow Okta to perform user provisioning\nactions in your application, including creating new user accounts, updating existing user information, and deactivating\nuser accounts when necessary.'}),"\n",(0,i.jsx)(n.h2,{id:"user-and-group-assignment",children:"User and Group Assignment"}),"\n",(0,i.jsx)(n.p,{children:"To assign users to the SAML Application:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Navigate to the "Assignments" tab.'}),"\n",(0,i.jsx)(n.li,{children:'From the "Assign" dropdown, select "Assign to People."'}),"\n",(0,i.jsx)(n.li,{children:'Choose the users you want to provision and click "Assign."'}),"\n",(0,i.jsx)(n.li,{children:"A form will open for each user. Review and populate the user's metadata fields."}),"\n",(0,i.jsx)(n.li,{children:'Scroll to the bottom and click "Save and Go Back."'}),"\n",(0,i.jsx)(n.li,{children:'Repeat this process for all users, then select "Done."'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To push groups and sync group membership:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Navigate to the "Push Groups" tab.'}),"\n",(0,i.jsx)(n.li,{children:'From the "Push Groups" dropdown, select "Find groups by name."'}),"\n",(0,i.jsx)(n.li,{children:"Search for and select the group you want to push."}),"\n",(0,i.jsx)(n.li,{children:'Ensure the "Push Immediately" box is checked.'}),"\n",(0,i.jsx)(n.li,{children:'Click "Save."'}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note: Okta recommends using separate groups for push groups and group assignments to ensure accurate membership\nreflection. Without this separation, manual group pushes may be required for membership changes."}),"\n",(0,i.jsx)(n.p,{children:"After completing these steps, verify that the users and groups are successfully synced in the Administrator Portal."})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);