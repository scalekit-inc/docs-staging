import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  homeSidebar: [
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Getting Started</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Learn SSO Basics',
      id: 'sso/overview',
    },
    {
      type: 'doc',
      label: 'SSO - Quickstart', // The link label
      id: 'sso/quickstart', // The internal path
    },

    {
      type: 'doc',
      label: 'Admin Portal',
      id: 'sso/quickstart-admin-portal',
    },
    {
      type: 'doc',
      label: 'Test SSO',
      id: 'sso/test-sso',
    },
    {
      type: 'doc',
      label: 'Launch Checklist',
      id: 'sso/launch-checklist',
    },
    {
      type: 'html',
      value: '<div />', // The link label
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Login with Social</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Social Login - Quickstart',
      id: 'sso/social-login',
    },
    {
      type: 'html',
      value: '<div />', // The link label
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>How-to Guides</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Add SSO to your Login Page',
      id: 'sso/guides/setup-sso/build-login-page',
    },
    // {
    //   type: 'doc',
    //   label: 'Fetch User Attributes from IdP',
    //   id: 'sso/guides/setup-sso/handle-user-profile',
    // },
    // {
    //   type: "doc",
    //   label: "Handle Raw Attributes from IdP",
    //   id: "sso/guides/setup-sso/handle-raw-idp-attributes",
    // },
    {
      type: 'doc',
      label: 'Customize Admin Portal',
      id: 'sso/domain-and-theme-customization',
    },
    {
      type: 'doc',
      label: 'Implement IdP Initiated SSO',
      id: 'sso/guides/setup-sso/implement-idp-initiated-sso',
    },
    {
      type: 'doc',
      label: 'Handle SSO Errors',
      id: 'sso/guides/setup-sso/error-handling',
    },
    {
      type: 'doc',
      label: 'Customize User Attributes',
      id: 'sso/guides/setup-sso/customize-user-attributes',
    },
    {
      type: 'doc',
      label: 'Test SSO with Okta',
      id: 'sso/guides/test-your-integration/using-okta',
    },
    // {
    //   type: "doc",
    //   label: "Configure SAML Settings",
    //   id: "sso/guides/setup-sso/support-advanced-saml-settings",
    // },
    {
      type: 'html',
      value: '<div />', // The link label
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Integration Resources</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Integrate with Auth0',
      id: 'sso/guides/integrate-with-your-auth-system/auth0',
    },
    {
      type: 'doc',
      label: 'Integrate with Firebase',
      id: 'sso/guides/integrate-with-your-auth-system/firebase',
    },
    // {
    //   type: "doc",
    //   label: "Test your Integration using Okta",
    //   id: "sso/guides/test-your-integration/using-okta",
    // },
    {
      type: 'html',
      value: '<div />', // The link label
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Learning Guides</span>",
      defaultStyle: true,
    },

    {
      type: 'doc',
      label: 'Authorization URL',
      id: 'sso/guides/key-concepts/authorization-url',
    },
    {
      type: 'doc',
      label: 'Redirect URI',
      id: 'sso/guides/key-concepts/redirect-uri',
    },
    {
      type: 'doc',
      label: 'ID Token Claims',
      id: 'sso/guides/key-concepts/idtoken-claims',
    },
    {
      type: 'doc',
      label: 'Normalized User Profile',
      id: 'sso/guides/key-concepts/user-profile',
    },
    {
      type: 'doc',
      label: 'Manage Client Secrets',
      id: 'sso/guides/key-concepts/manage-client-secrets',
    },
  ],
  integrationsSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'integrations/integrations',
    },
    {
      type: 'html',
      value: '<div />', // The link label
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Identity Provider Guides</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Okta SAML',
      id: 'integrations/okta-saml',
    },
    {
      type: 'doc',
      label: 'Azure AD SAML',
      id: 'integrations/azure-ad-saml',
    },
    {
      type: 'doc',
      label: 'OneLogin SAML',
      id: 'integrations/onelogin-saml',
    },
    {
      type: 'doc',
      label: 'JumpCloud SAML',
      id: 'integrations/jumpcloud-saml',
    },
    {
      type: 'doc',
      label: 'SAML',
      id: 'integrations/saml',
    },
    {
      type: 'doc',
      label: 'OIDC',
      id: 'integrations/oidc',
    },
    {
      type: 'html',
      value: '<div />', // The link label
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Integration with Auth System</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Auth0',
      id: 'integrations/auth0',
    },
    {
      type: 'doc',
      label: 'Firebase',
      id: 'integrations/firebase',
    },
    {
      type: 'html',
      value: '<div />', // The link label
      defaultStyle: true,
    },
    {
      type: 'html',
      value:
        "<span class='text--uppercase text--light sidenav-category-heading'>Social Connectors</span>",
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Google',
      id: 'integrations/social-connections/google',
    },
    {
      type: 'doc',
      label: 'Github',
      id: 'integrations/social-connections/github',
    },
    {
      type: 'doc',
      label: 'Gitlab',
      id: 'integrations/social-connections/gitlab',
    },
    {
      type: 'doc',
      label: 'Microsoft',
      id: 'integrations/social-connections/microsoft',
    },
    {
      type: 'doc',
      label: 'Salesforce',
      id: 'integrations/social-connections/salesforce',
    },
    {
      type: 'doc',
      label: 'LinkedIn',
      id: 'integrations/social-connections/linkedin',
    },
    {
      type: 'html',
      value: '<div />', // The link label
      defaultStyle: true,
    },
  ],
  guidesSidebar: [
    {
      type: 'link',
      label: 'Back to Home',
      href: '/',
    },
    {
      type: 'doc',
      label: 'Explore',
      id: 'sso/guides/index',
    },
  ],
};

export default sidebars;
