import React from "react";
import Slider from "react-slick";

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
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="main">
      <img src={bg} alt="Background Wallpaper" id="bg-img"></img>
      <img src={bgLogo} alt="TEDxJHU Logo" id="bg-logo"></img>
      <div class="button-wrapper">
        <a href="/TEDxJHU/2020-event/">
        <button class="enter-button">View 2020 Event</button>
        </a>
      </div>
    </div>

    <div class="recent-talks">
        <p class="recent-talks-header">Recent Talks</p>
        <Slider {...settings}>
          <div class="recent-talks-videos"> 
            <a href="https://youtu.be/2Hubvs2TiL4" target="_blank" rel="noopener noreferrer">
            <img src={thumb1} alt="Recent Talk" class="thumbnail"></img>
            </a>
          </div>  
          <div class="recent-talks-videos">
            <a href="https://youtu.be/22Tb8V_QjNI" target="_blank" rel="noopener noreferrer">
              <img src={thumb2} alt="Recent Talk" class="thumbnail"></img>
            </a>
          </div>  
          <div class="recent-talks-videos"> 
            <a href="https://youtu.be/4P1wq3QIa2I" target="_blank" rel="noopener noreferrer">
              <img src={thumb3} alt="Recent Talk" class="thumbnail"></img>
            </a>
          </div>  
          <div class="recent-talks-videos"> 
            <a href="https://youtu.be/6wBK4LWB1cI" target="_blank" rel="noopener noreferrer">
              <img src={thumb4} alt="Recent Talk" class="thumbnail"></img>
            </a>
          </div>
          <div class="recent-talks-videos"> 
            <a href="https://youtu.be/nx5wdXm7QT8" target="_blank" rel="noopener noreferrer">
              <img src={thumb5} alt="Recent Talk" class="thumbnail"></img>
            </a>
          </div> 
          <div class="recent-talks-videos"> 
            <a href="https://youtu.be/gKZ9uz38vIE" target="_blank" rel="noopener noreferrer">
              <img src={thumb6} alt="Recent Talk" class="thumbnail"></img>
            </a>
          </div>   
        </Slider>
    </div>

    <div class="divider">
    </div>

    <div class="about"> 
      <p class="about-header">About TEDxJHU</p>
      <p class="about-text">TEDxJHU is a completely student-run series of TED-like talks at Johns Hopkins University. Each year, we host two events with a diverse array of speakers and performers in hopes of teaching, inspiring, and entertaining the Johns Hopkins community.</p>
    </div>
  </Layout>
)

export default IndexPage
