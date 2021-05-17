import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stars from "../components/stars"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Stars />
  </Layout>
)

export default IndexPage