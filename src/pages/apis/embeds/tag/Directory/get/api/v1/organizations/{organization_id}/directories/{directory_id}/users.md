<CodeWithHeader method="get" endpoint="/api/v1/organizations/{organization_id}/directories/{directory_id}/users">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location 'https://<SCALEKIT_ENVIRONMENT_URL>/api/v1/organizations/<organization_id>/directories/<directory_id>/users' \
--header 'Authorization: Bearer <SCALEKIT_ACCESS_TOKEN>'
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
    "users": [
        {
            "id": "diruser_38074510863303247",
            "email": "bar@acmecorp.com",
            "preferred_username": "bar@acmecorp.com",
            "given_name": "Bar",
            "family_name": "Man",
            "updated_at": "2024-09-19T15:56:16.954861Z",
            "emails": [
                "bar@acmecorp.com"
            ],
            "groups": [
                {
                    "id": "dirgroup_38074475882742351",
                    "display_name": "Skyflow Users",
                    "total_users": 0
                }
            ]
        },
        {
            "id": "diruser_38074510846460495",
            "email": "fandom@acmecorp.com",
            "preferred_username": "fandom@acmecorp.com",
            "given_name": "Fandom",
            "family_name": "Utopia",
            "updated_at": "2024-09-19T15:56:16.940714Z",
            "emails": [
                "fandom@acmecorp.com"
            ],
            "groups": [
                {
                    "id": "dirgroup_38074475882742351",
                    "display_name": "Skyflow Users",
                    "total_users": 0
                }
            ]
        },
        {
            "id": "diruser_38074504135639631",
            "email": "foo@acmecorp.com",
            "preferred_username": "foo@acmecorp.com",
            "given_name": "Foo",
            "family_name": "Girl",
            "updated_at": "2024-09-19T15:56:12.947990Z",
            "emails": [
                "foo@acmecorp.com"
            ],
            "groups": [
                {
                    "id": "dirgroup_38074465715814991",
                    "display_name": "Skyflow Managers",
                    "total_users": 0
                }
            ]
        },
        {
            "id": "diruser_38074497626079823",
            "email": "john@acmecorp.com",
            "preferred_username": "john@acmecorp.com",
            "given_name": "John",
            "family_name": "Doe",
            "updated_at": "2024-09-19T15:56:09.069591Z",
            "emails": [
                "john@acmecorp.com"
            ],
            "groups": [
                {
                    "id": "dirgroup_38074458115670607",
                    "display_name": "Skyflow Admins",
                    "total_users": 0
                }
            ]
        }
    ],
    "total_size": 4,
    "next_page_token": "",
    "prev_page_token": ""
}} />

</CodeWithHeader>