import * as React from "react"

import Layout from "../components/Blog/Layout"
import Seo from "../components/Share/Seo"
import { Link } from 'gatsby';
import styled from "styled-components";

const Wrapper = styled.section`

  margin: 150px 0 100px 0;
  text-align: center;

  button {
    color: var(--white);
    padding: 12px 15px;
    margin-top: 20px;
    border-radius: 4px;
    display: inline-block;
    background-color: var(--base-4);
    border: none;
    cursor: pointer;

    :hover {
      background-color: var(--base-thick-4);
      transition: 0.3s;
    }
  }
`

const NotFoundPage = () => (
    <Layout sidebar={false}>
        <Seo title="404: Not found" />
        <Wrapper>
            <h1>404: Not Found</h1>
            <Link to='/posts/'>
                <button>
                    Back to HOME
                </button>
            </Link>
        </Wrapper>
    </Layout>
)



export default NotFoundPage
