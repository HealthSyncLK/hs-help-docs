/**
 * HealthSync Help Documentation - Module Data
 * Configuration for all 12 modules displayed on homepage
 */

export interface Module {
  title: string;
  description: string;
  emoji: string;
  link: string;
  color: string;
}

export const MODULES: Module[] = [
  {
    title: 'Getting Started',
    description: 'Account setup, dashboard navigation, and feature overview',
    emoji: '🧠',
    link: '/docs/getting-started/intro',
    color: '#0DAFB4',
  },
  {
    title: 'Managing Records',
    description: 'Upload, view, edit, and share your health records',
    emoji: '📁',
    link: '/docs/managing-records/intro',
    color: '#8CE0E2',
  },
  {
    title: 'Managing Family Members',
    description: 'Add family profiles, manage access, and permissions',
    emoji: '👨\u200d👩\u200d👧\u200d👦',
    link: '/docs/managing-family-members/intro',
    color: '#0DAFB4',
  },
  {
    title: 'AI Report Analyzer',
    description: 'Understand how AI analyzes your medical reports',
    emoji: '🤖',
    link: '/docs/ai-report-analyzer/intro',
    color: '#075C5F',
  },
  {
    title: 'Subscription & Billing',
    description: 'Plans, billing details, payments, and refunds',
    emoji: '💳',
    link: '/docs/subscription-billing/intro',
    color: '#8CE0E2',
  },
  {
    title: 'Troubleshooting & FAQs',
    description: 'Common issues, error messages, and frequently asked questions',
    emoji: '🛠',
    link: '/docs/troubleshooting-faqs/intro',
    color: '#0DAFB4',
  },
  {
    title: 'Healthcare Providers',
    description: 'Provider tools, patient connections, and prescription management',
    emoji: '🧑\u200d⚕\ufe0f',
    link: '/docs/healthcare-providers/intro',
    color: '#075C5F',
  },
  {
    title: 'Integrations & APIs',
    description: 'API documentation, webhooks, and third-party integrations',
    emoji: '🔌',
    link: '/docs/integrations-apis/intro',
    color: '#8CE0E2',
  },
  {
    title: 'Mobile & App Support',
    description: 'Android, iOS app guides, syncing, and offline access',
    emoji: '📱',
    link: '/docs/mobile-app-support/intro',
    color: '#0DAFB4',
  },
  {
    title: 'Updates & What\'s New',
    description: 'Release notes, new features, and product roadmap',
    emoji: '📈',
    link: '/docs/updates-whats-new/intro',
    color: '#075C5F',
  },
  {
    title: 'Policies & Security',
    description: 'Privacy policy, data protection, and compliance information',
    emoji: '🧰',
    link: '/docs/policies-security/intro',
    color: '#8CE0E2',
  },
  {
    title: 'Support & Contact',
    description: 'Get help, submit tickets, and reach our support team',
    emoji: '📞',
    link: '/docs/support-contact/intro',
    color: '#0DAFB4',
  },
];
