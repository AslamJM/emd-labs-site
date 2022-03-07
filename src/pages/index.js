import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero"
import Services from "../components/hero/Services"
import About from "../components/hero/About"

export default function Home({ data }) {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
    </Layout>
  )
}
