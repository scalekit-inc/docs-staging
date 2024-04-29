"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[1673,3201],{7127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var a=t(4848),r=t(8453),i=t(5632),l=t(1470),s=t(9365);const o={sidebar_position:1},c="Integrate Admin Portal",u={id:"admin-portal/quickstart-admin-portal",title:"Integrate Admin Portal",description:"Overview",source:"@site/docs/admin-portal/quickstart-admin-portal.md",sourceDirName:"admin-portal",slug:"/admin-portal/quickstart-admin-portal",permalink:"/admin-portal/quickstart-admin-portal",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714413619e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Go-live Checklist",permalink:"/single-sign-on/golive-checklist"},next:{title:"Custom Domain (CNAME)",permalink:"/admin-portal/custom-domain"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"1. Integration via API",id:"1-integration-via-api",level:2},{value:"Configure SDK",id:"configure-sdk",level:3},...i.toc,{value:"Generate Magic Link",id:"generate-magic-link",level:3},{value:"2. Integration via Shareable Link",id:"2-integration-via-shareable-link",level:2},{value:"Generate Link",id:"generate-link",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"integrate-admin-portal",children:"Integrate Admin Portal"}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"Admin Portal is a self-service interface that empowers your customers' IT admins to configure SSO on their own. Designed to streamline the SSO setup process, it reduces the demand on your engineering resources and provides comprehensive IdP-specific documentation. Fully hosted and managed by Scalekit, the Admin Portal simplifies the SSO config experience, ensuring a fast and secure integration with only a few lines of code."}),"\n",(0,a.jsx)(n.p,{children:"Depending on your architecture and UX preferences, you can choose one of the two methods to integrate the Admin Portal into your application:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Integration via API"}),"\n",(0,a.jsx)(n.li,{children:"Integration via Shareable Link"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"1-integration-via-api",children:"1. Integration via API"}),"\n",(0,a.jsx)(n.h3,{id:"configure-sdk",children:"Configure SDK"}),"\n",(0,a.jsx)(n.p,{children:"Begin by installing the Scalekit SDK, which provides necessary tools for creating a secure and efficient connection to the Admin Portal."}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(n.h3,{id:"generate-magic-link",children:"Generate Magic Link"}),"\n",(0,a.jsx)(n.p,{children:"Utilize our API to generate an Admin Portal link that is uniquely keyed to an organization."}),"\n",(0,a.jsxs)(l.A,{groupId:"tech-stack",children:[(0,a.jsx)(s.A,{value:"nodejs",label:"NodeJS",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:"showLineNumbers",children:"const links = await sc.organization.generateCustomerPortalLink('org_1233222' as string);\n// links[0] is the Admin Portal link\n"})})}),(0,a.jsx)(s.A,{value:"py",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# write python code here\n"})})}),(0,a.jsx)(s.A,{value:"golang",label:"Go",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// write go code here\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Note:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This link is designed for one-time use, expiring after 5 minutes or upon its initial access."}),"\n",(0,a.jsx)(n.li,{children:"Once activated, the IT admin can configure SSO for a longer period of time. The session will remain active until the setup is complete."}),"\n",(0,a.jsx)(n.li,{children:"Depending on your UX strategy, you may choose to redirect the IT admin to this link or embed it within your application as an iframe, allowing configuration without navigating away from your product."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"2-integration-via-shareable-link",children:"2. Integration via Shareable Link"}),"\n",(0,a.jsx)(n.p,{children:"Log in to your Scalekit Dashboard and navigate to the desired organization's overview section."}),"\n",(0,a.jsx)(n.h3,{id:"generate-link",children:"Generate Link"}),"\n",(0,a.jsx)(n.p,{children:"Click 'Generate Link' to create a new, shareable Admin Portal link."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This link is valid for 7 days but can be revoked at any time from the dashboard for security purposes."}),"\n",(0,a.jsx)(n.li,{children:"The link can be distributed through communication channels such as email, Slack, etc"}),"\n",(0,a.jsx)(n.li,{children:"Exercise caution, as anyone with this link can view and update their organization's SSO settings"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(4848),r=t(8453),i=t(1470),l=t(9365);const s={},o=void 0,c={id:"templates/install-sdk",title:"install-sdk",description:"",source:"@site/docs/templates/install-sdk.md",sourceDirName:"templates",slug:"/templates/install-sdk",permalink:"/templates/install-sdk",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714393431e3,frontMatter:{}},u={},d=[];function h(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(i.A,{groupId:"tech-stack",children:[(0,a.jsx)(l.A,{value:"nodejs",label:"Node.js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ npm install @scalekit-inc/nodejs-sdk\n"})})}),(0,a.jsx)(l.A,{value:"py",label:"Python",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ pip install scalekit\n"})})}),(0,a.jsx)(l.A,{value:"golang",label:"Go",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'import "scalekit-inc/go-sdk"\n'})})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var i=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),r=t(4164),i=t(3104),l=t(6347),s=t(205),o=t(7485),c=t(1682),u=t(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),v=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function k(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,b.jsx)(k,{...e,...n}),(0,b.jsx)(x,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var a=t(6540);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);