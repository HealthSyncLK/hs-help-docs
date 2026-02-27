# Static Assets

This directory contains static assets for the HealthSync Help documentation site.

## Directory Structure

```
static/
├── img/
│   ├── logo.svg              # Main logo
│   ├── favicon.ico           # Browser favicon
│   ├── social-card.png       # Social media preview image
│   └── icons/                # Module icons
│       ├── getting-started.svg
│       ├── managing-records.svg
│       └── ... (12 module icons total)
```

## Assets Needed

### Logo (logo.svg)
- Current: Placeholder
- Needed: Actual HealthSync logo
- Format: SVG preferred
- Dimensions: Square or horizontal, scalable

### Favicon (favicon.ico)
- Current: Needs to be created
- Format: ICO or PNG  
- Dimensions: 32x32 or 16x16

### Module Icons
Placeholder icons are currently using emojis. For production, consider:
- Custom SVG icons matching brand
- Icon library (e.g., React Icons, Heroicons)
- Consistent size: 64x64 or 96x96

### Social Card
- Open Graph image for social media previews
- Recommended: 1200x630 px
- Shows when links are shared on social platforms

## Replacing Placeholders

To replace placeholder assets:

1. Add proper HealthSync branded files
2. Update references in:
   - `docusaurus.config.ts` (logo, favicon references)
   - `src/data/modules.ts` (if using icon files instead of emojis)
   - Update og:image meta tag for social card
