module.exports = {
  siteMetadata: {
    title: `Miro Koczka`,
    siteUrl: `https://www.mirokoczka.com`
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
            src: `/me.jpg`,
            sizes: `192x192`,
            type: `image/jpg`,
          },
          {
            src: `/me.jpg`,
            sizes: `512x512`,
            type: `image/jpg`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#228822`,
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        serialize: ({site, allSitePage}) =>
          allSitePage.edges.filter(edge => {
            console.log(edge);
            return !(edge.node.path === '/offline-plugin-app-shell-fallback/' || edge.node.path === '/404/' || edge.node.path === '/404.html');
          }).map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      }
    }
  ]
};
