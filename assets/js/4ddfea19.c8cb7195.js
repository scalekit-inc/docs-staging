"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[7333],{5346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(4848),i=t(8453);const o={},s=void 0,r={type:"mdx",permalink:"/apis/embeds/tag/Organization/get/api/v1/organizations/%7Bid%7D",source:"@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations/{id}.md",frontMatter:{},unlisted:!1},c={},d=[];function l(e){const n={code:"code",pre:"pre",...(0,i.R)(),...e.components},{CodeWithHeader:t,TabItem:o,Tabs:s}=n;return t||p("CodeWithHeader",!0),o||p("TabItem",!0),s||p("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{method:"get",endpoint:"/api/v1/organizations/{id}",children:(0,a.jsxs)(s,{groupId:"tech-stack",querystring:!0,children:[(0,a.jsx)(o,{value:"curl",label:"cURL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl --request GET \\\n  --url 'https://$env_url/api/v1/organizations/{id}'\n"})})}),(0,a.jsx)(o,{value:"nodejs",label:"Node.js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"// scalekit client takes care of authentication behind the scenes.\nconst sc = new Scalekit(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n);\n\nconst organization =await sc.organization.getOrganization(organization_id)\n"})})}),(0,a.jsx)(o,{value:"py",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:"# scalekit client takes care of authentication behind the scenes.\nsc = ScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n)\n\norganization = sc.organization.get_organization(organization_id)\n"})})})]})}),"\n",(0,a.jsx)(t,{title:"Response",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "create_time": "2024-01-05T14:48:00.000Z",\n  "display_name": "Acme Corp",\n  "external_id": "my_unique_id",\n  "id": "org_2123312131125533",\n  "metadata": {\n    "someKey": "\u2026"\n  },\n  "region_code": "US",\n  "update_time": "\u2026"\n}\n'})})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(6540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);