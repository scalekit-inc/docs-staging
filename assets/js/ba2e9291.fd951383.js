"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7880],{1230:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(4848),i=t(8453);const s={},o=void 0,r={type:"mdx",permalink:"/apis/embeds/tag/Organization/get/api/v1/organizations",source:"@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations.md",frontMatter:{},unlisted:!1},c={},l=[];function d(n){const e={code:"code",pre:"pre",...(0,i.R)(),...n.components},{CodeWithHeader:t,TabItem:s,Tabs:o}=e;return t||p("CodeWithHeader",!0),s||p("TabItem",!0),o||p("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{method:"get",endpoint:"/api/v1/organizations",children:(0,a.jsxs)(o,{groupId:"tech-stack",querystring:!0,children:[(0,a.jsx)(s,{value:"curl",label:"cURL",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl --request GET \\\n  --url 'https://$env_url/api/v1/organizations'\n"})})}),(0,a.jsx)(s,{value:"nodejs",label:"Node.js",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:"showLineNumbers",children:"// scalekit client takes care of authentication behind the scenes.\nconst sc = new ScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n);\n\nconst organizations = await sc.organization.listOrganization({\n  pageSize: 10,\n});\n"})})}),(0,a.jsx)(s,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"# scalekit client takes care of authentication behind the scenes.\nsc = ScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n)\noptions = ListOrganizationOptions()\noptions.page_size = 10\n\norganizations = sc.organization.list_organizations(\n  options=options\n)\n\n"})})}),(0,a.jsx)(s,{value:"golang",label:"Go",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",metastring:"showLineNumbers",children:"// scalekit client takes care of authentication behind the scenes.\nsc := scalekit.NewScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n)\n\norganizations, err := sc.Organization.ListOrganizations(\n  ctx,\n  &scalekit.ListOrganizationOptions{\n    PageSize: 10,\n  }\n)\n"})})}),(0,a.jsx)(s,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",metastring:"showLineNumbers",children:'  ScalekitClient scalekitClient = new ScalekitClient(\n    "ENVIRONMENT_URL",\n    "CLIENT_ID",\n    "CLIENT_SECRET"\n  );\n  ListOrganizationsResponse organizations = scalekitClient\n    .organizations()\n    .listOrganizations(10, "");\n'})})})]})}),"\n",(0,a.jsx)(t,{title:"Response",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'{\n  "next_page_token": "\u2026",\n  "organizations": [\n    {\n      "create_time": "2024-01-05T14:48:00.000Z",\n      "display_name": "Acme Corp",\n      "external_id": "my_unique_id",\n      "id": "org_2123312131125533",\n      "metadata": {\n        "someKey": "\u2026"\n      },\n      "region_code": "US",\n      "update_time": "\u2026"\n    }\n  ],\n  "total_size": 1\n}\n'})})})]})}function g(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var a=t(6540);const i={},s=a.createContext(i);function o(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);