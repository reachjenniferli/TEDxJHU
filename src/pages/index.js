import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bg from "../images/bg.jpg"
import bgLogo from "../images/bigLogo1.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="main">
      <img href="/" src={bg} alt="Background Wallpaper" id="bg-img"></img>
      <img src={bgLogo} alt="TEDxJHU Logo" id="bg-logo"></img>
    </div>
  </Layout>
)

export default IndexPage
