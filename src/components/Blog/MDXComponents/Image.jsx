import React from "react"

import styled from "styled-components"


const Wrapper = styled.img`
    height: auto!important;
`


const myImg = props => {
    return (
        <Wrapper {...props}>
            {props.children}
        </Wrapper>
    )
}



export { myImg }
