import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GetUsers, GetSampleText } from "../hooks"

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { users }  = GetUsers();
  const text  = GetSampleText();

  return (
    <Layout>
      <SEO title="Page Home" />
      <p>{text}</p>
      <p>gatsby-config.jsで設定されているsiteMetadataの値 : </p>
      <div className="code">
      {JSON.stringify(data.site.siteMetadata)}
      </div>
      <p>hooksでgolangサーバーからデータを取得した結果 : </p>
      <div className="code">
      {users.map((u, key) => (
        <div key={key}>
          {u.name} : {u.email}
        </div>
      ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/deeper/page-3/">Go to page 3</Link> <br />
    </Layout>
  );
}

export default IndexPage
