import React from "react"

import styled from "styled-components"
import { BiLinkExternal } from "react-icons/bi"

const Wrapper = styled.a`
  color: var(--base-4);
  text-decoration: underline;
  cursor: pointer;

  :hover {
    color: var(--base-4);
    text-decoration: none;
  }

`

const myA = props => {
  return (
    <Wrapper {...props}>
      {props.children}
      <BiLinkExternal />
    </Wrapper>
  )
}



export { myA }
