"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[1337],{2565:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(4848),o=t(8453);const s={},a=void 0,c={type:"mdx",permalink:"/apis/embeds/tag/Connection/patch/api/v1/organizations/%7Borganization_id%7D/connections/%7Bid%7D%3Adisable",source:"@site/src/pages/apis/embeds/tag/Connection/patch/api/v1/organizations/{organization_id}/connections/{id}:disable.md",frontMatter:{},unlisted:!1},r={},l=[];function d(n){const e={code:"code",pre:"pre",...(0,o.R)(),...n.components},{CodeWithHeader:t,TabItem:s,Tabs:a}=e;return t||p("CodeWithHeader",!0),s||p("TabItem",!0),a||p("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{method:"patch",endpoint:"/api/v1/organizations/{organization_id}/connections/{id}:disable",children:(0,i.jsxs)(a,{groupId:"tech-stack",querystring:!0,children:[(0,i.jsx)(s,{value:"curl",label:"cURL",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:"curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organization_id}/connections/{id}:disable' \\\n--header 'Accept: application/json'\n"})})}),(0,i.jsx)(s,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:"showLineNumbers",children:"// scalekit client takes care of authentication behind the scenes.\nconst sc = new ScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n);\n\nawait sc.connection.disableConnection(\n  organizationId,\n  connectionId, \n)\n\n"})})}),(0,i.jsx)(s,{value:"py",label:"Python",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",metastring:"showLineNumbers",children:"# scalekit client takes care of authentication behind the scenes.\nsc = ScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n)\n\nsc.connection.disable_connection(\n  organization_id,\n  connection_id\n)\n"})})}),(0,i.jsx)(s,{value:"golang",label:"Go",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",metastring:"showLineNumbers",children:"// scalekit client takes care of authentication behind the scenes.\nsc := scalekit.NewScalekitClient(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n)\n\nerr := sc.Connection.DisableConnection(\n  ctx,\n  organizationId,\n  connectionId,\n)\n"})})})]})}),"\n",(0,i.jsx)(t,{title:"Response",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'{\n  "enabled": false,\n  "error_message": ""\n}\n'})})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var i=t(6540);const o={},s=i.createContext(o);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);