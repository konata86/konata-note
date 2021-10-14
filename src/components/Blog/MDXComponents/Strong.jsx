import React from "react"
import styled from "styled-components"

const Wrapper = styled.strong`
    font-weight: bold;

    span.marker {
        background:linear-gradient(transparent 60%, #fff678 60%);
    }

`

const myStrong = props => {

    if (props.display==='marker') {
        return (
            <Wrapper {...props}>
                <span className='marker'>
                    {props.children}
                </span>
            </Wrapper>
        )
    } else {

        return (
            <Wrapper {...props}>
                {props.children}
            </Wrapper>
        )
    }
}



export { myStrong }