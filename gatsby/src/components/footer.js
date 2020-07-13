/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

const BaseFooter = styled.div`
  background-color: #0B132D;
  color: #FFFFFF;
  text-align: left;
  padding: 10px 0;

  a {
    color: #FFFFFF;
  }
`

const Footer = () => (
  <BaseFooter>
    <div className="container">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </BaseFooter>
)

export default Footer
