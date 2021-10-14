import React from "react"
import Seo from "../components/Share/Seo"
import Layout from "../components/Blog/Layout"
import styled from "styled-components"

const Wrapper = styled.div`
    padding: 30px;
    background-color: var(--white);

    .main-title {
      font-size: 1.5em;
      margin-bottom: 25px;
    }

    label {
      span {
        display: inline-block;
        color: #ff7979;
        font-size: 0.8em;
        margin-left: 5px;
      }
    }

    label, input, textarea {
      display: block;
      margin-bottom: 25px;
    }
    input, textarea { 
      border: none;
      width: 100%;
      background-color: var(--gray-thin-1);
      border-radius: 3px;
      box-shadow: inset 0 0 3px var(--gray-thin-2);
      padding: 7px;
      margin: 10px 0;
    }
    

    .button-wrapper {
      display: flex;
      justify-content: center;
    }


    button.submit-button {
      width: 170px;
      height: 50px;
      background-color: var(--base-4);
      color: var(--white);
      font-weight: bold;
      border: none;
      border-radius: 5px;
      box-shadow: 0 5px var(--gray-thick-1);
      transition: .3s ease-in-out;

      :hover {
        transform: translateY(3px);
        box-shadow: 0 2px var(--gray-thick-1);
        transition: .3s ease-in-out;
      }
    }

`

const Contact = () => {

  return (
    <>
      <Seo title="Contact" />
      <Layout sidebar={false}>
        <Wrapper>
          <h1 className="main-title">
            お問い合わせフォーム
          </h1>

      
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <p>
              <label>
                お名前<span>(必須)</span>
                <input
                  type="text"
                  name="name"
                  placeholder="例：サンプル太郎"
                  maxLength={30}
                  minLength={2}
                  required={true}
                />
              </label>
            </p>
            <p>
              <label>
                メールアドレス<span>(必須)</span>
                <input type="email" name="email" placeholder="例：sample@exmaple.com" required={true} />
              </label>
            </p>
            <p>
              <label>
                お問い合わせ内容<span>(必須)</span> <textarea name="message" rows={8} placeholder="こちらにお問い合わせ内容をお書き下さい。" required={true}></textarea>
              </label>
            </p>
            <p className="button-wrapper">
              <button type="submit" className="submit-button">送信</button>
            </p>
          </form>
        </Wrapper>
      </Layout>
    </>
  )
}



export default Contact
