import React from "react"

import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  text-align: center;
  padding-left: 0;
  padding-top: 5px;
  margin: 25px 0;

  > a {
    display: inline-block;
    font-size: 20px;
    margin: 10px;
  }

  .twitter {
    width: 40px;
    height: 40px;
    background-color: var(--twitter);
    border: solid 3px var(--twitter);
    border-radius: 5px;
    color: var(--white);
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      border: solid 3px var(--twitter);
      background-color: var(--white);
      border-radius: 5px;
      color: var(--twitter);
      transition: 0.5s;
    }
  }
  .instagram {
    width: 40px;
    height: 40px;
    background-color: var(--instagram);
    border: solid 3px var(--instagram);
    border-radius: 5px;
    color: var(--white);
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      border: solid 3px var(--instagram);
      background-color: var(--white);
      border-radius: 5px;
      color: var(--instagram);
      transition: 0.5s;
    }
  }
  .github {
    width: 40px;
    height: 40px;
    background-color: var(--github);
    border: solid 3px var(--github);
    border-radius: 5px;
    color: var(--white);
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      border: solid 3px var(--github);
      background-color: var(--white);
      border-radius: 5px;
      color: var(--github);
      transition: 0.5s;
    }
  }
`

const BlackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  text-align: center;
  padding-left: 0;
  padding-top: 5px;
  margin: 25px 0;

  > a {
    display: inline-block;
    font-size: 20px;
    margin: 10px;
  }

  .twitter {
    width: 40px;
    height: 40px;
    background-color: var(--black);
    border: solid 3px var(--black);
    border-radius: 5px;
    color: var(--white);
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      border: solid 3px var(--black);
      background-color: var(--white);
      border-radius: 5px;
      color: var(--black);
      transition: 0.5s;
    }
  }
  .instagram {
    width: 40px;
    height: 40px;
    background-color: var(--black);
    border: solid 3px var(--black);
    border-radius: 5px;
    color: var(--white);
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      border: solid 3px var(--black);
      background-color: var(--white);
      border-radius: 5px;
      color: var(--black);
      transition: 0.5s;
    }
  }
  .github {
    width: 40px;
    height: 40px;
    background-color: var(--black);
    border: solid 3px var(--black);
    border-radius: 5px;
    color: var(--white);
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      border: solid 3px var(--black);
      background-color: var(--white);
      border-radius: 5px;
      color: var(--black);
      transition: 0.5s;
    }
  }
`


const Sns = props => {
    const isBlack = props.isBlack || false

    if (isBlack) {
        return (
            <BlackWrapper {...props}>
                <a 
                    href="https://twitter.com/konata_sky86/" 
                    className="twitter" 
                    aria-label="twitterのmyアカウントへ"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaTwitter />
                </a>
                <a
                    href="https://www.instagram.com/konata_sky86/"
                    className="instagram"
                    aria-label="instagramのmyアカウントへ"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
                <a 
                    href="https://github.com/konata86/" 
                    className="github" 
                    aria-label="githubのmyアカウントへ"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
            </BlackWrapper>
        )
    } else {
        return (
            <Wrapper {...props}>
                <a 
                    href="https://twitter.com/konata_sky86/" 
                    className="twitter" 
                    aria-label="twitterのmyアカウントへ"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaTwitter />
                </a>
                <a
                    href="https://www.instagram.com/konata_sky86/"
                    className="instagram"
                    aria-label="instagramのmyアカウントへ"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
                <a 
                    href="https://github.com/konata86/" 
                    className="github" 
                    aria-label="githubのmyアカウントへ"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
            </Wrapper>
        )
    }
}

export default Sns
