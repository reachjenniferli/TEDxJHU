/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
          <div class="footer-wrapper">
            <p class="footer-left">
              This TEDx event is operated under license from TED.
              Follow TEDxJHU on <a href="https://www.facebook.com/tedxjhu/" target="_blank" rel="noopener noreferrer">Facebook</a> & <a href="https://www.instagram.com/tedxhopkins/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
            <p class="footer-right">Built by Arpan Sahoo</p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
