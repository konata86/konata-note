import React from "react"

import Seo from "../components/Share/Seo"
import Layout from "../components/Blog/Layout"
import Posts from "../components/Blog/Posts"

import { graphql } from "gatsby"


const CategoryTemplate = ({ data }) => {
  const posts = data.allMdx.edges
  const categoryName = posts[0].node.frontmatter.category

  return (
    <>
      <Seo title={categoryName} />
      <Layout>
        <Posts posts={posts} title={categoryName} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query GetCategoryPost($category: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          frontmatter {
            banner {
              childImageSharp {
                gatsbyImageData
              }
            }
            category
            date(formatString: "MMMM, Do YYYY")
            slug
            title
          }
          id
        }
      }
    }
  }
`

export default CategoryTemplate
