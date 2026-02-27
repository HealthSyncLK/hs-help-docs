---
id: third-party-integrations
title: Third-Party Integrations
sidebar_label: Third-Party Integrations
position: 5
---

# Third-Party Integrations

Connect HealthSync with your favorite healthcare apps and services.

## Available Integrations

### Fitness & Wearables
- **Apple Health** - Sync health metrics from iPhone
- **Google Fit** - Android health data integration
- **Fitbit** - Activity and sleep data
- **Garmin** - Fitness tracking integration
- **Oura Ring** - Sleep and recovery metrics

### Electronic Health Records (EHR)
- **Epic MyChart** - Import records from Epic systems
- **Cerner** - Access Cerner portal data
- **Allscripts** - FollowMyHealth integration
- **Athenahealth** - Patient portal sync

### Lab Services
- **Quest Diagnostics** - Automatic lab result import
- **LabCorp** - Direct lab integration
- **Local Hospital Labs** - Via HL7/FHIR

### Pharmacy
- **CVS Pharmacy** - Prescription history
- **Walgreens** - Medication tracking
- **RxSaver** - Price comparison

### Telemedicine
- **Teladoc** - Virtual visit records
- **Amwell** - Telehealth integration
- **Doctor On Demand** - Visit summaries

## Setting Up Integrations

### General Setup Process
1. Go to **Settings** > **Integrations**
2. Select integration to enable
3. Click "Connect"
4. Authenticate with third-party service
5. Grant necessary permissions
6. Configure sync settings

### Apple Health Integration

#### Setup
1. Open HealthSync mobile app
2. Go to **Settings** > **Integrations**
3. Tap "Apple Health"
4. Enable data types to sync
5. Approve permissions in iOS Health app

#### Data Synced
- Steps and activity
- Heart rate
- Blood pressure
- Weight and BMI
- Sleep data
- Workout sessions

### Epic MyChart Integration

#### Setup
1. Go to **Settings** > **Integrations**
2. Click "Epic MyChart"
3. Search for your healthcare provider
4. Enter MyChart credentials
5. Authorize HealthSync access

#### Data Imported
- Visit summaries
- Lab results
- Immunization records
- Medications
- Allergies
- Problem list

## Managing Integrations

### Sync Frequency
- **Real-time**: Instant sync (where supported)
- **Hourly**: Updates every hour
- **Daily**: Once per day sync
- **Manual**: Sync on demand only

### Data Filtering
Choose what data to sync:
- Select specific data types
- Set date ranges
- Filter by category
- Exclude sensitive data

### Disconnecting Integrations
1. Go to integration settings
2. Click "Disconnect"
3. Choose data handling:
   - Keep existing data
   - Delete imported data
4. Confirm disconnection

## OAuth Connections

Many integrations use OAuth for secure authentication:
- Permissions are scope-limited
- Access can be revoked anytime
- Tokens automatically refreshed
- No password sharing required

## Troubleshooting

### Connection Failed
- Verify credentials are correct
- Check third-party service status
- Ensure permissions granted
- Try disconnecting and reconnecting

### Data Not Syncing
- Check sync settings
- Verify internet connection
- Ensure integration is active
- Manually trigger sync
- Check for service outages

### Missing Data
- Review data filtering settings
- Check date range restrictions
- Verify data exists at source
- Allow time for initial sync (up to 24 hours)

## API-Based Integrations

For developers building custom integrations:
- Use HealthSync API
- Follow OAuth 2.0 flow
- Implement webhooks for real-time updates
- See [Developer Reference](./developer-reference-specs.md)

## Enterprise Integrations

Custom integrations available for Enterprise plans:
- Direct EHR integration
- Custom data mappings
- Dedicated support
- SLA guarantees
- Contact sales for details

## Related Articles

- [API Authentication](./api-authentication-keys.md)
- [Developer Reference](./developer-reference-specs.md)
- [Mobile App Support](../mobile-app-support/intro.md)
