module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: ``, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Strapi",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "strapi",
        // Url to query from
        url: "http://localhost:1337/graphql",
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer add93461a8ed690991bfcf457096e1781d136466195c813e872f5de10b5e79a375fe0f63c2c3e064c5964586411f179f69f71f36ad1c4ef03fc26edce2b22e1b660500aec78785a1e54d8717184cfa1df29b8c969a2789dd2003225d83a50c460f039f6a33c91176c0a83c0aa47495dc4979b87de97e5a9d06cac5b7e3bb5a17`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
