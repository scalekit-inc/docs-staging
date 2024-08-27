"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[3482],{1022:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(4848),r=t(8453);const s={title:"Implementing Secure Identity Provider (IdP) Initiated SSO with Scalekit",description:"Learn how to securely implement Identity Provider (IdP) initiated Single Sign-On (SSO) in your application using Scalekit. Convert IdP-initiated requests to Service Provider (SP) initiated SSO flow to mitigate security risks like stolen SAML assertions while still providing a seamless login experience for users.",keywords:["Identity Provider (IdP) Initiated SSO","Single Sign-On (SSO)","Scalekit","SAML Assertions","Service Provider (SP) Initiated SSO","OAuth","Security Risks","Stolen Assertions","Man-In-The-Middle (MITM) Attacks","Open Redirect Attacks","Browser Vulnerabilities","B2B SaaS Security"]},o="Implement Identity Provider (IdP) initiated SSO",a={id:"sso/guides/setup-sso/implement-idp-initiated-sso",title:"Implementing Secure Identity Provider (IdP) Initiated SSO with Scalekit",description:"Learn how to securely implement Identity Provider (IdP) initiated Single Sign-On (SSO) in your application using Scalekit. Convert IdP-initiated requests to Service Provider (SP) initiated SSO flow to mitigate security risks like stolen SAML assertions while still providing a seamless login experience for users.",source:"@site/docs/sso/guides/setup-sso/implement-idp-initiated-sso.mdx",sourceDirName:"sso/guides/setup-sso",slug:"/sso/guides/setup-sso/implement-idp-initiated-sso",permalink:"/docs-staging/sso/guides/setup-sso/implement-idp-initiated-sso",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Implementing Secure Identity Provider (IdP) Initiated SSO with Scalekit",description:"Learn how to securely implement Identity Provider (IdP) initiated Single Sign-On (SSO) in your application using Scalekit. Convert IdP-initiated requests to Service Provider (SP) initiated SSO flow to mitigate security risks like stolen SAML assertions while still providing a seamless login experience for users.",keywords:["Identity Provider (IdP) Initiated SSO","Single Sign-On (SSO)","Scalekit","SAML Assertions","Service Provider (SP) Initiated SSO","OAuth","Security Risks","Stolen Assertions","Man-In-The-Middle (MITM) Attacks","Open Redirect Attacks","Browser Vulnerabilities","B2B SaaS Security"]},sidebar:"ssoSidebar",previous:{title:"Customize Admin Portal",permalink:"/docs-staging/sso/domain-and-theme-customization"},next:{title:"Handle SSO Errors",permalink:"/docs-staging/sso/guides/setup-sso/error-handling"}},d={},l=[{value:"Security Risks",id:"security-risks",level:2},{value:"How Attackers Steal SAML Assertions",id:"how-attackers-steal-saml-assertions",level:3},{value:"The Challenge for Service Providers",id:"the-challenge-for-service-providers",level:3},{value:"Mitigating Security Risks: Convert IdP-initiated to SP-initiated SSO",id:"mitigating-security-risks-convert-idp-initiated-to-sp-initiated-sso",level:2},{value:"Advantages",id:"advantages",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{CodeWithHeader:s,SimpleCode:o,TabItem:a,Tabs:d}=i;return s||p("CodeWithHeader",!0),o||p("SimpleCode",!0),a||p("TabItem",!0),d||p("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"implement-identity-provider-idp-initiated-sso",children:"Implement Identity Provider (IdP) initiated SSO"})}),"\n",(0,n.jsx)(i.p,{children:"IdP-initiated SSO allows users to log into your application directly from their identity provider's portal. While convenient, it poses security risks such as stolen SAML assertions."}),"\n",(0,n.jsx)(i.p,{children:"In IdP initiated SSO:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"The user logs into their identity provider portal and selects your application."}),"\n",(0,n.jsx)(i.li,{children:"The identity provider sends the user's details as assertions to your application."}),"\n",(0,n.jsx)(i.li,{children:"Your application validates the assertions, retrieves the user information, and if everything checks out, logs the user in."}),"\n"]}),"\n",(0,n.jsx)("figure",{children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"IdP initiated SSO\nworkflow",src:t(7877).A+"",width:"3536",height:"2168"}),"\n",(0,n.jsx)("figcaption",{children:"IdP initiated SSO workflow"})]})}),"\n",(0,n.jsx)(i.p,{children:"Since the login is initiated from the identity provider's portal, this flow is called IdP-initiated SSO."}),"\n",(0,n.jsx)(i.h2,{id:"security-risks",children:"Security Risks"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Stolen SAML Assertions"}),": Attackers can steal these assertions and use them to gain unauthorized access. If an attacker manages to steal these assertions, they can:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Inject them into another service provider, gaining access to that user's account"}),"\n",(0,n.jsx)(i.li,{children:"Inject them back into your application with altered assertions, potentially elevating their privileges"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"With a stolen SAML assertion, an attacker can gain access to your application as the compromised user, bypassing the usual authentication process. This compromised behavior is much harder with Service Provider (SP) initiated SSO flow."}),"\n",(0,n.jsx)(i.h3,{id:"how-attackers-steal-saml-assertions",children:"How Attackers Steal SAML Assertions"}),"\n",(0,n.jsx)(i.p,{children:"Attackers can steal SAML assertions through various methods:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Man-In-The-Middle (MITM) Attacks"}),": Intercepting and replacing the SAML response during transmission."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Open Redirect Attacks"}),": Exploiting improper endpoint validation to redirect the SAML response to a malicious server."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Leaky Logs and Headers"}),": Sensitive information, including SAML assertions, can be leaked through logs or headers."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Browser-Based Attacks"}),": Exploiting browser vulnerabilities to steal SAML assertions"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"the-challenge-for-service-providers",children:"The Challenge for Service Providers"}),"\n",(0,n.jsx)(i.p,{children:"The chief problem with stolen assertions is that everything appears legitimate to the service provider. The message and assertion are valid, issued by the expected identity provider, and signed with the expected key.\nHowever, the service provider cannot verify whether the assertions are stolen or not. This makes it difficult to detect and prevent unauthorized access through stolen SAML assertions."}),"\n",(0,n.jsx)(i.h2,{id:"mitigating-security-risks-convert-idp-initiated-to-sp-initiated-sso",children:"Mitigating Security Risks: Convert IdP-initiated to SP-initiated SSO"}),"\n",(0,n.jsx)(i.p,{children:"Despite the security risks, IdP initiated SSO offers significant convenience to end users, allowing them to easily log into various applications used within their organization. As such, it's important for your application to support it.\nTo support it securely, convert the incoming IdP-initiated request to an SP-initiated SSO flow. Refer the below diagram for the recommended workflow from Scalekit."}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Scalekit&#39;s recommended workflow for IdP initiated\nSSO",src:t(4906).A+"",width:"4936",height:"4432"})}),(0,n.jsx)("figcaption",{children:(0,n.jsx)(i.p,{children:"Scalekit's recommended workflow for IdP initiated SSO"})})]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["When Scalekit receives an IdP-initiated SSO request from a customer, it sends a request to your configured default ",(0,n.jsx)(o,{children:"redirect_uri"})," (located in Scalekit Dashboard > API Config > Redirect URIs) with ",(0,n.jsx)(o,{children:"idp_initiated_login"})," included as a request parameter."]}),"\n"]}),"\n",(0,n.jsx)(s,{children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sh",children:"https://b2b-app.com/default-redirect-uri\n  ?idp_initiated_login=<encoded_jwt_token>\n"})})}),"\n",(0,n.jsxs)(i.ol,{start:"2",children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(o,{children:"idp_initiated_login"})," request parameter is a signed JWT token containing all necessary details to identify the organization, SSO connection, and user information, enabling you to initiate a new authorization request."]}),"\n"]}),"\n",(0,n.jsx)(s,{children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:'{\n  "organization_id": "org_225336910XXXX588",\n  "connection_id": "conn_22533XXXXX575236",\n  "login_hint": "name@example.com",\n  "exp": 1723042087,\n  "nbf": 1723041787,\n  "iat": 1723041787,\n  "iss": "https://b2b-app.com"\n}\n'})})}),"\n",(0,n.jsxs)(i.ol,{start:"3",children:["\n",(0,n.jsx)(i.li,{children:"You can use any of these three parameters to initiate a new SSO request. Since the user is already logged into their Identity Provider, they are not prompted to authenticate again, providing a seamless experience while addressing potential security vulnerabilities associated with IdP-initiated SSO."}),"\n"]}),"\n",(0,n.jsxs)(d,{groupId:"tech-stack",queryString:!0,children:[(0,n.jsx)(a,{value:"nodejs",label:"Node.js",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",metastring:"showLineNumbers",children:'// 1. Default redirect URL is callback with JWT\nconst { code, error_description, idp_initiated_login } = req.query;\n\n  if (error_description) {\n    return res.status(400).json({ message: error_description });\n  }\n\n\n// 2. Decode the JWT\nif (idp_initiated_login) {\n\n  const {\n    connection_id,\n    organization_id,\n    login_hint,\n    relay_state\n  } = await scalekit.getIdpInitiatedLoginClaims(idp_initiated_login);\n\n  let options = {};\n  // Either ONE of the following properties\n    options["connectionId"] = connection_id\n    options["organizationId"] = organization_id\n    options["loginHint"] = login_hint\n\n    // 3. Generate Authorization URL\n    const url = scalekit.getAuthorizationUrl(\n      <redirect_uri>,\n      options\n    )\n    return res.redirect(url);\n  }\n'})})}),(0,n.jsx)(a,{value:"python",label:"Python",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-python",metastring:"showLineNumbers",children:"# 1. Default redirect URL is callback with JWT\ncode = request.args.get('code')\nerror_description = request.args.get('error_description')\nidp_initiated_login = request.args.get('idp_initiated_login')\noptions = AuthorizationUrlOptions()\n\n\nif error_description:\n    # Handle Error\n\n# 2. Decode the JWT\nif idp_initiated_login:\n    claims = await scalekit.get_idp_initiated_login_claims(idp_initiated_login)\n    connection_id = claims.get('connection_id', None)\n    organization_id = claims.get('organization_id', None)\n    login_hint = claims.get('login_hint', None)\n    relay_state = claims.get('relay_state', None)\n    options.connection_id=connection_id\n    options.state=relay_state\n\n    # 3. Generate Authorization URL\n    authorization_url = scalekit.get_authorization_url(\n      redirect_uri=redirect_uri,\n      options=options\n    )\n\n    return redirect(url)\n"})})}),(0,n.jsx)(a,{value:"golang",label:"Go",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-go",metastring:"showLineNumbers",children:'// 1. Default redirect URL is callback with JWT\ncode := r.URL.Query().Get("code")\nerr_description := r.URL.Query().Get("error_description")\nif err_description != "" {\n\t\thttp.Error(w, err_description, http.StatusBadRequest)\n\t\treturn\n}\n\n// 2. Decode the JWT\nif idpInitiatedLogin := r.URL.Query().Get("idp_initiated_login"); idpInitiatedLogin != "" {\n\tclaims, err := a.scalekit.GetIdpInitiatedLoginClaims(idpInitiatedLogin)\n\tif err != nil {\n\t\thttp.Error(w, err.Error(), http.StatusInternalServerError)\n\t\treturn\n\t}\n\n\t// 3. Generate Authorization URL\n\toptions := scalekit.AuthorizationUrlOptions{\n\t\t// Either ONE of the following properties\n\t\tConnectionId:   claims.ConnectionID,\n\t\tOrganizationId: claims.OrganizationID,\n\t\tLoginHint:      claims.LoginHint,\n\t}\n\tauthUrl, err := a.scalekit.GetAuthorizationUrl(a.redirectUrl, options)\n\n\tif err != nil {\n\t\thttp.Error(w, err.Error(), http.StatusInternalServerError)\n\t\treturn\n\t}\n\thttp.Redirect(w, r, authUrl.String(), http.StatusFound)\n}\n'})})}),(0,n.jsx)(a,{value:"java",label:"Java",children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",metastring:"showLineNumbers",children:'// 1. Default redirect URL is callback with JWT\n@GetMapping("/callback")\npublic RedirectView callbackHandler(\n    @RequestParam(required = false) String code,\n    @RequestParam(required = false,\n        name = "error_description") String errorDescription,\n    @RequestParam(required = false,\n        name = "idp_initiated_login") String idpInitiatedLoginToken,\n\n    HttpServletResponse response) throws IOException {\n  if (errorDescription != null) {\n    // Handle Errors\n    }\n\n  // 2. Decode the JWT\n  if (idpInitiatedLoginToken != null) {\n    IdpInitiatedLoginClaims idpInitiatedLoginClaims =\n        scalekit.authentication().getIdpInitiatedLoginClaims(\n            idpInitiatedLoginToken);\n    if (idpInitiatedLoginClaims == null) {\n      response.sendError(HttpStatus.BAD_REQUEST.value(),\n          "Invalid idp_initiated_login token");\n      return null;\n    }\n    // Either ONE of the following\n    AuthorizationUrlOptions options = new AuthorizationUrlOptions();\n    if (idpInitiatedLoginClaims.getConnectionID() != null) {\n      options.setConnectionId(idpInitiatedLoginClaims.getConnectionID());\n    }\n    if (idpInitiatedLoginClaims.getOrganizationID() != null) {\n      options.setOrganizationId(idpInitiatedLoginClaims.getOrganizationID());\n    }\n    if (idpInitiatedLoginClaims.getLoginHint() != null) {\n      options.setLoginHint(idpInitiatedLoginClaims.getLoginHint());\n    }\n\n    // 3. Generate Authorization URL\n    String url = scalekit.authentication()\n                     .getAuthorizationUrl(redirectUrl, options)\n                     .toString();\n    response.sendRedirect(url);\n    return null;\n  }\n'})})})]}),"\n",(0,n.jsx)(i.p,{children:"In case of error, the redirect URI will receive a callback containing the error information as query parameters."}),"\n",(0,n.jsx)(s,{children:(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-url",children:"https://b2b-app.com/callback?error=<error_category>&error_description=<details>\n"})})}),"\n",(0,n.jsx)(i.h2,{id:"advantages",children:"Advantages"}),"\n",(0,n.jsx)(i.p,{children:"The advantages of using this approach are:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Enhanced Security"}),": Overcomes the security risks of handling IdP-initiated SSO"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Seamless Experience"}),": The additional redirect is almost instantaneous, providing a smooth user experience"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"By following these steps, you can support IdP-initiated SSO while maintaining a high level of security for your users"})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function p(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7877:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/idp-initiated-sso-54c30d596f68dfa60e0e44861ac41e32.png"},4906:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/idp_initiated_sso_with_scalekit-8c490e6db4b35a7ac94c517726b182b2.png"},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var n=t(6540);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);