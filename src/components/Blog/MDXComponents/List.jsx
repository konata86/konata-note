import React from "react"
import styled from "styled-components"

import { FaCheck } from "react-icons/fa"

const myOl = props => {
    const items = props.children
  
    return (
      <OlListBox>
        {items.map((item, index) => {
          return (
            <ListItem key={index} {...props}>
              <span className="number">{index + 1}</span>
              <span>{item.props.children}</span>
            </ListItem>
          )
        })}
      </OlListBox>
    )
  }
  
  const ListItem = styled.li`
    color: var(--gray-thick-1);
    line-height: 24px;
    padding: 7px;
    display: flex;
    flex-direction: row;
  `
  
  const UlListBox = styled.ul`
    list-style: none;
    padding: 1.5em;
    border: dashed 2px var(--base-4);
    margin-bottom: 5em;
  
    .icon {
      color: var(--base-4);
      margin-right: 12px;
    }
  `
  
  const OlListBox = styled.ol`
    list-style: none;
    padding: 15px 25px 15px 25px;
    border: solid 2px var(--base-4);
    margin-bottom: 5em;
  
    span.number {
      display: inline-block;
      margin-right: 12px;
      font-size: 11px;
      background-color: var(--base-4);
      border-radius: 50%;
      height: 23px;
      width: 23px;
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
      color: var(--white);
    }
  `
  

const myUl = props => {
  const items = props.children

  return (
    <UlListBox {...props}>
      {items.map(item => {
        return (
          <ListItem key={item.props.children} {...props}>
            <span><FaCheck className="icon" /></span>
            <span>{item.props.children}</span>
          </ListItem>
        )
      })}
    </UlListBox>
  )
}


export { myUl, myOl }
