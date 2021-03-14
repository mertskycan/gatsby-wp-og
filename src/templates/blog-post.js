import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"


import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
  <Layout pageTitle={parse(post.title)}>
  <NavOne />
  <PageHeader title={parse(post.title)} />
<section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-one__single">
              <div className="blog-one__image">
              {featuredImage?.fluid && (
            <Image
              fluid={featuredImage.fluid}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="Posted On Jan 19"
                  >
                    <i className="fa fa-calendar-alt"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="No Comments"
                  >
                    <i className="fa fa-comments"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="Posted By Admin"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                {parse(post.title)}
                </h2>
               
        {!!post.content && (
          <section itemProp="articleBody">{parse(post.content)}</section>
        )}
              </div>
            </div>
            <div className="share-block">
              <div className="left-block">
                <p>
                  Tags: <a href="#none">Business,</a>{" "}
                  <a href="#none">Agency,</a> <a href="#none">Technology</a>
                </p>
              </div>
              <div className="social-block">
                <a href="#none">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#none">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="blog-details__author">
              <div className="blog-details__author-image">
                <img src="" alt="Awesome alter text" />
              </div>
              <div className="blog-details__author-content">
                <h3>Christine Eve</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the rinting and
                  typesetting been the industry standard dummy text ever sincer
                  condimentum purus. In non ex at ligula fringilla lobortis et
                  not the aliquet.
                </p>
              </div>
            </div>
            <h2 className="blog-details__content-title">2 Comments</h2>
            <div className="comment-one">
              <div className="comment-one__single">
                <div className="comment-one__image">
                  <div className="inner-block">
                    <img src="" alt="Awesome alter text" />
                  </div>
                </div>
                <div className="comment-one__content">
                  <div className="comment-one__content-top">
                    <div className="comment-one__top-left">
                      <h3 className="comment-one__author">
                        Laquanda Bachmeier
                      </h3>
                      <p className="comment-one__date">
                        20 April, 2019{" "}
                        <span className="comment-one__date-sep">-</span> 4:00 pm
                      </p>
                      <p className="comment-one__text">
                        Lorem Ipsum is simply dummy text of the rinting and
                        typesetting been the industry standard dummy text ever
                        sincer condimentum purus. In non ex at ligula fringilla
                        lobortis et not the aliquet.
                      </p>
                    </div>
                    <div className="comment-one__top-right">
                      <a href="#none" className="thm-btn comment-one__reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-one__single">
                <div className="comment-one__image">
                  <div className="inner-block">
                    <img src="" alt="Awesome alter text" />
                  </div>
                </div>
                <div className="comment-one__content">
                  <div className="comment-one__content-top">
                    <div className="comment-one__top-left">
                      <h3 className="comment-one__author">Vicente Elmore</h3>
                      <p className="comment-one__date">
                        20 April, 2019{" "}
                        <span className="comment-one__date-sep">-</span> 4:00 pm
                      </p>
                      <p className="comment-one__text">
                        Lorem Ipsum is simply dummy text of the rinting and
                        typesetting been the industry standard dummy text ever
                        sincer condimentum purus. In non ex at ligula fringilla
                        lobortis et not the aliquet.
                      </p>
                    </div>
                    <div className="comment-one__top-right">
                      <a href="#none" className="thm-btn comment-one__reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="blog-details__content-title">Leave a Comment</h2>
            <form action="#" className="reply-form">
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="reply-form__field"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="reply-form__field"
                  />
                </div>
                <div className="col-lg-12">
                  <textarea
                    placeholder="Write message"
                    className="reply-form__field"
                  ></textarea>
                  <button className="reply-form__btn thm-btn" type="submit">
                    Submit Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="sidebar__single sidebar__search">
                <form action="#" className="sidebar__search-form">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search here..."
                  />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="sidebar__single sidebar__post">
                <h3 className="sidebar__title">Latest Posts</h3>
                <div className="sidebar__post-wrap">
                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src="" alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <h4 className="sidebar__post-title">
                        <a href="#none">
                          Pre launch mobile app marketing pitfalls
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src="" alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <h4 className="sidebar__post-title">
                        <a href="#none">
                          Social currency per- formance keywords or
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="sidebar__post__single">
                    <div className="sidebar__post-image">
                      <div className="inner-block">
                        <img src="" alt="Awesome alter text" />
                      </div>
                    </div>
                    <div className="sidebar__post-content">
                      <h4 className="sidebar__post-title">
                        <a href="#none">
                          Prioritize these items quarterly sales are at
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar__single sidebar__category">
                <h3 className="sidebar__title">Categories</h3>
                <ul className="sidebar__category-list">
                  <li className="sidebar__category-list-item">
                    <a href="#none">Business</a>
                  </li>
                  <li className="sidebar__category-list-item">
                    <a href="#none">Introductions</a>
                  </li>
                  <li className="sidebar__category-list-item">
                    <a href="#none">One Page Template</a>
                  </li>
                  <li className="sidebar__category-list-item">
                    <a href="#none">Parallax Effects</a>
                  </li>
                  <li className="sidebar__category-list-item">
                    <a href="#none">New Technologies</a>
                  </li>
                  <li className="sidebar__category-list-item">
                    <a href="#none">Video Backgrounds</a>
                  </li>
                </ul>
              </div>
              <div className="sidebar__single sidebar__tags">
                <h3 className="sidebar__title">Tags</h3>
                <ul className="sidebar__tags-list">
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Business,</a>
                  </li>
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Agency,</a>
                  </li>
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Technology,</a>
                  </li>
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Parallax,</a>
                  </li>
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Innovative,</a>
                  </li>
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Professional,</a>
                  </li>
                  <li className="sidebar__tags-list-item">
                    <a href="#none">Experience,</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>  
      <Footer />
        </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
