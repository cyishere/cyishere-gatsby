/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'CY Is Here',
    description: 'I\'m CY, a full-stack developer and a video maker.'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        resolve: `gatsby-remark-prismjs`,
        options: {
          classPrefix: 'language-',
          inlineCodeMarker: null,
          aliases: {
            sh: 'bash'
          },
          showLineNumbers: false,
          noInlineHighlight: false,
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`
      }
    }
  ]
}
