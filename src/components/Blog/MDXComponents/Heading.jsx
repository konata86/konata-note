import React from "react"
import styled from "styled-components"

const HeadingOne = styled.h1`
    background-color: var(--base-4);
    color: var(--white);
    padding: 10px 20px;
    margin-bottom: 2em;
    font-size: 26px;
    border-radius: 3px;
`

const HeadingTwo = styled.h2`
    border-left: solid 5px var(--base-4);
    font-weight: bold;
    color: var(--gray-thick-1);
    padding: 5px 15px;
    margin-bottom: 2em;
`

const HeadingThree = styled.h3`
    font-weight: bold;
    color: var(--gray-thick-1);
    margin-bottom: 2em;
`

const HeadingFour = styled.h4`
    font-weight: bold;
    color: var(--gray-thick-1);
    margin-bottom: 2em;
`

const HeadingFive = styled.h5`
    font-weight: bold;
    color: var(--gray-thick-1);
    margin-bottom: 2em;
`

const HeadingSix = styled.h6`
    font-weight: bold;
    color: var(--gray-thick-1);
    margin-bottom: 2em;
`


const myH1 = ( props  => {
    return (
        <HeadingOne {...props}>
            {props.children}
        </HeadingOne>
    )
})

const myH2 = ( props => {

    return (
        <HeadingTwo {...props}>
            {props.children}
        </HeadingTwo>
  )
})

const myH3 = ( props => {
    return (
        <HeadingThree {...props}>
            {props.children}
        </HeadingThree>
  )
})

const myH4 = ( props => {
    return (
        <HeadingFour {...props}>
            {props.children}
        </HeadingFour>
  )
})

const myH5 = ( props => {
    return (
        <HeadingFive {...props}>
            {props.children}
        </HeadingFive>
  )
})


const myH6 = ( props => {
    return (
        <HeadingSix {...props}>
            {props.children}
        </HeadingSix>
  )
})



export { myH1, myH2, myH3, myH4, myH5, myH6 }
