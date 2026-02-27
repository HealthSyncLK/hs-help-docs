---
id: sla-response-time
title: SLA & Response Times
sidebar_label: SLA & Response Time
position: 6
---

# SLA & Response Times

Understand our service level agreements and expected response times.

## Service Level Agreement (SLA)

### What is an SLA?

A Service Level Agreement is our commitment to you regarding:
- System uptime and availability
- Support response times
- Issue resolution targets
- Performance standards
- Compensation if we fail to meet commitments

## Uptime SLA

### Availability Commitment

**All Plans**
- 99.9% uptime guarantee
- Scheduled maintenance excluded
- Force majeure excluded

**What this means:**
- Maximum 43.8 minutes downtime per month
- Or 8.76 hours per year
- Planned maintenance doesn't count

### Uptime by Plan

| Plan | Uptime SLA | Max Downtime/Month |
|------|------------|-------------------|
| Free | 99.5% | 3.6 hours |
| Plus | 99.9% | 43 minutes |
| Premium | 99.95% | 22 minutes |
| Enterprise | 99.99% | 4.3 minutes |

### Scheduled Maintenance

**Advance Notice:**
- 7 days notice for major maintenance
- 48 hours for minor updates
- Posted on status page
- Email notifications sent

**Maintenance Windows:**
- Sunday 2 AM - 6 AM EST (preferred)
- Limited to 4 hours
- Maximum 2 per month
- Emergency maintenance as needed

### Monitoring

**How We Track:**
- 24/7 automated monitoring
- Multiple monitoring locations
- Real-time alerts
- Public status page

