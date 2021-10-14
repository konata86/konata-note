import React from "react"

import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "../Share/Footer"

import "../../styles/vendors/bootstrap-reboot.css"
import "../../styles/main.css"
import styled from "styled-components"

const Wrapper = styled.div`

  #blog-container {
    background-color: var(--gray-thin-1);
    padding: 100px 0 50px 0;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 780px) {
    #blog-container {
      flex-direction: row;
      padding: 100px 10px 50px 10px;
    }

    main {
        flex-basis: 70%;
        max-width: 70%;
    }
    main.no-sidebar {
      flex-basis: 100%;
      max-width: 100%;
    }

  }
`

const Layout = ({ children, sidebar = true }) => {

    if (sidebar) {
        return (
            <Wrapper>
                <Header />
                <div id="blog-container">
                    <main>{children}</main>
                    <Sidebar />

                </div>
                <Footer />
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <Header />
                <div id="blog-container">
                    <main className="no-sidebar">{children}</main>
                </div>
                <Footer />
            </Wrapper>
        )
    }

}



export default Layout
