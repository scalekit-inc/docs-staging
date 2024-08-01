"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[6437],{7441:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=r(4848),s=r(8453);const i={},o=void 0,a={type:"mdx",permalink:"/apis/embeds/tag/Authentication/post/oauth/token",source:"@site/src/pages/apis/embeds/tag/Authentication/post/oauth/token.md",frontMatter:{},unlisted:!1},c={},d=[];function l(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components},{CodeWithHeader:r,TabItem:i,Tabs:o}=n;return r||h("CodeWithHeader",!0),i||h("TabItem",!0),o||h("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{method:"post",endpoint:"/oauth/token",children:(0,t.jsxs)(o,{groupId:"tech-stack",querystring:!0,children:[(0,t.jsx)(i,{value:"curl",label:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl --request POST \\\n  --url 'https://$env_url/oauth/token\n  ?code=jhasd72\n  &redirect_uri=https%3A%2F%2Fmysaasapp.com%2Fredirect_uri\n  &client_id=skc_12344\n  &client_secret=skc_prod_12441kjasad\n  &grant_type=authorization_code'\n"})})}),(0,t.jsx)(i,{value:"nodejs",label:"Node.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:'import { ScalekitClient } from "@scalekit-sdk/node";\n\nconst scalekit = new ScalekitClient(\n  <SCALEKIT_ENVIRONMENT_URL>,\n  <SCALEKIT_CLIENT_ID>,\n  <SCALEKIT_CLIENT_SECRET>\n);\n\n// Handle the oauth redirect\nconst { code, error, error_description } = req.query;\nif (error) {\n  // Handle error\n  return throw new Error(error_description);\n}\n\n// Fetch user details by exchanding the code received in the request params\nconst { user } = await scalekit.authenticateWithCode(\n  code,\n  <redirectUri>\n);\n\n'})})}),(0,t.jsx)(i,{value:"py",label:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions\n\nscalekit_client = ScalekitClient(\n  <SCALEKIT_ENVIRONMENT_URL>,\n  <SCALEKIT_CLIENT_ID>,\n  <SCALEKIT_CLIENT_SECRET>\n)\n\n# Handle oauth redirect_url, fetch code and error_description from request params\ncode = request.args.get('code')\nerror = request.args.get('error')\nerror_description = request.args.get('error_description')\n\nif error:\n    raise Exception(error_description)\n\nresult = scalekit_client.authenticate_with_code(\n  code,\n  <redirect_uri>\n)\n# result.user has the authenticated user's details\nuser_email = result.user.email\n\n# Create a session and redirect the user to your dashboard\n"})})}),(0,t.jsx)(i,{value:"golang",label:"Go",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",metastring:"showLineNumbers",children:'import (\n  "github.com/scalekit/scalekit-sdk-go"\n)\nsc := scalekit.NewScalekitClient(\n  <SCALEKIT_ENVIRONMENT_URL>,\n  <SCALEKIT_CLIENT_ID>,\n  <SCALEKIT_CLIENT_SECRET>\n)\n\n// Handle the oauth redirect\ncode := r.URL.Query().Get("code")\nerr := r.URL.Query().Get("error")\nerrorDescription := r.URL.Query().Get("error_description")\nif err != "" {\n  return errors.New(errorDescription)\n}\n\n// Fetch user details by exchanding the code received in the request params\nuser, err := sc.AuthenticateWithCode(\n  code,\n  <redirectUri>\n)\n// `user` has the authenticated user\'s details\nuserEmail := user.Email\n'})})}),(0,t.jsx)(i,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:"showLineNumbers",children:'ScalekitClient scalekitClient = new ScalekitClient(\n  "<SCALEKIT_ENVIRONMENT_URL>",\n  "<SCALEKIT_CLIENT_ID>",\n  "<SCALEKIT_CLIENT_SECRET>"\n);\n\nString code = request.getParameter("code");\nString error = request.getParameter("error");\nString errorDescription = request.getParameter("error_description");\n\nif(error != null && !error.isEmpty()) {\n    // Handle errors\n    return;\n}\ntry {\n    AuthenticationResponse res = scalekitClient.authentication().authenticateWithCode(code, redirectUrl);\n    // res.getIdTokenClaims() has the authenticated user\'s details\n    String userEmail = res.getIdTokenClaims().getEmail();\n\n} catch (Exception e) {\n    // Handle errors\n}\n'})})})]})}),"\n",(0,t.jsx)(r,{title:"Response",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n  "access_token": "ey ... vPnyWBQ",\n  "expires_in": 899,\n  "id_token": "eyJhbGc ... ar79GwZg",\n  "token_type": "Bearer"\n}\n'})})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);