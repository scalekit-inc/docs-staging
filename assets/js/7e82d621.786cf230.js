"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[8208],{2257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(4848),i=n(8453);const r={},a=void 0,s={type:"mdx",permalink:"/apis/embeds/tag/Authentication/get/oauth/authorize",source:"@site/src/pages/apis/embeds/tag/Authentication/get/oauth/authorize.md",description:"--\x3e",frontMatter:{},unlisted:!1},c={},l=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components},{CodeWithHeader:n,TabItem:r,Tabs:a}=t;return n||h("CodeWithHeader",!0),r||h("TabItem",!0),a||h("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{method:"get",endpoint:"/oauth/authorize",children:(0,o.jsxs)(a,{groupId:"tech-stack",querystring:!0,children:[(0,o.jsx)(r,{value:"curl",label:"cURL",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl --request GET \\\n  --url 'https://$env_url/oauth/authorize\n  ?client_id=skc_12344\n  &redirect_uri=https%3A%2F%2Fmysaasapp.com%2Fredirect_uri\n  &response_type=code\n  &state=hf68uyjh2189iuhj56789\n  &scope=openid profile'\n"})})}),(0,o.jsx)(r,{value:"nodejs",label:"Node.js",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:"import {Scalekit} from \"@scalekit-sdk/node\";\n\n// scalekit client takes care of authentication behind the scenes.\nconst scalekit = new Scalekit(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n);\n\n// Authorization URL with organization ID parameter and optional state parameter\n const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n   organizationId: 'org_12442',\n   state: state\n })\n\n // Authorization URL with optional login hint parameter\n const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n   loginHint: 'user@example.com',\n   organizationId: 'org_12442'\n })\n\n// Authorization URL with connection ID parameter\n const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n   connectionId: 'conn_1242242',\n })\n"})})}),(0,o.jsx)(r,{value:"py",label:"Python",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",metastring:"showLineNumbers",children:"from scalekit import ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions\n\nscalekit_client = ScalekitClient(\n  <SCALEKIT_ENVIRONMENT_URL>, \n  <SCALEKIT_CLIENT_ID>, \n  <SCALEKIT_CLIENT_SECRET>\n)\n\n\noptions = AuthorizationUrlOptions()\n\n# use one of the three strategies below to determine how to log the user in.\n\n# If you would like to authenticate the user via connection_id\noptions.connection_id = 'conn_1242242'\n\n# If you would like to authenticate the user via organization_id\noptions.organization_id = 'org_12442'\n\n# If you would like to authenticate the user via their email address \n# Domain portion of the user's email address is used to detect the appropriate enterprise SSO connection\noptions.login_hint = '<user@example.com>'\n\nauthorization_url = scalekit_client.get_authorization_url(\n  redirect_uri=<redirect_uri>, \n  options=options\n)\n\n# TODO redirect the user to the authorization url\n"})})})]})}),"\n",(0,o.jsx)(n,{title:"Response",children:(0,o.jsx)(t.p,{children:"User will be redirected to the appropriate Identity provider's login page based on either organization_id, or connection_id or domain."})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(6540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);