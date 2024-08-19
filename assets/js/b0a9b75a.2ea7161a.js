"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7652],{9771:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(4848),r=n(8453);const o={displayed_sidebar:"homeSidebar",slug:"authorization-url",title:"Authorization URL in Scalekit: Initiating Single Sign-On (SSO) Flow",description:"Learn how to construct the authorization URL in Scalekit to initiate the Single Sign-On (SSO) flow. Understand the required and optional parameters, usage notes, and see code examples for integrating Scalekit's authorization URL in your application using various SDKs.",keywords:["Scalekit","Authorization URL","Single Sign-On","SSO","OAuth","OpenID Connect","OIDC","Identity Provider","IdP","Authentication","SDK","Node.js","Python","Go","Java"]},s="Authorization URL",a={id:"sso/guides/key-concepts/authorization-url",title:"Authorization URL in Scalekit: Initiating Single Sign-On (SSO) Flow",description:"Learn how to construct the authorization URL in Scalekit to initiate the Single Sign-On (SSO) flow. Understand the required and optional parameters, usage notes, and see code examples for integrating Scalekit's authorization URL in your application using various SDKs.",source:"@site/docs/sso/guides/key-concepts/2-authorization-url.mdx",sourceDirName:"sso/guides/key-concepts",slug:"/sso/guides/key-concepts/authorization-url",permalink:"/sso/guides/key-concepts/authorization-url",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{displayed_sidebar:"homeSidebar",slug:"authorization-url",title:"Authorization URL in Scalekit: Initiating Single Sign-On (SSO) Flow",description:"Learn how to construct the authorization URL in Scalekit to initiate the Single Sign-On (SSO) flow. Understand the required and optional parameters, usage notes, and see code examples for integrating Scalekit's authorization URL in your application using various SDKs.",keywords:["Scalekit","Authorization URL","Single Sign-On","SSO","OAuth","OpenID Connect","OIDC","Identity Provider","IdP","Authentication","SDK","Node.js","Python","Go","Java"]},sidebar:"homeSidebar",previous:{title:"Integrate with Firebase",permalink:"/sso/guides/integrate-with-your-auth-system/firebase"},next:{title:"Redirect URI",permalink:"/sso/guides/key-concepts/redirect-uri"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Usage Notes",id:"usage-notes",level:2},{value:"SDK Usage",id:"sdk-usage",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{SimpleCode:n,TabItem:o,Tabs:s}=i;return n||u("SimpleCode",!0),o||u("TabItem",!0),s||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"authorization-url",children:"Authorization URL"}),"\n",(0,t.jsx)(i.p,{children:"Authorization URL is the first step in the Single Sign-on flow where you will redirect the user to Scalekit to authenticate the user with the appropriate Identity Provider."}),"\n",(0,t.jsx)(i.p,{children:"Your application constructs a URL with specific parameters that tell the authorization server(in this case: Scalekit) what the app is requesting. This URL looks like:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"https://b2b-app.scalekit.dev/oauth/authorize?\n    response_type=code&\n    client_id=skc_1234&\n    scope=openid%20profile&\n    redirect_uri=https%3A%2F%2Fyoursaas.com%2Fcallback&\n    organization_id=org_1243412&\n    state=aHR0cHM6Ly95b3Vyc2Fhcy5jb20vZGVlcGxpbms%3D\n"})}),"\n",(0,t.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Parameter"}),(0,t.jsx)(i.th,{children:"Requirement"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"client_id"})}),(0,t.jsx)(i.td,{children:"Required"}),(0,t.jsx)(i.td,{children:"Unique identifier obtained from the API Credentials page"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"nonce"})}),(0,t.jsx)(i.td,{children:"Optional"}),(0,t.jsx)(i.td,{children:"Random value for replay protection"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"organization_id"})}),(0,t.jsx)(i.td,{children:"Required*"}),(0,t.jsx)(i.td,{children:"Identifier for the organization initiating SSO"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"connection_id"})}),(0,t.jsx)(i.td,{children:"Required*"}),(0,t.jsx)(i.td,{children:"Identifier for the specific SSO connection"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"domain"})}),(0,t.jsx)(i.td,{children:"Required*"}),(0,t.jsx)(i.td,{children:"Domain part of the email address configured for an organization"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"provider"})}),(0,t.jsx)(i.td,{children:"Required*"}),(0,t.jsxs)(i.td,{children:["Unique provider name for Social Login. ",(0,t.jsx)("br",{}),"Currently, we support the following providers: ",(0,t.jsx)(i.code,{children:"google"}),", ",(0,t.jsx)(i.code,{children:"microsoft"}),", ",(0,t.jsx)(i.code,{children:"github"}),", ",(0,t.jsx)(i.code,{children:"gitlab"}),", ",(0,t.jsx)(i.code,{children:"linkedin"}),", ",(0,t.jsx)(i.code,{children:"salesforce"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"response_type"})}),(0,t.jsx)(i.td,{children:"Required"}),(0,t.jsxs)(i.td,{children:["Must be set to ",(0,t.jsx)(i.code,{children:"code"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"redirect_uri"})}),(0,t.jsx)(i.td,{children:"Required"}),(0,t.jsx)(i.td,{children:"URL where the response is sent, must match an authorized value"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"scope"})}),(0,t.jsx)(i.td,{children:"Required"}),(0,t.jsxs)(i.td,{children:["Must be set to ",(0,t.jsx)(i.code,{children:"openid email profile"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"state"})}),(0,t.jsx)(i.td,{children:"Optional"}),(0,t.jsx)(i.td,{children:"Opaque string for request-response correlation"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(n,{className:"text--semibold",children:"login_hint"})}),(0,t.jsx)(i.td,{children:"Optional"}),(0,t.jsx)(i.td,{children:"Email address of the user for authentication hint"})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:["* One of ",(0,t.jsx)(n,{children:"organization_id"}),", ",(0,t.jsx)(n,{children:"connection_id"}),", ",(0,t.jsx)(n,{children:"domain"}),", or ",(0,t.jsx)(n,{children:"provider"})," must be provided."]}),"\n",(0,t.jsx)(i.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(n,{children:"redirect_uri"})," must exactly match one of the authorized redirect values set in the API Credentials page."]}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(n,{children:"state"})," parameter is recommended for security purposes, including protection against cross-site request forgery."]}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(n,{children:"login_hint"})," can be used to prefill login information at the identity provider."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"sdk-usage",children:"SDK Usage"}),"\n",(0,t.jsxs)(s,{groupId:"tech-stack",queryString:!0,children:[(0,t.jsx)(o,{value:"node",label:"Node.js",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"import { ScalekitClient } from '@scalekit-sdk/node';\n\nconst scalekit = new ScalekitClient(\n  '<SCALEKIT_ENVIRONMENT_URL>',\n  '<SCALEKIT_CLIENT_ID>',\n  '<SCALEKIT_CLIENT_SECRET>',\n);\n\nconst options = {\n  loginHint: 'user@example.com',\n  organizationId: 'org_123235245',\n};\n\nconst authorizationURL = scalekit.getAuthorizationUrl(\n  redirectUri,\n  options,\n);\n"})})}),(0,t.jsx)(o,{value:"py",label:"Python",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-python",children:"\nfrom scalekit import ScalekitClient, AuthorizationUrlOptions\n\nscalekit = ScalekitClient(\n  '<SCALEKIT_ENVIRONMENT_URL>',\n  '<SCALEKIT_CLIENT_ID>',\n  '<SCALEKIT_CLIENT_SECRET>'\n)\n\noptions = AuthorizationUrlOptions(\n  organization_id=\"org_12345\",\n  login_hint=\"user@example.com\",\n)\n\nauthorization_url = scalekit.get_authorization_url(\n  redirect_uri,\n  options\n)\n\n"})})}),(0,t.jsx)(o,{value:"golang",label:"Go",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-go",children:'\nimport (\n  "github.com/scalekit/scalekit-sdk-go"\n)\n\nfunc main() {\n  scalekitClient := scalekit.NewScalekitClient(\n    "<SCALEKIT_ENVIRONMENT_URL>",\n    "<SCALEKIT_CLIENT_ID>",\n    "<SCALEKIT_CLIENT_SECRET>"\n  )\n\n  options := scalekitClient.AuthorizationUrlOptions{\n    OrganizationId: "org_12345",\n    LoginHint: "user@example.com",\n  }\n\n  authorizationURL := scalekitClient.GetAuthorizationUrl(\n    redirectUrl,\n    options,\n  )\n}\n\n'})})}),(0,t.jsx)(o,{value:"java",label:"Java",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'package com.scalekit;\n\nimport com.scalekit.ScalekitClient;\nimport com.scalekit.internal.http.AuthorizationUrlOptions;\n\npublic class Main {\n\n  public static void main(String[] args) {\n    ScalekitClient scalekitClient = new ScalekitClient(\n      "<SCALEKIT_ENVIRONMENT_URL>",\n      "<SCALEKIT_CLIENT_ID>",\n      "<SCALEKIT_CLIENT_SECRET>"\n    );\n    AuthorizationUrlOptions options = new AuthorizationUrlOptions();\n    // Option 1: Authorization URL with the organization ID\n    options.setOrganizationId("org_13388706786312310");\n    // Option 2: Authorization URL with the connection ID\n    options.setConnectionId("con_13388706786312310");\n    // Option 3: Authorization URL with login hint\n    options.setLoginHint("user@example.com");\n\n    try {\n      String url = scalekitClient\n        .authentication()\n        .getAuthorizationUrl(redirectUrl, options)\n        .toString();\n    } catch (Exception e) {\n      System.out.println(e.getMessage());\n    }\n  }\n}\n\n'})})})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function u(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var t=n(6540);const r={},o=t.createContext(r);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);