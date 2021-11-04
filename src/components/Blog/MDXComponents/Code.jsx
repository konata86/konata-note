import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-bottom: 5em;

  .language {
    display: inline-block;
    padding: 5px 12px 8px 12px;
    margin-bottom: -4px;
    border-radius: 3px;
    font-size: 0.8em;
    font-weight: bold;
    background-color: #0099ff;
    color: var(--white);
    z-index: -1;
  }

  pre {
    position: relative;
    padding: 15px 25px;
    border-radius: 3px;
    font-size: 0.9em;

    div {
        > span:last-child{
            margin-right: 1em;
        }
    }
  }
`

const InlineCode = styled.code`
  background-color: var(--gray-thin-2);
  color: var(--gray-thick-1);
  padding: 4px 7px 4px 7px;
  margin: 0 3px 0 3px;
  border-radius: 4px;
`


const myCode = props => {
  const codeArray = props.children.props.children.trim()
  const className = props.children.props.className || ""
  const codeLanguage = className.replace("language-", "")
  const themeColor = theme // to avoid error

  const defaultLanguage = "cmd"

  if (codeLanguage) {
    return (
      <Wrapper>
        <span className="language">{codeLanguage}</span>

        <Highlight
          {...defaultProps}
          code={codeArray}
          language={codeLanguage}
          theme={themeColor}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Highlight
          {...defaultProps}
          code={codeArray}
          language={defaultLanguage}
          theme={themeColor}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Wrapper>
    )
  }
}

const myInlineCode = props => {
  return <InlineCode {...props}>{props.children}</InlineCode>
}


export { myCode, myInlineCode }
