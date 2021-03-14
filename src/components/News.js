import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"

const News = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: {fields: date, order: DESC}) {
        edges {
          node {
            id
            excerpt
            uri
            date(formatString: "d/m/Y")
            title
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const posts = data.allWpPost.edges
  return ( 
    <section className="blog-one  blog-one__home-two">
    <div className="container">
      <div className="block-title text-center">
        <h2 className="block-title__title">
          Our latest news <br />& articles
        </h2>
      </div>
      <div className="row">

      {posts.map(post => {
        const featuredImage = {
          fluid: post.node.featuredImage?.node?.localFile?.childImageSharp?.fluid.originalImg,
          alt: post.node.featuredImage?.node?.alt || ``,
        }

        return (

        <div className="col-lg-4">
          <div className="blog-one__single">
            <div className="blog-one__image"> 
   
            <img src={featuredImage.fluid} alt="{featuredImage.alt}" />
              <a className="blog-one__plus" href="{post.node.uri}">
                <i className="kipso-icon-plus-symbol"></i>
              </a>
            </div>
            <div className="blog-one__content text-center">
              <div className="blog-one__meta">
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="{post.date}"
                  href="#none"
                >
                  <i className="fa fa-calendar-alt"></i>
                </a>
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="No Comments"
                  href="#none"
                >
                  <i className="fa fa-comments"></i>
                </a>
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Posted By Admin"
                  href="#none"
                >
                  <i className="fa fa-user"></i>
                </a>
              </div>
              <h2 className="blog-one__title">
                
                <Link to={post.node.uri}>
                   {parse(post.node.title)}
                  </Link>
              </h2>
              <p className="blog-one__text">
              {parse(post.node.excerpt)}
              </p>
                <Link to={post.node.uri} className="blog-one__link">
                  Read More
                </Link>
            </div>
          </div>
        </div>
                  )
                })}
      </div>
    </div>
    </section>
)
}

export default News