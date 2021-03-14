import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"


import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const PagePostTemplate = ({ data: { page } }) => {
 
  return (
  <Layout pageTitle={parse(page.title)}>
  <NavOne />
  <PageHeader title={parse(page.title)} />

  <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
  {!!page.content && (
          <section itemProp="articleBody">{parse(page.content)}</section>
        )}
    
    </div>
          </div>
        </div>
      </section>
      <Footer />
        </Layout>
  )
}

export default PagePostTemplate

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")
 
    }

  
    
  }
`
