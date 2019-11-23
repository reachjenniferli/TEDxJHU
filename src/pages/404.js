import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="not-found">
      <h1>Page currently under development.</h1>
      <p>Don't be too sad. Check back later!</p>
    </div>
  </Layout>
)

export default NotFoundPage
