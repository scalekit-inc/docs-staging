"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[1556,3201],{3376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var i=n(4848),r=n(8453),s=n(5632),a=n(1470),o=n(9365),l=n(6365);const c={slug:"/"},u="SSO Quick Start",d={id:"single-sign-on/quickstart-sso",title:"SSO Quick Start",description:"This step-by-step guide will help you implement enterprise-grade Single Sign-On (SSO) in your application through Scalekit\u2019s intuitive APIs.",source:"@site/docs/single-sign-on/quickstart-sso.md",sourceDirName:"single-sign-on",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714556383e3,frontMatter:{slug:"/"},sidebar:"tutorialSidebar",next:{title:"Testing Single Sign-on",permalink:"/single-sign-on/testing-sso"}},h={},p=[{value:"What you&#39;ll build",id:"what-youll-build",level:2},{value:"Implement Single Sign-on",id:"implement-single-sign-on",level:2},{value:"0. Prerequisites",id:"0-prerequisites",level:3},{value:"1. Install SDK",id:"1-install-sdk",level:3},...s.toc,{value:"2. Configure your Secrets",id:"2-configure-your-secrets",level:3},{value:"3. Initiate the Authorization URL",id:"3-initiate-the-authorization-url",level:3},{value:"4. Fetch User Details",id:"4-fetch-user-details",level:3},{value:"Onboarding Enterprise Customers",id:"onboarding-enterprise-customers",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"sso-quick-start",children:"SSO Quick Start"}),"\n",(0,i.jsx)(t.p,{children:"This step-by-step guide will help you implement enterprise-grade Single Sign-On (SSO) in your application through Scalekit\u2019s intuitive APIs."}),"\n",(0,i.jsx)(t.p,{children:"Scalekit facilitates seamless integration between your application and a multitude of Identity Providers (IdPs) supporting SAML or OIDC protocols. Acting as an authentication middleware, Scalekit abstracts the complexities associated with SAML, OIDC, and OAuth 2.0, enabling you to focus on delivering a top-notch user experience."}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.img,{alt:"How Scalekit works",src:n(2316).A+"",width:"5776",height:"1924"}),"\n",(0,i.jsx)("figcaption",{children:"Scalekit in a nutshell"})]}),"\n",(0,i.jsx)(t.h2,{id:"what-youll-build",children:"What you'll build"}),"\n",(0,i.jsx)(t.p,{children:"By following this guide, you\u2019ll implement an SSO solution that simplifies your user authentication process and securely connects to customers' IdPs."}),"\n",(0,i.jsx)(t.p,{children:"The sequence diagram below explains the SSO workflow between your application, Scalekit, and identity providers in your customers organizations."}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(t.img,{alt:"Sequence Diagram for SSO Workflow",src:n(1929).A+"",width:"4936",height:"3744"}),"\n",(0,i.jsx)("figcaption",{children:"How Scalekit integrates with your SSO flow"})]}),"\n",(0,i.jsx)(t.p,{children:"Here's a description of how it works:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"A user initiates a login to your application."}),"\n",(0,i.jsx)(t.li,{children:"Your application recognizes the need for SSO and redirects the user to Scalekit's Authorization URL and pass their unique identifier, which could be user's email address or the organization ID."}),"\n",(0,i.jsx)(t.li,{children:"Based on the user details provided, Scalekit determines the appropriate SSO configuration and redirects the user to the organization\u2019s identity provider"}),"\n",(0,i.jsx)(t.li,{children:"The user is authenticated by their IdP using either SAML or OIDC."}),"\n",(0,i.jsx)(t.li,{children:"Post-authentication, the IdP sends the user's profile details to Scalekit."}),"\n",(0,i.jsx)(t.li,{children:"Scalekit will redirect the user to the Redirect URI that is configured as part of Authorization URL (in Step 2) with a one-time code."}),"\n",(0,i.jsx)(t.li,{children:"Your application exchanges the one-time code along with your API credentials to fetch the user details shared by the IdP"}),"\n",(0,i.jsx)(t.li,{children:"Based on the user details received from Scalekit, your application will create a session, login the user to your product, and allow the user to access the resource(s)."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"implement-single-sign-on",children:"Implement Single Sign-on"}),"\n",(0,i.jsx)(t.h3,{id:"0-prerequisites",children:"0. Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Before you get started:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Ensure you're logged into your ",(0,i.jsx)(t.a,{href:"https://app.scalekit.com",children:"Scalekit account"})," and have your API credentials ready"]}),"\n",(0,i.jsx)(t.li,{children:"Access to your codebase is also necessary to implement and test changes"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"1-install-sdk",children:"1. Install SDK"}),"\n",(0,i.jsx)(t.p,{children:"Scalekit provides SDKs for various languages to quickly add SSO in your application."}),"\n",(0,i.jsx)(t.p,{children:"Install the relevant SDK using the command below:"}),"\n",(0,i.jsx)(s.default,{}),"\n",(0,i.jsx)(t.h3,{id:"2-configure-your-secrets",children:"2. Configure your Secrets"}),"\n",(0,i.jsx)(t.p,{children:"Set up your API credentials, found on your Scalekit dashboard, as environment variables for secure API communication."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"API Credentials:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Environment URL"}),": this is the base url of the environment to which all your API calls are made to. This URL is unique to an environment, so that you can route the API requests to the appropriate environment."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Client ID"}),": A unique, alpha-numeric string that your application will use for all communications with Scalekit."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Client Secret"}),": Randomly generated secret that is used to authenticate your APIs. For security purposes, this is generated only when you request using the Scalekit Dashboard. See ",(0,i.jsx)(t.a,{href:"/best-practices/manage-client-secrets",children:"here"})," to learn best practices on how to manage Client Secret."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'Now, go to your Scalekit Dashboard, choose the "Development" environment and select \u201cAPI Config\u201d to access these configuration details.'}),"\n",(0,i.jsx)(t.p,{children:"We recommend you to store these credentials as environment variables (in your .env file)."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",metastring:'title=".env"',children:'SCALEKIT_ENVIRONMENT_URL="<https://yoursaas-dev.scalekit.com>"\nSCALEKIT_CLIENT_ID="skc_122056050118122349527"\nSCALEKIT_CLIENT_SECRET="test_CbGfKxzwUVO6ISirRcTKMbcX3dsfdsfdsfsdfdsfsdfGmXLN"\n'})}),"\n",(0,i.jsx)(t.h3,{id:"3-initiate-the-authorization-url",children:"3. Initiate the Authorization URL"}),"\n",(0,i.jsx)(t.p,{children:"The endpoint to initiate SSO is crucial for the authentication workflow. The SSO integration starts after you redirect the user to Scalekit Authorization URL."}),"\n",(0,i.jsxs)(t.p,{children:["As part of Authorization URL, you will need to send the following required parameters for successfully initiating SSO. You can read more details about the entire list of parameters that are accepted as part of authoriation url ",(0,i.jsx)("a",{href:"/best-practices/authorization-url",target:"_blank",children:"here"})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Redirect URI:"})," A redirect URI is the endpoint in your application that Scalekit redirects the user to after they have completed the authentication with their Identity Provider."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After a successful user authentication, Scalekit provides a temporary code value to the redirect_uri you configured. You'll need to POST this code back to Scalekit with your client secret in order to retrieve user details."}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"SSO Connection Identifier:"})," One of the following request parameters should be present to identify the appropriate SSO connection to be used to initiate the SSO."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(l.I,{children:"organization_id"})}),": Organization ID that the user belongs to. This is the preferred parameter for SAML and OIDC connections.  Example: ",(0,i.jsx)(l.I,{children:"org_12434341"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(l.I,{children:"connection_id"})}),": You can also use the Connection ID for the specific SSO connection. Example: ",(0,i.jsx)(l.I,{children:"conn_121414141"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(l.I,{children:"domain"})}),": If your application enforces SSO for all users that belong to a particular email domain, this attribute can be useful to detect the appropriate SSO connection. Example: ",(0,i.jsx)(l.I,{children:"google.com or yourcustomerdomain.com"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"client_id:"})," Client ID uniquely identifies your application and environment and hence it is mandatory."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"our SDK automatically fills in the required parameters while constructing the authorizationURL as shown below."})}),"\n",(0,i.jsx)(a.A,{groupId:"tech-stack",children:(0,i.jsx)(o.A,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:"showLineNumbers",children:"// init client\nconst scalekit = new Scalekit(\n  SCALEKIT_ENVIRONMENT_URL,\n  SCALEKIT_CLIENT_ID,\n  SCALEKIT_CLIENT_SECRET\n);\n\n// Authorization URL with organization ID parameter and optional state parameter\n const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n   organizationId: 'org_12442',\n   state: state\n })\n\n// Authorization URL with optional login hint parameter\n const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n   loginHint: \"user@example.com\",\n   organizationId: 'org_12442'\n })\n\n// Authorization URL with connection ID parameter\n const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n   connectionId: 'conn_1242242',\n })\n\n// next step is to redirect the user to this authorizationURL\n"})})})}),"\n",(0,i.jsx)(t.h3,{id:"4-fetch-user-details",children:"4. Fetch User Details"}),"\n",(0,i.jsxs)(t.p,{children:["After Scalekit completes SSO authentication, it sends a unique authorization code to the redirect_uri that is sent as part of the authorization URL above. You will need to send this ",(0,i.jsx)(t.code,{children:"code"})," and ",(0,i.jsx)(t.code,{children:"redirect_uri"})," to get the authenticated user's profile information."]}),"\n",(0,i.jsx)(a.A,{groupId:"tech-stack",children:(0,i.jsx)(o.A,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:"showLineNumbers",children:'const {code, error, error_description, idp_initiated_login, connection_id, relay_state} = req.query;\n\nif (error) {\n  // handle errors\n}\n\n// check if this is an idp initiated login\nif (idp_initiated_login && idp_initiated_login === "success") {\n  // handle idp initiated login\n  const authorizationURL = scalekit.getAuthorizationUrl(redirectUri, {\n    connectionId: connection_id,\n    ...(relay_state && {state: relay_state}) // optionally pass relay state as state parameter\n  })\n\n  // next step is to redirect the user to this authorizationURL\n}\n\n// if there are no errors and if this is not an IdP initiated SSO, then authenticate with the code\nconst res = await sc.authenticateWithCode({\n  code: code,\n  redirectUri: redirectUri\n});\n\n// res.user has the authenticated user\'s details \nconst userEmail = res.user.email;\n\n\n// next step is to create a session for this user and allow access to your application resources\n'})})})}),"\n",(0,i.jsx)(t.h2,{id:"onboarding-enterprise-customers",children:"Onboarding Enterprise Customers"}),"\n",(0,i.jsx)(t.p,{children:"Once SSO is implemented, you\u2019ll want to thoroughly test the setup and go through a production checklist to ensure your application is secure and ready for enterprise use."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/single-sign-on/testing-sso",children:"Test SSO"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/single-sign-on/golive-checklist",children:"Production Check-list"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Explore more. Check out:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/scalekit-inc/scalekit-sdk-node",children:"Node.js SDK"})," - Reference the SDK used in this guide for a deep dive into its capabilities"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/scalekit-inc/scalekit-demos/tree/main/your-saas-app",children:"Sample Node.js App"})," - Download and explore a fully functional sample app to jumpstart your implementation"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Now that you have a working SSO integration with Scalekit, you're ready to provide a seamless authentication experience for your users. Happy coding!"})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},5632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(4848),r=n(8453),s=n(1470),a=n(9365);const o={},l=void 0,c={id:"templates/install-sdk",title:"install-sdk",description:"--\x3e",source:"@site/docs/templates/install-sdk.md",sourceDirName:"templates",slug:"/templates/install-sdk",permalink:"/templates/install-sdk",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714556383e3,frontMatter:{}},u={},d=[];function h(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsx)(s.A,{groupId:"tech-stack",children:(0,i.jsx)(a.A,{value:"nodejs",label:"Node.js",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-command-line",children:"$ npm install @scalekit-sdk/node\n"})})})})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var i=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>v});var i=n(6540),r=n(4164),s=n(3104),a=n(6347),o=n(205),l=n(7485),c=n(1682),u=n(9466);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),x=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function S(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==i&&(c(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,j.jsx)(S,{...e,...t}),(0,j.jsx)(b,{...e,...t})]})}function v(e){const t=(0,f.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},6365:(e,t,n)=>{n.d(t,{A:()=>s,I:()=>r});n(6540);var i=n(4848);function r(e){let{children:t}=e;return(0,i.jsx)("code",{className:"simple_code",children:t})}function s(e){let{children:t}=e;return(0,i.jsx)("p",{style:{marginTop:"-15px",fontStyle:"italic"},children:t})}},1929:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/How SSO works-de15f3ce77c845566eb50fd560d12a28.png"},2316:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/How_Scalekit_connects_(1)-2d96085d85f28cabcbe8b91fcc604bb9.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);