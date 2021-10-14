import * as React from "react"

import Layout from "../components/Top/Layout"
import Seo from "../components/Share/Seo"
import BlogSection from "../components/Top/Container/BlogSection"
import ProfileSection from "../components/Top/Container/ProfileSection"
import ContactSection from "../components/Top/Container/ContactSection"
import Hero from "../components/Top/Hero"

const IndexPage = () => {
    return (
        <Layout>
            <Seo title="Home" />

            <Hero />
            <BlogSection />
            <ProfileSection />
            <ContactSection />
        </Layout>
    )
}

export default IndexPage
