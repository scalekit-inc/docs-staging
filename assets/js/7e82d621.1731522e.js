"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[8208],{2257:(s,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>t,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var l=n(4848),e=n(8453);const a={},r=void 0,c={type:"mdx",permalink:"/docs-staging/apis/embeds/tag/Authentication/get/oauth/authorize",source:"@site/src/pages/apis/embeds/tag/Authentication/get/oauth/authorize.md",description:"User will be redirected to the appropriate Identity provider's login page based on either organizationid, or connectionid or domain.",frontMatter:{},unlisted:!1},o={},h=[];function d(s){const i={code:"code",p:"p",pre:"pre",span:"span",...(0,e.R)(),...s.components},{CodeWithHeader:n,TabItem:a,Tabs:r}=i;return n||k("CodeWithHeader",!0),a||k("TabItem",!0),r||k("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{method:"get",endpoint:"/oauth/authorize",children:(0,l.jsxs)(r,{groupId:"tech-stack",querystring:!0,children:[(0,l.jsx)(a,{value:"curl",label:"cURL",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes github-light-default github-dark",style:{backgroundColor:"#ffffff","--shiki-dark-bg":"#24292e",color:"#1f2328","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-bash",children:[(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#953800","--shiki-dark":"#B392F0"},children:"curl"}),(0,l.jsx)(i.span,{style:{color:"#0550AE","--shiki-dark":"#79B8FF"},children:" --request"}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:" GET"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0550AE","--shiki-dark":"#79B8FF"},children:"  --url"}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:" 'https://$env_url/oauth/authorize"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:"  ?client_id=skc_12344"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:"  &redirect_uri=https%3A%2F%2Fmysaasapp.com%2Fredirect_uri"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:"  &response_type=code"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:"  &state=hf68uyjh2189iuhj56789"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:"  &scope=openid email profile'"})}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})}),(0,l.jsx)(a,{value:"nodejs",label:"Node.js",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes github-light-default github-dark",style:{backgroundColor:"#ffffff","--shiki-dark-bg":"#24292e",color:"#1f2328","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-javascript",children:[(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" { ScalekitClient } "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"from"}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:" '@scalekit-sdk/node'"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"// Initialize the SDK client"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"const"}),(0,l.jsx)(i.span,{style:{color:"#0550AE","--shiki-dark":"#79B8FF"},children:" scalekit"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" new"}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:" ScalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:"  '<SCALEKIT_ENVIRONMENT_URL>'"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:"  '<SCALEKIT_CLIENT_ID>'"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:"  '<SCALEKIT_CLIENT_SECRET>'"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:");"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"const"}),(0,l.jsx)(i.span,{style:{color:"#0550AE","--shiki-dark":"#79B8FF"},children:" options"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" {};"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"// Option 1: Authorization URL with the organization ID"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"options["}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'"organizationId"'}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"] "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:" 'org_15421144869927830'"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"// Option 2: Authorization URL with login hint"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"options.connectionId "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:" 'conn_15696105471768821'"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"// Option 3: Authorization URL with login hint"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"options.loginHint "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:" 'user@example.com'"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"const"}),(0,l.jsx)(i.span,{style:{color:"#0550AE","--shiki-dark":"#79B8FF"},children:" authorizationURL"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" scalekit."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"getAuthorizationUrl"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  redirectUrl,"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  options,"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:");"})}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})}),(0,l.jsx)(a,{value:"py",label:"Python",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes github-light-default github-dark",style:{backgroundColor:"#ffffff","--shiki-dark-bg":"#24292e",color:"#1f2328","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-python",children:[(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"from"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" scalekit "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"# Initialize the SDK client"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"scalekit_client "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" ScalekitClient("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'  "<SCALEKIT_ENVIRONMENT_URL>"'}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'  "<SCALEKIT_CLIENT_ID>"'}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'  "<SCALEKIT_CLIENT_SECRET>"'})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"options "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" AuthorizationUrlOptions()"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"# Option 1: Authorization URL with the organization ID"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"options.organization_id "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:" 'org_15421144869927830'"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"# Option 2: Authorization URL with login hint"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"options.login_hint "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:" 'user@example.com'"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"# Option 3: Authorization URL with the connection ID"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"options.connection_id "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:" 'conn_15696105471768821'"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"authorization_url "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" scalekit_client.get_authorization_url("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#953800","--shiki-dark":"#FFAB70"},children:"  redirect_uri"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"=<"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"redirect_uri"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#953800","--shiki-dark":"#FFAB70"},children:"  options"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"options"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"# Redirect the user to this authorization URL"})}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})}),(0,l.jsx)(a,{value:"golang",label:"Go",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes github-light-default github-dark",style:{backgroundColor:"#ffffff","--shiki-dark-bg":"#24292e",color:"#1f2328","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-go",children:[(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" ("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'  "'}),(0,l.jsx)(i.span,{style:{color:"#953800","--shiki-dark":"#B392F0"},children:"github.com/scalekit/scalekit-sdk-go"}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'"'})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"func"}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:" main"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"() {"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"  // Initialize the SDK client"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  sc "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:":="}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" scalekit."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"NewScalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'    "<SCALEKIT_ENVIRONMENT_URL>"'}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'    "<SCALEKIT_CLIENT_ID>"'}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'    "<SCALEKIT_CLIENT_SECRET>"'})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  )"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  options "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:":="}),(0,l.jsx)(i.span,{style:{color:"#953800","--shiki-dark":"#B392F0"},children:" scalekit"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#953800","--shiki-dark":"#B392F0"},children:"AuthorizationUrlOptions"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"{}"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"  // Option 1: Authorization URL with the organization ID"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  options.OrganizationId "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:' "org_15421144869927830"'})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"  // Option 2: Authorization URL with the connection ID"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  options.ConnectionId "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:' "conn_15696105471768821"'})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"  // Option 3: Authorization URL with Login Hint"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"  // User's email domain detects the correct enterprise SSO connection."})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  options.LoginHint "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:' "user@example.com"'})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  authorizationURL "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:":="}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" sc."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"GetAuthorizationUrl"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"    redirectUrl,"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"    options,"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  )"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"   // Next step is to redirect the user to this authorization URL"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"// Redirect the user to this authorizationURL"})}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})}),(0,l.jsx)(a,{value:"java",label:"Java",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes github-light-default github-dark",style:{backgroundColor:"#ffffff","--shiki-dark-bg":"#24292e",color:"#1f2328","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-java",children:[(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"package"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" com.scalekit;"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" com.scalekit.ScalekitClient;"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" com.scalekit.internal.http.AuthorizationUrlOptions;"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"public"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" class"}),(0,l.jsx)(i.span,{style:{color:"#953800","--shiki-dark":"#B392F0"},children:" Main"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"  public"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" static"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" void"}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:" main"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"String"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"[] "}),(0,l.jsx)(i.span,{style:{color:"#953800","--shiki-dark":"#FFAB70"},children:"args"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"    // Initialize the SDK client"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"    ScalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" scalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" new"}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:" ScalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'      "<SCALEKIT_ENVIRONMENT_URL>"'}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'      "<SCALEKIT_CLIENT_ID>"'}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'      "<SCALEKIT_CLIENT_SECRET>"'})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"    );"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"    AuthorizationUrlOptions"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" options"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" new"}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:" AuthorizationUrlOptions"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"    // Option 1: Authorization URL with the organization ID"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"    options."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"setOrganizationId"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'"org_13388706786312310"'}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"    // Option 2: Authorization URL with the connection ID"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"    options."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"setConnectionId"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'"con_13388706786312310"'}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"    // Option 3: Authorization URL with Login Hint"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"    // User's email domain detects the correct enterprise SSO connection."})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"    options."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"setLoginHint"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#0A3069","--shiki-dark":"#9ECBFF"},children:'"user@example.com"'}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"    try"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"      String"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" url"}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" scalekitClient"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"        ."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"authentication"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"        ."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"getAuthorizationUrl"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"(redirectUrl, options)"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"        ."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"toString"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"    } "}),(0,l.jsx)(i.span,{style:{color:"#CF222E","--shiki-dark":"#F97583"},children:"catch"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:" (Exception "}),(0,l.jsx)(i.span,{style:{color:"#953800","--shiki-dark":"#FFAB70"},children:"e"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"      System.out."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"println"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"(e."}),(0,l.jsx)(i.span,{style:{color:"#8250DF","--shiki-dark":"#B392F0"},children:"getMessage"}),(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"());"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"  }"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#1F2328","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#6E7781","--shiki-dark":"#6A737D"},children:"// Redirect the user to this authorizationURL"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})})]})}),"\n",(0,l.jsx)(n,{title:"Response",children:(0,l.jsx)(i.p,{children:"User will be redirected to the appropriate Identity provider's login page based on either organization_id, or connection_id or domain."})})]})}function t(s={}){const{wrapper:i}={...(0,e.R)(),...s.components};return i?(0,l.jsx)(i,{...s,children:(0,l.jsx)(d,{...s})}):d(s)}function k(s,i){throw new Error("Expected "+(i?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(s,i,n)=>{n.d(i,{R:()=>r,x:()=>c});var l=n(6540);const e={},a=l.createContext(e);function r(s){const i=l.useContext(a);return l.useMemo((function(){return"function"==typeof s?s(i):{...i,...s}}),[i,s])}function c(s){let i;return i=s.disableParentContext?"function"==typeof s.components?s.components(e):s.components||e:r(s.components),l.createElement(a.Provider,{value:i},s.children)}}}]);