import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import logo from '../images/headerLogo.png';

const Header = ({ data }) => (
  <header className="header">
    <style> @import url('https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,700&display=swap');</style>
    <a href="/">
      <img href="/" src={logo} alt="TEDxJHU logo" id="logo"></img>
    </a>
    <div class="header-right">
      <a href="/">HOME</a>
      <a href="/">2020 EVENT</a>
      <a href="/">PAST EVENTS</a>
      <a href="page-2">OUR TEAM</a>
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