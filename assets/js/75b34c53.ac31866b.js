"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[5093],{7974:(s,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>t,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var l=i(4848),n=i(8453);const a={},r=void 0,c={type:"mdx",permalink:"/docs-staging/apis/embeds/tag/Admin%20Portal/delete/api/v1/organizations/%7Bid%7D/portal_links",source:"@site/src/pages/apis/embeds/tag/Admin Portal/delete/api/v1/organizations/{id}/portal_links.md",frontMatter:{},unlisted:!1},o={},d=[];function h(s){const e={code:"code",pre:"pre",span:"span",...(0,n.R)(),...s.components},{CodeWithHeader:i,JsonViewer:a,TabItem:r,Tabs:c}=e;return i||k("CodeWithHeader",!0),a||k("JsonViewer",!0),r||k("TabItem",!0),c||k("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{method:"delete",endpoint:"/api/v1/organizations/{id}/portal_links/{link_id}",children:(0,l.jsxs)(c,{groupId:"tech-stack",querystring:!0,children:[(0,l.jsx)(r,{value:"curl",label:"cURL",children:(0,l.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(e.code,{className:"language-bash",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"curl"}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" --location"}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" --request"}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" DELETE"}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'https://$ENV_URL/api/v1/organizations/{id}/portal_links'"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"--header "}),(0,l.jsx)(e.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'Accept: application/json'"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})}),(0,l.jsx)(r,{value:"nodejs",label:"Node.js",children:(0,l.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(e.code,{className:"language-js",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" sc"}),(0,l.jsx)(e.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(e.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" new"}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" ScalekitClient"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#79B8FF"},children:"SCALEKIT_ENVIRONMENT_URL"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">,"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_ID"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">,"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,l.jsx)(e.span,{style:{color:"#C18401","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_SECRET"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"await sc.organization.deletePortalLink(organizationId, linkId);"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})}),(0,l.jsx)(r,{value:"py",label:"Python",children:(0,l.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(e.code,{className:"language-python",children:[(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"sc "}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" ScalekitClient("})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#79B8FF"},children:"SCALEKIT_ENVIRONMENT_URL"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_ID"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_SECRET"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"sc.organization.delete_portal_link("})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  organization_id,"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  link_id"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})}),(0,l.jsx)(r,{value:"golang",label:"Go",children:(0,l.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(e.code,{className:"language-go",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"sc"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" scalekit"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"NewScalekitClient"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"SCALEKIT_ENVIRONMENT_URL"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"SCALEKIT_CLIENT_ID"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"SCALEKIT_CLIENT_SECRET"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"err"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" sc"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"Organization"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"DeletePortalLink"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  ctx"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  organizationId"}),(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  linkId"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})}),(0,l.jsx)(r,{value:"java",label:"Java",children:(0,l.jsx)(e.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(e.code,{className:"language-java",children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// Hang in there. Coming soon! (Vroom! Vroom!)"})}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})})]})}),"\n",(0,l.jsx)(i,{title:"Response",children:(0,l.jsx)(a,{src:{}})})]})}function t(s={}){const{wrapper:e}={...(0,n.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}function k(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(s,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var l=i(6540);const n={},a=l.createContext(n);function r(s){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:r(s.components),l.createElement(a.Provider,{value:e},s.children)}}}]);