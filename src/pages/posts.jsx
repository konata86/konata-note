import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Seo from "../components/Share/Seo"
import Layout from "../components/Blog/Layout"
import Posts from "../components/Blog/Posts"

const PostsPage = () => {
    const data = useStaticQuery(graphql`
    {
      allMdx(limit: 10, sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              category
              date(formatString: "MMMM, Do YYYY")
              slug
              title
              banner {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            body
          }
        }
      }
    }
  `)

    const posts = data.allMdx.edges

    return (
        <>
            <Seo title="Posts" />
            <Layout>
                <Posts posts={posts} />
            </Layout>
        </>
    )
}

export default PostsPage
