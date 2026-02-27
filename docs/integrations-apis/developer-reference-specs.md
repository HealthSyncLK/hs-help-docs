---
id: developer-reference-specs
title: Developer Reference & API Specs
sidebar_label: Developer Reference
position: 6
---

# Developer Reference & API Specs

Complete API reference and technical specifications for HealthSync.

## API Base URL

```
Production: https://api.healthsync.com/v1
Sandbox: https://api-sandbox.healthsync.com/v1
```

## API Versioning

Current version: **v1**

Version specified in URL path. Breaking changes will result in new version.

## Authentication

All API requests require authentication via Bearer token:

```http
Authorization: Bearer YOUR_API_KEY
```

See [API Authentication](./api-authentication-keys.md) for details.

## Core Resources

### Users

#### Get Current User
```http
GET /v1/user
```

#### Update User Profile
```http
PATCH /v1/user
```

### Documents

#### List Documents
```http
GET /v1/records
```

#### Get Document
```http
GET /v1/records/{id}
```

#### Upload Document
```http
POST /v1/records
Content-Type: multipart/form-data
```

#### Update Document
```http
PATCH /v1/records/{id}
```

#### Delete Document
```http
DELETE /v1/records/{id}
```

### AI Analysis

#### Run Analysis
```http
POST /v1/analysis
```

#### Get Analysis Result
```http
GET /v1/analysis/{id}
```

### Family Members

#### List Family Members
```http
GET /v1/family-members
```

#### Add Family Member
```http
POST /v1/family-members
```

#### Get Family Member
```http
GET /v1/family-members/{id}
```

### Sharing

#### Create Share Link
```http
POST /v1/shares
```

#### List Active Shares
```http
GET /v1/shares
```

#### Revoke Share
```http
DELETE /v1/shares/{id}
```

## Request/Response Format

### Content Type
```http
Content-Type: application/json
Accept: application/json
```

### Success Response Structure
```json
{
  "data": {
    "id": "record_123",
    "type": "document",
    "attributes": {
      // Resource attributes
    },
    "relationships": {
      // Related resources
    }
  },
  "meta": {
    // Additional metadata
  }
}
```

### Error Response Structure
```json
{
  "error": {
    "code": "invalid_request",
    "message": "Descriptive error message",
    "details": {
      "field": "Specific field error"
    }
  }
}
```

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 204 | No Content (successful delete) |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Unprocessable Entity (validation error) |
| 429 | Too Many Requests (rate limited) |
| 500 | Internal Server Error |

## Rate Limiting

See [API Authentication](./api-authentication-keys.md#rate-limits) for details.

Response headers:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640000000
```

## Pagination

List endpoints support pagination:

```http
GET /v1/records?page=1&per_page=20
```

Response includes pagination metadata:
```json
{
  "data": [...],
  "meta": {
    "total": 150,
    "page": 1,
    "per_page": 20,
    "total_pages": 8
  },
  "links": {
    "first": "/v1/records?page=1",
    "last": "/v1/records?page=8",
    "prev": null,
    "next": "/v1/records?page=2"
  }
}
```

## Filtering and Sorting

### Filtering
```http
GET /v1/records?category=lab_results&date_from=2024-01-01
```

### Sorting
```http
GET /v1/records?sort=-created_at (descending)
GET /v1/records?sort=created_at (ascending)
```

## Webhooks

See [Webhooks & Event Subscriptions](./webhooks-event-subscriptions.md) for details.

## SDKs and Libraries

### Official SDKs
- **Python**: `pip install healthsync`
- **JavaScript/Node.js**: `npm install healthsync-sdk`
- **Ruby**: `gem install healthsync`

### Community SDKs
- PHP, Go, Java - See documentation

## OpenAPI Specification

Download complete OpenAPI/Swagger specification:
```
https://api.healthsync.com/openapi.json
```

Import into Postman, Insomnia, or other API clients.

## Code Examples

### Python
```python
import healthsync

client = healthsync.Client(api_key='your_api_key')

# List records
records = client.records.list(category='lab_results')

# Upload document
with open('lab_result.pdf', 'rb') as f:
    record = client.records.create(
        file=f,
        category='lab_results',
        date='2024-02-27'
    )

# Run AI analysis
analysis = client.analysis.create(record_id=record.id)
```

### JavaScript
```javascript
const HealthSync = require('healthsync-sdk');

const client = new HealthSync({ apiKey: 'your_api_key' });

// List records
const records = await client.records.list({
  category: 'lab_results'
});

// Upload document
const record = await client.records.create({
  file: fileBuffer,
  category: 'lab_results',
  date: '2024-02-27'
});

// Run AI analysis
const analysis = await client.analysis.create({
  recordId: record.id
});
```

## Support

- **Documentation**: https://docs.healthsync.com
- **API Status**: https://status.healthsync.com
- **Developer Support**: developers@healthsync.com
- **Community Forum**: https://community.healthsync.com

## Related Articles

- [API Authentication](./api-authentication-keys.md)
- [Fetching Lab Results](./fetching-lab-results.md)
- [Webhooks](./webhooks-event-subscriptions.md)
