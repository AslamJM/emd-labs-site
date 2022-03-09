import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/hero/Hero"
import Services from "../components/hero/Services"
import About from "../components/hero/About"
import Head from "../components/Head"

export default function Home({ data }) {
  return (
    <Layout>
      <Head title="Home" />
      <Hero />
      <Services />
      <About />
    </Layout>
  )
}
