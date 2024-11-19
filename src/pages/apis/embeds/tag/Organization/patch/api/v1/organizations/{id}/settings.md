<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/settings">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organizations_id}/settings' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <ACCESS_TOKEN>'\
--data '{
    "features":
    [
        {
            "name": "sso",
            "enabled": false
        },
        {
            "name": "dir_sync",
            "enabled": true
        }
    ]
}'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
const sc = new ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
);

sc.organization.updateOrganizationSettings(organization.id, {
  features: [{
    name: 'sso',
    enabled: true
  },
  {
    name: 'dir_sync',
    enabled: true
    },
  ],
});
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers
from scalekit import ScalekitClient

# Initialize the SDK client
scalekit_client = ScalekitClient(
  '<SCALEKIT_ENVIRONMENT_URL>',
  '<SCALEKIT_CLIENT_ID>',
  '<SCALEKIT_CLIENT_SECRET>'
)

settings = [
        {
            "name": "sso",
            "enabled": true
        },
        {
            "name": "dir_sync",
            "enabled": true
        }
    ]

scalekit_client.organization.update_organization_settings(
  organization_id='<organization_id>', settings=settings
)
```

</TabItem>
<TabItem value="golang" label="Go">

```go showLineNumbers
sc := scalekit.NewScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

settings := OrganizationSettings{
		Features: []Feature{
			{
				Name:    "sso",
				Enabled: true,
			},
		},
	}
organization,err := sc.Organization().UpdateOrganizationSettings(ctx, organizationId, settings)
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
import com.scalekit.ScalekitClient;

ScalekitClient scalekitClient = new ScalekitClient(
  "<SCALEKIT_ENVIRONMENT_URL>",
  "<SCALEKIT_CLIENT_ID>",
  "<SCALEKIT_CLIENT_SECRET>"
);

Directory directory = client.directories().getPrimaryDirectoryByOrganizationId(organizationId);

```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "organization": {
    "create_time": "2024-01-05T14:48:00.000Z",
    "display_name": "Acme Corp",
    "external_id": "my_unique_id",
    "id": "org_2123312131125533",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "region_code": "US",
    "settings": {
      "features": [
        {
          "enabled": true,
          "name": "string"
        }
      ]
    },
    "update_time": "2019-08-24T14:15:22Z"
  }
}} />

</CodeWithHeader>
