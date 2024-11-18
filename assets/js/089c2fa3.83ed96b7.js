"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[9779],{5923:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>t,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=i(4848),l=i(8453);const a={},r=void 0,c={type:"mdx",permalink:"/docs-staging/apis/embeds/tag/Directory/patch/api/v1/organizations/%7Borganization_id%7D/directories/%7Bid%7D%3Aenable",source:"@site/src/pages/apis/embeds/tag/Directory/patch/api/v1/organizations/{organization_id}/directories/{id}:enable.md",description:"<JsonViewer src={{",frontMatter:{},unlisted:!1},o={},d=[];function h(s){const e={code:"code",pre:"pre",span:"span",...(0,l.R)(),...s.components},{CodeWithHeader:i,JsonViewer:a,TabItem:r,Tabs:c}=e;return i||k("CodeWithHeader",!0),a||k("JsonViewer",!0),r||k("TabItem",!0),c||k("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{method:"patch",endpoint:"/api/v1/organizations/{organization_id}/directories/{id}:enable",children:(0,n.jsxs)(c,{groupId:"tech-stack",querystring:!0,children:[(0,n.jsx)(r,{value:"curl",label:"cURL",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-bash",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"curl"}),(0,n.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" --location"}),(0,n.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" --request"}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" PATCH"}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'https://<SCALEKIT_ENVIRONMENT_URL>/api/v1/organizations/<organization_id>/directories/<directory_id>:enable'"}),(0,n.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"--header "}),(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'Authorization: Bearer <SCALEKIT_ACCESS_TOKEN>'"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})}),(0,n.jsx)(r,{value:"nodejs",label:"Node.js",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-js",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" sc"}),(0,n.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" new"}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" ScalekitClient"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#79B8FF"},children:"SCALEKIT_ENVIRONMENT_URL"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">,"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_ID"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">,"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_SECRET"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"await sc.connection.enableConnection(organizationId, connectionId);"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})}),(0,n.jsx)(r,{value:"py",label:"Python",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-python",children:[(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"sc "}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" ScalekitClient("})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#79B8FF"},children:"SCALEKIT_ENVIRONMENT_URL"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_ID"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_SECRET"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"sc.connection.enable_connection("})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  organization_id,"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  connection_id,"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})}),(0,n.jsx)(r,{value:"golang",label:"Go",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-go",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"sc"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" scalekit"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"NewScalekitClient"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"SCALEKIT_ENVIRONMENT_URL"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"SCALEKIT_CLIENT_ID"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"SCALEKIT_CLIENT_SECRET"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"err"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" sc"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"Connection"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"EnableConnection"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  ctx"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  organizationId"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  connectionId"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})}),(0,n.jsx)(r,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,n.jsxs)(e.code,{className:"language-java",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"ScalekitClient"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" scalekitClient "}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" new"}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" ScalekitClient"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "<SCALEKIT_ENVIRONMENT_URL>"'}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "<SCALEKIT_CLIENT_ID>"'}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "<SCALEKIT_CLIENT_SECRET>"'})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"ToggleConnectionResponse"}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" response "}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" client"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"connections"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()."}),(0,n.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"enableConnection"}),(0,n.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(connectionId, organizationId);"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})})]})}),"\n",(0,n.jsx)(i,{title:"Response",children:(0,n.jsx)(a,{src:{enabled:!0}})})]})}function t(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}function k(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(s,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var n=i(6540);const l={},a=n.createContext(l);function r(s){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),n.createElement(a.Provider,{value:e},s.children)}}}]);