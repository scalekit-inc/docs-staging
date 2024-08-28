"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[1299],{3675:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(4848),s=i(8453);const r={},o="SCIM - Overview",a={id:"dir-sync/scim/overview",title:"SCIM - Overview",description:"System for Cross-domain Identity Management (SCIM) is an Open Standard API specification designed to manage identities across cloud applications easily and scalably. The specification suite builds upon experience with existing schemas and deployments, emphasizing:",source:"@site/docs/dir-sync/scim/overview.mdx",sourceDirName:"dir-sync/scim",slug:"/dir-sync/scim/overview",permalink:"/docs-staging/dir-sync/scim/overview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"dirSyncSidebar",previous:{title:"Webhooks",permalink:"/docs-staging/dir-sync/webhooks"}},c={},l=[{value:"SCIM Protocol: Key Components",id:"scim-protocol-key-components",level:2},{value:"SCIM Service Provider",id:"scim-service-provider",level:3},{value:"SCIM Client",id:"scim-client",level:3},{value:"SCIM Endpoints",id:"scim-endpoints",level:3},{value:"SCIM Methods",id:"scim-methods",level:3},{value:"SCIM Authentication",id:"scim-authentication",level:3},{value:"SCIM Resources",id:"scim-resources",level:2},{value:"SCIM Schema",id:"scim-schema",level:3},{value:"Putting Everything Together",id:"putting-everything-together",level:2},{value:"Scenario: New Employee Onboarding",id:"scenario-new-employee-onboarding",level:3},{value:"Scenario: Employee Termination",id:"scenario-employee-termination",level:3},{value:"Scenario: Employee Transfer",id:"scenario-employee-transfer",level:3},{value:"Scalekit&#39;s SCIM Implementation",id:"scalekits-scim-implementation",level:2},{value:"Webhooks",id:"webhooks",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{CodeWithHeader:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CodeWithHeader",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"scim---overview",children:"SCIM - Overview"})}),"\n",(0,t.jsxs)(n.p,{children:["System for Cross-domain Identity Management (SCIM) is an ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7643#section-2",children:"Open Standard API specification"})," designed to manage identities across cloud applications easily and scalably. The specification suite builds upon experience with existing schemas and deployments, emphasizing:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Simplicity of development and integration"}),"\n",(0,t.jsx)(n.li,{children:"Application of existing authentication, authorization, and privacy models"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Its intent is to reduce the cost and complexity of user management operations by providing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A common user schema"}),"\n",(0,t.jsx)(n.li,{children:"An extension model; e.g., Enterprise User"}),"\n",(0,t.jsx)(n.li,{children:"Binding documents to provide patterns for exchanging this schema using HTTP"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"scim-protocol-key-components",children:"SCIM Protocol: Key Components"}),"\n",(0,t.jsxs)(n.p,{children:["SCIM is a HTTP based protocol and uses structured ",(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7159",children:"JSON"})," payloads to exchange resource information between the SCIM client and server. To identify the SCIM protocol resources, the ",(0,t.jsx)(n.code,{children:"application/scim+json"})," media type is used."]}),"\n",(0,t.jsx)(n.h3,{id:"scim-service-provider",children:"SCIM Service Provider"}),"\n",(0,t.jsx)(n.p,{children:"SCIM Service Provider is any business application that provisions users and groups by synchronizing the changes made in a SCIM Client, including creates, updates, and deletes. The synchronization enables end users to have seamless access to the business application for which they\u2019re assigned, with up-to-date profiles and permissions."}),"\n",(0,t.jsx)(n.p,{children:"Scalekit acts as the SCIM Service Provider on your behalf and integrates with your customer's Identity Providers or Directory Providers(e.g. Okta, Azure AD, Google Workspace, etc.) to provision users and groups."}),"\n",(0,t.jsx)(n.h3,{id:"scim-client",children:"SCIM Client"}),"\n",(0,t.jsx)(n.p,{children:"SCIM Client facilitates Provisioning, or managing user lifecycle events, through SCIM endpoints exposed by the SCIM Service Provider. Identity Providers and HRMS act as very popular SCIM Clients as they are treated as the source of truth for user identity data."}),"\n",(0,t.jsxs)(n.p,{children:["Some of the most common SCIM Clients are ",(0,t.jsx)(n.a,{href:"https://www.okta.com",children:"Okta"}),", ",(0,t.jsx)(n.a,{href:"https://www.microsoft.com/en-in/security/business/identity-access/microsoft-entra-id",children:"Microsoft Entra ID (fka Azure AD)"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"scim-endpoints",children:"SCIM Endpoints"}),"\n",(0,t.jsx)(n.p,{children:"SCIM endpoints are the entry points to the SCIM API. They are the endpoints that the SCIM client will call to provision users and groups."}),"\n",(0,t.jsx)(n.p,{children:"The following are the most popular SCIM endpoints that any SCIM Service Provider should support:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/Users"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"/Groups"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"scim-methods",children:"SCIM Methods"}),"\n",(0,t.jsx)(n.p,{children:"As SCIM is built on top of REST, SCIM methods are the HTTP methods that are used to perform CRUD operations on the SCIM resources. The following are the most common SCIM methods:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GET"}),"\n",(0,t.jsx)(n.li,{children:"POST"}),"\n",(0,t.jsx)(n.li,{children:"PUT"}),"\n",(0,t.jsx)(n.li,{children:"PATCH"}),"\n",(0,t.jsx)(n.li,{children:"DELETE"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"scim-authentication",children:"SCIM Authentication"}),"\n",(0,t.jsx)(n.p,{children:"SCIM uses OAuth 2.0 Bearer Token Authentication to authenticate requests to the SCIM API. The token is a string that is used to authenticate the SCIM API requests to the SCIM service provider. The token is passed in the HTTP Authorization header using the Bearer scheme."}),"\n",(0,t.jsx)(n.h2,{id:"scim-resources",children:"SCIM Resources"}),"\n",(0,t.jsx)(n.p,{children:"SCIM Resources are the core building blocks of the SCIM protocol. They represent entities such as users, groups, and organizational units. Each resource has a set of attributes that describe the entity."}),"\n",(0,t.jsx)(n.p,{children:"While SCIM User Resource has the basic attributes of a user like email address, phone number, and name, it is extensible by defining new json schemas that a service provider can choose to implement. An Enterprise User is an example of an SCIM User extension resource. Enterprise User Resource has attributes such as employee number, department, and manager which are valuable for enterprise implementation of user management using SCIM v2."}),"\n",(0,t.jsx)(i,{title:"Example SCIM User Representation",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],\n  "userName": "bjensen",\n  "name": {\n    "givenName": "Barbara",\n    "familyName": "Jensen"\n  },\n  "emails": [\n    {\n      "value": "bjensen@example.com",\n      "type": "work",\n      "primary": true\n    }\n  ],\n  "entitlements": [\n    {\n      "value": "Employee",\n      "type": "role"\n    }\n  ]\n}\n'})})}),"\n",(0,t.jsx)(n.h3,{id:"scim-schema",children:"SCIM Schema"}),"\n",(0,t.jsx)(n.p,{children:"SCIM schema is the core of the SCIM protocol. It is a JSON schema that defines the structure of the SCIM resources. The following are the most common SCIM schemas:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7643#section-2",children:"Core SCIM Schema"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7643#section-3",children:"Enterprise User Schema"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7643#section-4",children:"Group Schema"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"putting-everything-together",children:"Putting Everything Together"}),"\n",(0,t.jsx)(n.p,{children:"Now that you have a high level understanding of the SCIM protocol and different components involved, let's put everything together to take a scenario of how SCIM protocol facilitates user provisioning from an Identity Provider to an SCIM Service Provider like Scalekit."}),"\n",(0,t.jsx)(n.h3,{id:"scenario-new-employee-onboarding",children:"Scenario: New Employee Onboarding"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"ACME Inc. hires a new employee, John Doe."}),"\n",(0,t.jsx)(n.li,{children:"ACME Inc. adds John Doe to their Okta Directory."}),"\n",(0,t.jsxs)(n.li,{children:["Okta send a SCIM ",(0,t.jsx)(n.code,{children:"POST /Users"})," request to a pre-registered SCIM Service Provider (Your B2B Application) with John Doe's information as per the SCIM protocol."]}),"\n",(0,t.jsx)(n.li,{children:"You authenticate the request using the OAuth 2.0 Bearer Token Authentication & validate the request payload."}),"\n",(0,t.jsx)(n.li,{children:"You provision John Doe as a new user in your B2B application using the user payload."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"scenario-employee-termination",children:"Scenario: Employee Termination"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"ACME Inc. terminates John Doe's employment."}),"\n",(0,t.jsx)(n.li,{children:"ACME Inc. removes John Doe from their Okta Directory."}),"\n",(0,t.jsxs)(n.li,{children:["Okta send a SCIM ",(0,t.jsx)(n.code,{children:"DELETE /Users/john.doe"})," request to a pre-registered SCIM Service Provider (Your B2B Application) as per the SCIM protocol."]}),"\n",(0,t.jsx)(n.li,{children:"You authenticate the request using the OAuth 2.0 Bearer Token Authentication & validate the request payload."}),"\n",(0,t.jsx)(n.li,{children:"You deactivate John Doe as an existing user in your B2B application using the user payload."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"scenario-employee-transfer",children:"Scenario: Employee Transfer"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"ACME Inc. transfers John Doe to a different department."}),"\n",(0,t.jsx)(n.li,{children:"ACME Inc. updates John Doe's information in their Okta Directory."}),"\n",(0,t.jsxs)(n.li,{children:["Okta send a SCIM ",(0,t.jsx)(n.code,{children:"PATCH /Users/john.doe"})," request to a pre-registered SCIM Service Provider (Your B2B Application) as per the SCIM protocol."]}),"\n",(0,t.jsx)(n.li,{children:"You authenticate the request using the OAuth 2.0 Bearer Token Authentication & validate the request payload."}),"\n",(0,t.jsx)(n.li,{children:"You update John Doe's information in your B2B application using the user payload."}),"\n"]}),"\n",(0,t.jsx)(i,{title:"SCIM Create User Request",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:'POST /Users HTTP/1.1\nHost: yourapp.scalekit.com/directory/dir_12442/scim/v2\nAccept: application/scim+json\nContent-Type: application/scim+json\nAuthorization: Bearer YOUR_SCIM_API_TOKEN\n\n{\n    "schemas":["urn:ietf:params:scim:schemas:core:2.0:User"],\n    "userName":"bjensen",\n    "externalId":"bjensen",\n    "name":{\n        "formatted":"Ms. Barbara J Jensen III",\n        "familyName":"Jensen",\n        "givenName":"Barbara"\n    }\n}\n'})})}),"\n",(0,t.jsx)(n.h2,{id:"scalekits-scim-implementation",children:"Scalekit's SCIM Implementation"}),"\n",(0,t.jsx)(n.p,{children:"Scalekit's SCIM implementation is built upon the principles of simplicity, security, and scalability. It provides a normalized implementation of the SCIM protocol across different Identity Providers & Directory Providers. This allows you to focus on integrating with Scalekit's API & leave the complexities of SCIM protocol implementation to us. While not all Directory Providers implement SCIM or support all SCIM features, Scalekit aims to abstract these complexities & provide a seamless experience for provisioning users and groups."}),"\n",(0,t.jsx)(n.h3,{id:"webhooks",children:"Webhooks"}),"\n",(0,t.jsx)(n.p,{children:"Scalekit supports webhooks as a mechanism to send real-time updates to your application about user provisioning and deprovisioning events to your application as and when there are changes detected in your customer's SCIM compliant Directory Providers."}),"\n",(0,t.jsx)(n.p,{children:"We also normalize the webhook payloads across different Directory Providers to ensure that you can focus on building your application without having to worry about the nuances of each Directory Provider's SCIM implementations."}),"\n",(0,t.jsxs)(n.p,{children:["Refer to our ",(0,t.jsx)(n.a,{href:"/dir-sync/webhooks",children:"Webhooks"})," documentation to learn more on how you can use webhooks to listen for changes in the directory and update the user's roles in your application."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);