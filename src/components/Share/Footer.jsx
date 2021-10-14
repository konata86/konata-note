import React from "react"
import styled from "styled-components"

const Wrapper = styled.footer`
  height: 100px;
  width: 100%;
  background-color: var(--base-5);
  position: relative;

  .copyright {
    color: var(--white);
    padding-top: 40px;
    text-align: center;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-wrapper">
        <div className="copyright">
          Copyright &copy; SORA KONATA with Gatsby.
        </div>
      </div>
    </Wrapper>
  )
}




export default Footer
