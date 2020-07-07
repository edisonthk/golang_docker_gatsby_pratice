import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GetUsers, GetSampleText } from "../hooks"

const IndexPage = () => {
  const { users }  = GetUsers();
  const text  = GetSampleText();

  return (
    <Layout>
      <p>{text}</p>
      <div class="code">
      {users.map((u, key) => (
        <div key={key}>
          {u.name} : {u.email}
        </div>
      ))}
      </div>
      <SEO title="Home" />
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  );
}

export default IndexPage
