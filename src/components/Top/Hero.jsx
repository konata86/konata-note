import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 15px;

  @media (min-width: 960px) {
    margin: 0 35px;
  }

  .text {
    display: inline-block;
    font-size: 1.8em;
    color: var(--white);
    font-weight: bold;
    background-color: var(--base-1);
    opacity: 0.6;
    padding: 7px 7px;
    margin: 10px 10px;
  }
`

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <span className="text">自分が学んだ知識をアウトプットする。</span>
      </div>
      <div>
        <span className="text">そんなブログです。</span>
      </div>
    </Wrapper>
  )
}



export default Hero
