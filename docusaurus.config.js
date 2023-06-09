// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Prompt Studio",
  tagline: "Find the right words to interact with your AI systems",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.prompt.studio",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          editUrl: "https://github.com/pufflyai/prompt-studio-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Prompt Studio",
        logo: {
          alt: "PromptStudio Logo",
          src: "img/logo.svg",
          href: "https://prompt.studio",
        },
        items: [
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://discord.gg/3RxwUEk8fW",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/pufflyai/prompt-studio-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Overview",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/pufflyai/prompt-studio-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pufflig AB`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-GEPCR3WDKS",
        anonymizeIP: false,
      },
    ],
  ],
};

module.exports = config;
