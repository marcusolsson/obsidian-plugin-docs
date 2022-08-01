const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Obsidian Plugin Developer Docs",
    tagline: "Obsidian Plugin Developer Docs",
    url: "https://marcusolsson.github.io",
    baseUrl: "/obsidian-plugin-docs/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    organizationName: "marcusolsson", // Usually your GitHub org/user name.
    projectName: "obsidian-plugin-docs", // Usually your repo name.
    trailingSlash: false,
    scripts: [
      {
        src: "https://plausible.io/js/plausible.js",
        defer: true,
        "data-domain": "marcus.se.net",
      },
    ],
    plugins: [
      [
        "@docusaurus/plugin-client-redirects",
        {
          redirects: [
            { to: "/reference/typescript/classes/Plugin_2", from: ["/reference/typescript/classes/Plugin"] },
            { to: "/getting-started/plugin-anatomy", from: ["/concepts/plugin-anatomy"], },
            { to: "/getting-started/react", from: ["/guides/react", "/advanced-guides/react"] },
            { to: "/getting-started/svelte", from: ["/guides/svelte", "/advanced-guides/svelte"] },
            { to: "/editor/extensions", from: ["/concepts/codemirror"], },
            { to: "/user-interface/commands", from: ["/guides/commands"] },
            { to: "/user-interface/context-menus", from: ["/guides/context-menus"] },
            { to: "/user-interface/html-elements", from: ["/guides/html-elements"] },
            { to: "/user-interface/icons", from: ["/guides/icons"] },
            { to: "/user-interface/modals", from: ["/guides/modals"] },
            { to: "/user-interface/ribbon-actions", from: ["/guides/ribbon-actions"] },
            { to: "/user-interface/settings", from: ["/guides/settings"] },
            { to: "/user-interface/status-bar", from: ["/guides/status-bar"] },
            { to: "/reference/manifest", from: ["/manifest-reference"] },
          ],
          createRedirects(existingPath) {
            if (existingPath.includes('/reference/typescript')) {
              return [
                existingPath.replace('/reference/typescript', '/api'),
              ];
            }
            if (existingPath.includes('/editor/extensions')) {
              return [
                existingPath.replace('/editor/extensions', '/concepts/editor-extensions'),
              ];
            }
            return undefined; // Return a falsy value: no redirect created
          },
        },
      ],
    ],
    presets: [
      [
        "@docusaurus/preset-classic",
        {
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl:
              "https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/",
            routeBasePath: "/",
            remarkPlugins: [
              require("mdx-mermaid"),
              [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
            ],
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        },
      ],
    ],

    themeConfig: {
      defaultMode: "dark",
      navbar: {
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        title: "Obsidian Plugin Developer Docs",
        items: [
          {
            href: "https://buymeacoffee.com/marcusolsson",
            label: "Buy me a coffee",
            position: "right",
          },
          {
            href: "https://obsidian.md/community",
            label: "Community",
            position: "right",
          },
          {
            href: "https://github.com/marcusolsson/obsidian-plugin-docs",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://marcus.se.net",
            label: "Who am I?",
            position: "right",
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "3V8MQLOMH5",

        // Public API key: it is safe to commit it
        apiKey: "6cae981f4dfca4c6f308650dfd1b1dce",

        indexName: "obsidian-plugin",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Create your first plugin",
                to: "/getting-started/create-your-first-plugin",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Community",
                href: "https://obsidian.md/community",
              },
              {
                label: "Create Your Own Obsidian Plugin",
                href: "https://www.youtube.com/watch?v=9lA-jaMNS0k",
              },
              {
                label: "Obsidian API",
                href: "https://github.com/obsidianmd/obsidian-api",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/marcusolsson/obsidian-plugin-docs",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
  }
);
