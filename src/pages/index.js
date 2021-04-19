import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sun from "../components/sun"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Sun />
    <p>
      <Link to="/pixelsun/">pixelsun</Link>
    </p>
  </Layout>
)

export default IndexPage
