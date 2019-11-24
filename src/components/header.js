import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.png'

const Header = () => (
  <header className="header">
    <style> @import url('https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,700&display=swap');</style>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

    <a href="/">
      <img src={logo} alt="TEDxJHU logo" id="logo"></img>
    </a>
    <div class="header-right">
      <a href="/">HOME</a>
      <a href="/2020-event">2020 EVENT</a>
      <a href="/past-events">PAST EVENTS</a>
      <a href="/our-team">OUR TEAM</a>
    </div>
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header