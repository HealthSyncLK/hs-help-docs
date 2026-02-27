---
id: syncing-with-app
title: Syncing Between Web & Mobile
sidebar_label: Syncing with App
position: 4
---

# Syncing Between Web & Mobile

Keep your data synchronized across all devices seamlessly.

## How Sync Works

HealthSync automatically syncs your data across:
- Web application
- iOS app
- Android app
- Multiple devices of the same type

All changes sync in real-time when connected to the internet.

## Auto-Sync

### Default Behavior
- Automatic sync when app opens
- Background sync when online
- Upload queue for offline changes
- Instant sync for critical updates

### Sync Triggers
- Opening the app
- Uploading new document
- Editing record
- Creating family member
- Changing settings

## Manual Sync

### When to Use
- After being offline
- If data seems outdated
- Before important access
- Troubleshooting sync issues

### How to Manually Sync

#### Mobile Apps
- Pull down on home screen
- Or: Settings > Sync Now

#### Web App
- Click profile icon > Sync Now
- Or: Settings > Data & Sync > Sync Now

## Sync Settings

### Access Sync Settings
Mobile: Settings > Data & Sync
Web: Settings > Preferences > Sync

### Available Options

**Auto-Sync**
- Enable/disable automatic syncing
- Default: Enabled

**Sync Frequency**
- Instant (recommended)
- Every 15 minutes
- Hourly
- Manual only

**Sync on Cellular**
- Allow sync on mobile data
- Wi-Fi only (saves data)
- Prompt each time

**Background Sync**
- Sync even when app is closed
- Requires battery permissions (Android)
- Enabled by default

**Sync Content**
- Document metadata only
- Full documents
- AI analysis results
- Settings and preferences

## Sync Indicators

### Status Icons
- ✅ **Green checkmark**: Fully synced
- 🔄 **Spinning arrow**: Syncing
- ⏸️ **Pause**: Sync paused
- ⚠️ **Warning**: Sync error
- ☁️ **Cloud**: Queued for upload

### Sync Details
Tap sync icon to see:
- Last sync time
- Items pending sync
- Sync errors
- Network status

## Offline Changes

### How It Works
1. Make changes while offline
2. Changes queued locally
3. Auto-upload when online
4. Notification on completion

### Queued Items
View pending uploads:
- Mobile: Settings > Sync > Pending
- Web: Settings > Data & Sync > Queue

### Priority Sync
Critical items sync first:
1. Security settings
2. Document uploads
3. Sharing changes
4. Metadata updates
5. Preference changes

## Conflict Resolution

### When Conflicts Occur
- Same record edited on two devices while offline
- Conflicting changes made simultaneously
- Rare but possible

### How Conflicts Are Handled
1. You're notified of conflict
2. Both versions shown
3. Choose which to keep:
   - Keep local version
   - Keep server version
   - Merge manually
4. Apply selection

### Preventing Conflicts
- Stay online when possible
- Complete edits before switching devices
- Use manual sync before offline work

## Troubleshooting Sync

### Sync Not Working

**Check:**
- Internet connection active
- Not in airplane mode
- Sufficient storage space
- App is up to date
- Logged into correct account

**Try:**
1. Force manual sync
2. Close and reopen app
3. Sign out and sign back in
4. Check sync settings
5. Contact support if persists

### Slow Sync
- Large files take time
- Use Wi-Fi for big uploads
- Clear sync queue
- Reduce sync frequency

### Missing Data
- Allow time for sync (up to 5 minutes)
- Check if data was deleted
- Verify correct account
- Check filters on view
- Restore from backup if needed

## Sync Optimization

### Best Practices
- Keep apps updated
- Use Wi-Fi for large uploads
- Enable background sync
- Don't force quit app frequently
- Maintain adequate storage

### Battery Considerations
- Background sync uses battery
- Configure sync frequency
- Use Wi-Fi only mode
- Disable when battery low

## Data Usage

### Typical Usage
- Document metadata: < 1KB per record
- Small PDFs: 100-500KB
- Large files: 1-10MB
- Photos: 2-5MB each

### Reduce Data Usage
- Enable Wi-Fi only sync
- Download essentials only
- Compress before upload
- Limit photo uploads on cellular

## Related Articles

- [Android App Guide](./android-app-guide.md)
- [iOS App Guide](./ios-app-guide.md)
- [Offline Access](./offline-access.md)
- [Sync Problems](../troubleshooting-faqs/sync-problems.md)
