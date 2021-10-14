import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { FaHome, FaEnvelope } from "react-icons/fa"
import styled from "styled-components"
import Sns from "../Share/Sns"


const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--white);
  z-index: 100;
  width: 100%;
  box-shadow: 0 0 3px var(--gray);

  .logo {
    position: fixed;
    display: inline-block;
    padding: 10px 20px;
    visibility: visible;
  }

`

const PcMenu = styled.div`

  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  visibility: hidden;

  @media (min-width: 780px) {
    visibility: visible;
  }

  nav {
    margin-left: auto;
  }

  nav ul {
    display: flex;
    list-style: none;
    height: 50px;
  }

  nav ul li {
    display: list-item;
    padding: 20px 25px 5px 25px;
  }

  nav ul li a {
    display: block;
    color: var(--gray-thick-2);
  }
  
`

const MobileMenu = styled.div`


  @media (min-width: 780px) {
    display: none;
    visibility: hidden;
    opacity: 0;
  }

  .btn {
    position: fixed;
    right: 15px;
    top: 20px;
    background-color: transparent;
    border: none;
    outline: none !important;
    z-index: 30;

    > span {
      display: block;
      background-color: var(--base-4);
      width: 40px;
      height: 3px;
      margin-bottom: 9px;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }
  }

  .menu-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s;
    z-index: 20;
  }

  .nav-link {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    visibility: hidden;
    z-index: 20;
    transition: all 0.5s ease-in-out;

    ul.items {
      display: flex;
      flex-direction: column;
      list-style: none;
      text-align: center;
      margin-top: 140px;
      padding-left: 0;
      border-top: solid 1px var(--base-4);
      opacity: 0;
      transition: 0.1s;
    }

    ul.items li a {
        color: var(--base-4);
        text-decoration: none;
        font-size: 18px;
        padding: 20px 0;
        margin: 0;
        border-bottom: solid 1px var(--base-4);
        opacity: 0;
        transition: 0.1s;
    }
    

    div.sns {
      opacity: 0;
      transition: 0.1s;
    }
  }

  .menu-open.mobile-menu {
    .btn {
      > span {
        &:nth-child(1) {
          transform: translateY(11px) rotate(135deg);
        }
        &:nth-child(2) {
          transform: translateX(-18px) scaleX(0);
        }
        &:nth-child(3) {
          transform: translateY(-11px) rotate(-135deg);
        }

        transition: 0.5s ease-in-out;
      }
    }

    .menu-cover {
      opacity: 1;
      visibility: visible;
    }

    .nav-link {
      visibility: visible;
      height: 480px;
      width: 100%;
      background-color: var(--white);

      ul.items {
        opacity: 1;
        transition: 1s;
      }

      ul.items li a {
          display: block;
          font-size: 25px;
          font-size: 1.2em;
          opacity: 1;
          transition: 1s;
  
          :hover {
            background-color: var(--base-4);
            color: var(--white);
            transition: 0.5s;
            cursor: pointer;
          }
        }

      div.sns {
        opacity: 1;
        transition: 1.5s;
      }
    }
  }
`


const Header = () => {
    const width_threshold = 780

    const [show, setShow] = useState(false)
    const [width, setWidth] = useState(null)

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth)

        window.addEventListener(`resize`, updateWidth, {
            capture: false,
            passive: true,
        })

        if (width > width_threshold) {
            setShow(false)
        }

        return () => window.removeEventListener(`resize`, updateWidth)
    }, [width])

    return (
        <Wrapper className="header">
            <Link to="/" className="logo">
                <StaticImage src="../../assets/logo-sm.png" alt="" width={115} />
            </Link>
            <PcMenu>
                <nav>
                    <ul>
                        <li>
                            <Link to="/posts/">
                                <FaHome /> HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact/">
                                <FaEnvelope /> CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
            </PcMenu>

            <MobileMenu>
                <div className={show ? "mobile-menu menu-open" : "mobile-menu"}>
                    <button className="btn" onClick={() => setShow(!show)} aria-label="メニューを開く">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={show ? "menu-cover menu-open" : "menu-cover"}></div>

                    <nav className="nav-link">
                        <ul className="items">
                            <li>
                                <Link to="/posts/" onClick={() => {
                                    setShow(!show)
                                }}>
                                    <FaHome /> HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact/" onClick={() => {
                                    setShow(!show)
                                }}>
                                    <FaEnvelope /> CONTACT
                                </Link>
                            </li>
                        </ul>

                        <Sns className="sns" />
                    </nav>
                </div>
            </MobileMenu>
        </Wrapper>
    )
}



export default Header
