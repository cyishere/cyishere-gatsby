import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import Layout from './layout';

export const query = graphql`
  query PostsList($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            hero {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            path
            title
            tags
          }
        }
      }
    }
  }
`;

const PostList = ({ data, pageContext }) => {
  const { currentPage, pagesNum } = pageContext
  return(
    <Layout>
      <Helmet>
        <title>All Posts | {data.site.siteMetadata.title}</title>
      </Helmet>
      <div className="uk-width-1-1 uk-width-2-3@m uk-width-2-3@l uk-width-2-3@xl uk-align-center">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div className="uk-card uk-background-default uk-margin-bottom uk-grid" key={index}>
            <div className="uk-card-media-left uk-width-1-1 uk-width-1-3@m uk-width-1-3@l uk-width-1-3@xl uk-cover-container" style={{ padding: `0` }}>
              <Link to={`/${node.frontmatter.path}`}>
                <Img fluid={node.frontmatter.hero.childImageSharp.fluid} alt={node.frontmatter.title} />
              </Link>        
            </div>
            <div className="uk-width-1-1 uk-width-2-3@m uk-width-2-3@l uk-width-2-3@xl">
              <div className="uk-card-body">
                <h2 className="uk-card-title">
                  <Link to={`/${node.frontmatter.path}`}>{node.frontmatter.title}</Link>
                </h2>
                <p className="uk-text-meta">@ {node.frontmatter.date}</p>
                <p>
                  {node.frontmatter.tags.map((tag, i) => {
                    return(
                      <span className="uk-label uk-label-success uk-margin-small-right" key={i}>{tag}</span>
                    )
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
        <ul className="uk-pagination">
          {currentPage > 1 &&
            <li><Link to={`/post/${currentPage - 1}`}><span className="k-margin-small-right" data-uk-pagination-previous></span> Newer Posts</Link></li>
          }
          {currentPage < pagesNum &&
            <li className="uk-margin-auto-left"><Link to={`/post/${currentPage + 1}`}>Older Posts <span className="uk-margin-small-left" data-uk-pagination-next></span></Link></li>
          }
            
        </ul>
      </div>
      
    </Layout>
  )
};

export default PostList;