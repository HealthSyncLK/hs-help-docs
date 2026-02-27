---
id: webhooks-event-subscriptions
title: Webhooks & Event Subscriptions
sidebar_label: Webhooks & Events
position: 4
---

# Webhooks & Event Subscriptions

Receive real-time notifications about events in HealthSync.

## What are Webhooks?

Webhooks allow your application to receive HTTP notifications when specific events occur in HealthSync, eliminating the need for constant polling.

## Available Events

### Document Events
- `document.uploaded` - New document uploaded
- `document.updated` - Document metadata updated
- `document.deleted` - Document deleted
- `document.shared` - Document shared with someone

### AI Analysis Events
- `analysis.completed` - AI analysis finished
- `analysis.failed` - AI analysis failed

### User Events
- `user.updated` - User profile updated
- `family_member.added` - New family member added
- `family_member.removed` - Family member removed

### Sharing Events
- `share.created` - Share link created
- `share.accessed` - Someone accessed shared record
- `share.expired` - Share link expired
- `share.revoked` - Share access revoked

## Setting Up Webhooks

### Create Webhook Endpoint

1. Navigate to **Settings** > **Developer** > **Webhooks**
2. Click "Create Webhook"
3. Enter your endpoint URL
4. Select events to subscribe to
5. Set up signing secret
6. Save webhook

### Example Configuration

```json
{
  "url": "https://your-app.com/webhooks/healthsync",
  "events": [
    "document.uploaded",
    "analysis.completed",
    "share.accessed"
  ],
  "active": true
}
```

## Webhook Payload

### Request Headers

```http
POST /webhooks/healthsync HTTP/1.1
Host: your-app.com
Content-Type: application/json
X-HealthSync-Signature: sha256=abc123...
X-HealthSync-Event: document.uploaded
X-HealthSync-Delivery: uuid-1234
```

### Payload Structure

```json
{
  "id": "evt_abc123",
  "type": "document.uploaded",
  "created_at": "2024-02-27T10:30:00Z",
  "data": {
    "object": {
      "id": "doc_xyz789",
      "user_id": "user_123",
      "filename": "lab_results.pdf",
      "file_size": 245678,
      "category": "lab_results",
      "uploaded_at": "2024-02-27T10:30:00Z"
    }
  }
}
```

## Webhook Security

### Verifying Signatures

Always verify webhook signatures to ensure requests come from HealthSync:

```python
import hmac
import hashlib

def verify_signature(payload, signature, secret):
    computed = hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(
        f"sha256={computed}",
        signature
    )
```

```javascript
const crypto = require('crypto');

function verifySignature(payload, signature, secret) {
  const computed = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(`sha256=${computed}`),
    Buffer.from(signature)
  );
}
```

## Handling Webhooks

### Response Requirements
- Respond with `200 OK` within 5 seconds
- Process asynchronously if needed
- Don't perform long-running operations

### Retry Logic
If webhook fails:
- Retry after 1 minute
- Retry after 5 minutes
- Retry after 30 minutes
- Retry after 1 hour
- Give up after 4 failed attempts

### Example Handler

```python
from flask import Flask, request
import hmac

app = Flask(__name__)

@app.route('/webhooks/healthsync', methods=['POST'])
def webhook():
    # Verify signature
    signature = request.headers.get('X-HealthSync-Signature')
    if not verify_signature(request.data, signature, WEBHOOK_SECRET):
        return 'Invalid signature', 401
    
    # Get event data
    event = request.json
    event_type = event['type']
    
    # Handle event
    if event_type == 'document.uploaded':
        handle_document_upload(event['data'])
    elif event_type == 'analysis.completed':
        handle_analysis_complete(event['data'])
    
    return '', 200
```

## Testing Webhooks

### Send Test Event
Use the developer dashboard to send test events:
1. Go to webhook configuration
2. Click "Send Test Event"
3. View delivery status
4. Check response from your endpoint

### Webhook Logs
View delivery history:
- Successful deliveries
- Failed attempts
- Response codes
- Retry attempts

## Managing Webhooks

### Update Webhook
- Change endpoint URL
- Modify subscribed events
- Update signing secret
- Enable/disable webhook

### Delete Webhook
Remove webhooks you no longer need.

## Best Practices

1. **Always verify signatures**
2. **Respond quickly** (under 5 seconds)
3. **Process async** for heavy operations
4. **Handle duplicates** (use event ID)
5. **Log all webhooks** for debugging
6. **Monitor failure rates**

## Related Articles

- [API Authentication](./api-authentication-keys.md)
- [Developer Reference](./developer-reference-specs.md)
- [Third-Party Integrations](./third-party-integrations.md)
