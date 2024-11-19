<CodeWithHeader method="patch" endpoint="/api/v1/organizations/{organization_id}/directories/{id}:disable">
<Tabs groupId="tech-stack" querystring>
<TabItem value="curl" label="cURL">

```bash showLineNumbers
curl --location --request PATCH 'https://$ENV_URL/api/v1/organizations/{organizations_id}/directories/{directory_id}:disable'\
--header 'Authorization: Bearer <ACCESS_TOKEN>'
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```js showLineNumbers
const sc = new ScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
);

await scalekit.directory.disableDirectory('<organization_id>', '<directory_id>');
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

directory_response = scalekit_client.directory.disable_directory(
  directory_id='<directory_id>', organization_id='<organization_id>'
)
print(f'Disable Directory Response: {str(directory_response)}')
```

</TabItem>
<TabItem value="golang" label="Go">

```go showLineNumbers
sc := scalekit.NewScalekitClient(
  <SCALEKIT_ENVIRONMENT_URL>,
  <SCALEKIT_CLIENT_ID>,
  <SCALEKIT_CLIENT_SECRET>
)
disable,err := sc.Directory().DisableDirectory(ctx, organizationId, directoryId)
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

ToggleDirectoryResponse disableResponse = scalekitClient
  .directories()
  .disableDirectory(directoryId, organizationId);

```

</TabItem>

</Tabs>
</CodeWithHeader>
<CodeWithHeader title="Response">

<JsonViewer src={{
  "enabled": false
}} />

</CodeWithHeader>
