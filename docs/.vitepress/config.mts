import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Baskito",
  description: "Laravel starter kit integrated with Stisla, Inertia, and Vue 3",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: "/guide/", activeMatch: "^/guide/" },
      {
        text: "Components",
        link: "/components/",
        activeMatch: "^/components/",
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          collapsed: true,
          items: [
            { text: "What is Baskito?", link: "/guide/" },
            { text: "Getting Started", link: "/guide/getting-started.html" },
            { text: "Component", link: "/guide/component.html" },
          ],
        },
      ],
      "/components/": [
        {
          text: "Components",
          collapsed: true,
          items: [
            { text: "Alert", link: "/components/" },
            { text: "Button", link: "/components/button.html" },
            { text: "Form Input", link: "/components/form-input.html" },
            { text: "Form Select", link: "/components/form-select.html" },
            { text: "Modal", link: "/components/modal.html" },
            { text: "Pagination", link: "/components/pagination.html" },
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
