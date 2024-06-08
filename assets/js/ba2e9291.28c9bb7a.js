"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7880],{1230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(4848),a=t(8453);const i={},o=void 0,r={type:"mdx",permalink:"/apis/embeds/tag/Organization/get/api/v1/organizations",source:"@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations.md",frontMatter:{},unlisted:!1},c={},l=[];function d(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components},{CodeWithHeader:t,TabItem:i,Tabs:o}=n;return t||u("CodeWithHeader",!0),i||u("TabItem",!0),o||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{method:"get",endpoint:"/api/v1/organizations",children:(0,s.jsxs)(o,{groupId:"tech-stack",querystring:!0,children:[(0,s.jsx)(i,{value:"curl",label:"cURL",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl --request GET \\\n  --url 'https://$env_url/api/v1/organizations'\n"})})}),(0,s.jsx)(i,{value:"nodejs",label:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"// scalekit client takes care of authentication behind the scenes.\nconst sc = new Scalekit(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n);\n\nconst organizations = await sc.organization.listOrganization({\n  pageSize: 10\n})\n\n"})})}),(0,s.jsx)(i,{value:"py",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"# scalekit client takes care of authentication behind the scenes.\nsc = ScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n)\noptions = ListOrganizationOptions()\noptions.page_size = 10\n\norganizations = sc.organization.list_organizations(options=options)\n\n"})})})]})}),"\n",(0,s.jsx)(t,{title:"Response",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  "next_page_token": "\u2026",\n  "organizations": [\n    {\n      "create_time": "2024-01-05T14:48:00.000Z",\n      "display_name": "Acme Corp",\n      "external_id": "my_unique_id",\n      "id": "org_2123312131125533",\n      "metadata": {\n        "someKey": "\u2026"\n      },\n      "region_code": "US",\n      "update_time": "\u2026"\n    }\n  ],\n  "total_size": 1\n}\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);