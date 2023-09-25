import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Baskito",
  description: "Laravel starter kit integrated with Stisla, Inertia, and Vue 3",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Guide", link: "/guide/" }],

    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          collapsed: true,
          items: [
            { text: "What is Baskito?", link: "/guide/" },
            { text: "Getting Started", link: "/guide/getting-started.html" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/backend-timedoor/baskito" },
    ],

    logo: "/baskito-logo.png",

    footer: {
      message: "Made with ❤️ by Timedoor's Backend Developer Team",
    },
  },
});
