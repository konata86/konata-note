import React from "react"

import styled from "styled-components"


const Wrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    table {
        margin-bottom: 5em;
        margin-left: auto;
        margin-right: auto;
        display: table;
        

        width: 95%;
        border-collapse: collapse;
        border-spacing: 0;
    }
    

    th, td{
        padding: 10px 15px;
        min-width: 100px;
        overflow: auto;
    }
`

const TableHead = styled.thead`
    background-color: var(--base-thin-2);
    width: 100%;

    th {
        text-align: center;
        color: var(--white);
    }
`

const TableNonHead = styled.thead`
    display: none;
`

const TableBody = styled.tbody`
    width: 100%;

    tr:nth-child(odd){
        background-color: var(--gray-thin-1)
    }
`

const myTable = props => {
    return (
        <Wrapper>
            <table {...props}>
                {props.children}
            </table>
        </Wrapper>
    )
}

const myThead = props => {
    const head_list = props.children.props.children;
    let flag = false;
    for (let i = 0; i < head_list.length; i++) {
        if (typeof head_list[i].props.children === 'undefined') {
            continue
        } else {
            flag = true
            break
        }
    }
    if (flag) {
        return (
            <TableHead {...props}>
                {props.children}
            </TableHead>
        )
    }
    else {
        return (
            <TableNonHead {...props}>
                {props.children}
            </TableNonHead>
        )
    }


}

const myTbody = props => {
    return (
        <TableBody {...props}>
            {props.children}
        </TableBody>
    )
}



export { myTable, myThead, myTbody }