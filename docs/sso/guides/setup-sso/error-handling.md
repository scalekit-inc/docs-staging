# Error Handling during Single Sign-on

<Subtitle>Reference of error codes and how to handle them</Subtitle>

When users attempt to log in via Single Sign-on (SSO) using Scalekit, any issues encountered will result in error details being sent to your application's redirect URI via the <SimpleCode>error</SimpleCode> and <SimpleCode>error_description</SimpleCode> request parameters. Proper error handling ensures a better user experience.

## Integration related errors

If there are issues between Scalekit and your application, the following errors may occur:

:::tip
Ideally, you would want to catch these errors in the development environments. These errors are not meant to be exposed to your customers in the production environments.
:::

| Error                                                | Error Description                                                                    | Possible Resolution Strategy                                                                                                     |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| <SimpleCode>invalid_redirect_uri</SimpleCode>        | Redirect URI is not part of the pre-approved list of Redirect URIs.                  | Add the valid URL in the Scalekit Dashboard before using it                                                                      |
| <SimpleCode>invalid_connection_selector</SimpleCode> | Missing `organization_id`, or `connection_id`, or `domain` in the Authorization URL. | Include at least one of these parameters in the request.                                                                         |
| <SimpleCode>no_active_connections</SimpleCode>       | There are no active SSO Connections configured to process the Single Sign-on request | Ensure active SSO connections are set up.                                                                                        |
| <SimpleCode>connection_not_active</SimpleCode>       | No active SSO Connections configured to process the Single Sign-on request           | Enable the SSO connection for real users.                                                                                        |
| <SimpleCode>no_configured_connections</SimpleCode>   | No active SSO connections configured                                                 | Ensure active SSO connections are set up                                                                                         |
| <SimpleCode>invalid_organization_id</SimpleCode>     | Invalid organization ID                                                              | Verify and use a valid organization ID                                                                                           |
| <SimpleCode>invalid_connection_id</SimpleCode>       | Invalid connection ID                                                                | Verify and use a valid connection ID                                                                                             |
| <SimpleCode>domain_not_found</SimpleCode>            | No active SSO connections for the specified domain                                   | Check domain configuration in Scalekit Dashboard                                                                                 |
| <SimpleCode>invalid_user_domain</SimpleCode>         | User's domain not allowed for this SSO connection                                    | Ensure user domain is part of the allowed domains list                                                                           |
| <SimpleCode>server_error</SimpleCode>                | _actual error description from the server_                                           | This must be a rare occurence. Please reach out to us via your private slack channel or [via email](mailto:support@scalekit.com) |

## SSO Configuration related errors

If SSO configuration issues arise, you will encounter the following errors:

:::tip
Ideally, these errors should have been caught and handled by your customer’s IT admin at the time of SSO configuration. If there are issues during SSO configuration, during "Test Connection" stage, your customers will able to review and fix the configuration.

Once your customer configures the SSO settings properly, tests the configuration and enables it - you shouldn’t receive these errors unless something has been modified, tampered or changed at the Identity Provider side.
:::

| Error Code                                           | Error Description                                             | Possible Resolution Strategy                                                                                                                                                                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <SimpleCode>mandatory_attribute_missing</SimpleCode> | Missing mandatory user attributes                             | Ensure user attributes are configured properly.                                                                                                                                                                                     |
| <SimpleCode>invalid_id_token</SimpleCode>            | Invalid ID token                                              | Check the identity provider's functioning                                                                                                                                                                                           |
| <SimpleCode>failed_to_exchange_token</SimpleCode>    | Token exchange failure due to incorrect `client_secret`       | Update the `client_secret` with the correct value                                                                                                                                                                                   |
| <SimpleCode>user_info_retrieve_failed</SimpleCode>   | Failed to retrieve user info due to incorrect `client_secret` | Update the `client_secret` with the correct value                                                                                                                                                                                   |
| <SimpleCode>invalid_saml_metadata</SimpleCode>       | Incorrect SAML metadata configuration                         | Update SAML metadata URL with the correct value                                                                                                                                                                                     |
| <SimpleCode>invalid_saml_response</SimpleCode>       | Invalid SAML response                                         | Review and fix SAML configuration settings                                                                                                                                                                                          |
| <SimpleCode>signature_validation_failed</SimpleCode> | Failed signature validation                                   | Review and update the ACS URL in the identity provider's settings                                                                                                                                                                   |
| <SimpleCode>invalid_acs_url</SimpleCode>             | Invalid ACS URL                                               | Review and update the ACS URL in the identity provider's settings                                                                                                                                                                   |
| <SimpleCode>invalid_status</SimpleCode>              | Invalid Status                                                | Review and update the SAML configuration settings in the identity provider                                                                                                                                                          |
| <SimpleCode>malformed_saml_response</SimpleCode>     | marshalling error                                             | Ensure SAML response is properly formatted                                                                                                                                                                                          |
| <SimpleCode>assertion_expired</SimpleCode>           | Expired SAML assertion                                        | We received an expired SAML response. This could be because of clock skew between the identity provider's server and our servers. Please reach out to us via your private slack channel or [via email](mailto:support@scalekit.com) |
| <SimpleCode>response_expired</SimpleCode>            | Expired SAML response                                         | We received an expired SAML response. This could be because of clock skew between the identity provider's server and our servers. Please reach out to us via your private slack channel or [via email](mailto:support@scalekit.com) |
