module.exports = {
  title: "Frictionless Data",
  description: "Bringing simplicity and gracefulness to the data experience",
  markdown: {
    linkify: true,
    typographer: true,
    breaks: true,
    html: true,
    toc: {
      includeLevel: [2, 3]
    },
    extendMarkdown: md => {
      md.use(require("markdown-it-footnote"));
    }
  },
  themeConfig: {
    repo: "https://github.com/frictionlessdata/website",
    repoLabel: "Contribute!",
    // defaults to false, set to true to enable
    editLinks: true,
    logo: "/frictionless-data-logo.svg",
    sidebar: "auto",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Specs", link: "/specs/" }
    ]
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        'ga': 'UA-33874954-38'
      }
    ],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: 'blog',
            // Path of the `entry page` (or `list page`)
            path: '/blog/',
            itemPermalink: '/blog/:year/:month/:day/:slug'
          },
        ],
      },
    ]
  ],
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
};
