/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 
 const Seo = ({ description, lang, title, pageimg, pageimgw, pageimgh }) => {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
             lang
             siteUrl
             locale
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const defaultTitle = site.siteMetadata?.title
   const language = lang || site.siteMetadata?.lang
 
   const imgurl = pageimg
     ? `${site.siteMetadata?.siteUrl}${pageimg}`
     : `${site.siteMetadata?.siteUrl}/thumb.png`
   const imgw =  pageimgw || 1280
   const imgh = pageimgh || 640
 
   return (
     <Helmet
       htmlAttributes={{
         lang: language,
       }}
       title={title}
       titleTemplate={`%s | ${defaultTitle}`}
       link={[
         {
           ref: `canonical`,
           href: site.siteMetadata?.siteUrl,
         },
       ]}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           property: `og:url`,
           content: site.siteMetadata?.siteUrl,
         },
         {
           property: `og:locale`,
           content: site.siteMetadata?.locale,
         },
         {
             property: `og:image`,
             content: imgurl,
         },
         {
             property: `og:image:width`,
             content: imgw,
         },
         {
             property: `og:image:height`,
             content: imgh,
         },
         {
           name: `twitter:card`,
           content: `summary_large_image`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata?.author,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ]}
     />
   )
 }
 
 export default Seo
 