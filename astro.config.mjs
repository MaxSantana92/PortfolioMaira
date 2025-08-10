// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://agronomist-portfolio.com',
  base: '/PortfolioMaira',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true }, // <- ahora /es y /en
  },
})
