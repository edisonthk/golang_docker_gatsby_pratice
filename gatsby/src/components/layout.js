/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Fragment} from "react"
import PropTypes from "prop-types"
import Footer from './footer'
import "./layout.css"

const Layout = ({ children }) => (
  <Fragment>
    <div className="container">
      <main>
        {children}
      </main>
    </div>
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
