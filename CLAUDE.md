# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ProCompass is a multilingual privacy policy static website built with Vue 3, Vite, and vue-i18n. It displays privacy policy content in multiple languages (Simplified Chinese, Traditional Chinese, English, Japanese) with automatic language detection and manual language switching.

## Technology Stack

- **Framework**: Vue 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite 5
- **Internationalization**: vue-i18n 9 (Composition API mode with `legacy: false`)
- **Deployment**: GitHub Pages via GitHub Actions
- **Base Path**: `/ProCompass/` (configured in vite.config.js for GitHub Pages)

## Common Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production (output to dist/)
npm run preview      # Preview production build locally
```

### Deployment
```bash
npm run deploy       # Manual deployment: build + push to gh-pages branch
```

**Note**: Deployment is automated via GitHub Actions on push to `main` branch. Manual deployment is available as fallback.

## Architecture & Code Structure

### I18n Architecture

**Locale Detection Strategy**:
1. Check localStorage for saved locale preference
2. Fall back to browser language detection (via `navigator.languages[0]` or `navigator.language`)
3. Default to `zh-Hans` if no match found

**Locale Mapping** (`src/i18n/index.js:26-38`):
- Maps browser locale codes to app locales (e.g., `zh-CN` → `zh-Hans`, `zh-TW` → `zh-Hant`)
- Supports regional variants (e.g., `en-US`, `en-GB` → `en`)

**Message Files** (`src/i18n/locales/*.json`):
- All translation strings are stored in JSON files with nested structure
- Contact information (`contact.name`, `contact.email`) is separated from main content
- Each locale file must have identical structure for proper i18n functionality

### Component Architecture

**Single Component Design**:
- The entire application is essentially one component (`PrivacyView.vue`) wrapped by a minimal `App.vue`
- All content is driven by i18n messages using computed properties
- No component props or state management needed beyond locale state

**Reactive Data Flow**:
- All text content uses `computed()` to reactively pull from `t()` function
- Contact info uses `ref()` and is manually reloaded when locale changes (via `watch`)
- Locale changes trigger re-computation of all translated strings automatically

**Smooth Scrolling**:
- Anchor links in TOC use custom click handler for smooth scroll behavior
- Back-to-top button appears after scrolling 300px down
- Language change auto-scrolls to top

### Styling Approach

**CSS Variables for Theming**:
- Light/dark mode via `@media (prefers-color-scheme: dark)`
- All colors defined as CSS custom properties in `:root`
- Responsive design with mobile-first breakpoints: 720px, 900px, 1024px

**Layout Behavior**:
- Desktop (>900px): TOC sticky sidebar + main content
- Mobile (≤900px): TOC becomes horizontal scrolling chip list above content
- Print styles: Hide interactive elements, remove decorations

## Adding New Languages

1. Create new locale file: `src/i18n/locales/{locale-code}.json`
2. Copy structure from existing locale file (e.g., `en.json`)
3. Import and add to messages object in `src/i18n/index.js:9-14`
4. Add locale mapping in `getBrowserLocale()` function (`src/i18n/index.js:26-38`)
5. Add `<option>` in language selector (`src/components/PrivacyView.vue:12-15`)

## GitHub Pages Configuration

**Critical Settings**:
- `vite.config.js` must have `base: '/ProCompass/'` matching repository name
- GitHub Pages must be set to "GitHub Actions" source (not gh-pages branch)
- GitHub Actions workflow uses Node.js 20 and runs on `main` branch pushes

**Deployment Flow**:
1. Push to `main` triggers `.github/workflows/deploy.yml`
2. Workflow installs deps with `npm ci`, builds with `npm run build`
3. Uploads `dist/` artifact and deploys to GitHub Pages
4. Site available at: https://junyliao.github.io/ProCompass/

## Important Implementation Notes

### When Modifying I18n
- Always update ALL locale files when adding/removing translation keys
- Maintain identical JSON structure across all locale files
- Test language switching to ensure no missing translations

### When Modifying Styles
- Use CSS variables for colors to maintain light/dark mode consistency
- Test responsive layouts at all breakpoints (especially 900px and 720px)
- Ensure print styles still work if adding new sections

### When Updating Contact Info
- Contact information is in the `contact` root key of each locale JSON file
- Contact display is in section 9 of the privacy policy (`content.sections.contact`)

### Vite Base Path
- If repository name changes, update `base` in `vite.config.js`
- If deploying to custom domain, set `base: '/'`
