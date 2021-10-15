module.exports = {
    siteMetadata: {
        title: "此方ノート",
        description: `自分が学んだ知識をアウトプットする。そんなブログです。`,
        author: `@konata86`,
        siteUrl: `https://konata-note.netlify.app/`,
        lang: `ja`,
        locale: `ja_JP`,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: ["UA-209349710-1"],
                pluginConfig: {
                    head: true,
                },
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: `此方ノート`,
                short_name: `此方ノート`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#4a9c9c`,
                display: `standalone`,
                icon: "static/favicon.png",
                icon_options: {
                    purpose: `any maskable`,
                  },
            },
        },
        'gatsby-plugin-offline',

        {
            resolve: 'gatsby-plugin-netlify',
            options: {
                headers: {
                    '/*.html': [
                        'cache-control: public, max-age=0, must-revalidate'
                    ],
                    '/page-data/app-data.json': [
                        'cache-control: public, max-age=0, must-revalidate'
                    ],
                    '/page-data/*': [
                        'cache-control: public, max-age=0, must-revalidate'
                    ],
                    '/static/*': [
                        'cache-control: public, max-age=31536000, immutable'
                    ],
                    '/icons/*': [
                        'cache-control: public, max-age=31536000, immutable'
                    ],
                    '/media/*': [
                        'cache-control: public, max-age=31536000, immutable'
                    ],
                    '/sw.js': [
                        'cache-control: public, max-age=0, must-revalidate'
                    ],
                    '/**/*.js': [
                        'cache-control: public, max-age=31536000, immutable'
                    ],
                    '/**/*.css': [
                        'cache-control: public, max-age=31536000, immutable'
                    ],
                }
            }
        },

        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: ['.mdx', '.md'],

                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            icon: false,
                            elements: [`h1`, `h2`]
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                    }
                ],
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
            __key: "assets",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts/`,
            },
            __key: "posts",
        },
    ],
};
