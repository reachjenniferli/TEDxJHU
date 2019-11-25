/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SVG from 'react-inlinesvg';
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import insta from "../images/insta.svg"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div class="site">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div class="site-content">
          <main>{children}</main>
        </div>
        <footer class="footer">
            <p class="footer-left">
              This TEDx event is operated under license from TED.
              <a href="https://www.facebook.com/tedxjhu/" target="_blank" rel="noopener noreferrer">
                  <SVG id="icon1" src={facebook}> <img src={facebook} alt="fb" /> </SVG>
              </a>
              <a href="https://www.instagram.com/tedxhopkins/" target="_blank" rel="noopener noreferrer">
                  <SVG id="icon2" src={insta}> <img src={insta} alt="insta" /> </SVG>
              </a>
              <a href="https://twitter.com/tedxjhu?lang=en" target="_blank" rel="noopener noreferrer">
                  <SVG id="icon3" src={twitter}> <img src={twitter} alt="twitter"/> </SVG>
              </a>
            </p>

            <p class="right">Built by Arpan Sahoo</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
