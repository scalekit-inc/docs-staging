"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[1556],{6203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=n(4848),r=n(8453),o=n(3764);const s={slug:"/"},a="SSO Quick Start",l={id:"single-sign-on/quickstart-sso",title:"SSO Quick Start",description:"This step-by-step guide will help you implement enterprise-grade Single Sign-On (SSO) in your application through Scalekit\u2019s intuitive APIs.",source:"@site/docs/single-sign-on/quickstart-sso.md",sourceDirName:"single-sign-on",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"tutorialSidebar",next:{title:"Go-live",permalink:"/single-sign-on/golive-checklist"}},c={},d=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"Implement Single Sign-on",id:"implement-single-sign-on",level:2},{value:"0. Before getting started",id:"0-before-getting-started",level:3},{value:"1. Install SDK",id:"1-install-sdk",level:3},...o.RM,{value:"2. Configure your Secrets",id:"2-configure-your-secrets",level:3},{value:"3. Initiate the Authorization URL",id:"3-initiate-the-authorization-url",level:3},{value:"4. Fetch User Details",id:"4-fetch-user-details",level:3},{value:"Onboarding Enterprise Customers",id:"onboarding-enterprise-customers",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Link:s,SimpleCode:a,TabItem:l,Tabs:c}=t;return s||p("Link",!0),a||p("SimpleCode",!0),l||p("TabItem",!0),c||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"sso-quick-start",children:"SSO Quick Start"}),"\n",(0,i.jsx)(t.p,{children:"This step-by-step guide will help you implement enterprise-grade Single Sign-On (SSO) in your application through Scalekit\u2019s intuitive APIs."}),"\n",(0,i.jsx)(t.p,{children:"Scalekit facilitates seamless integration between your application and a multitude of Identity Providers (IdPs) supporting SAML or OIDC protocols. Acting as an authentication middleware, Scalekit abstracts the complexities associated with SAML, OIDC, and OAuth 2.0, enabling you to focus on delivering a top-notch user experience."}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.img,{alt:"How Scalekit works",src:n(2316).A+"",width:"5776",height:"1924"}),"\n",(0,i.jsx)("figcaption",{children:"Scalekit in a nutshell"})]}),"\n",(0,i.jsx)(t.h2,{id:"what-youll-build",children:"What you'll build"}),"\n",(0,i.jsx)(t.p,{children:"By following this guide, you\u2019ll implement an SSO solution that simplifies your user authentication process and securely connects to customers' IdPs."}),"\n",(0,i.jsx)(t.p,{children:"The sequence diagram below explains the SSO workflow between your application, Scalekit, and identity providers in your customers organizations."}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.img,{alt:"Sequence Diagram for SSO Workflow",src:n(1929).A+"",width:"4936",height:"3744"}),"\n",(0,i.jsx)("figcaption",{children:"How Scalekit integrates with your SSO flow"})]}),"\n",(0,i.jsx)(t.p,{children:"Here's a description of how it works:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"A user initiates a login to your application."}),"\n",(0,i.jsx)(t.li,{children:"Your application recognizes the need for SSO and redirects the user to Scalekit's Authorization URL and pass their unique identifier, which could be user's email address or the organization ID."}),"\n",(0,i.jsx)(t.li,{children:"Based on the user details provided, Scalekit determines the appropriate SSO configuration and redirects the user to the organization\u2019s identity provider"}),"\n",(0,i.jsx)(t.li,{children:"The user is authenticated by their IdP using either SAML or OIDC."}),"\n",(0,i.jsx)(t.li,{children:"Post-authentication, the IdP sends the user's profile details to Scalekit."}),"\n",(0,i.jsx)(t.li,{children:"Scalekit will redirect the user to the Redirect URI that is configured as part of Authorization URL (in Step 2) with a one-time code."}),"\n",(0,i.jsx)(t.li,{children:"Your application exchanges the one-time code along with your API credentials to fetch the user details shared by the IdP"}),"\n",(0,i.jsx)(t.li,{children:"Based on the user details received from Scalekit, your application will create a session, login the user to your product, and allow the user to access the resource(s)."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"implement-single-sign-on",children:"Implement Single Sign-on"}),"\n",(0,i.jsx)(t.h3,{id:"0-before-getting-started",children:"0. Before getting started"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ensure you're logged into your ",(0,i.jsx)(t.a,{href:"https://app.scalekit.com",children:"Scalekit account"})," and have your API credentials ready"]}),"\n",(0,i.jsx)(t.li,{children:"Access to your codebase is also necessary to implement and test changes"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"1-install-sdk",children:"1. Install SDK"}),"\n",(0,i.jsx)(t.p,{children:"Scalekit provides SDKs for various languages to quickly add SSO in your application."}),"\n",(0,i.jsx)(t.p,{children:"Install the relevant SDK using the command below:"}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsx)(t.h3,{id:"2-configure-your-secrets",children:"2. Configure your Secrets"}),"\n",(0,i.jsx)(t.p,{children:"Set up your API credentials, found on your Scalekit dashboard, as environment variables for secure API communication."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"API Credentials:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Environment URL"}),": this is the base url of the environment to which all your API calls are made to. This URL is unique to an environment, so that you can route the API requests to the appropriate environment."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Client ID"}),": A unique, alpha-numeric string that your application will use for all communications with Scalekit."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Client Secret"}),": Randomly generated secret that is used to authenticate your APIs. For security purposes, this is generated only when you request using the Scalekit Dashboard. See ",(0,i.jsx)(t.a,{href:"/best-practices/manage-client-secrets",children:"here"})," to learn best practices on how to manage Client Secret."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'Now, go to your Scalekit Dashboard, choose the "Development" environment and select \u201cAPI Config\u201d to access these configuration details.'}),"\n",(0,i.jsx)(t.p,{children:"We recommend you to store these credentials as environment variables (in your .env file)."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",metastring:'title=".env"',children:'SCALEKIT_ENVIRONMENT_URL="<https://yoursaas-dev.scalekit.com>"\nSCALEKIT_CLIENT_ID="skc_122056050118122349527"\nSCALEKIT_CLIENT_SECRET="test_CbGfKxzwUVO6ISirRcTKMbcX3dsfdsfdsfsdfdsfsdfGmXLN"\n'})}),"\n",(0,i.jsx)(t.h3,{id:"3-initiate-the-authorization-url",children:"3. Initiate the Authorization URL"}),"\n",(0,i.jsx)(t.p,{children:"The endpoint to initiate SSO is crucial for the authentication workflow. The SSO integration starts after you redirect the user to Scalekit Authorization URL."}),"\n",(0,i.jsxs)(t.p,{children:["As part of Authorization URL, you will need to send the following required parameters for successfully initiating SSO. You can read more details about the entire list of parameters that are accepted as part of authorization url ",(0,i.jsx)(s,{href:"/best-practices/authorization-url",target:"_blank",children:"here"})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Redirect URI:"})," A redirect URI is the endpoint in your application that Scalekit redirects the user to after they have completed the authentication with their Identity Provider."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After a successful user authentication, Scalekit provides a temporary code value to the redirect_uri you configured. You'll need to POST this code back to Scalekit with your client secret in order to retrieve user details."}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"SSO Connection Identifier:"})," One of the following request parameters should be present to identify the appropriate SSO connection to be used to initiate the SSO."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(a,{children:"organization_id"})}),": Organization ID that the user belongs to. This is the preferred parameter for SAML and OIDC connections.  Example: ",(0,i.jsx)(a,{children:"org_12434341"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(a,{children:"connection_id"})}),": You can also use the Connection ID for the specific SSO connection. Example: ",(0,i.jsx)(a,{children:"conn_121414141"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(a,{children:"domain"})}),": If your application enforces SSO for all users that belong to a particular email domain, this attribute can be useful to detect the appropriate SSO connection. Example: ",(0,i.jsx)(a,{children:"google.com or yourcustomerdomain.com"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"client_id:"})," Client ID uniquely identifies your application and environment and hence it is mandatory."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"our SDK automatically fills in the required parameters while constructing the authorizationURL as shown below."})}),"\n",(0,i.jsxs)(c,{groupId:"tech-stack",querystring:!0,children:[(0,i.jsx)(l,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:"showLineNumbers",children:"import {Scalekit} from \"@scalekit-sdk/node\";\n// init client\nconst scalekit = new Scalekit(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n);\n\n// Authorization URL with organization ID parameter and optional state parameter\n const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n   organizationId: 'org_12442',\n   state: state\n })\n\n// Authorization URL with optional login hint parameter\n const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n   loginHint: \"user@example.com\",\n   organizationId: 'org_12442'\n })\n\n// Authorization URL with connection ID parameter\n const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n   connectionId: 'conn_1242242',\n })\n\n// next step is to redirect the user to this authorizationURL\n"})})}),(0,i.jsx)(l,{value:"py",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"showLineNumbers",children:"from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions\n\nscalekit_client = ScalekitClient(\n  <SCALEKIT_ENVIRONMENT_URL>, \n  <SCALEKIT_CLIENT_ID>, \n  <SCALEKIT_CLIENT_SECRET>\n)\n\noptions = AuthorizationUrlOptions()\n# use one of the three strategies below to determine how to log the user in.\n\n# If you would like to authenticate the user via connection_id\noptions.connection_id = 'conn_1242242'\n\n# If you would like to authenticate the user via organization_id\noptions.organization_id = 'org_12442'\n\n# If you would like to authenticate the user via their email address \n# Domain portion of the user's email address is used to detect the appropriate enterprise SSO connection\noptions.login_hint = '<user@example.com>'\n\nauthorization_url = scalekit_client.get_authorization_url(\n  redirect_uri=<redirect_uri>, \n  options=options\n)\n\n"})})})]}),"\n",(0,i.jsx)(t.h3,{id:"4-fetch-user-details",children:"4. Fetch User Details"}),"\n",(0,i.jsxs)(t.p,{children:["After Scalekit completes SSO authentication, it sends a unique authorization code to the redirect_uri that is sent as part of the authorization URL above. You will need to send this ",(0,i.jsx)(t.code,{children:"code"})," and ",(0,i.jsx)(t.code,{children:"redirect_uri"})," to get the authenticated user's profile information."]}),"\n",(0,i.jsxs)(c,{groupId:"tech-stack",querystring:!0,children:[(0,i.jsx)(l,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:"showLineNumbers",children:'const {code, error, error_description, idp_initiated_login, connection_id, relay_state} = req.query;\n\nif (error) {\n  // handle errors\n}\n\n// check if this is an idp initiated login\nif (idp_initiated_login && idp_initiated_login === "success") {\n  // handle idp initiated login\n  const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n    connectionId: connection_id,\n    ...(relay_state && {state: relay_state}) // optionally pass relay state as state parameter\n  })\n\n  // next step is to redirect the user to this authorizationURL\n}\n\n// if there are no errors and if this is not an IdP initiated SSO, then authenticate with the code\nconst res = await sc.authenticateWithCode({\n  code: code,\n  redirectUri: redirectUri\n});\n\n// res.user has the authenticated user\'s details \nconst userEmail = res.user.email;\n\n\n// next step is to create a session for this user and allow access to your application resources\n'})})}),(0,i.jsx)(l,{value:"py",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"showLineNumbers",children:"from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions\n\nscalekit_client = ScalekitClient(<SCALEKIT_ENVIRONMENT_URL>, <SCALEKIT_CLIENT_ID>, <SCALEKIT_CLIENT_SECRET>)\n\n# Handle the oauth redirect_url \n# fetch code and error_description from request parameters.\ncode = request.args.get('code')\nerror = request.args.get('error')\nerror_description = request.args.get('error_description')\nidp_initiated_login = request.args.get('idp_initiated_login')\nconnection_id = request.args.get('connection_id')\nrelay_state = request.args.get('relay_state')\n\nif error:\n    raise Exception(error_description)\n\nresult = scalekit_client.authenticate_with_code(<code>, <redirect_uri>)\n# result.user has the authenticated user's details\nuser_email = result.user.email\n\n# TODO Create a session and redirect the user to your dashboard\n"})})})]}),"\n",(0,i.jsx)(t.h2,{id:"onboarding-enterprise-customers",children:"Onboarding Enterprise Customers"}),"\n",(0,i.jsx)(t.p,{children:"Once SSO is implemented, you\u2019ll want to thoroughly test the setup. Before going live, ensure that you go through our production checklist to keep your application secure and ready for enterprise use."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/single-sign-on/golive-checklist",children:"Production Check-list"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Explore more. Check out:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/scalekit-inc/scalekit-sdk-node",children:"Node.js SDK"})," - Reference the SDK used in this guide for a deep dive into its capabilities"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/scalekit-inc/scalekit-nextjs-example",children:"Sample Next JS App"})," - Download and explore a fully functional sample app to jumpstart your implementation"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Now that you have a working SSO integration with Scalekit, you're ready to provide a seamless authentication experience for your users. Happy coding!"})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3764:(e,t,n)=>{n.d(t,{Ay:()=>a,RM:()=>o});var i=n(4848),r=n(8453);const o=[];function s(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components},{TabItem:n,Tabs:o}=t;return n||l("TabItem",!0),o||l("Tabs",!0),(0,i.jsxs)(o,{groupId:"tech-stack",querystring:!0,children:[(0,i.jsx)(n,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install @scalekit-sdk/node\n"})})}),(0,i.jsx)(n,{value:"py",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"pip install scalekit-sdk-python\n"})})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}function l(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1929:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/How SSO works-de15f3ce77c845566eb50fd560d12a28.png"},2316:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/How_Scalekit_connects_(1)-2d96085d85f28cabcbe8b91fcc604bb9.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);