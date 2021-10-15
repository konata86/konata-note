import React from "react"
import styled from "styled-components"

import { FaLightbulb, FaPenNib, FaKey } from "react-icons/fa"

const Wrapper = styled.section`
  background-color: var(--base-thin-1);
  padding: 80px 40px;
  color: var(--gray-thick-1);

  .title {
    font-weight: 550;
    display: block;
    font-size: 20px;
    border-bottom: 2px solid var(--gray-thick-1);
    border-image: linear-gradient(
      to right,
      var(--gray-thick-1) 0%,
      var(--gray-thin-2) 100%
    );
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-image-slice: 1;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .icon {
    margin-right: 8px;
  }
  .sub-title {
    margin: 30px 0 10px 0;
    position: relative;
    min-height: 32px;
    overflow: hidden;
  }

  .content {
    p {
      line-height: 1.7em;

      :last-child {
        margin-bottom: 50px;
      }
    }
  }

  .my-name {
    span {
      background: linear-gradient(transparent 70%, var(--base-3) 70%);
    }
  }
`

const ProfileSection = () => {
    return (
        <Wrapper id="link-about">
            <div className="title">此方ノートとは？</div>
            <div className="desc">
                東京在住の大学院生が作成する技術・知識系ブログです
            </div>

            <div className="content">
                <h3 className="sub-title">
                    <FaLightbulb className="icon" />
                    <span>コンセプト</span>
                </h3>
                <p>
                    大学で研究をしていると、結構ニッチな情報が欲しいことが、まあ多々あります。
                </p>
                <p>
                    そんなとき、もっと最近のトレンドに即したサイトに情報があればなあ、と思います。
                </p>
                <p>
                    では、自分で書けばいいのでは、、、そう思ったのが本ブログ作成のモチベーションです。
                </p>
                <p>
                    また、学んだ知識をブログ記事作成という形でアウトプットすることで、より自分の理解力に磨きをかけていこうと考えたわけです。
                </p>
            </div>

            <div className="content">
                <h3 className="sub-title">
                    <FaPenNib className="icon" />
                    <span>プロフィール</span>
                </h3>
                <p className="my-name">
                    <span>此方そら/Sora Konata</span>
                </p>
                <p>
                    東京都在住。都内大学電気電子工学科卒業。現在は同大学院に在籍中。
                </p>
                <p>
                    大学院では機械学習に関する研究を実施。主にPythonを用いてプログラムを記述。
                </p>
                <p>
                    大学院に在学中にWEB制作に興味をもち、現在はHTML・CSS及びJavaScriptを中心に勉強中。
                </p>
            </div>

            <div className="content">
                <h3 className="sub-title">
                    <FaKey className="icon" />
                    <span>キーワード</span>
                </h3>
                <p>Python/HTML/CSS/SASS/CSSinJS</p>
                <p>JavaScript/React/Gatsby</p>
            </div>
        </Wrapper>
    )
}



export default ProfileSection
