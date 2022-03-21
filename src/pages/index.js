import React from "react"
import Layout from "../components/Layout"
//import Hero from "../components/hero/Hero"
import NewHero from "../components/hero/NewHero"
import Services from "../components/hero/Services"
import About from "../components/hero/About"
//import ParticleHero from "../components/hero/ParticleHero"
import Head from "../components/Head"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <Head title="Home" description={data.site.siteMetadata.description} />
      <NewHero />
      <Services />
      <About />
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
