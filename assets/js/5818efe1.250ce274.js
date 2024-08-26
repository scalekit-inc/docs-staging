"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[9512],{1778:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(4848),i=t(8453);const s={},o=void 0,r={type:"mdx",permalink:"/docs-staging/apis/embeds/tag/Admin%20Portal/put/api/v1/organizations/%7Bid%7D/portal_links",source:"@site/src/pages/apis/embeds/tag/Admin Portal/put/api/v1/organizations/{id}/portal_links.md",frontMatter:{},unlisted:!1},l={},c=[];function d(n){const e={code:"code",pre:"pre",...(0,i.R)(),...n.components},{CodeWithHeader:t,TabItem:s,Tabs:o}=e;return t||u("CodeWithHeader",!0),s||u("TabItem",!0),o||u("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{method:"put",endpoint:"/api/v1/organizations/{id}/portal_links",children:(0,a.jsxs)(o,{groupId:"tech-stack",querystring:!0,children:[(0,a.jsx)(s,{value:"curl",label:"cURL",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl --location --request PUT 'https://$ENV_URL/api/v1/organizations/{id}/portal_links' \\\n--header 'Accept: application/json'\n"})})}),(0,a.jsx)(s,{value:"nodejs",label:"Node.js",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:"showLineNumbers",children:"const sc = new ScalekitClient(\n  <SCALEKIT_ENVIRONMENT_URL>,\n  <SCALEKIT_CLIENT_ID>,\n  <SCALEKIT_CLIENT_SECRET>\n);\n\nconst link = await sc.organization.generatePortalLink(organization_id);\n"})})}),(0,a.jsx)(s,{value:"py",label:"Python",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"\nsc = ScalekitClient(\n  <SCALEKIT_ENVIRONMENT_URL>,\n  <SCALEKIT_CLIENT_ID>,\n  <SCALEKIT_CLIENT_SECRET>\n)\n\nlink = sc.organization.generate_portal_link(\n  organization_id\n)\n"})})}),(0,a.jsx)(s,{value:"golang",label:"Go",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",metastring:"showLineNumbers",children:"sc := scalekit.NewScalekitClient(\n  <SCALEKIT_ENVIRONMENT_URL>,\n  <SCALEKIT_CLIENT_ID>,\n  <SCALEKIT_CLIENT_SECRET>\n)\n\nlink, err := sc.Organization.GeneratePortalLink(\n  ctx,\n  organizationId\n)\n"})})}),(0,a.jsx)(s,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",metastring:"showLineNumbers",children:'ScalekitClient scalekitClient = new ScalekitClient(\n  "<SCALEKIT_ENVIRONMENT_URL>",\n  "<SCALEKIT_CLIENT_ID>",\n  "<SCALEKIT_CLIENT_SECRET>"\n);\n\nLink response = scalekitClient\n  .organizations()\n  .generatePortalLink(organizationId);\n\n'})})})]})}),"\n",(0,a.jsx)(t,{title:"Response",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'{\n  "link": {\n    "id": "lnk_123123123123123",\n    "location": "https://scalekit.com/portal/lnk_123123123123123",\n    "expire_time": "2024-02-06T14:48:00.000Z"\n  }\n}\n'})})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var a=t(6540);const i={},s=a.createContext(i);function o(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);