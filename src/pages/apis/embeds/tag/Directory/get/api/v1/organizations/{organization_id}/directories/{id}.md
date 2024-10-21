<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/connections/{id}:enable">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organization_id}/connections/{id}:enable'\
--header 'Accept: application/json'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
const sc = new ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
);

await sc.connection.enableConnection(organizationId, connectionId);
```

</TabItem>
<TabItem value="py" label="Python">

```python showLineNumbers

sc = ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)

sc.connection.enable_connection(
  organization_id,
  connection_id,
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

err := sc.Connection.EnableConnection(
  ctx,
  organizationId,
  connectionId,
)
```

</TabItem>

<TabItem value="java" label="Java">

```java showLineNumbers
ScalekitClient scalekitClient = new ScalekitClient(
  "<SCALEKIT_ENVIRONMENT_URL>",
  "<SCALEKIT_CLIENT_ID>",
  "<SCALEKIT_CLIENT_SECRET>"
);

ToggleConnectionResponse response = client.connections().enableConnection(connectionId, organizationId);

```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
    "directory": {
        "id": "dir_38073376857653839",
        "name": "",
        "directory_type": "SCIM",
        "organization_id": "org_38073370096435791",
        "source": "",
        "enabled": true,
        "directory_provider": "OKTA",
        "status": "IN_PROGRESS",
        "mappings": [],
        "last_synced_at": "2024-09-19T16:26:17.814923Z",
        "directory_endpoint": "https://leering-black-rhinoceros.scalekit.cloud/directory/dir_38073376857653839/scim/v2",
        "total_users": 4,
        "total_groups": 3,
        "secrets": [
            {
                "id": "sec_40648348968943986",
                "create_time": "2024-10-07T10:05:04.010Z",
                "secret_suffix": "cw1v",
                "status": "ACTIVE",
                "expire_time": "0001-01-01T00:00:00Z",
                "last_used_time": "0001-01-01T00:00:00Z",
                "directory_id": "dir_38073376857653839"
            }
        ],
        "stats": {
            "total_users": 4,
            "total_groups": 3,
            "group_updated_at": "2024-09-19T16:26:18.573597Z",
            "user_updated_at": "2024-09-19T15:56:16.954861Z"
        }
    }
}} />

</CodeWithHeader>
