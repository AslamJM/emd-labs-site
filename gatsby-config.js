/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    url: "https://emd-labs.com",
    title: "EMD Labs",
    description:
      "EMD Labs is a service-driven mechanical, electronics software and business development company. We create comprehensive research and development through developing technology and innovation that can resolve any software, mechanical, electronics and business-related challenge from Batticaloa, Sri Lanka, to the world",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              enableCustomId: true,
            },
          },
        ],
      },
    },
  ],
}
