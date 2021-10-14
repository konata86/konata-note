import React, { useState } from "react"

import { Link } from "react-scroll"

import styled from "styled-components"
import { FaListUl } from "react-icons/fa"
import { MdKeyboardArrowDown } from "react-icons/md"

const Wrapper = styled.div`
  border-top: solid 4px var(--base-4);
  background-color: var(--gray-thin-1);
  box-shadow: 2px 2px 5px var(--gray-thin-2);
  padding: 15px 20px;
  margin-bottom: 5em;
  color: var(--gray-thick-1);
  transition: all 0.5s ease;

  .hidden-toc {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.5s ease;
  }

  .show-toc {
    height: auto;
    overflow: visible;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .title {
    font-weight: bold;
    font-size: 1.3em;
    margin-bottom: 0px;
  }

  .fa-list {
    background-color: var(--base-4);
    border-radius: 5px;
    color: var(--white);
    padding: 5px;
    font-size: 28px;
  }

  .fa-arrow {
    font-size: 1.5em;
    float: right;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  .fa-arrow.active {
    transform: rotate(-180deg);
    transition: 0.5s ease-in-out;
  }

  ol {
    line-height: 35px;
    margin-top: 25px;
  }

  ol > li {
    font-weight: bold;
  }

  ul > li {
    font-weight: normal;
    color: var(--gray);
  }

  a:hover {
    text-decoration: underline !important;
    cursor: pointer;
  }
`


const TOC = props => {

  const postIndex = props.props

  const [show, setShow] = useState(false)

  return (
    <Wrapper>
      <div className="title">
        <FaListUl className="fa-list" /> もくじ
        <MdKeyboardArrowDown
          className={show ? "fa-arrow active" : "fa-arrow"}
          onClick={() => {
            setShow(!show)
          }}
        />
      </div>
      <div className={show ? "show-toc" : "hidden-toc"}>
        <ol>
          {postIndex.items.map(h1Item => {
            return (
              <li key={h1Item.url}>
                <Link
                  smooth={true}
                  to={h1Item.url.replace("#", "")}
                  dulation={2500}
                  offset={-75}
                >
                  {h1Item.title}
                </Link>
                {h1Item.items && (
                  <ul>
                    {h1Item.items.map(h2Item => {
                      return (
                        <li key={h2Item.url}>
                          <Link
                            smooth={true}
                            to={h2Item.url.replace("#", "")}
                            dulation={2500}
                            offset={-75}
                          >
                            {h2Item.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </Wrapper>
  )
}


export default TOC
