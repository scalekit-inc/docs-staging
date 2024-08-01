"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[1644],{6137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=n(4848),o=n(8453);const s={},a="Add SSO to your Login Page",r={id:"sso/guides/setup-sso/build-login-page",title:"Add SSO to your Login Page",description:"Login Page UX strategies to implement Single Sign-on",source:"@site/docs/sso/guides/setup-sso/build-login-page.mdx",sourceDirName:"sso/guides/setup-sso",slug:"/sso/guides/setup-sso/build-login-page",permalink:"/sso/guides/setup-sso/build-login-page",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"homeSidebar",previous:{title:"Social Login - Quickstart",permalink:"/sso/social-login"},next:{title:"Fetch User Attributes from IdP",permalink:"/sso/guides/setup-sso/handle-user-profile"}},l={},h=[{value:"Strategy 1: Identifier-driven Single Sign-on",id:"strategy-1-identifier-driven-single-sign-on",level:2},{value:"Strategy 2: Login with Single Sign-on Button",id:"strategy-2-login-with-single-sign-on-button",level:2},{value:"Strategy 3: Tenant specific Login Page",id:"strategy-3-tenant-specific-login-page",level:2},{value:"Initiating Single Sign-on from your login page",id:"initiating-single-sign-on-from-your-login-page",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Subtitle:s,TabItem:a,Tabs:r}=t;return s||d("Subtitle",!0),a||d("TabItem",!0),r||d("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"add-sso-to-your-login-page",children:"Add SSO to your Login Page"}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)(t.p,{children:"Login Page UX strategies to implement Single Sign-on"})}),"\n",(0,i.jsxs)(t.p,{children:["Using our ",(0,i.jsx)(t.a,{href:"/sso/quickstart",children:"quickstart guide"}),", you may already have implemented Single Sign-on(SSO) between your application and your customer's Identity Provider. In this article, we'll explore different UX strategies to incorporate SSO into your application's login page."]}),"\n",(0,i.jsx)(t.p,{children:"Assuming your users can log in via email and password or through social providers like Google and GitHub, you can adopt one of the following three strategies to implement SSO on your login page:"}),"\n",(0,i.jsxs)("figure",{className:"width-50",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Simple Login\nPage",src:n(8764).A+"",width:"1024",height:"1222"})}),(0,i.jsxs)("figcaption",{children:[" ",(0,i.jsx)(t.p,{children:"Example with Password and Social auth methods"})]})]}),"\n",(0,i.jsx)(t.h2,{id:"strategy-1-identifier-driven-single-sign-on",children:"Strategy 1: Identifier-driven Single Sign-on"}),"\n",(0,i.jsx)(t.p,{children:"In this strategy, you first collect the user's identifier - the most popular identifier is the email address. Based on the email address, you determine whether to navigate the user to SSO login experience or password-based authentication. The organization can be discovered using either -\ni) the domain of the user\u2019s email address (or)\nii) organization identifier shared by the user."}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Identifier first Login\nPage",src:n(8116).A+"",width:"2222",height:"1044"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:"Identifier-driven login. Example: Sign in to Google account"})})]}),"\n",(0,i.jsxs)(t.p,{children:["The benefit with this approach is that users don't have to choose the authentication method, thus reducing their cognitive load and making the experience smoother.\nThis is especially useful when users initially log in with passwords, and their admin later mandates SSO. Users don't need to change their behavior; your application can handle it. Popular products like ",(0,i.jsx)(t.a,{href:"https://accounts.google.com",children:"Google"}),", ",(0,i.jsx)(t.a,{href:"https://login.microsoftonline.com",children:"Microsoft"}),", ",(0,i.jsx)(t.a,{href:"https://console.aws.amazon.com/console/",children:"AWS"})," use this strategy in their login pages."]}),"\n",(0,i.jsx)(t.h2,{id:"strategy-2-login-with-single-sign-on-button",children:"Strategy 2: Login with Single Sign-on Button"}),"\n",(0,i.jsx)(t.p,{children:'In this strategy, you add a "Login with SSO" button on your login page, prompting users to choose this option explicitly. The advantage is that it presents all available authentication options, allowing users to decide how they want to log in.'}),"\n",(0,i.jsxs)("figure",{className:"width-50",children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Explicit option for Login with\nSSO",src:n(1218).A+"",width:"1082",height:"1242"})}),(0,i.jsx)("figcaption",{children:(0,i.jsx)(t.p,{children:"Display SSO and other authentication options. Example Cal.com"})})]}),"\n",(0,i.jsxs)(t.p,{children:["If a user tries to log in with a password, but their admin mandates SSO, you would force SSO-based authentication instead of showing an error message. Popular products like ",(0,i.jsx)(t.a,{href:"https://app.cal.com/auth/login",children:"Cal.com"}),", ",(0,i.jsx)(t.a,{href:"https://www.notion.so/login",children:"Notion"})," use this strategy in their login pages."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"In either of the above strategies, if a user chooses an authentication method (like Social Login), you need to verify their identity and the apprpriate authentication method. If the user is meant to be authenticated through SSO-based login, make sure your application prompts them to re-authenticate through SSO."})}),"\n",(0,i.jsx)(t.h2,{id:"strategy-3-tenant-specific-login-page",children:"Strategy 3: Tenant specific Login Page"}),"\n",(0,i.jsxs)(t.p,{children:["In this strategy, instead of a single login page at https:",(0,i.jsx)("span",{}),"//app.yoursaas.com/login, you serve different login pages for each tenant. For example, https://",(0,i.jsx)("span",{}),"tenant1.yoursaas.com/login, https://",(0,i.jsx)("span",{}),"tenant2.yoursaas.com/login. Depending on the tenant URL, you would show only the respective authentication methods applicable to that tenant, thus optimizing the user experience further."]}),"\n",(0,i.jsxs)(t.p,{children:["Popular products like ",(0,i.jsx)(t.a,{href:"https://www.zendesk.com/in/login/",children:"Zendesk"}),", ",(0,i.jsx)(t.a,{href:"https://scalekit.slack.com/",children:"Slack"})," use this strategy in their login pages. However, the big drawback with this approach is that users need to remember their tenant URL to access the login page."]}),"\n",(0,i.jsx)(t.h2,{id:"initiating-single-sign-on-from-your-login-page",children:"Initiating Single Sign-on from your login page"}),"\n",(0,i.jsxs)(t.p,{children:["Once you've chosen a UX strategy for your application\u2019s login, lets move to the login implementation of SSO through Scalekit. Regardless of the strategy you implemented, you can construct the ",(0,i.jsx)(t.code,{children:"authorization_url"})," using Scalekit SDK and redirect the user to this URL."]}),"\n",(0,i.jsx)(t.p,{children:"Refer to the code samples below:"}),"\n",(0,i.jsxs)(r,{groupId:"tech-stack",queryString:!0,children:[(0,i.jsx)(a,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:"showLineNumbers",children:"import { Scalekit } from '@scalekit-sdk/node';\n\n// Initialize the SDK client\nconst scalekit = new Scalekit(\n  '<SCALEKIT_ENVIRONMENT_URL>',\n  '<SCALEKIT_CLIENT_ID>',\n  '<SCALEKIT_CLIENT_SECRET>',\n);\n\noptions = {};\n\n// Option 1: Authorization URL with the organization ID\noptions.organization_id = 'org_15421144869927830';\n\n// Option 2: Authorization URL with login hint\noptions.login_hint = 'user@example.com';\n\nauthorizationURL = scalekit.getAuthorizationUrl(\n  redirect_uri,\n  options,\n);\n\n// Next step is to redirect the user to this authorization URL\n"})})}),(0,i.jsx)(a,{value:"py",label:"Python",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"showLineNumbers",children:"from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions\n\n# Initialize the SDK client\nscalekit_client = ScalekitClient(\n  '<SCALEKIT_ENVIRONMENT_URL>',\n  '<SCALEKIT_CLIENT_ID>',\n  '<SCALEKIT_CLIENT_SECRET>'\n)\n\noptions = AuthorizationUrlOptions()\n\n# Option 1: Authorization URL with the organization ID\noptions.organization_id = \"org_15421144869927830\"\n\n# Option 2: Authorization URL with login hint\noptions.login_hint = \"user@example.com\"\n\nauthorization_url = scalekit_client.get_authorization_url(\n  redirect_uri=<redirect_uri>,\n  options=options\n)\n\n# Next step is to redirect the user to this authorization_url\n"})})}),(0,i.jsx)(a,{value:"golang",label:"Go",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",metastring:"showLineNumbers",children:'import (\n  "github.com/scalekit/scalekit-sdk-go"\n)\n\nfunc main() {\n  // Initialize the SDK client\n  scalekitClient := scalekit.NewScalekitClient(\n    "<SCALEKIT_ENVIRONMENT_URL>",\n    "<SCALEKIT_CLIENT_ID>",\n    "<SCALEKIT_CLIENT_SECRET>"\n  )\n\n  options := sc.AuthorizationUrlOptions{}\n\n  // Option 1: Authorization URL with the organization ID\n  options.OrganizationId = "org_15421144869927830"\n\n  // Option 2: Authorization URL with login hint\n  options.LoginHint = "user@example.com"\n\n  authorizationURL := scalekitClient.GetAuthorizationUrl(\n    redirectUrl,\n    options,\n  )\n\n  // Next step is to redirect the user to this authorizationURL\n}\n'})})}),(0,i.jsx)(a,{value:"java",label:"Java",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'import com.scalekit.ScalekitClient;\nimport com.scalekit.internal.http.AuthenticationOptions;\nimport com.scalekit.internal.http.AuthenticationResponse;\nimport com.scalekit.internal.http.AuthorizationUrlOptions;\nimport com.scalekit.internal.http.IdTokenClaims;\n\n@PostMapping(path = "/login")\npublic ResponseEntity<Map<String, String>> loginHandler(\n  @RequestBody LoginRequest body\n) {\n  AuthorizationUrlOptions options = new AuthorizationUrlOptions();\n\n  // Option 1: Authorization URL with the organization ID\n  if (body.getOrganizationId() != null) {\n    options.setOrganizationId(body.getOrganizationId());\n  }\n\n  // Option 2: Authorization URL with Login Hint\n  // User\'s email domain detects the correct enterprise SSO connection.\n  if (body.getEmail() != null) {\n    options.setLoginHint(body.getEmail());\n  }\n  try {\n    String url = scalekit\n      .authentication()\n      .getAuthorizationUrl(redirectUrl, options)\n      .toString();\n    return ResponseEntity.ok(Collections.singletonMap("url", url));\n  } catch (Exception e) {\n    return ResponseEntity.status(\n      HttpStatus.INTERNAL_SERVER_ERROR\n    ).body(Collections.singletonMap("error", e.getMessage()));\n  }\n}\n// Redirect the user to this authorization URL\n\n'})})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function d(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8116:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/identifier_first_login-dbcde94a4140ae5c5f439265472cff33.png"},8764:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/simple_login_page-04562ac59bedbb9a876a400a6bdcd335.png"},1218:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/sso_button_login-ce1ea73db11fe18e29f5fbbc56efa074.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);