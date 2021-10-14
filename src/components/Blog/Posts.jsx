import React from "react"
import styled from "styled-components"

import Card from "./Card"

const Wrapper = styled.section`
  .post-title {
    font-size: 1em;
    background-color: var(--white);
    padding: 20px;
    border-top: solid 3px var(--base-4);
    margin: 15px 20px 0 20px;
  }

  .cards-wrapper {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
`

const Posts = ({ posts, title }) => {
  let titleFlag = Boolean(title)

  return (
    <Wrapper>
      {titleFlag && (
        <div className="post-title">
          <h1>{title}の記事一覧</h1>
        </div>
      )}

      <div className="cards-wrapper">
        {posts.map(post => {
          return <Card key={post.node.id} {...post.node} />
        })}
      </div>
    </Wrapper>
  )
}


export default Posts
