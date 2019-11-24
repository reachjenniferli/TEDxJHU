import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Oops!" />
    <div class="not-found">
      <h1>Page is either currently under development or doesn't exist.</h1>
      <p style={{paddingTop: "10px",}}>Don't be too sad. Check back later!</p>
    </div>
  </Layout>
)

export default NotFoundPage
