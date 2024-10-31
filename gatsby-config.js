module.exports = {
  siteMetadata: {
    title: `Miro Koczka`,
    siteUrl: `https://www.mirokoczka.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-104411252-1`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Miro Koczka",
        short_name: "Koczka",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#228822",
        display: "standalone",
        icons: [
          {
            src: `/me.jpeg`,
            sizes: `192x192`,
            type: `image/jpeg`,
          },
          {
            src: `/me.jpeg`,
            sizes: `512x512`,
            type: `image/jpeg`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
  ],
}
