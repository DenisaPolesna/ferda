# neviditelna-univerzita.cz — Domain Detail

Domain detail page for the CZ.NIC assignment, built with Vue 3 and TypeScript.

## Features

- Domain detail view for `neviditelna-univerzita.cz`
- **Brief / Verbose mode** toggle — brief shows only active state flags and a summary of admin contacts, verbose shows full detail
- **AuthInfo reveal** — SHOW/HIDE button for sensitive data
- **Responsive layout** — mobile-first, adapts to tablet and desktop
- Data loaded via Fetch API from a static JSON file
- **Skeleton loader** — shimmer placeholder during initial load and async component loading
- **Lazy loading** — DomainView and panels loaded on demand (code splitting)
- **Composables** — fetch logic in `useDomainDetail`
- **Constants** — shared config (e.g. `DOMAIN_DETAIL_URL`); labels in i18n
- **i18n** — [Vue I18n](https://vue-i18n.intlify.dev/) for EN/CS; default locale EN
- **Accessibility** — ARIA labels, `aria-expanded`, `aria-hidden` on interactive elements
- **Performance** — v-memo on list items, lazy-loaded chunks

## Tech Stack

- [Vue 3](https://vuejs.org/) with Composition API and `<script setup>`
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/) with variables and mixins
- [Vite](https://vitejs.dev/)
- [Vue I18n](https://vue-i18n.intlify.dev/) for internationalization
- [Vitest](https://vitest.dev/) + [@vue/test-utils](https://test-utils.vuejs.org/) for unit tests
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for code quality

## Project Structure

```
src/
├── components/
│   ├── layout/                  # App shell components
│   │   ├── AppSidebar.vue
│   │   └── header/
│   │       ├── AppHeader.vue
│   │       ├── AppHeaderNav.vue
│   │       └── AppHeaderUser.vue
│   ├── domain/                  # Domain-specific components
│   │   ├── DomainDetailSkeleton.vue
│   │   ├── contact/
│   │   │   ├── ContactCard.vue       # Single contact detail (verbose)
│   │   │   └── ContactListCard.vue   # Contact list summary (brief)
│   │   ├── set/
│   │   │   ├── KeysetCard.vue
│   │   │   └── NssetCard.vue
│   │   ├── AuthInfoRow.vue
│   │   ├── DomainAsidePanel.vue
│   │   ├── DomainHeader.vue
│   │   ├── DomainMainPanel.vue
│   │   ├── EventsSection.vue
│   │   └── StateFlagsSection.vue
│   └── ui/                      # Reusable base components
│       ├── BaseButton.vue
│       ├── BaseCard.vue
│       ├── BaseSkeleton.vue
│       └── BaseToggle.vue
├── views/
│   └── DomainView.vue           # Domain page view
├── composables/
│   └── useDomainDetail.ts      # Fetch logic for domain data
├── constants/
│   └── index.ts                # Shared config (DOMAIN_DETAIL_URL)
├── i18n.ts                     # Vue I18n setup (locale: en, fallback: cs)
├── locales/
│   ├── cs.ts                   # Czech translations
│   └── en.ts                   # English translations
├── mocks/
│   └── auth.ts                 # Demo AuthInfo secret (replace with API in production)
├── types/
│   └── domain.ts                # TypeScript interfaces for JSON data
├── utils/
│   └── formatDate.ts            # Date formatting helper
├── scss/
│   ├── _variables.scss          # Colors, spacing, typography tokens
│   ├── _mixins.scss             # Flex helpers, media queries, table styles
│   └── main.scss                # Global styles and reset
├── __tests__/
│   ├── fixtures/
│   │   └── domain.ts            # Shared mock data for tests
│   ├── App.spec.ts
│   ├── AppHeader.spec.ts
│   ├── BaseSkeleton.spec.ts
│   ├── AppHeaderNav.spec.ts
│   ├── AppHeaderUser.spec.ts
│   ├── AppSidebar.spec.ts
│   ├── AuthInfoRow.spec.ts
│   ├── BaseButton.spec.ts
│   ├── BaseCard.spec.ts
│   ├── BaseToggle.spec.ts
│   ├── ContactCard.spec.ts
│   ├── ContactListCard.spec.ts
│   ├── DomainAsidePanel.spec.ts
│   ├── DomainDetailSkeleton.spec.ts
│   ├── DomainHeader.spec.ts
│   ├── DomainMainPanel.spec.ts
│   ├── DomainView.spec.ts
│   ├── EventsSection.spec.ts
│   ├── KeysetCard.spec.ts
│   ├── NssetCard.spec.ts
│   ├── StateFlagsSection.spec.ts
│   └── useDomainDetail.spec.ts
├── App.vue                      # Root component — fetches data, renders shell
└── main.ts
```

## Vue Style Guide

The project follows the [Vue Style Guide](https://vuejs.org/style-guide/) Priority A (Essential) and Priority B (Strongly Recommended) rules:

- Multi-word component names (`AppHeader`, `DomainHeader`...)
- Typed props via TypeScript generics (`defineProps<{...}>()`)
- `:key` on all `v-for` loops
- `v-if` and `v-for` never on the same element
- `<style scoped>` for component isolation
- `Base` prefix for reusable UI components (`BaseCard`, `BaseButton`, `BaseToggle`)
- Props in `defineProps` in camelCase, in template in kebab-case

## Setup

```bash
npm install
```

### Development

```bash
npm run dev
```

### Unit Tests

```bash
npm run test:unit
```

### Unit Tests in UI Mode

```bash
npm run test:ui
```

### Type Check + Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Recommended Browser Setup

- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) for Chrome
- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/) for Firefox
