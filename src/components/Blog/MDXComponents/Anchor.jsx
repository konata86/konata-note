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

    if (props.className === "gatsby-resp-image-link") {
        return (
            <Wrapper target="_blank" rel="noopener noreferrer" {...props}>
                {props.children}
            </Wrapper>
        )
    }
    else {
        return (
            <Wrapper target="_blank" rel="noopener noreferrer" {...props}>
                {props.children}
                <BiLinkExternal />
            </Wrapper>
        )
    }
}



export { myA }
