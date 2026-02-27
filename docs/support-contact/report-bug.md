---
id: report-bug
title: Report a Bug
sidebar_label: Report Bug
position: 5
---

# Report a Bug

Help us improve HealthSync by reporting bugs and issues.

## What is a Bug?

### Software Bugs
- Feature not working as designed
- Error messages appearing
- Unexpected behavior
- Data not saving correctly
- UI displaying incorrectly
- App crashes or freezes
- Performance issues

### Not Bugs
- Feature requests (use feedback form)
- Questions or confusion (use support)
- Design preferences (use feedback)
- Expected behavior you don't like

## Before Reporting

### Check First

1. **Is it really a bug?**
   - Review documentation
   - Check if feature works as intended
   - Verify your understanding

2. **Is it already reported?**
   - Search [known issues](https://status.healthsync.com/known-issues)
   - Check community forum
   - Look at recent release notes

3. **Can you reproduce it?**
   - Try again
   - Try different browser/device
   - Try incognito mode
   - Clear cache and retry

4. **Is it on your end?**
   - Check internet connection
   - Update browser/app
   - Try different device
   - Disable extensions

## How to Report a Bug

### Method 1: Bug Report Form

**Web/Mobile App:**
1. Click Help (?) icon
2. Select "Report a Bug"
3. Fill in bug report form
4. Submit

**Direct link:** [bugs.healthsync.com/report](https://bugs.healthsync.com/report)

---

### Method 2: Email

Send to: **bugs@healthsync.com**

Include all information from template below.

---

### Method 3: In-App Feedback

When bug occurs:
1. Shake device (mobile) or press Ctrl+Shift+F (web)
2. Bug report form appears
3. Automatically captures:
   - Current screen
   - Console logs
   - Device info
   - App state
4. Add description
5. Submit

## Bug Report Template

### Required Information

**Bug Title**
```
Clear, concise summary
Example: "Upload fails for PDFs larger than 5MB"
```

**Steps to Reproduce**
```
1. Go to...
2. Click on...
3. Enter...
4. See error
```

**Expected Behavior**
```
What should happen:
"Upload should complete and show success message"
```

**Actual Behavior**
```
What actually happens:
"Error message appears and upload resets to 0%"
```

**Frequency**
- ⚫ Always (100%)
- 🔴 Often (75%)
- 🟡 Sometimes (50%)
- 🟢 Rarely (25%)
- ⚪ Once (first time)

### System Information

**Browser/App**
- Browser: Chrome 120.0.6099.109
- OS: Windows 11 Pro
- HealthSync version: 3.2.0

**Mobile Device** (if applicable)
- Device: iPhone 15 Pro
- OS: iOS 17.2.1
- App version: 3.2.0

**Network**
- Connection: Wi-Fi / Cellular / Ethernet
- Speed: Fast / Slow
- VPN: Yes / No

### Additional Context

**Error Messages**
```
Exact error text or code:
"Error 500: Internal Server Error"
```

**Screenshots**
- Attach what you see
- Multiple angles helpful
- Include error messages
- Show before and after

**Console Logs** (if technical)
- Press F12 in browser
- Go to Console tab
- Screenshot errors (in red)
- Copy error messages

**Impact**
- ⚠️ **Blocking**: Can't use HealthSync
- 🟠 **High**: Major feature broken
- 🟡 **Medium**: Workaround available
- 🟢 **Low**: Minor inconvenience

**Workaround** (if you found one)
```
"Uploading files smaller than 5MB works fine"
```

## What Happens Next

### Acknowledgment
- Automatic confirmation email
- Bug tracking number assigned
- Format: BUG-XXXXX
- Use for future reference

### Triage
Within 24-48 hours:
- Bug reviewed by team
- Priority assigned
- Reproduce attempted
- Assigned to developer

### Investigation
- Developer analyzes code
- Identifies root cause
- Tests fix
- May request more info from you

### Fix
- Bug fixed in code
- Tested internally
- Released in update
- Release notes mention bug number

### Notification
You'll be notified when:
- Bug confirmed
- Fix in progress
- Fix deployed
- Bug marked as resolved

## Bug Priority Levels

### Critical (P0)
- Security vulnerabilities
- Data loss or corruption
- Complete feature breakdown
- HIPAA compliance issues
- Affects all users

**Target fix:** Immediate hotfix

---

### High (P1)
- Major feature broken
- Affects many users
- No reasonable workaround
- Significant functionality lost

**Target fix:** Next patch release (1-2 weeks)

---

### Medium (P2)
- Feature mostly works
- Workaround available
- Affects some users
- Moderate impact

**Target fix:** Next minor release (1-2 months)

---

### Low (P3)
- Cosmetic issues
- Minor inconvenience
- Rare occurrence
- Minimal impact

**Target fix:** When time permits

## Known Issues

### Current Known Issues

Check [status.healthsync.com/known-issues](https://status.healthsync.com/known-issues) for:
- Active bugs we're aware of
- Workarounds if available
- Expected fix date
- Progress updates

### Don't Report If...
Issue already listed as known. But you can:
- Add your experience in comments
- Vote for priority
- Subscribe for updates

## Bug Bounty Program

### Earn Rewards

Report security vulnerabilities:
- Critical: $500-$5,000
- High: $100-$500
- Medium: $50-$100
- Low: Recognition + swag

### Scope
- Web application
- Mobile apps
- API endpoints
- Infrastructure
- Third-party integrations

### Out of Scope
- Social engineering
- Physical attacks
- DoS/DDoS
- Spam or social features
- Already known issues

### Rules
- Report privately via security@healthsync.com
- Give us 90 days to fix
- Don't exploit the bug
- Don't access user data
- Follow responsible disclosure

[Full program details](https://healthsync.com/security/bug-bounty)

## Testing Betas

### Join Beta Program

Help find bugs before release:
- Early access to features
- Dedicated bug reporting channel
- Direct line to dev team
- Influence product direction
- Beta tester badge

[Join beta program](../updates-whats-new/beta-features.md)

### Beta Bug Reporting
- Separate beta bug forum
- Faster response time
- More technical discussion
- Direct developer interaction

## Tracking Your Bug Report

### Bug Portal

View your reported bugs:
1. Visit [bugs.healthsync.com](https://bugs.healthsync.com)
2. Log in with HealthSync account
3. See "My Reported Bugs"
4. Check status and updates
5. Add comments

### Bug Status

- 🔵 **New**: Just reported, not yet triaged
- 🟡 **Confirmed**: Bug verified by team
- 🟣 **In Progress**: Actively being fixed
- 🟢 **Fixed**: Fixed in upcoming release
- ✅ **Resolved**: Fix deployed
- ⚪ **Won't Fix**: Working as designed or out of scope
- 🔴 **Cannot Reproduce**: Need more info

### Email Updates

Automatically notified when:
- Bug status changes
- Developer adds comment
- Fix is deployed
- We need more information

## Bug Reporting Best Practices

### ✅ Do
- Be detailed and specific
- Include steps to reproduce
- Attach screenshots/videos
- Note system information
- Check if already reported
- Follow up if asked
- Verify fix when deployed
- Report one bug per report

### ❌ Don't
- Report feature requests as bugs
- Duplicate reports
- Be vague or unclear
- Withhold information
- Demand immediate fixes
- Report bugs publicly (security)
- Include sensitive personal data

## Example Bug Report

### Good Report ✅

```
Title: PDF upload fails with "Parse error" for forms with fillable fields

Steps to Reproduce:
1. Go to Records > Upload
2. Select a PDF form with fillable fields
3. Click Upload
4. Wait for processing

Expected: PDF uploads successfully
Actual: Error message "Parse error" appears, upload fails

Frequency: Always (100%)
Impact: High - Cannot upload important medical forms

Browser: Firefox 121.0 on Windows 11
File: Downloaded form from insurance company
Size: 2.3 MB
Type: PDF with AcroForms

Screenshot: Attached
Console error: "TypeError: Cannot read property 'split' of undefined"

Workaround: Flattening the PDF before upload works
```

### Bad Report ❌

```
Title: Upload doesn't work

Description: I tried to upload and it didn't work.

Impact: High
```

Why bad:
- Vague title
- No steps to reproduce
- No system info
- No screenshot
- No details

## Security Bugs

### Responsible Disclosure

Found a security vulnerability?

**Contact:** security@healthsync.com

**Include:**
- Detailed description
- Steps to reproduce
- Proof of concept (if safe)
- Potential impact
- Your contact info (for bug bounty)

**Don't:**
- Exploit the vulnerability
- Access user data
- Publicly disclose
- Share with others

**We Will:**
- Confirm receipt within 24 hours
- Investigate immediately
- Keep you updated
- Credit you (if desired)
- Pay bounty (if eligible)
- Fix ASAP

**Timeline:**
- Critical: Hotfix within 24-48 hours
- High: Fix within 7 days
- Public disclosure: 90 days after fix

## Related Articles

- [Submit a Ticket](./submit-ticket.md)
- [Contact Support](./contact-support.md)
- [Beta Features](../updates-whats-new/beta-features.md)
- [Latest Release Notes](../updates-whats-new/latest-release-notes.md)
