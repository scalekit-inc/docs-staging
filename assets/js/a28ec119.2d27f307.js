"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[6437],{7441:(s,i,e)=>{e.r(i),e.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>k,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var l=e(4848),r=e(8453);const n={},a=void 0,c={type:"mdx",permalink:"/docs-staging/apis/embeds/tag/Authentication/post/oauth/token",source:"@site/src/pages/apis/embeds/tag/Authentication/post/oauth/token.md",frontMatter:{},unlisted:!1},d={},o=[];function h(s){const i={code:"code",pre:"pre",span:"span",...(0,r.R)(),...s.components},{CodeWithHeader:e,TabItem:n,Tabs:a}=i;return e||t("CodeWithHeader",!0),n||t("TabItem",!0),a||t("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e,{method:"post",endpoint:"/oauth/token",children:(0,l.jsxs)(a,{groupId:"tech-stack",querystring:!0,children:[(0,l.jsx)(n,{value:"curl",label:"cURL",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-bash",children:[(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"curl"}),(0,l.jsx)(i.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" --request"}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" POST"}),(0,l.jsx)(i.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:" \\"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"  --url"}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:" 'https://$env_url/oauth/token"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"  ?code=jhasd72"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"  &redirect_uri=https%3A%2F%2Fmysaasapp.com%2Fredirect_uri"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"  &client_id=skc_12344"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"  &client_secret=skc_prod_12441kjasad"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"  &grant_type=authorization_code'"})}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})}),(0,l.jsx)(n,{value:"nodejs",label:"Node.js",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-js",children:[(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" { "}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"ScalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" } "}),(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"from"}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' "@scalekit-sdk/node"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"const"}),(0,l.jsx)(i.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" scalekit"}),(0,l.jsx)(i.span,{style:{color:"#0184BC","--shiki-dark":"#F97583"},children:" ="}),(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" new"}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" ScalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#79B8FF"},children:"SCALEKIT_ENVIRONMENT_URL"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">,"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_ID"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">,"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_SECRET"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"// Handle the oauth redirect"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"const "}),(0,l.jsx)(i.span,{style:{color:"#CA1243","--shiki-dark":"#E1E4E8"},children:"{"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" code, error, error_description "}),(0,l.jsx)(i.span,{style:{color:"#CA1243","--shiki-dark":"#E1E4E8"},children:"}"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" = req.query;"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"if (error) "}),(0,l.jsx)(i.span,{style:{color:"#CA1243","--shiki-dark":"#E1E4E8"},children:"{"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"  // Handle error"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  return throw "}),(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"new"}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" Error"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(error_description);"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#CA1243","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"// Fetch user details by exchanding the code received in the request params"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"const "}),(0,l.jsx)(i.span,{style:{color:"#CA1243","--shiki-dark":"#E1E4E8"},children:"{"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" user "}),(0,l.jsx)(i.span,{style:{color:"#CA1243","--shiki-dark":"#E1E4E8"},children:"}"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" = await scalekit.authenticateWithCode("})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  code,"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#79B8FF"},children:"redirectUri"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:">"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})}),(0,l.jsx)(n,{value:"py",label:"Python",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-python",children:[(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"from"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekit "}),(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" ScalekitClient, AuthorizationUrlOptions, CodeAuthenticationOptions"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"scalekit_client "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" ScalekitClient("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#79B8FF"},children:"SCALEKIT_ENVIRONMENT_URL"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_ID"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#79B8FF"},children:"SCALEKIT_CLIENT_SECRET"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"# Handle oauth redirect_url, fetch code and error_description from request params"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"code "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" request.args.get("}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'code'"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"error "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" request.args.get("}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'error'"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"error_description "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" request.args.get("}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:"'error_description'"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"if"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" error:"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"    raise"}),(0,l.jsx)(i.span,{style:{color:"#0184BC","--shiki-dark":"#79B8FF"},children:" Exception"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(error_description)"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"result "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" scalekit_client.authenticate_with_code("})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"  code,"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"redirect_uri"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"# result.user has the authenticated user's details"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"user_email "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" result.user.email"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"# Create a session and redirect the user to your dashboard"})}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})}),(0,l.jsx)(n,{value:"golang",label:"Go",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-go",children:[(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"import"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" ("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "'}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#B392F0"},children:"github.com/scalekit/scalekit-sdk-go"}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"'})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"sc"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" scalekit"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"NewScalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"SCALEKIT_ENVIRONMENT_URL"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"SCALEKIT_CLIENT_ID"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"SCALEKIT_CLIENT_SECRET"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// Handle the oauth redirect"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"code"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" r"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"URL"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Query"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Get"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"code"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"err"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" r"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"URL"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Query"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Get"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"error"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"errorDescription"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" r"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"URL"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Query"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"Get"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"error_description"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"if"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" err"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" !="}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:' ""'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"  return"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" errors"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"New"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"errorDescription"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// Fetch user details by exchanding the code received in the request params"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"user"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:", "}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"err"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" sc"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"AuthenticateWithCode"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"  code"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"  <"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"redirectUri"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:">"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:")"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"// `user` has the authenticated user's details"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"userEmail"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" :="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" user"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"Email"})]}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})}),(0,l.jsx)(n,{value:"java",label:"Java",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-java",children:[(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"ScalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" scalekitClient "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:" new"}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:" ScalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "<SCALEKIT_ENVIRONMENT_URL>"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "<SCALEKIT_CLIENT_ID>"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'  "<SCALEKIT_CLIENT_SECRET>"'})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"String"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" code "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" request"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"getParameter"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"code"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"String"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" error "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" request"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"getParameter"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"error"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"String"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" errorDescription "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" request"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"getParameter"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"("}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"error_description"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:");"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"if"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(error "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"!="}),(0,l.jsx)(i.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:" null"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" &&"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:" !"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:"error"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"isEmpty"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()) {"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"    // Handle errors"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"    return"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"try"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"    AuthenticationResponse"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" res "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" scalekitClient"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"authentication"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"authenticateWithCode"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"(code, redirectUrl);"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"    // res.getIdTokenClaims() has the authenticated user's details"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"    String"}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" userEmail "}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#F97583"},children:"="}),(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#E1E4E8"},children:" res"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"getIdTokenClaims"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"()."}),(0,l.jsx)(i.span,{style:{color:"#4078F2","--shiki-dark":"#B392F0"},children:"getEmail"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"();"})]}),"\n",(0,l.jsx)(i.span,{className:"line"}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"} "}),(0,l.jsx)(i.span,{style:{color:"#A626A4","--shiki-dark":"#F97583"},children:"catch"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:" ("}),(0,l.jsx)(i.span,{style:{color:"#C18401","--shiki-dark":"#E1E4E8"},children:"Exception"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#FFAB70"},children:" e"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#A0A1A7","--shiki-dark":"#6A737D",fontStyle:"italic","--shiki-dark-font-style":"inherit"},children:"    // Handle errors"})}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})})]})}),"\n",(0,l.jsx)(e,{title:"Response",children:(0,l.jsx)(i.pre,{className:"shiki shiki-themes one-light github-dark",style:{backgroundColor:"#FAFAFA","--shiki-dark-bg":"#24292e",color:"#383A42","--shiki-dark":"#e1e4e8"},tabIndex:"0",children:(0,l.jsxs)(i.code,{className:"language-json",children:[(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"{"})}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#79B8FF"},children:'  "access_token"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"ey ... vPnyWBQ"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#79B8FF"},children:'  "expires_in"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,l.jsx)(i.span,{style:{color:"#986801","--shiki-dark":"#79B8FF"},children:"899"}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#79B8FF"},children:'  "id_token"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"eyJhbGc ... ar79GwZg"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,l.jsxs)(i.span,{className:"line",children:[(0,l.jsx)(i.span,{style:{color:"#E45649","--shiki-dark":"#79B8FF"},children:'  "token_type"'}),(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:": "}),(0,l.jsx)(i.span,{style:{color:"#50A14F","--shiki-dark":"#9ECBFF"},children:'"Bearer"'})]}),"\n",(0,l.jsx)(i.span,{className:"line",children:(0,l.jsx)(i.span,{style:{color:"#383A42","--shiki-dark":"#E1E4E8"},children:"}"})}),"\n",(0,l.jsx)(i.span,{className:"line"})]})})})]})}function k(s={}){const{wrapper:i}={...(0,r.R)(),...s.components};return i?(0,l.jsx)(i,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}function t(s,i){throw new Error("Expected "+(i?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(s,i,e)=>{e.d(i,{R:()=>a,x:()=>c});var l=e(6540);const r={},n=l.createContext(r);function a(s){const i=l.useContext(n);return l.useMemo((function(){return"function"==typeof s?s(i):{...i,...s}}),[i,s])}function c(s){let i;return i=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:a(s.components),l.createElement(n.Provider,{value:i},s.children)}}}]);