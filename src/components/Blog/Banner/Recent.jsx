import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image/"
import styled from "styled-components"


const Wrapper = styled.div`
  background-color: var(--white);
  padding: 40px 0;
  margin-top: 40px;

  @media (min-width: 780px) {
      margin: 15px 15px 0 0;
  }

  .title-wrapper {
    position: relative;
    text-align: center;
  }

  .title {
    display: inline-block;
    padding: 0 35px;
    font-size: 1.3em;
    position: relative;
    z-index: 10;
    background-color: var(--white);
  }

  .line {
    position: absolute;
    top: 15px;
    left: 10%;
    display: inline-block;
    width: 80%;
    height: 3px;
    z-index: 1;
    background-color: var(--base-4);
  }

  ul {
    padding-left: 0;
  }

  li {
    flex-direction: row;
    list-style: none;
    margin: 20px;
    background-color: var(--white);
    cursor: pointer;

    a {
      display: flex;
      align-items: center;
      color: var(--gray-thick-1);
      font-weight: bold;
      text-decoration: none;
      transition: 0.5s ease;
    }

    .banner {
      flex-basis: 40%;
      border-radius: 7px;
    }
    .post-title {
      flex-basis: 60%;
      padding: 5px 15px;
    }
  }
  li:hover {
    a {
      color: var(--gray);
      transition: 0.5s ease;
    }

    .banner {
      box-shadow: 0px 0px 4px var(--gray-thin-2);
      transition: all 0.5s ease;
    }
  }
`


const Recent = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              banner {
                childImageSharp {
                  gatsbyImageData
                }
              }
              title
              slug
            }
            id
          }
        }
      }
    }
  `)

  const posts = data.allMdx.edges

  return (
    <Wrapper>
      <div className="title-wrapper">
        <div className="title">Recent</div>
        <div className="line"></div>
      </div>

      <ul>
        {posts.map(post => {
          return (
            <li key={post.node.id}>
              <Link to={`/posts/${post.node.frontmatter.slug}`}>
                <GatsbyImage
                  image={getImage(post.node.frontmatter.banner)}
                  alt=""
                  className="banner"
                />
                <span className="post-title">
                  {post.node.frontmatter.title}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default Recent
