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
      <p class="about-text">In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Hosted at Johns Hopkins University, our event is called TEDxJHU, where x = independently organized TED event. At our TEDxJHU event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
    </div>
  </Layout>
)

export default IndexPage
