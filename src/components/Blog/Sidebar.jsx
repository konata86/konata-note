import React from 'react'

import Recent from './Banner/Recent'
import Profile from './Banner/Profile'
import Category from './Banner/Category'
import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 780px) {
        flex-basis: 30%;
    }
`

const Sidebar = () => {
    return (
        <Wrapper>
            <Recent />
            <Profile />
            <Category />
        </Wrapper>
    )
}


export default Sidebar
