import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bg from "../images/bg.jpg"
import bgLogo from "../images/wallpaper-logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="main">
      <img href="/" src={bg} alt="Background Wallpaper" id="bg-img"></img>
      <img src={bgLogo} alt="TEDxJHU Logo" id="bg-logo"></img>
      <a href="/2020-event">
        <button class="enter-button">View 2020 Event</button>
      </a>
    </div>
  </Layout>
)

export default IndexPage
