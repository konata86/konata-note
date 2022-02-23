import React from "react"

import Seo from "../components/Share/Seo"
import Layout from "../components/Blog/Layout"
import ContentArticle from "../components/Blog/ContentArticle"
import PageLink from "../components/Blog/Complete/PageLink"

import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { FaClock } from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled.div`

  .mdx-wrapper {
    margin: 15px 0 15px 0;
    padding: 25px;
    background-color: var(--white);
    
  }

  @media (min-width: 960px) {
    .mdx-wrapper {
      margin: 15px;
    }
  }

  .icon {
    margin-bottom: 2px;
  }

  .blog-title {
    color: var(--gray-thick-1);
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .blog-category a {
    display: inline-block;
    color: var(--base-4);
    font-size: 1em;
    margin-bottom: 20px;
  }
  .blog-img {
    margin: 1em 0em 5em 0em;
  }
  .blog-date {
    color: var(--gray);
    font-size: 1em;
  }
`

const BlogTemplate = ({ data, pageContext }) => {

    const {
        mdx: {
            frontmatter: { category, date, slug, title, banner },
            body,
            tableOfContents,
            excerpt,
        },
    } = data

    const { previous, next } = pageContext

    return (
        <>
            <Seo
                title={title}
                description={excerpt}
                pageimg={banner.childImageSharp.original.src}
                pageimgw={banner.childImageSharp.original.width}
                pageimgh={banner.childImageSharp.original.height}
            />
            <Layout>
                <Wrapper>
                    <div className="mdx-wrapper">
                        <div className="blog-article">
                            <div className="blog-category">
                                <Link to={`/${category}/`}>#{category}</Link>
                            </div>
                            <div className="blog-title">{title}</div>
                            <div className="blog-date">
                                <FaClock className="icon" /> {date}
                            </div>

                            <GatsbyImage
                                image={getImage(banner)}
                                alt={slug}
                                className="blog-img"
                            />

                            <ContentArticle post={body} toc={tableOfContents} />

                            <PageLink previous={previous} next={next} />
                        </div>
                    </div>
                </Wrapper>
            </Layout>
        </>
    )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMMM, Do YYYY")
        slug
        title
        banner {
          childImageSharp {
            gatsbyImageData
            original {
              height
              src
              width
            }
          }
        }
      }
      body
      tableOfContents(maxDepth: 2)
      excerpt
    }
  }
`



export default BlogTemplate
