/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Destiny'Note`,
    author: `destiny`
  },
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/`,// 文件路径
        name: 'src', // 名称，可以用来过滤
        ignore: [] // 可选的，忽略的文件
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdown-pages`,// 文件路径
        name: 'markdown-pages' // 名称，可以用来过滤
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`, // typography 配置文件路径
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      // options: {
      //   "excerpt_separator": `<!-- more -->` // 设置摘要分隔符
      // }
    },
    // {
    //   resolve: 'gatsby-transformer-remark-frontmatter',
    //   // default: { blacklist: [] }
    //   options: {
    //     // frontmatter fields to exclude, including all others
    //     blacklist: ['templateKey']
    //     // frontmatter fields to include, excluding all others
    //     // whitelist: ['markdownField']
    //   }
    // },
    `gatsby-plugin-netlify-cms`,
  ],
}
