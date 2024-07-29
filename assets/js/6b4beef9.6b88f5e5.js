"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[6660],{1846:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(4848),i=t(8453);const a={},c=void 0,s={type:"mdx",permalink:"/apis/embeds/tag/Connection/patch/api/v1/organizations/%7Borganization_id%7D/connections/%7Bid%7D%3Aenable",source:"@site/src/pages/apis/embeds/tag/Connection/patch/api/v1/organizations/{organization_id}/connections/{id}:enable.md",frontMatter:{},unlisted:!1},r={},l=[];function d(n){const e={code:"code",pre:"pre",...(0,i.R)(),...n.components},{CodeWithHeader:t,TabItem:a,Tabs:c}=e;return t||p("CodeWithHeader",!0),a||p("TabItem",!0),c||p("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{method:"patch",endpoint:"/api/v1/organizations/{organization_id}/connections/{id}:enable",children:(0,o.jsxs)(c,{groupId:"tech-stack",querystring:!0,children:[(0,o.jsx)(a,{value:"curl",label:"cURL",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organization_id}/connections/{id}:enable' \\\n--header 'Accept: application/json'\n"})})}),(0,o.jsx)(a,{value:"nodejs",label:"Node.js",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",metastring:"showLineNumbers",children:"// scalekit client takes care of authentication behind the scenes.\nconst sc = new ScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n);\n\nawait sc.connection.enableConnection(organizationId, connectionId);\n"})})}),(0,o.jsx)(a,{value:"py",label:"Python",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"# scalekit client takes care of authentication behind the scenes.\nsc = ScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n)\n\nsc.connection.enable_connection(\n  organization_id,\n  connection_id,\n)\n"})})}),(0,o.jsx)(a,{value:"golang",label:"Go",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",metastring:"showLineNumbers",children:"// scalekit client takes care of authentication behind the scenes.\nsc := scalekit.NewScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n)\n\nerr := sc.Connection.EnableConnection(\n  ctx,\n  organizationId,\n  connectionId,\n)\n"})})}),(0,o.jsx)(a,{value:"java",label:"Java",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",metastring:"showLineNumbers",children:'ScalekitClient scalekitClient = new ScalekitClient(\n  "ENVIRONMENT_URL",\n  "CLIENT_ID",\n  "CLIENT_SECRET");\nToggleConnectionResponse response = client.connections()\n  .enableConnection(connectionId, organizationId);\n'})})})]})}),"\n",(0,o.jsx)(t,{title:"Response",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'{\n  "enabled": true,\n  "error_message": ""\n}\n'})})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>s});var o=t(6540);const i={},a=o.createContext(i);function c(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);