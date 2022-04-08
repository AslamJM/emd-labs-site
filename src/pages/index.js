import React from "react"
import Layout from "../components/Layout"
import NewHero from "../components/hero/NewHero"
import Services from "../components/hero/Services"
import Head from "../components/Head"
import Partners from "../components/hero/Partners"
import TestimonialCarousel from "../components/hero/TestimonialCarousel"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <Head title="Home" description={data.site.siteMetadata.description} />
      <NewHero />
      <Services />
      <Partners />
      <TestimonialCarousel />
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
