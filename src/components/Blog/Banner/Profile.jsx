import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Sns from "../../Share/Sns"


const Wrapper = styled.div`
  background-color: var(--white);
  padding: 40px 0;
  margin-top: 40px;

  @media (min-width: 780px) {
      margin: 15px 15px 0 0;
  }

  .title-wrapper {
      position: relative;
      text-align: center;
  }

  .title {
    display: inline-block;
    padding: 0 35px;
    font-size: 1.3em;
    position: relative;
    z-index: 10;
    background-color: var(--white);
  }

  .line {
    position: absolute;
    top: 15px;
    left: 10%;
    display: inline-block;
    width: 80%;
    height: 3px;
    z-index: 1;
    background-color: var(--base-4);
  }

  .profile-icon {
    display: block;
    width: 120px;
    border-radius: 60px;
    margin: 50px auto;
    transform: translateX(-3px);
  }

  .name {
    text-align: center;
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .desc {
    font-size: 1em;
    margin: 0 25px;
  }
`

const Profile = () => {
  return (
    <Wrapper>
      <div className="title-wrapper">
        <div className="title">Profile</div>
        <div className="line"></div>
      </div>

      <StaticImage
        src="../../../assets/profile-icon.png"
        alt=""
        className="profile-icon"
      />

      <div className="name">此方そら</div>

      <div className="desc">
        普段は研究生として、機械学習（深層学習）に関する研究をしています。最近はJavaScriptに興味をもち、勉強中です。趣味はイラストを描くことです。
      </div>

      <Sns />
    </Wrapper>
  )
}


export default Profile
