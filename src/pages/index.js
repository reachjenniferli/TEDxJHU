import React from "react"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bg from "../images/bg.jpg"
import bgLogo from "../images/wallpaper-logo.png"
import thumb1 from "../images/thumb1.jpg"
import thumb2 from "../images/thumb2.jpg"
import thumb3 from "../images/thumb3.jpg"
import thumb4 from "../images/thumb4.jpg"
import thumb5 from "../images/thumb5.jpg"
import thumb6 from "../images/thumb6.jpg"

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="main">
      <img src={bg} alt="Background Wallpaper" id="bg-img"></img>
      <img src={bgLogo} alt="TEDxJHU Logo" id="bg-logo"></img>
      <div class="button-wrapper">
        <a href="/TEDxJHU/fall-2025/">
          <button class="enter-button">View Fall 2025 Event</button>
        </a>
      </div>
    </div>

    <div class="recent-talks">
      <p class="recent-talks-header">Newest Talks</p>
      <p class="recent-talks-subheader">
        Check out a few of our spotlight talks from recent years.
      </p>

      <Slider {...settings}>
        
        <iframe width="560" height="800" src="https://www.youtube.com/embed/pzqhSeHpya4?si=85t4tzeXnHB1S8iZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <iframe width="560" height="800" src="https://www.youtube.com/embed/zstj8g0ctRM?si=rYXRWnYLLmoPX8_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="560" height="800" src="https://www.youtube.com/embed/22Tb8V_QjNI?si=_rWO7rMwYZiTOFge" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="560" height="800" src="https://www.youtube.com/embed/45DThaGHwzs?si=dnWU2XlvxvvxKMnx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="560" height="800" src="https://www.youtube.com/embed/i_nGluS5-B0?si=hLQfQ02ocUWKZt_N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="560" height="800" src="https://www.youtube.com/embed/wSDMPxGGy3A?si=zh8hOhiT2EgcIRZa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </Slider>
    </div>

    <div class="divider"></div>

    <div class="about">
      <p class="about-header">About TEDxJHU</p>
      <p class="about-text">
        TEDxJHU is a completely student-run series of TED-like talks at Johns
        Hopkins University. Each year, we host two events with a diverse array
        of speakers and performers in hopes of teaching, inspiring, and
        entertaining the Johns Hopkins community.
      </p>
    </div>
  </Layout>
)

export default IndexPage
