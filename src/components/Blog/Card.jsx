import React from "react"

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { FaClock } from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled.article`
  background-color: var(--white);
  box-shadow: 0px 0px 3px var(--gray);
  padding: 1.7em;
  position: relative;
  flex-basis: 100%;
  min-height: 300px;
  border-radius: 3px;
  margin-bottom: 1.5em;

  > a {
    text-decoration: none;

    :after {
      content: "";
      background-color: var(--gray-thick-1);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }

    :hover:after {
      opacity: 0.15;
      transition: 0.3s ease;
    }
  }

  .img {
    min-height: 160px;
  }

  .date {
    display: inline-block;
    color: var(--gray);
    font-size: 13px;
  }

  .category {
    display: inline-block;
    color: var(--white);
    font-size: 11px;
    background-color: var(--base-4);
    border-radius: 3px;
    margin-left: 5px;
    padding: 2px 7px;
  }

  .title {
    color: var(--gray-thick-1);
    font-size: 1.2em;
    margin-top: 10px;
  }

  @media (min-width: 480px) {
    flex-basis: 48%;
    margin-bottom: 1.5em;
  }
`

function Card({ frontmatter }) {
  const { category, date, slug, title, banner } = frontmatter

  return (
    <Wrapper>
      <Link to={`/posts/${slug}`}>
        <GatsbyImage
          image={banner.childImageSharp.gatsbyImageData}
          alt={title}
          className="img"
        />

        <div className="article-info">
          <div className="date">
            <FaClock />
            &nbsp;{date}
          </div>
          <div className="category">{category}</div>

          <h2 className="title">{title}</h2>
        </div>
      </Link>
    </Wrapper>
  )
}



export default Card
