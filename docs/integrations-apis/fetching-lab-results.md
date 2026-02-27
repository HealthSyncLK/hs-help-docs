---
id: fetching-lab-results
title: Fetching Lab Results via API
sidebar_label: Fetching Lab Results
position: 3
---

# Fetching Lab Results via API

Access lab results programmatically using the HealthSync API.

## Endpoints

### List All Lab Results

```http
GET /v1/records/lab-results
```

Returns paginated list of lab results for authenticated user.

### Get Specific Lab Result

```http
GET /v1/records/lab-results/{id}
```

Returns detailed information about a specific lab result.

### Filter Lab Results

```http
GET /v1/records/lab-results?date_from=2024-01-01&date_to=2024-12-31&test_type=blood
```

## Request Examples

### Basic Request

```bash
curl -X GET \
  'https://api.healthsync.com/v1/records/lab-results' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json'
```

### Filtered Request

```bash
curl -X GET \
  'https://api.healthsync.com/v1/records/lab-results?test_type=blood&date_from=2024-01-01' \
  -H 'Authorization: Bearer YOUR_API_KEY'
```

## Response Format

### Success Response (200 OK)

```json
{
  "data": [
    {
      "id": "lab_12345",
      "type": "lab_result",
      "attributes": {
        "test_name": "Complete Blood Count",
        "test_type": "blood",
        "date_performed": "2024-02-15",
        "ordering_physician": "Dr. Smith",
        "lab_facility": "Quest Diagnostics",
        "results": [
          {
            "component": "White Blood Cells",
            "value": "7.5",
            "unit": "K/uL",
            "reference_range": "4.5-11.0",
            "flag": "normal"
          },
          {
            "component": "Red Blood Cells",
            "value": "4.8",
            "unit": "M/uL",
            "reference_range": "4.5-5.5",
            "flag": "normal"
          }
        ],
        "ai_summary": {
          "key_findings": "All values within normal range.",
          "abnormal_values": [],
          "confidence_score": 0.98
        }
      }
    }
  ],
  "meta": {
    "total": 45,
    "page": 1,
    "per_page": 20
  }
}
```

## Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | integer | Page number (default: 1) |
| `per_page` | integer | Results per page (max: 100) |
| `date_from` | date | Filter results from date (YYYY-MM-DD) |
| `date_to` | date | Filter results to date (YYYY-MM-DD) |
| `test_type` | string | Filter by test type (blood, urine, etc.) |
| `order_by` | string | Sort field (date, test_name) |
| `order` | string | Sort direction (asc, desc) |

## Error Responses

### 401 Unauthorized

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid or expired API key"
  }
}
```

### 404 Not Found

```json
{
  "error": {
    "code": "not_found",
    "message": "Lab result not found"
  }
}
```

### 429 Too Many Requests

```json
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Retry after 3600 seconds."
  }
}
```

## Pagination

Use pagination for large result sets:

```bash
# First page
GET /v1/records/lab-results?page=1&per_page=20

# Next page
GET /v1/records/lab-results?page=2&per_page=20
```

## Field Descriptions

### Result Flags
- `normal` - Within reference range
- `high` - Above reference range
- `low` - Below reference range
- `critical` - Critically abnormal value

### Test Types
- `blood` - Blood work
- `urine` - Urinalysis
- `imaging` - Radiology results
- `pathology` - Pathology reports
- `other` - Other lab tests

## Related Articles

- [API Authentication](./api-authentication-keys.md)
- [Developer Reference](./developer-reference-specs.md)
- [Webhooks](./webhooks-event-subscriptions.md)
