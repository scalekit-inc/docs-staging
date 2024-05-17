import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: 'doc',
      id: 'reference/scalekit-apis',
    },
    {
      type: 'category',
      label: 'Organization',
      link: {
        type: 'doc',
        id: 'reference/organization',
      },
      items: [
        {
          type: 'doc',
          id: 'reference/organization-service-list-organization',
          label: 'List Organizations',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'reference/organization-service-create-organization',
          label: 'Create Organization',
          className: 'api-method post',
        },
        {
          type: 'doc',
          id: 'reference/organization-service-get-organization',
          label: 'Get Organization',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'reference/organization-service-delete-organization',
          label: 'Delete Organization',
          className: 'api-method delete',
        },
        {
          type: 'doc',
          id: 'reference/organization-service-update-organization',
          label: 'Update Organization',
          className: 'api-method patch',
        },
      ],
    },
    {
      type: 'category',
      label: 'Admin Portal',
      link: {
        type: 'doc',
        id: 'reference/admin-portal',
      },
      items: [
        {
          type: 'doc',
          id: 'reference/organization-service-get-portal-links',
          label: 'Get Portal link',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'reference/organization-service-generate-portal-link',
          label: 'Generate Portal link',
          className: 'api-method put',
        },
        {
          type: 'doc',
          id: 'reference/organization-service-delete-portal-link',
          label: 'Delete Admin Portal link',
          className: 'api-method delete',
        },
      ],
    },
    {
      type: 'category',
      label: 'Connection',
      link: {
        type: 'doc',
        id: 'reference/connection',
      },
      items: [
        {
          type: 'doc',
          id: 'reference/connection-service-list-connections',
          label: 'List Connections',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'reference/connection-service-get-connection',
          label: 'Get Connection',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'reference/connection-service-disable-connection',
          label: 'Disable a Connection',
          className: 'api-method patch',
        },
        {
          type: 'doc',
          id: 'reference/connection-service-enable-connection',
          label: 'Enable a Connection',
          className: 'api-method patch',
        },
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      link: {
        type: 'doc',
        id: 'reference/authentication',
      },
      items: [
        {
          type: 'doc',
          id: 'reference/o-auth-authorize-endpoint',
          label: 'Authorization URL',
          className: 'api-method get',
        },
        {
          type: 'doc',
          id: 'reference/o-auth-token-endpoint',
          label: 'Token URL',
          className: 'api-method post',
        },
      ],
    },
    {
      type: 'category',
      label: 'OpenID Metadata',
      link: {
        type: 'doc',
        id: 'reference/open-id-metadata',
      },
      items: [
        {
          type: 'doc',
          id: 'reference/open-id-well-known-endpoint',
          label: 'OpenID Provider metadata URL',
          className: 'api-method get',
        },
      ],
    }
  ],
};

export default sidebar.apisidebar;