**View Status:**
[status.healthsync.com](https://status.healthsync.com)

## Support Response Times

### By Plan Level

#### Free Plan
**Support Channels:**
- Email only
- Help documentation
- Community forum

**Response Times:**
| Priority | Response Time |
|----------|--------------|
| Critical | N/A |
| High | N/A |
| Medium | 48 business hours |
| Low | 72 business hours |

**Support Hours:**
- Monday-Friday, 9 AM - 6 PM EST

---

#### Plus Plan
**Support Channels:**
- Email
- Live chat (business hours)
- Phone (business hours)
- Help documentation

**Response Times:**
| Priority | Response Time |
|----------|--------------|
| Critical | N/A |
| High | 8 business hours |
| Medium | 24 business hours |
| Low | 48 business hours |

**Support Hours:**
- Monday-Friday, 9 AM - 6 PM EST
- Saturday, 10 AM - 4 PM EST

---

#### Premium Plan
**Support Channels:**
- Priority email
- 24/7 live chat
- 24/7 phone support
- Screen sharing support
- Help documentation

**Response Times:**
| Priority | Response Time |
|----------|--------------|
| Critical | 1 hour, 24/7 |
| High | 2 hours, 24/7 |
| Medium | 4 hours | 
| Low | 24 hours |

**Support Hours:**
- 24/7/365

---

#### Enterprise Plan
**Support Channels:**
- All Premium channels
- Dedicated account manager
- Direct developer hotline
- Dedicated Slack channel
- On-site support (as contracted)

**Response Times:**
| Priority | Response Time |
|----------|--------------|
| Critical | 30 minutes, 24/7 |
| High | 1 hour, 24/7 |
| Medium | 2 hours |
| Low | 12 hours |

**Support Hours:**
- 24/7/365
- Dedicated support team

## Resolution Time Targets

### Target Resolution Times

**By Priority:**

| Priority | Plus Plan | Premium Plan | Enterprise Plan |
|----------|-----------|--------------|-----------------|
| Critical | N/A | 4 hours | 2 hours |
| High | 3 business days | 24 hours | 12 hours |
| Medium | 5 business days | 3 business days | 2 business days |
| Low | 10 business days | 7 business days | 5 business days |

### What Counts As Resolution

- Issue completely fixed, or
- Workaround provided, or
- Root cause identified with fix date, or
- Determined not a bug (explained)

### Factors Affecting Resolution

**May Take Longer:**
- Complex technical issues
- Third-party dependencies
- Requires code changes
- Awaiting customer information
- External services involved

**Faster Resolution:**
- Clear reproduction steps
- Complete information provided
- Common or known issue
- Simple configuration fix

## Priority Definitions

### 🔴 Critical (P0)
**Criteria:**
- Complete service outage
- Data loss or corruption
- Security breach
- HIPAA violation
- Affects all or most users
- Account completely inaccessible

**Examples:**
- Login system down
- All uploads failing
- Data breach detected
- Database corruption

**Available to:** Premium, Enterprise

---

### 🟠 High (P1)
**Criteria:**
- Major functionality broken
- Significant user impact
- No reasonable workaround
- Billing/payment issues
- Affects many users

**Examples:**
- AI analysis not working
- Cannot upload files
- Mobile app crashes on launch
- Payment processing failing

**Available to:** Plus, Premium, Enterprise

---

### 🟡 Medium (P2)
**Criteria:**
- Feature partially working
- Workaround available
- Moderate impact
- Affects some users
- Performance degradation

**Examples:**
- Slow page loads
- Intermittent sync issues
- Some PDFs won't display
- Search results incomplete

**Available to:** All plans

---

### 🟢 Low (P3)
**Criteria:**
- Minor issues
- Cosmetic problems
- Feature requests
- General questions
- Minimal impact

**Examples:**
- Typos in UI
- Minor display glitches
- Enhancement requests
- How-to questions

**Available to:** All plans

## SLA Credits

### When You Qualify

If we fail to meet uptime SLA:
- Service unavailable beyond threshold
- Unscheduled downtime
- Not due to your actions
- Not force majeure

### Credit Amounts

**Monthly Uptime Credits:**

| Uptime Achieved | Credit |
|----------------|--------|
| 99.9% - 99.0% | 10% of monthly fee |
| 98.9% - 95.0% | 25% of monthly fee |
| Below 95.0% | 50% of monthly fee |

### How to Claim

1. Submit claim within 30 days
2. Email: sla@healthsync.com
3. Include:
   - Account email
   - Dates of outage
   - Impact description
4. We verify and process
5. Credit applied to next bill

### Limitations

**Maximum Credit:**
- 100% of one month's fees
- Credits don't roll over
- Cash refunds not available

**Exclusions:**
- Scheduled maintenance
- Your network/equipment issues
- Third-party service problems
- Force majeure events
- Your violation of Terms

## Support SLA

### Response Time Guarantee

If we miss response SLA:
- Premium: 25% credit for that support case
- Enterprise: Per contract terms

### How It Works

**Automatic Tracking:**
- Timestamp on ticket creation
- First agent response tracked
- Notifications if approaching SLA
- Automatic escalation if breached

**Credit Process:**
- Automatic for Enterprise
- Request for Premium
- Applied to next bill

## Performance SLAs

### Page Load Times

**Targets:**
- Homepage: < 2 seconds
- Document list: < 3 seconds
- Document viewer: < 2 seconds
- AI analysis: < 30 seconds

### API Performance

**Enterprise Plan:**
- 99th percentile: < 500ms
- Median: < 200ms
- Error rate: < 0.1%

## Measuring Our Performance

### Public Metrics

View real-time metrics:
- Current uptime
- Average response times
- Incident history
- Historical performance

[status.healthsync.com/metrics](https://status.healthsync.com/metrics)

### Transparency Reports

Quarterly reports include:
- Uptime percentage
- Incident summaries
- Support statistics
- Improvement initiatives

[healthsync.com/transparency](https://healthsync.com/transparency)

## Escalation Process

### When to Escalate

- SLA missed
- No response within promised time
- Issue remains unresolved
- Unsatisfied with resolution

### How to Escalate

**Plus Plan:**
- Reply "Please escalate" to ticket
- Email: escalation@healthsync.com

**Premium Plan:**
- Contact via priority line
- Request immediate escalation
- Notify account manager

**Enterprise Plan:**
- Contact account manager directly
- Escalation hotline available
- Executive escalation path

### Escalation Response

- Reviewed within 1 hour (Premium)
- Manager assigned
- Status update provided
- Fast-track resolution
- Follow-up call scheduled

## Exceptions and Force Majeure

### Not Covered by SLA

- Natural disasters
- Terrorism or war
- Internet backbone failures
- DDoS attacks beyond our control
- Government actions
- Your actions or violations
- Scheduled maintenance

### Our Commitment

Even during exceptions:
- Transparent communication
- Regular status updates
- Mitigation efforts
- Recovery timeline
- Post-mortem reports

## Improving SLAs

### Feedback Welcome

Help us improve:
- Report SLA misses
- Suggest improvements
- Rate support experiences
- Provide testimonials

### Continuous Improvement

We regularly:
- Review performance metrics
- Adjust staffing levels
- Improve processes
- Invest in infrastructure
- Train support team

## Enterprise Custom SLAs

### Custom Agreements

Enterprise customers can negotiate:
- Higher uptime guarantees
- Faster response times
- Dedicated resources
- Custom penalties
- Specific performance metrics
- Service credits
- Contractual commitments

Contact: enterprise@healthsync.com

## Frequently Asked Questions

**Q: What if you miss the SLA by 5 minutes?**
A: We still count it as a miss. SLAs are commitments we take seriously.

**Q: Do response times include weekends?**
A: "Business hours" excludes weekends. "24/7" includes all days.

**Q: Can I upgrade mid-issue for faster support?**
A: Yes, upgrade takes effect immediately.

**Q: How do I know my priority level?**
A: We assign based on impact. You can request change if you disagree.

**Q: What if third-party service causes downtime?**
A: We're still accountable and work to resolve quickly.

## Contact for SLA Questions

**Support:** support@healthsync.com

**SLA Claims:** sla@healthsync.com

**Escalations:** escalation@healthsync.com

**Enterprise:** Your account manager

## Related Articles

- [Contact Support](./contact-support.md)
- [Submit a Ticket](./submit-ticket.md)
- [Live Chat](./live-chat.md)
- [Report a Bug](./report-bug.md)
- [System Status](https://status.healthsync.com)
