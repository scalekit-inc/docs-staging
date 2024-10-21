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
    "groups": [
        {
            "id": "dirgroup_38074475882742351",
            "display_name": "Skyflow Users",
            "total_users": 2,
            "updated_at": "2024-09-19T16:26:18.573597Z"
        },
        {
            "id": "dirgroup_38074465715814991",
            "display_name": "Skyflow Managers",
            "total_users": 1,
            "updated_at": "2024-09-19T16:26:14.842673Z"
        },
        {
            "id": "dirgroup_38074458115670607",
            "display_name": "Skyflow Admins",
            "total_users": 1,
            "updated_at": "2024-09-19T16:26:11.532534Z"
        }
    ],
    "total_size": 3,
    "next_page_token": "",
    "prev_page_token": ""
}} />

</CodeWithHeader>
