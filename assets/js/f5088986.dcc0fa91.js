"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[6059],{6583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=n(4848),r=n(8453),c=n(6365);const s={},o="Redirect URI",l={id:"best-practices/redirect-uri",title:"Redirect URI",description:"As part of integration between your application and Scalekit, redirect URI is the endpoint URL to which the user is redirected to after completing the authentication flow in the Identity Provider.",source:"@site/docs/best-practices/redirect-uri.md",sourceDirName:"best-practices",slug:"/best-practices/redirect-uri",permalink:"/best-practices/redirect-uri",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authorization URL",permalink:"/best-practices/authorization-url"},next:{title:"ID Token Claims",permalink:"/best-practices/idtoken-claims"}},d={},a=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"redirect-uri",children:"Redirect URI"}),"\n",(0,i.jsx)(t.p,{children:"As part of integration between your application and Scalekit, redirect URI is the endpoint URL to which the user is redirected to after completing the authentication flow in the Identity Provider."}),"\n",(0,i.jsx)(t.p,{children:"For successful integration between B2B product and Scalekit, there has to be at least one redirect URI configured per environment. Depending on your use case, you may choose to configure more than one redirect URI, but at least one of these must be marked as default."}),"\n",(0,i.jsx)(t.p,{children:"At the time of initiating the authentication flow for a user in B2B product via SSO, redirect_uri is one of the required parameters and this redirect_uri should match exactly with one of the redirect URIs configured in the Scalekit dashboard."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"During the IdP initiated SAML SSO flow, the redirect_uri that is marked as default will be used to redirect the user to your application."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Validation Rules for Redirect URI in both Prod and Dev Environments"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Redirect URIs can have a maximum of 256 characters"}),"\n",(0,i.jsx)(t.li,{children:"Redirect URI can contain query component which will be retained while adding additional query parameters after the completion of authentication flow."}),"\n",(0,i.jsx)(t.li,{children:"Redirect URI cannot contain fragment component."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Additional Validation Rules for Redirect URI in Dev Environment"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"localhost"})," URIs are supported in Dev Environment only"]}),"\n",(0,i.jsxs)(t.li,{children:["Redirect URIs must begin with one of the two schemes ",(0,i.jsx)(t.code,{children:"http"}),"  or ",(0,i.jsx)(t.code,{children:"https"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"http"}),"  scheme is only supported for ",(0,i.jsx)(t.code,{children:"localhost"}),"  as the host name"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Redirect URIs ",(0,i.jsx)(t.strong,{children:"can"})," contain wildcard character provided all the rules mentioned below regarding the usage of wildcard character in Redirect URI are followed."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Additional Validation Rules for Redirect URI in Prod Environment"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Redirect URIs must begin with ",(0,i.jsx)(t.code,{children:"https"})]}),"\n",(0,i.jsxs)(t.li,{children:["Redirect URIs cannot have ",(0,i.jsx)(t.code,{children:"localhost"})," URIs"]}),"\n",(0,i.jsxs)(t.li,{children:["Redirect URIs ",(0,i.jsx)(t.strong,{children:"cannot"})," contain wildcard character"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Wildcard Redirect URIs"})}),"\n",(0,i.jsxs)(t.p,{children:["According to the OAuth 2.0 specification (",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc6749#section-3.1.2",children:"section 3.1.2 of RFC 6749"}),"), a redirection endpoint URI must be an absolute URI. But, to make development and testing easier - this restriction is slightly relaxed in the DEV environments."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"In Production enironments, Redirect URIs cannot contain Wildcard characters."})}),"\n",(0,i.jsxs)(t.p,{children:["In the DEV environments, the wildcard character ",(0,i.jsx)(t.code,{children:"*"}),"  can be used to configure the redirect URIs in the dashboard. However, the following rules will apply while allowing the wildcard character."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Wildcard character as a root level domain is ",(0,i.jsx)(t.strong,{children:"not"})," allowed (",(0,i.jsx)(c.Iu,{children:"https://*.com"})," is not allowed)."]}),"\n",(0,i.jsxs)(t.li,{children:["Only ",(0,i.jsx)(t.strong,{children:"one"})," wildcard is allowed per callback (",(0,i.jsx)(t.code,{children:"https://*.*.acmecorp.com"})," is not allowed)."]}),"\n",(0,i.jsxs)(t.li,{children:["The wildcard ",(0,i.jsx)(t.strong,{children:"must"})," be located in a subdomain within the hostname component. If URI has multiple subdomains, wildcard ",(0,i.jsx)(t.strong,{children:"must"})," be part of the subdomain that is farthest from the hostname component","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For example, ",(0,i.jsx)(t.code,{children:"https://xyz.*.com"}),"  is not allowed"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"https://*.acmecorp.com"}),"  is allowed"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"https://saml-auth-*.acmecorp.com"}),"  is also allowed"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["A URL with a valid wildcard ",(0,i.jsx)(t.strong,{children:"will"})," match only one subdomain in it\u2019s place.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For example, ",(0,i.jsx)(t.code,{children:"https://*.acmecorp.com/"}),"  will match ",(0,i.jsx)(t.code,{children:"https://auth.acmecorp.com"})," and not match ",(0,i.jsx)(t.code,{children:"https://saml.auth.acmecorp.com"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6365:(e,t,n)=>{n.d(t,{Ay:()=>s,Iu:()=>r,Wu:()=>c});n(6540);var i=n(4848);function r(e){let{children:t}=e;return(0,i.jsx)("code",{className:"simple_code",children:t})}function c(e){let{url:t,imageSrc:n,title:r,description:c}=e;return(0,i.jsx)("article",{className:"col col--4 margin-bottom--lg",children:(0,i.jsxs)("a",{className:"card padding--lg cardContainer",href:t,children:[(0,i.jsxs)("h3",{children:[(0,i.jsx)("img",{alt:r,src:n}),(0,i.jsx)("p",{children:r})]}),(0,i.jsx)("p",{children:c})]})})}function s(e){let{children:t}=e;return(0,i.jsxs)("p",{style:{marginTop:"-15px",fontStyle:"italic"},children:[" ",t," "]})}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(6540);const r={},c=i.createContext(r);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);