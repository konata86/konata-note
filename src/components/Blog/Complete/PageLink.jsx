import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'


const Wrapper = styled.div`

    margin-top: 100px;
    height: 50px;

    ul {
        padding: 0;
        list-style: none;
    }
    li {
        display: inline-block;
        transition: .3s ease;
        border-radius: 3px;
        margin: 5px;

        :hover {
            background-color: var(--gray-thin-1);
            transition: .3s ease;
            cursor: pointer;

            a {
                color: var(--gray);
                transition: .3s ease;
            }

            .icon {
                color: var(--gray);
                transition: .3s ease;
            }
        }

    }

    li.prev {
        float: left;
    }
    li.next {
        float: right;
    }

    a {
        text-decoration: none;
        color: var(--gray-thick-1);
        font-weight: bold;
        transition: .3s;
        padding: 5px;
    }
    .prev .icon {
        display: inline-block;
        margin-right: 10px;
        color: var(--gray-thick-1);
        font-size: 22px;
    }
    .next .icon {
        margin-left: 10px;
        color: var(--gray-thick-1);
        font-size: 22px;
    }

`

const PageLink = (props => {

    return (
        <Wrapper>
            <ul>
                { props.next  && (
                    <li className="prev">
                        <Link to={`/posts/${props.next.frontmatter.slug}`} rel="prev">
                            <span className="icon">&lt;</span><span>前の記事</span>
                        </Link>
                    </li>
                )}
                { props.previous && (
                    <li className="next">
                        <Link to={`/posts/${props.previous.frontmatter.slug}`} rel="next">
                            <span>次の記事</span><span className="icon">&gt;</span>
                        </Link>
                    </li>
                )}
            </ul>
        </Wrapper>
    )
})



export default PageLink
