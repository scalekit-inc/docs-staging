import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Scalekit Docs',
  tagline: 'Enterprise Ready Authentiction Platform for SaaS',
  favicon: 'img/Favicon.svg',
  url: 'https://docs.scalekit.com',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'scalekit-inc',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  clientModules: ['./scalekit.js'],
  i18n: { defaultLocale: 'en', locales: ['en'] },
  plugins: [
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/single-sign-on/golive-checklist',
            to: '/sso/launch-checklist',
          },
          {
            from: '/admin-portal/quickstart-admin-portal',
            to: '/sso/quickstart-admin-portal',
          },
          {
            from: [
              '/admin-portal/custom-domain',
              '/admin-portal/branding-theming',
            ],
            to: '/sso/domain-and-theme-customization',
          },
          {
            from: '/best-practices/single-sign-on',
            to: '/sso/overview',
          },
          {
            from: '/best-practices/manage-client-secrets',
            to: '/sso/guides/key-concepts/manage-client-secrets',
          },
          {
            from: '/best-practices/authorization-url',
            to: '/sso/guides/key-concepts/authorization-url',
          },
          {
            from: '/best-practices/redirect-uri',
            to: '/sso/guides/key-concepts/redirect-uri',
          },
          {
            from: '/best-practices/idtoken-claims',
            to: '/sso/guides/key-concepts/idtoken-claims',
          },
          {
            from: '/best-practices/user-profile',
            to: '/sso/guides/key-concepts/user-profile',
          },
          {
            from: '/best-practices/handling-idp-initiated',
            to: '/sso/guides/setup-sso/implement-idp-initiated-sso',
          },
          {
            from: '/manage-scalekit/organization',
            to: '/manage-scalekit/glossary',
          },
          {
            from: '/best-practices/error-handling',
            to: '/sso/guides/setup-sso/error-handling',
          },
        ],
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          showLastUpdateTime: false,
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: [
            './src/css/scalar_theme.css',
            './src/css/custom.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // Declare some <meta> tags
    metadata: [
      {
        name: 'keywords',
        content:
          'documentation, authentication, single sign-on, sso, saml, oidc, oauth2, enterprise',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Home | Scalekit Docs' },
      {
        property: 'twitter:desription',
        content:
          'Learn how to implement  authentication capabilities through our quick start guides, SDKs and code samples',
      },
      {
        property: 'twitter:image',
        content: '/img/docs_og.png',
      },
      { property: 'og:title', content: 'Home | Scalekit Docs' },
      {
        property: 'og:desription',
        content:
          'Learn how to implement  authentication capabilities through our quick start guides, SDKs and code samples',
      },
      {
        property: 'og:image',
        content: '/img/docs_og.png',
      },
    ],
    docs: {
      sidebar: {
        hideable: false,
      },
    },

    navbar: {
      // title: 'Scalekit Docs',
      logo: {
        href: '/',
        src: '/img/scalekit_docs_logo.svg',
        srcDark:
          'https://assets-global.website-files.com/65b87d98fa638289e10b8f61/65c269053d86c92e0cf91db5_scalekit-logo.svg',
      },
      items: [
        {
          to: '/sso/quickstart',
          label: 'Single Sign-on',
          position: 'left',
          className: 'sso',
        },
        {
          to: '/apis',
          label: 'API Reference',
          position: 'left',
        },
        {
          to: '/sdks',
          label: 'SDKs',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          items: [
            {
              label: 'Integrations',
              href: '/integrations',
            },
            {
              label: 'Blog',
              href: 'https://www.scalekit.com/blog',
            },
            {
              type: 'doc',
              label: 'Glossary',
              docId: 'manage-scalekit/glossary',
            },
          ],
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          to: 'https://www.scalekit.com/?intent=earlyaccess&utm_source=docs',
          html: 'Get Early Access &rarr;',
          position: 'right',
          className: 'loginLink',
        },
      ],
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector:
        '.markdown :not(.cardContainer h3) > img,  .markdown :not(.language-row) img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 48,
        background: '#000000CC',
        scrollOffset: 48,
        // container: '#zoom-container',
        // template: '#zoom-template',
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    algolia: {
      appId: '7554BDRAJD',
      apiKey: '0a906499d09119c83fd6d0568e7f8517',
      indexName: 'scalekit',
      contextualSearch: false,
      insights: true,
      searchPagePath: false,
    },
    prism: {
      theme: prismThemes.github,
      additionalLanguages: ['bash', 'java', 'groovy'],
    },
    // footer: {
    //   copyright: `Copyright © ${new Date().getFullYear()} Scalekit Inc.`,
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
