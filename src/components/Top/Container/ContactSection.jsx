import React from "react"

import { Link } from "gatsby"
import styled from "styled-components"
import Sns from "../../Share/Sns"

const Wrapper = styled.section`
  width: 100%;
  background: var(--base-thin-5);
  padding: 80px 40px;
  margin-bottom: 35px;

  .title {
    font-weight: 550;
    display: block;
    font-size: 20px;
    color: var(--gray-thick);
    border-bottom: solid 2px var(--gray-thick-1);
    border-image: linear-gradient(
      to right,
      var(--gray-thick-1) 0%,
      var(--gray-thin-2) 100%
    );
    border-image-slice: 1;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .other {
    outline: none !important;
    margin-top: 25px;
    padding: 10px 20px;
    color: var(--base-5);
    border: solid 2px var(--base-5) !important;
    position: relative;
    z-index: 1;

    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: var(--base-5);
      transform-origin: 0;
      transform: scaleX(0);
      transition: 0.3s ease;
    }

    :hover {
      color: var(--white);
      transition: 0.3s ease;
    }
    :hover::before {
      transform-origin: 0 50%;
      transform: scaleX(1);
    }
  }

  .sns-wrapper {
    margin-top: 120px;
  }

  .arrow {
    margin-left: 30px;
  }
`

const ContactSection = () => {
    return (
        <Wrapper id="link-contact">
            <div className="title">お問い合わせ</div>
            <div className="desc">
                ブログに関するお問い合わせ、記事の削除依頼等はこちらからお願いいたします。
            </div>
            <Link to="/contact/">
                <button className="other">
                    こちらから<span className="arrow">&gt;</span>
                </button>
            </Link>

            <Sns isBlack={true} className="sns-wrapper" />
        </Wrapper>
    )
}



export default ContactSection
