import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: var(--white);
  padding: 40px 0;
  margin-top: 40px;

  @media (min-width: 960px) {
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
    list-style: none;
    margin: 25px 35px;
    padding: 0;
    line-height: 26px;
  }

  li {
    padding: 7px 12px;
    transition: 0.5s;
  }

  li a {
    display: block;
    text-decoration: none;
    color: var(--gray-thick-1);
  }

   li:hover {
    background-color: var(--gray-thin-1);
    transition: 0.5s;
    cursor: pointer;
  }

  span.category-count {
    display: inline-block;
    margin-left: 10px;
    height: 25px;
    width: 25px;
    background-color: var(--gray-thin-2);
    border-radius: 50%;
    font-size: 11px;
    font-weight: normal;
    text-align: center;
    transition: 0.5s;
  }
`



const setupCategories = edges => {
    const allCategories = {}

    edges.forEach(edge => {
        const category = edge.node.frontmatter.category

        if (allCategories[category]) {
            allCategories[category] = allCategories[category] + 1
        } else {
            allCategories[category] = 1
        }
    })

    const newCategories = Object.entries(allCategories).sort((a, b) => {
        const [firstCategory] = a
        const [secondCategory] = b
        return firstCategory.localeCompare(secondCategory)
    })

    return newCategories
}

const Category = () => {
    const data = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              category
            }
          }
        }
      }
    }
  `)

    const categoryList = setupCategories(data.allMdx.edges)

    return (
        <Wrapper>
            <div className="title-wrapper">
                <div className="title">Category</div>
                <div className="line"></div>
            </div>
            <ul>
                {categoryList.map(item => {
                    const [category, idx] = item
                    return (
                        <li key={category}>
                            <Link to={`/${category}/`}>
                                <span className="category-name">{category}</span>
                                <span className="category-count">{idx}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Wrapper>
    )
}


export default Category
