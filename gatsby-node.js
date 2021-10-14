const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
      allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
          previous {
            frontmatter {
              slug
            }
          }
          next {
            frontmatter {
              slug
            }
          }
        }
      }
      categories: allMdx {
        totalCount
        distinct(field: frontmatter___category)
      }
    }
  `)

    if (result.errors) {
        throw errors
    }


    result.data.allMdx.edges.forEach(({ node, next, previous }) => {

        const slug = node.frontmatter.slug

        createPage({
            path: `/posts/${slug}`,
            component: path.resolve('src/templates/blog-template.jsx'),
            context: {
                slug,
                previous,
                next,
            }
        })
    })

    result.data.categories.distinct.forEach(category => {
        createPage({
            path: `/${category}`,
            component: path.resolve(`src/templates/category-template.jsx`),
            context: {
                category,
            }
        })
    })

}

