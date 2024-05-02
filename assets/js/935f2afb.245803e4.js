"use strict";(self.webpackChunkscalekit_docs=self.webpackChunkscalekit_docs||[]).push([[8581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"integrationsSidebar":[{"type":"category","label":"Integrations","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"SAML","href":"/integrations","docId":"integrations/saml","unlisted":false},{"type":"link","label":"OIDC","href":"/integrations/oidc","docId":"integrations/oidc","unlisted":false},{"type":"link","label":"Microsoft Entra ID (Azure AD) - SAML","href":"/integrations/azure-ad-saml","docId":"integrations/azure-ad-saml","unlisted":false},{"type":"link","label":"Okta - SAML","href":"/integrations/okta-saml","docId":"integrations/okta-saml","unlisted":false},{"type":"link","label":"OneLogin - SAML","href":"/integrations/onelogin-saml","docId":"integrations/onelogin-saml","unlisted":false},{"type":"link","label":"JumpCloud - SAML","href":"/integrations/jumpcloud-saml","docId":"integrations/jumpcloud-saml","unlisted":false}]}],"tutorialSidebar":[{"type":"category","label":"Single Sign-on","className":"sso_category","items":[{"type":"link","label":"Quick Start","href":"/","docId":"single-sign-on/quickstart-sso","unlisted":false},{"type":"link","label":"Test SSO","href":"/single-sign-on/testing-sso","docId":"single-sign-on/testing-sso","unlisted":false},{"type":"link","label":"Go-live Checklist","href":"/single-sign-on/golive-checklist","docId":"single-sign-on/golive-checklist","unlisted":false}],"collapsed":false,"collapsible":false},{"type":"category","label":"Admin Portal","items":[{"type":"link","label":"Integrate","href":"/admin-portal/quickstart-admin-portal","docId":"admin-portal/quickstart-admin-portal","unlisted":false},{"type":"link","label":"Custom Domain","href":"/admin-portal/custom-domain","docId":"admin-portal/custom-domain","unlisted":false},{"type":"link","label":"UX Customization","href":"/admin-portal/branding-theming","docId":"admin-portal/branding-theming","unlisted":false}],"collapsed":false,"collapsible":false},{"type":"category","label":"Learn","items":[{"type":"link","label":"SSO Basics","href":"/best-practices/single-sign-on","docId":"best-practices/single-sign-on","unlisted":false},{"type":"link","label":"Manage Client Secrets","href":"/best-practices/manage-client-secrets","docId":"best-practices/manage-client-secrets","unlisted":false},{"type":"link","label":"Authorization URL","href":"/best-practices/authorization-url","docId":"best-practices/authorization-url","unlisted":false},{"type":"link","label":"Redirect URI","href":"/best-practices/redirect-uri","docId":"best-practices/redirect-uri","unlisted":false},{"type":"link","label":"ID Token Claims","href":"/best-practices/idtoken-claims","docId":"best-practices/idtoken-claims","unlisted":false},{"type":"link","label":"Normalized User Profile","href":"/best-practices/user-profile","docId":"best-practices/user-profile","unlisted":false},{"type":"link","label":"Handling IdP Initiated SSO","href":"/best-practices/handling-idp-initiated","docId":"best-practices/handling-idp-initiated","unlisted":false},{"type":"link","label":"SAML Configurations","href":"/best-practices/advanced-saml","docId":"best-practices/advanced-saml","unlisted":false}],"collapsed":false,"collapsible":false},{"type":"category","label":"Troubleshoot","items":[{"type":"link","label":"Error Handling","href":"/best-practices/error-handling","docId":"best-practices/error-handling","unlisted":false},{"type":"link","label":"Troubleshoot SSO","href":"/best-practices/troubleshooting-sso","docId":"best-practices/troubleshooting-sso","unlisted":false}],"collapsed":false,"collapsible":false},{"type":"category","label":"Manage Scalekit","items":[{"type":"link","label":"Glossary","href":"/manage-scalekit/glossary","docId":"manage-scalekit/glossary","unlisted":false}],"collapsed":false,"collapsible":false},{"type":"category","label":"API & SDKs","items":[{"type":"link","label":"API Reference","href":"/api-reference"},{"type":"link","label":"SDKs","href":"/sdks","docId":"sdks","unlisted":false}],"collapsed":false,"collapsible":false}]},"docs":{"admin-portal/branding-theming":{"id":"admin-portal/branding-theming","title":"Branding & Theming","description":"We offer you the ability customize the Admin Portal to make it look and feel like your branded portal.","sidebar":"tutorialSidebar"},"admin-portal/custom-domain":{"id":"admin-portal/custom-domain","title":"Custom Domain (CNAME)","description":"Host Admin Portal on your own domain","sidebar":"tutorialSidebar"},"admin-portal/quickstart-admin-portal":{"id":"admin-portal/quickstart-admin-portal","title":"Integrate Admin Portal","description":"Overview","sidebar":"tutorialSidebar"},"best-practices/advanced-saml":{"id":"best-practices/advanced-saml","title":"Advanced SAML","description":"","sidebar":"tutorialSidebar"},"best-practices/authorization-url":{"id":"best-practices/authorization-url","title":"Authorization URL","description":"As mentionined in the SSO Basics document, the first step of initiating login with SSO via Scalekit is to send the Authorization URL request.","sidebar":"tutorialSidebar"},"best-practices/error-handling":{"id":"best-practices/error-handling","title":"Error Handling","description":"If there are any configuration or application issues while the user tries to login with Single Sign-on via Scalekit, your application\'s redirect uri will receive the details of the error via the request parameters: errorcode, errordescription.","sidebar":"tutorialSidebar"},"best-practices/handling-idp-initiated":{"id":"best-practices/handling-idp-initiated","title":"Handling IdP initiated SSO","description":"Overview","sidebar":"tutorialSidebar"},"best-practices/idtoken-claims":{"id":"best-practices/idtoken-claims","title":"Inspecting Claims in ID Token","description":"An ID Token is nothing but a cryptographically signed Base64-encoded JSON object containing a set of name/value pairs about the user\'s profile information. Essentially, it is a JWT token. Ideally, it is advised that you validate an ID token before you use it, but since you are communicating directly with Scalekit over an intermediary-free HTTPS channel and using your client secret to exchange the code for the ID Token, you can be confident that the token you receive really comes from Scalekit and is valid.","sidebar":"tutorialSidebar"},"best-practices/manage-client-secrets":{"id":"best-practices/manage-client-secrets","title":"Managing Client Secrets","description":"Client ID and Client Secret are a form of API credentials, like a username and password. You are responsible for keeping Client Secrets safe and secure. Below are some best practices for how you can keep your secrets safe and how you can leverage some of the functionality offered by us to help you do the same.","sidebar":"tutorialSidebar"},"best-practices/redirect-uri":{"id":"best-practices/redirect-uri","title":"Redirect URI","description":"As part of integration between your application and Scalekit, redirect URI is the endpoint URL to which the user is redirected to after completing the authentication flow in the Identity Provider.","sidebar":"tutorialSidebar"},"best-practices/single-sign-on":{"id":"best-practices/single-sign-on","title":"Introduction to Single Sign-on","description":"Single Sign-On (SSO) streamlines user access by enabling a single authentication event to grant access to multiple applications with the same credentials. For example, logging into one Google service, such as Gmail, automatically authenticates you to YouTube, Google Drive, and other Google platforms.","sidebar":"tutorialSidebar"},"best-practices/troubleshooting-sso":{"id":"best-practices/troubleshooting-sso","title":"Troubleshooting SSO Errors","description":"","sidebar":"tutorialSidebar"},"best-practices/user-profile":{"id":"best-practices/user-profile","title":"Normalized User Profile","description":"When a user logs in with SSO using their Identity Provider via Scalekit, we normalize the user profile information in standard fields so that you can easily access the user profile information regardless of the format, the Identity Provider chooses to send it in.","sidebar":"tutorialSidebar"},"integrations/azure-ad-saml":{"id":"integrations/azure-ad-saml","title":"Microsoft Entra ID (Azure AD) - SAML","description":"Step-by-step guide to configure Single Sign-on with Microsoft Entra ID as the Identity Provider.","sidebar":"integrationsSidebar"},"integrations/jumpcloud-saml":{"id":"integrations/jumpcloud-saml","title":"JumpCloud - SAML","description":"Step-by-step guide to configure Single Sign-on with JumpCloud as the Identity Provider.","sidebar":"integrationsSidebar"},"integrations/oidc":{"id":"integrations/oidc","title":"OIDC","description":"Step-by-step guide to configure Single Sign-on using OIDC with any Identity Provider.","sidebar":"integrationsSidebar"},"integrations/okta-saml":{"id":"integrations/okta-saml","title":"Okta - SAML","description":"SSO Configuration Guide for Okta","sidebar":"integrationsSidebar"},"integrations/onelogin-saml":{"id":"integrations/onelogin-saml","title":"OneLogin - SAML","description":"Step-by-step guide to configure Single Sign-on with OneLogin as the Identity Provider.","sidebar":"integrationsSidebar"},"integrations/pingidentity-saml":{"id":"integrations/pingidentity-saml","title":"pingidentity-saml","description":""},"integrations/saml":{"id":"integrations/saml","title":"SAML","description":"Step-by-step guide to configure Single Sign-on using SAML with any Identity Provider.","sidebar":"integrationsSidebar"},"manage-scalekit/glossary":{"id":"manage-scalekit/glossary","title":"Glossary","description":"Familiarize yourself with the entities and glossary of Scalekit platform","sidebar":"tutorialSidebar"},"sdks":{"id":"sdks","title":"SDKs","description":"","sidebar":"tutorialSidebar"},"single-sign-on/golive-checklist":{"id":"single-sign-on/golive-checklist","title":"Go-live Checklist","description":"As you prepare to take your Single Sign-On (SSO) implementation live, it\u2019s crucial to ensure every aspect is tuned for a secure and smooth production environment. Below is a checklist designed to guide developers through the essential steps:","sidebar":"tutorialSidebar"},"single-sign-on/quickstart-sso":{"id":"single-sign-on/quickstart-sso","title":"SSO Quick Start","description":"This step-by-step guide will help you implement enterprise-grade Single Sign-On (SSO) in your application through Scalekit\u2019s intuitive APIs.","sidebar":"tutorialSidebar"},"single-sign-on/testing-sso":{"id":"single-sign-on/testing-sso","title":"Testing Single Sign-on","description":"","sidebar":"tutorialSidebar"},"templates/install-sdk":{"id":"templates/install-sdk","title":"install-sdk","description":"--\x3e"}}}')}}]);