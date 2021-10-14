import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-bottom: 5em;

  .language {
    margin-left: 85%;
    padding: 5px 10px 8px 10px;
    border-radius: 3px;
    font-size: 0.8em;
    font-weight: bold;
    background-color: rgb(30, 30, 30);
    color: rgb(156, 220, 254);
  }

  pre {
    padding: 15px 25px;
    border-radius: 3px;
    font-size: 0.9em;
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

  const upperLanguage = codeLanguage.toUpperCase()
  const defaultLanguage = "cmd"

  if (codeLanguage) {
    return (
      <Wrapper>
        <span className="language">{upperLanguage}</span>

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