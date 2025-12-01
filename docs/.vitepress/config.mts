import { defineConfig } from 'vitepress'
import { SparqlPlugin } from 'vitepress-plugin-sparql'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My VitePress + SPARQL Project",
  description: "Unleash the power of VitePress + SPARQL",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'SPARQL', link: '/sparql-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'SPARQL', link: '/sparql-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    plugins: [SparqlPlugin()]
  }
})
