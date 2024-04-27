---
sidebar_position: 1
---
import { Camera } from 'lucide-react'

# Go-live Checklist

We have designed our Production and Development environments to work as similarly as possible. Ideally, all you have to do is modify your .env file to reflect the values for your production environment and you should be good to go.

Nevertheless, we have put together a list of items that you should carefully review to help you prepare better for your go-live deployment.

- [ ] Use the Scalekit Production environment's `Client ID`, `Client Secret` and `Environment URL` in your properties file. Sample .env file looks as below

```typescript .env
SCALEKIT_ENV_URL="https://acmecorp.scalekit.com"
SCALEKIT_CLIENT_ID="12wedfgt567898uyg"
SCALEKIT_CLIENT_SECRET="b6264fca-8adf-457f-a94f-5a4b0d1ca2b9"
```

- [ ] Protect the `Client Secret` securely 

  Ensure it is not checked-in along with your code and left around for anyone to snoop it.
- [ ] Review your configuration

  Review the Redirect URL configuration and customer portal configuration to ensure you have set the appropriate configuration and customization for the production environment.
- [ ] Handle Edge cases

  Ensure you have tested the integration for all possible test cases including incomplete data, invalid data, and duplicate data. We also recommend you have someone else test your integration, especially if that other person isn’t a developer themselves.



