---
id: api-authentication-keys
title: API Authentication & Keys
sidebar_label: Authentication & Keys
position: 2
---

# API Authentication & Keys

Learn how to authenticate and manage API keys for HealthSync integrations.

## API Overview

HealthSync provides a RESTful API for:
- Accessing patient records
- Uploading documents
- Running AI analysis
- Managing user accounts
- Receiving webhooks

## Getting API Access

### Requirements
- Premium or Enterprise subscription
- Developer account registration
- Acceptance of API terms

### Requesting Access
1. Go to **Settings** > **Developer**
2. Click "Request API Access"
3. Describe your use case
4. Await approval (1-2 business days)

## Authentication Methods

### API Keys
Most common method for backend integrations.

### OAuth 2.0
Recommended for third-party applications accessing user data.

### Service Account Tokens
For server-to-server communication.

## Creating API Keys

1. Navigate to **Settings** > **Developer** > **API Keys**
2. Click "Create New Key"
3. Name your key (e.g., "Production Server")
4. Set permissions/scopes
5. Copy key and store securely

:::warning
API keys are shown only once. Store them securely immediately.
:::

## Key Management

### Security Best Practices
- Never commit keys to version control
- Use environment variables
- Rotate keys regularly (every 90 days)
- Use different keys for dev/staging/production
- Revoke unused keys immediately

### Key Permissions
Set granular permissions:
- Read-only access
- Write access
- Delete permissions
- Scope to specific resources

### Rotating Keys
1. Create new key with same permissions
2. Update applications with new key
3. Test thoroughly
4. Revoke old key

## Making Authenticated Requests

### Using API Keys

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     https://api.healthsync.com/v1/records
```

### Using OAuth 2.0

```bash
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     -H "Content-Type: application/json" \
     https://api.healthsync.com/v1/records
```

## Rate Limits

### Default Limits
- **Free**: Not available
- **Plus**: 100 requests/hour
- **Premium**: 1,000 requests/hour
- **Enterprise**: Custom limits

### Rate Limit Headers
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640000000
```

### Handling Rate Limits
- Implement exponential backoff
- Cache responses when possible
- Use webhooks instead of polling
- Contact support for limit increases

## Testing

### Sandbox Environment
- Test endpoints: `https://api-sandbox.healthsync.com`
- Separate test API keys
- No charges for API calls
- Reset data daily

### Postman Collection
Download our Postman collection for easy testing.

## Related Articles

- [Developer Reference](./developer-reference-specs.md)
- [Webhooks & Events](./webhooks-event-subscriptions.md)
- [Third-Party Integrations](./third-party-integrations.md)
