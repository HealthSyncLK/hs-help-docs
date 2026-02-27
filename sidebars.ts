import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * HealthSync Help Documentation - Sidebar Configuration
 * Complete navigation structure for all 12 modules
 */

const sidebars: SidebarsConfig = {
  // Main documentation sidebar
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '👋 Welcome',
    },
    
    // Module 1: Getting Started
    {
      type: 'category',
      label: '🧠 Getting Started',
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/account-creation-login',
        'getting-started/first-time-setup',
        'getting-started/navigating-dashboard',
        'getting-started/user-roles-permissions',
        'getting-started/overview-of-features',
      ],
    },

    // Module 2: Managing Records
    {
      type: 'category',
      label: '📁 Managing Records',
      collapsed: true,
      items: [
        'managing-records/intro',
        'managing-records/uploading-documents',
        'managing-records/viewing-editing-records',
        'managing-records/family-member-profiles',
        'managing-records/deleting-updating-records',
        'managing-records/sharing-health-records',
      ],
    },

    // Module 3: Managing Family Members
    {
      type: 'category',
      label: '👨‍👩‍👧‍👦 Managing Family Members',
      collapsed: true,
      items: [
        'managing-family-members/intro',
        'managing-family-members/adding-family-member',
        'managing-family-members/managing-access-permissions',
        'managing-family-members/uploading-records-family',
        'managing-family-members/switching-profiles',
        'managing-family-members/removing-family-member',
        'managing-family-members/privacy-consent-guardianship',
      ],
    },

    // Module 4: AI Report Analyzer
    {
      type: 'category',
      label: '🤖 AI Report Analyzer',
      collapsed: true,
      items: [
        'ai-report-analyzer/intro',
        'ai-report-analyzer/how-ai-analysis-works',
        'ai-report-analyzer/supported-document-formats',
        'ai-report-analyzer/viewing-ai-summaries',
        'ai-report-analyzer/fixing-errors-analysis',
        'ai-report-analyzer/best-practices-interpretation',
      ],
    },

    // Module 5: Subscription & Billing
    {
      type: 'category',
      label: '💳 Subscription & Billing',
      collapsed: true,
      items: [
        'subscription-billing/intro',
        'subscription-billing/plan-comparison-features',
        'subscription-billing/updating-billing-details',
        'subscription-billing/promo-codes-discounts',
        'subscription-billing/failed-payments-invoices',
        'subscription-billing/refund-policy',
      ],
    },

    // Module 6: Troubleshooting & FAQs
    {
      type: 'category',
      label: '🛠 Troubleshooting & FAQs',
      collapsed: true,
      items: [
        'troubleshooting-faqs/intro',
        'troubleshooting-faqs/common-error-messages',
        'troubleshooting-faqs/login-password-issues',
        'troubleshooting-faqs/sync-problems',
        'troubleshooting-faqs/search-filter-help',
        'troubleshooting-faqs/faq',
      ],
    },

    // Module 7: Healthcare Providers (DocSync)
    {
      type: 'category',
      label: '🧑‍⚕️ Healthcare Providers',
      collapsed: true,
      items: [
        'healthcare-providers/intro',
        'healthcare-providers/connecting-with-patients',
        'healthcare-providers/adding-visit-notes',
        'healthcare-providers/prescription-management',
        'healthcare-providers/lab-result-integration',
        'healthcare-providers/provider-specific-faq',
      ],
    },

    // Module 8: Integrations & APIs
    {
      type: 'category',
      label: '🔌 Integrations & APIs',
      collapsed: true,
      items: [
        'integrations-apis/intro',
        'integrations-apis/api-authentication-keys',
        'integrations-apis/fetching-lab-results',
        'integrations-apis/webhooks-event-subscriptions',
        'integrations-apis/third-party-integrations',
        'integrations-apis/developer-reference-specs',
      ],
    },

    // Module 9: Mobile & App Support
    {
      type: 'category',
      label: '📱 Mobile & App Support',
      collapsed: true,
      items: [
        'mobile-app-support/intro',
        'mobile-app-support/android-app-guide',
        'mobile-app-support/ios-app-guide',
        'mobile-app-support/syncing-with-app',
        'mobile-app-support/push-notifications-settings',
        'mobile-app-support/offline-access',
      ],
    },

    // Module 10: Updates & What's New
    {
      type: 'category',
      label: '📈 Updates & What\'s New',
      collapsed: true,
      items: [
        'updates-whats-new/intro',
        'updates-whats-new/latest-release-notes',
        'updates-whats-new/feature-walkthrough-videos',
        'updates-whats-new/beta-features',
        'updates-whats-new/roadmap-highlights',
      ],
    },

    // Module 11: Policies & Security
    {
      type: 'category',
      label: '🧰 Policies & Security',
      collapsed: true,
      items: [
        'policies-security/intro',
        'policies-security/privacy-policy',
        'policies-security/data-protection-encryption',
        'policies-security/access-permissions-sharing',
        'policies-security/terms-of-service',
        'policies-security/hipaa-compliance-overview',
      ],
    },

    // Module 12: Support & Contact
    {
      type: 'category',
      label: '📞 Support & Contact',
      collapsed: true,
      items: [
        'support-contact/intro',
        'support-contact/contact-support',
        'support-contact/live-chat',
        'support-contact/submit-ticket',
        'support-contact/report-bug',
        'support-contact/sla-response-time',
      ],
    },
  ],
};

export default sidebars;
