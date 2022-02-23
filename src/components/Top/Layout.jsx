import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
 import HeroImg from "./HeroImg"
import Footer from "../Share/Footer"

import "../../styles/vendors/bootstrap-reboot.css"
import "../../styles/main.css"

import styled from "styled-components"

const Wrapper = styled.div`
   @media (min-width: 960px) {
        main {
            margin: 0 35px;
        }
   }
   @media (min-width: 1260px) {
       main {
           margin: 0 65px;
       }
   }
 `

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)

    return (
        <Wrapper>
            <HeroImg />
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <main>{children}</main>
            <Footer />
        </Wrapper>
    )
}



export default Layout
