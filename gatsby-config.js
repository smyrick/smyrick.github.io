module.exports = {
  siteMetadata: {
    title: `Shane Myrick`,
    subtitle: `Software Developer and Fitness Coach`,
    description: `Shane Myrick's personal site and blogs`,
    author: `@shanemyrick`,
    socialMedia: [
      {
        name: 'GitHub',
        prefix: 'fab',
        icon: 'github',
        iconClassName: 'github',
        url: 'https://github.com/smyrick',
      },
      {
        name: 'Twitter',
        prefix: 'fab',
        icon: 'twitter',
        iconClassName: 'twitter',
        url: 'https://twitter.com/shanemyrick',
      },
      {
        name: 'LinkedIn',
        prefix: 'fab',
        icon: 'linkedin',
        iconClassName: 'linkedin',
        url: 'https://www.linkedin.com/in/shanemyrick/',
      },
      {
        name: 'e-mail',
        prefix: 'fas',
        icon: 'envelope',
        iconClassName: 'mail',
        url: 'mailto:mail@shanemyrick.com',
      }
    ]
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`, {
          resolve: `gatsby-remark-prismjs`,
          options: {
            aliases: {
              js: "javascript"
            },
            showLineNumbers: false
          }
        }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shanemyrick.com`,
        short_name: `shanemyrick.com`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline'
  ],
}
