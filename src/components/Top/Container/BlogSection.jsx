import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"


const Wrapper = styled.div`
  background-color: var(--base-thin-4);
  padding: 80px 40px;
  color: var(--gray-thick-1);

  .main-title {
    font-weight: bold;
    display: block;
    font-size: 20px;
    border-bottom: solid 2px var(--gray-thick-1);
    border-image: linear-gradient(
      to right,
      var(--gray-thick-1) 0%,
      var(--gray-thin-2) 100%
    );
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-image-slice: 1;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .content {
    border-top: 1px solid var(--white);
    list-style: none;
    padding: 0;
  }

  .item {
    border-bottom: 1px solid var(--white);

    a {
      text-decoration: none;
      display: block;
      padding: 10px 20px;
    }

    :hover {
      background: var(--white);
      transition: 0.5s ease;
      cursor: pointer;
    }
  }

  .date {
    display: inline-block;
    margin-right: 10px;
    color: var(--gray);
    font-size: 0.9em;
  }

  .category {
    background-color: var(--base-4);
    font-size: 11px;
    font-weight: 550;
    padding: 5px;
    color: var(--white);
    border-radius: 5px;
  }

  .title {
    display: block;
    margin-top: 10px;
    color: var(--gray-thick-1);
    font-size: 1em;
  }

  .other {
    outline: none !important;
    margin-top: 25px;
    padding: 10px 20px;
    border: solid 2px var(--base-4) !important;
    color: var(--base-4);
    background-color: var(--white);
    position: relative;
    z-index: 1;
    transition: 0.3s ease;

    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--base-4);
      z-index: -1;
      transform-origin: 0;
      transform: scaleX(0);
      transition: 0.3s ease;
    }

    :hover {
      color: var(--white);
    }
    :hover::before {
      transform-origin: 0% 50%;
      transform: scaleX(1);
    }
  }

  .arrow {
    margin-left: 30px;
  }
`

const BlogSection = () => {

    const data = useStaticQuery(graphql`
    {
      allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              category
              date(formatString: "MM月 DD日, YYYY年")
              slug
              title
            }
          }
        }
      }
    }
  `)

    const posts = data.allMdx.edges

    return (
        <Wrapper id="link-blog">
            <div className="main-title">ブログ（最新記事）</div>

            <div className="desc">
                電気電子・IT技術やビジネスに関する情報を発信しています。
            </div>

            <ul className="content">
                {posts.map(({ node }) => {
                    return (
                        <li key={node.id} className="item">
                            <Link to={`/posts/${node.frontmatter.slug}`}>
                                <span className="date">{node.frontmatter.date}</span>
                                <span className="category">{node.frontmatter.category}</span>
                                <span className="title">{node.frontmatter.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            <Link to="/posts/">
                <button className="other">
                    他の記事をみる<span className="arrow">&gt;</span>
                </button>
            </Link>
        </Wrapper>
    )
}


export default BlogSection
