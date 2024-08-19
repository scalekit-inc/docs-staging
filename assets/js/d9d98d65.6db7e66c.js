"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[2408],{9680:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(4848),r=t(8453),o=t(5312);const s={displayed_sidebar:"homeSidebar",title:"Implementing Single Sign-On with Scalekit: A Step-by-Step Guide",description:"Learn how to integrate Single Sign-On (SSO) into your application using Scalekit's APIs. This guide provides a detailed walkthrough for setting up SSO with major identity providers like Okta and Microsoft Entra ID.",keywords:["Single Sign-On","SSO","Scalekit","Identity Providers","SAML","OIDC","B2B SaaS","Authentication","API Integration","Security"]},a="Getting Started with Single Sign-on",l={id:"sso/quickstart",title:"Implementing Single Sign-On with Scalekit: A Step-by-Step Guide",description:"Learn how to integrate Single Sign-On (SSO) into your application using Scalekit's APIs. This guide provides a detailed walkthrough for setting up SSO with major identity providers like Okta and Microsoft Entra ID.",source:"@site/docs/sso/quickstart.mdx",sourceDirName:"sso",slug:"/sso/quickstart",permalink:"/sso/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"homeSidebar",title:"Implementing Single Sign-On with Scalekit: A Step-by-Step Guide",description:"Learn how to integrate Single Sign-On (SSO) into your application using Scalekit's APIs. This guide provides a detailed walkthrough for setting up SSO with major identity providers like Okta and Microsoft Entra ID.",keywords:["Single Sign-On","SSO","Scalekit","Identity Providers","SAML","OIDC","B2B SaaS","Authentication","API Integration","Security"]},sidebar:"homeSidebar",previous:{title:"Learn SSO Basics",permalink:"/sso/overview"},next:{title:"Admin Portal",permalink:"/sso/quickstart-admin-portal"}},c={},d=[{value:"1. Environment Setup",id:"1-environment-setup",level:2},{value:"Install the Scalekit SDK",id:"install-the-scalekit-sdk",level:3},...o.RM,{value:"Set up API credentials",id:"set-up-api-credentials",level:3},{value:"Get Your Credentials",id:"get-your-credentials",level:4},{value:"Store Credentials Securely",id:"store-credentials-securely",level:4},{value:"2. Authorize the Users",id:"2-authorize-the-users",level:2},{value:"3. Fetch User Details",id:"3-fetch-user-details",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{CodeWithHeader:s,SimpleCode:a,Subtitle:l,TabItem:c,Tabs:d}=n;return s||p("CodeWithHeader",!0),a||p("SimpleCode",!0),l||p("Subtitle",!0),c||p("TabItem",!0),d||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started-with-single-sign-on",children:"Getting Started with Single Sign-on"}),"\n",(0,i.jsx)(l,{children:(0,i.jsx)(n.p,{children:"Integrate with dozens of identity providers via SAML or OIDC"})}),"\n",(0,i.jsx)(n.p,{children:"Single Sign-On (SSO) enhances B2B SaaS application's security and offers a smooth user experience. Scalekit is an authentication platform that enables developers to implement enterprise features like SSO with just a few lines of code. Scalekit abstracts the complexities associated with SAML, OIDC and offers prebuilt integrations with all major identity providers like Okta, Microsoft Entra ID, Jumpcloud, Onelogin."}),"\n",(0,i.jsx)(n.p,{children:"This quickstart guide will show you how to implement SSO using Scalekit."}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"How Scalekit\nworks",src:t(8849).A+"",width:"4936",height:"3744"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(n.p,{children:"Scalekit offers turnkey SSO for B2B SaaS applications"})})]}),"\n",(0,i.jsx)(n.h2,{id:"1-environment-setup",children:"1. Environment Setup"}),"\n",(0,i.jsx)(n.p,{children:"Before diving in, make sure you have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Access to your Scalekit account and API credentials"}),"\n",(0,i.jsx)(n.li,{children:"Your app's codebase for implementing and testing changes"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"install-the-scalekit-sdk",children:"Install the Scalekit SDK"}),"\n",(0,i.jsx)(n.p,{children:"Scalekit offers language-specific SDKs for fast SSO integration. Use the installation instructions below for your technology stack."}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"set-up-api-credentials",children:"Set up API credentials"}),"\n",(0,i.jsx)(n.p,{children:"Secure your Scalekit API communication by setting up environment variables. You'll need three key pieces of information from your Scalekit Dashboard:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Environment URL"}),": The base URL for API calls. Each environment (dev, staging, prod) has a unique URL."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Client ID"}),": Your app's unique identifier for Scalekit communications."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Client Secret"}),": A private key to authenticate your API requests. For security purposes, this is generated only when you request using the Scalekit Dashboard."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"get-your-credentials",children:"Get Your Credentials"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Log into your Scalekit Dashboard."}),"\n",(0,i.jsx)(n.li,{children:'Select the "Development" environment.'}),"\n",(0,i.jsx)(n.li,{children:'Click on "API Config" to view your credentials.'}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"store-credentials-securely",children:"Store Credentials Securely"}),"\n",(0,i.jsxs)(n.p,{children:["Never hardcode secrets in your app. Use environment variables instead. Here's how to set them in a ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(s,{title:".env",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"SCALEKIT_ENVIRONMENT_URL='https://b2b-app-dev.scalekit.com'\nSCALEKIT_CLIENT_ID='<CLIENT_ID_FROM_SCALEKIT_DASHBOARD>'\nSCALEKIT_CLIENT_SECRET='<SECRET_FROM_SCALEKIT_DASHBOARD>'\n"})})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Never commit your ",(0,i.jsx)(a,{children:".env "})," file to version control."]}),"\n",(0,i.jsxs)(n.li,{children:["Rotate your ",(0,i.jsx)(a,{children:"secret "}),"regularly. See the ",(0,i.jsx)(n.a,{href:"/sso/guides/key-concepts/manage-client-secrets",children:"best practices for managing secrets"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"Now you're ready to start integrating SSO into your app! Next, we'll cover how to use the SDK to authenticate users."}),"\n",(0,i.jsx)(n.h2,{id:"2-authorize-the-users",children:"2. Authorize the Users"}),"\n",(0,i.jsx)(n.p,{children:"To start login with Single Sign-On (SSO), your app must redirect users to the Scalekit Authorization URL with appropriate social connection provider details."}),"\n",(0,i.jsx)(n.p,{children:"Construct the Authorization URL using the following query parameters:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Details"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(a,{className:"text--semibold",children:"redirect_uri"})}),(0,i.jsxs)(n.td,{children:["URI endpoint on your server to complete user login via SSO. ",(0,i.jsx)("br",{}),"Example: ",(0,i.jsxs)(a,{children:["https:",(0,i.jsx)("span",{}),"//your-saas-app.com/auth/callback"]})," After the user is logged into the social provider, Scalekit redirects the user to this URI with one time authorization ",(0,i.jsx)(n.code,{children:"code"}),". In the later section, we will explain how to use this unique ",(0,i.jsx)(n.code,{children:"code"})," to fetch user details"]}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(a,{className:"text--semibold",children:"client_id"})}),(0,i.jsx)(n.td,{children:"Your app's unique Scalekit identifier which is mandatory for all requests. This uniquely identifies both your app and the environment (staging, prod)."}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Any one of the SSO connection identifiers ",(0,i.jsx)("br",{}),(0,i.jsx)(a,{children:"- organization_id"}),(0,i.jsx)("br",{}),(0,i.jsx)(a,{children:"- connection_id"}),(0,i.jsx)("br",{}),(0,i.jsx)(a,{children:"- login_hint"}),(0,i.jsx)("br",{}),(0,i.jsx)(a,{children:"- domain"})]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(a,{className:"text--semibold",children:"organization_id"}),": Informs Scalekit which organization's Single Sign-on to use to authenticate the user with. For e.g., ",(0,i.jsx)(n.code,{children:"org_124234234"}),(0,i.jsx)("br",{}),"Note: If there are multiple active SSO connections configured for an organization, we will pick the first SSO connection to authenticate the user with. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(a,{className:"text--semibold",children:"connection_id"}),": Informs Scalekit which specific Single Sign-on connection to use to authenticate the user with 's Single Sign-on to use. For e.g., ",(0,i.jsx)(n.code,{children:"conn_124234234"})," ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(a,{className:"text--semibold",children:"domain"}),": Informs Scalekit which Single Sign-on connection to use that is configured with the domain. For e.g., ",(0,i.jsx)(n.code,{children:"acmecorp.com"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(a,{className:"text--semibold",children:"login_hint"}),": Informs Scalekit which Single Sign-on connection to use that is configured for that domain portion of the email address. For e.g., ",(0,i.jsx)(n.code,{children:"john@acmecorp.com"})," ",(0,i.jsx)("br",{})]}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(s,{title:"Example Authorization URL",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"https://auth.scalekit.com/authorize?\nclient_id=skc_122056050118122349527&\nredirect_uri=https://yourapp.com/auth/callback&\norganization_id=org_12434341\n"})})}),"\n",(0,i.jsxs)(n.p,{children:["See our ",(0,i.jsx)(n.a,{href:"/sso/guides/key-concepts/authorization-url",children:"Authorization URL Parameters Guide"})," for a full list of accepted parameters."]}),"\n",(0,i.jsx)(n.p,{children:"Next, construct your Authorization URL with these parameters and redirect users to this URL when they try to log in."}),"\n",(0,i.jsxs)(d,{groupId:"tech-stack",queryString:!0,children:[(0,i.jsx)(c,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"showLineNumbers",children:"import { ScalekitClient } from '@scalekit-sdk/node';\n// Initialize the SDK client\nconst scalekit = new ScalekitClient(\n  '<SCALEKIT_ENVIRONMENT_URL>',\n  '<SCALEKIT_CLIENT_ID>',\n  '<SCALEKIT_CLIENT_SECRET>',\n);\n\nconst options = {};\n\n// Option 1: Authorization URL with the organization ID\noptions[\"organizationId\"] = 'org_15421144869927830';\n\n// Option 2: Authorization URL with login hint\noptions[\"connectionId\"] = 'conn_15696105471768821';\n\n// Option 3: Authorization URL with login hint\noptions[\"loginHint\"] = 'user@example.com';\n\nconst authorizationURL = scalekit.getAuthorizationUrl(\n  redirectUrl,\n  options,\n);\n"})})}),(0,i.jsx)(c,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions\n\n# Initialize the SDK client\nscalekit = ScalekitClient(\n  '<SCALEKIT_ENVIRONMENT_URL>',\n  '<SCALEKIT_CLIENT_ID>',\n  '<SCALEKIT_CLIENT_SECRET>'\n)\n\noptions = AuthorizationUrlOptions()\n\n\n# Option 1: Authorization URL with the organization ID\noptions.organization_id = 'org_15421144869927830'\n\n# Option 2: Authorization URL with login hint\noptions.login_hint = 'user@example.com'\n\n# Option 3: Authorization URL with the connection ID\noptions.connection_id = 'conn_15696105471768821'\n\nauthorization_url = scalekit_client.get_authorization_url(\n  redirect_uri=<redirect_uri>,\n  options=options\n)\n\n# Redirect the user to this authorization URL\n"})})}),(0,i.jsx)(c,{value:"golang",label:"Go",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:"showLineNumbers",children:'import (\n  "github.com/scalekit/scalekit-sdk-go"\n)\n\nfunc main() {\n  // Initialize the SDK client\n  scalekitClient := scalekit.NewScalekitClient(\n    "<SCALEKIT_ENVIRONMENT_URL>",\n    "<SCALEKIT_CLIENT_ID>",\n    "<SCALEKIT_CLIENT_SECRET>"\n  )\n\n  options := scalekitClient.AuthorizationUrlOptions{}\n\n\n  // Option 1: Authorization URL with the organization ID\n  options.OrganizationId = "org_15421144869927830"\n\n  // Option 2: Authorization URL with the connection ID\n  options.ConnectionId = "conn_15696105471768821"\n\n  // Option 3: Authorization URL with Login Hint\n  // User\'s email domain detects the correct enterprise SSO connection.\n  options.LoginHint = "user@example.com"\n\n  authorizationURL := scalekitClient.GetAuthorizationUrl(\n    redirectUrl,\n    options,\n  )\n   // Next step is to redirect the user to this authorization URL\n}\n\n// Redirect the user to this authorization URL\n'})})}),(0,i.jsx)(c,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:"showLineNumbers",children:'package com.scalekit;\n\nimport com.scalekit.ScalekitClient;\nimport com.scalekit.internal.http.AuthorizationUrlOptions;\n\npublic class Main {\n\n  public static void main(String[] args) {\n    // Initialize the SDK client\n    ScalekitClient scalekitClient = new ScalekitClient(\n      "<SCALEKIT_ENVIRONMENT_URL>",\n      "<SCALEKIT_CLIENT_ID>",\n      "<SCALEKIT_CLIENT_SECRET>"\n    );\n    AuthorizationUrlOptions options = new AuthorizationUrlOptions();\n    // Option 1: Authorization URL with the organization ID\n    options.setOrganizationId("org_13388706786312310");\n    // Option 2: Authorization URL with the connection ID\n    options.setConnectionId("con_13388706786312310");\n    // Option 3: Authorization URL with Login Hint\n    // User\'s email domain detects the correct enterprise SSO connection.\n    options.setLoginHint("user@example.com");\n    try {\n      String url = scalekitClient\n        .authentication()\n        .getAuthorizationUrl(redirectUrl, options)\n        .toString();\n    } catch (Exception e) {\n      System.out.println(e.getMessage());\n    }\n  }\n}\n// Redirect the user to this authorization URL\n\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Finally, handle the callback at your ",(0,i.jsx)(a,{children:"redirect_uri"})," to complete the Authentication. Understand user authorization procedure through a NextJS example for ",(0,i.jsx)(n.a,{href:"/sso/guides/setup-sso/build-login-page",children:"adding SSO to the Login Page"})]}),"\n",(0,i.jsx)(n.h2,{id:"3-fetch-user-details",children:"3. Fetch User Details"}),"\n",(0,i.jsxs)(n.p,{children:["After a successful SSO, Scalekit redirects the user to your ",(0,i.jsx)(a,{children:"redirect_uri"})," with a unique ",(0,i.jsx)(a,{children:"code"})," in the browser. Exchange the ",(0,i.jsx)(a,{children:"code"})," for user profile details (on the serverside)."]}),"\n",(0,i.jsxs)(n.p,{children:["Here's how to turn that ",(0,i.jsx)(a,{children:"code"})," into user data:"]}),"\n",(0,i.jsxs)(d,{groupId:"tech-stack",queryString:!0,children:[(0,i.jsx)(c,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"showLineNumbers",children:"// Handle oauth redirect_url, fetch code and error_description from request params\nconst {\n  code,\n  error,\n  error_description,\n  idp_initiated_login,\n  connection_id,\n  relay_state,\n} = req.query;\n\nif (error) {\n  // Handle errors\n}\n\n// Check: if it is an idp initiated login\nif (idp_initiated_login) {\n  const {\n    connection_id,\n    organization_id,\n    login_hint,\n    relay_state\n  } = await scalekit.getIdpInitiatedLoginClaims(idp_initiated_login);\n\n  // Generate Authorization URL\n  const authorizationURL = scalekit.getAuthorizationUrl(\n    redirectUri,\n    {\n      connectionId: connection_id,\n      ...(relay_state && {\n        state: relay_state,\n      }), // pass relay state\n    },\n  );\n\n  // Next:Redirect the user to this authorization URL\n}\n\nconst res = await scalekit.authenticateWithCode(code, redirectUri);\n\n// res.user has the authenticated user's details\nconst userEmail = res.user.email;\n\n// Next step: create a session for this user and allow access\n"})})}),(0,i.jsx)(c,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"# Handle oauth redirect_url, fetch code and error_description from request params\ncode = request.args.get('code')\nerror = request.args.get('error')\nerror_description = request.args.get('error_description')\nidp_initiated_login = request.args.get('idp_initiated_login')\nconnection_id = request.args.get('connection_id')\nrelay_state = request.args.get('relay_state')\n\nif error:\n    raise Exception(error_description)\n\nif idp_initiated_login:\n    claims = await scalekit.get_idp_initiated_login_claims(idp_initiated_login)\n    connection_id = claims.get('connection_id', None)\n    organization_id = claims.get('organization_id', None)\n    login_hint = claims.get('login_hint', None)\n    relay_state = claims.get('relay_state', None)\n    options.connection_id=connection_id\n    options.state=relay_state\n\n    # Generate Authorization URL\n    authorization_url = scalekit.get_authorization_url(\n      redirect_uri=redirect_uri,\n      options=options\n    )\n    # Next:redirect the user to this authorizationURL\n\nresult = scalekit.authenticate_with_code(code, <redirect_uri>)\n\n# result.user has the authenticated user's details\nuser_email = result.user.email\n\n# Next step: create a session for this user and allow access\n"})})}),(0,i.jsx)(c,{value:"golang",label:"Go",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",metastring:"showLineNumbers",children:'// Handle oauth redirect_url, fetch code and error_description from request params\ncode: = r.URL.Query().Get("code")\nerror: = r.URL.Query().Get("error")\nerrorDescription: = r.URL.Query().Get("error_description")\nidpInitiatedLogin: = r.URL.Query().Get("idp_initiated_login")\nconnectionID: = r.URL.Query().Get("connection_id")\nrelayState: = r.URL.Query().Get("relay_state")\n\nif error != "" {\n  // Handle errors\n}\n\n// Check: if it is an idp initiated login\nif idpInitiatedLogin: = r.URL.Query().Get("idp_initiated_login");\nidpInitiatedLogin != "" {\n  claims, err: = a.scalekit.GetIdpInitiatedLoginClaims(idpInitiatedLogin)\n  if err != nil {\n    http.Error(w, err.Error(), http.StatusInternalServerError)\n    return\n  }\n\n  // Generate Authorization URL\n  options: = scalekit.AuthorizationUrlOptions {\n    // Either ONE of the following properties\n    ConnectionId: claims.ConnectionID,\n    OrganizationId: claims.OrganizationID,\n    LoginHint: claims.LoginHint,\n  }\n  authUrl, err: = a.scalekit.GetAuthorizationUrl(<redirectUrl>,options)\n\n  if err != nil {\n    http.Error(w, err.Error(), http.StatusInternalServerError)\n    return\n  }\n  http.Redirect(w, r, authUrl.String(), http.StatusFound)\n}\n\n\n\nres, err: = a.scalekit.AuthenticateWithCode(code,<redirectUrl>)\n\nif err != nil {\n  // Handle errors\n}\n\n// res.User has the authenticated user\'s details\nuserEmail: = res.User.Email\n\n// Next step: create a session for this user and allow access\n'})})}),(0,i.jsx)(c,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// Handle oauth redirect_url, fetch code and error_description from request params\nString code = request.getParameter("code");\nString error = request.getParameter("error");\nString errorDescription = request.getParameter("error_description");\nString idpInitiatedLogin = request.getParameter("idp_initiated_login");\nString connectionID = request.getParameter("connection_id");\nString relayState = request.getParameter("relay_state");\n\nif (error != null && !error.isEmpty()) {\n    // Handle errors\n    return;\n}\n\n// Check: if it is an idp initiated login\n  if (idpInitiatedLoginToken != null) {\n    IdpInitiatedLoginClaims idpInitiatedLoginClaims =\n        scalekit.authentication().getIdpInitiatedLoginClaims(idpInitiatedLoginToken);\n    if (idpInitiatedLoginClaims == null) {\n      response.sendError(HttpStatus.BAD_REQUEST.value(),\n          "Invalid idp_initiated_login token");\n      return null;\n    }\n    // Either ONE of ConnectionId or OrganizationId or LoginHint\n    AuthorizationUrlOptions options = new AuthorizationUrlOptions();\n    if (idpInitiatedLoginClaims.getConnectionID() != null) {\n      options.setConnectionId(idpInitiatedLoginClaims.getConnectionID());\n    }\n\n    // Generate Authorization URL\n    String url = scalekit.authentication()\n                     .getAuthorizationUrl(redirectUrl, options)\n                     .toString();\n    response.sendRedirect(url);\n\ntry {\n    AuthenticationResponse res = scalekit.authentication().authenticateWithCode(code, redirectUrl);\n    String userEmail = res.getIdTokenClaims().getEmail();\n\n    // Next step: create a session for this user and allow access\n} catch (Exception e) {\n    // Handle errors\n}\n'})})})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},5312:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>o});var i=t(4848),r=t(8453);const o=[];function s(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components},{CodeWithHeader:t,TabItem:o,Tabs:s}=n;return t||l("CodeWithHeader",!0),o||l("TabItem",!0),s||l("Tabs",!0),(0,i.jsx)(t,{title:"Setup SDK",children:(0,i.jsxs)(s,{groupId:"tech-stack",queryString:!0,children:[(0,i.jsx)(o,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install @scalekit-sdk/node\n"})})}),(0,i.jsx)(o,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pip install scalekit-sdk-python\n"})})}),(0,i.jsx)(o,{value:"golang",label:"Go",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"go get -u github.com/scalekit-inc/scalekit-sdk-go\n"})})}),(0,i.jsxs)(o,{value:"java",label:"Java",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'/* Gradle users - add the following to your dependencies in build file */\nimplementation "com.scalekit:scalekit-sdk-java:1.0.0"\n'})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"\x3c!-- Maven users - add the following to your `pom.xml` --\x3e\n<dependency>\n    <groupId>com.scalekit</groupId>\n    <artifactId>scalekit-sdk-java</artifactId>\n    <version>1.0.0</version>\n</dependency>\n"})})]})]})})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}function l(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8849:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/how-sso-works-de15f3ce77c845566eb50fd560d12a28.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);