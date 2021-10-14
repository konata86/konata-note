import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const Wrapper = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    
    .background-wrapper {
      height: 100vh;
  }
`

const GbiBridged = () => {

    const { placeholderImage } = useStaticQuery(
        graphql`
      query {
        placeholderImage: file(relativePath: { eq: "top-bg.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 96)
          }
        }
      }
    `
    )

    const image = getImage(placeholderImage)

    const bgImage = convertToBgImage(image)

    return (
        <Wrapper>
            <BackgroundImage
                Tag="div"
                {...bgImage}
                preserveStackingContext
                className="background-wrapper"
                style={{
                    backgroundSize: '96px',
                    backgroundRepeat: 'repeat',
                }}
            />
        </Wrapper>
    )
}



export default GbiBridged
