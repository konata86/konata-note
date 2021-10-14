import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import { components } from "./MDXComponents/RootMDX"

const ContentArticle = ( { post, toc } ) => 
{

  return (
    <>
        <MDXProvider components={components}>
            <MDXRenderer {...toc}>
                {post}
            </MDXRenderer>
        </MDXProvider>    
    </>
  )

}

export default ContentArticle
