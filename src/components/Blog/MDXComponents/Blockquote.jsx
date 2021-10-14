import React from "react"
import styled from "styled-components"

import { FaQuoteLeft } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import { TiWarningOutline } from 'react-icons/ti'

const Wrapper = styled.blockquote`

    position: relative;
    box-shadow: 2px 2px 5px var(--gray-thin-2);
    margin-bottom: 5em;

    p.info {
        border-left: solid 4px var(--base-5);
        background-color: rgb(234, 240, 255);
        color: var(--gray-thick-1);
        
        .icon {
            color: var(--base-5);
        }
    }

    p.warn {
        border-left: solid 4px var(--base-2);
        background-color: rgb(255, 230, 228);
        color: var(--gray-thick-1);

        .icon {
            color: var(--base-2);
        }
    }


    .icon {
        position: absolute;
        top: 0.4em;
        left: 0.6em;
        color: var(--base-4);
        font-size: 24px;
    }

    p {
        background-color: var(--gray-thin-1);
        padding: 20px 30px 20px 50px;
        color: var(--gray);
        border-left: solid 4px var(--base-4);
    }
    
`

const myBlockquote = ({ children, display }) => {

    if (display === "info"){
        return (
            <Wrapper>
                <p className='info'>
                    <FiInfo className='icon' />
                        {children}
                </p>
            </Wrapper>
        )
    }

    if (display === "warn"){
        return (
            <Wrapper>
                <p className='warn'>
                    <TiWarningOutline className='icon' />
                        {children}
                </p>
            </Wrapper>
        )
    }

    else{
        return (
            <Wrapper>
                <FaQuoteLeft className='icon' />
                    {children}
            </Wrapper>
        )
    }
}



export { myBlockquote }