import React from 'react'
import styled from "styled-components"

const Paragraph = styled.p`
    color: var(--gray-thick-1);
    margin-bottom: 5em;
    line-height: 1.7em;
`

const myP = ( props  => {
    return (
        <Paragraph {...props}>
            {props.children}
        </Paragraph>
    )
})



export { myP }
