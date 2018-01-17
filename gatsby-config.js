module.exports = {
  siteMetadata: {
    title: 'CodeBee',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-62461723-3",
        // Setting this parameter is optional
        anonymize: true,
      },
    },
  ],
};
