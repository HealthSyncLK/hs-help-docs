import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'HealthSync Help',
  tagline: 'Complete documentation and help resources for HealthSync',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://help.healthsync.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'HealthSyncLK',
  projectName: 'hs-help-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/HealthSyncLK/hs-help-docs/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card
    image: 'img/social-card.png',
    
    // Navbar
    navbar: {
      title: 'HealthSync Help',
      logo: {
        alt: 'HealthSync Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://healthsync.com',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://github.com/HealthSyncLK/hs-help-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: false,
      style: 'dark',
    },

    // Footer
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/intro',
            },
            {
              label: 'All Modules',
              to: '/',
            },
            {
              label: 'Support & Contact',
              to: '/docs/support-contact/intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Mobile Apps',
              to: '/docs/mobile-app-support/intro',
            },
            {
              label: 'API Documentation',
              to: '/docs/integrations-apis/intro',
            },
            {
              label: 'What\'s New',
              to: '/docs/updates-whats-new/intro',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Support',
              href: 'mailto:support@healthsync.com',
            },
            {
              label: 'Report Issue',
              href: 'https://github.com/HealthSyncLK/hs-help-docs/issues',
            },
            {
              label: 'FAQ',
              to: '/docs/troubleshooting-faqs/faq',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/docs/policies-security/privacy-policy',
            },
            {
              label: 'Terms of Service',
              to: '/docs/policies-security/terms-of-service',
            },
            {
              label: 'HIPAA Compliance',
              to: '/docs/policies-security/hipaa-compliance-overview',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HealthSync. Built with Docusaurus.`,
    },

    // Prism theme for code blocks
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    // Color mode
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // Docs sidebar
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    // Metadata
    metadata: [
      {name: 'keywords', content: 'healthsync, help, documentation, medical records, health, AI analyzer'},
      {name: 'description', content: 'Official help documentation for HealthSync - manage your health records, use AI analysis, and more'},
    ],

  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: false,
      },
    ],
  ],
};

export default config;
