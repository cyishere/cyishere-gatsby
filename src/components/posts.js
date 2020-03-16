import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const PostsList = () => {
    return (
        <StaticQuery
            query={graphql`
                query First10Posts {
                    allMarkdownRemark(
                        sort: {fields: frontmatter___date, order: DESC}
                        limit: 5
                    ) {
                        edges {
                            node {
                                id
                                frontmatter {
                                    date(formatString: "YYYY-MM-DD")
                                    title
                                    path
                                    hero
                                    tags
                                }
                            }
                        }
                    }
                }
                
            `}
            render={data => (

                <div className="uk-width-1-1 uk-width-2-3@m uk-width-2-3@l uk-width-2-3@xl uk-align-center">
                    {data.allMarkdownRemark.edges.map(({ node }, index) => (
                        <div className="uk-child-width-expand" data-uk-grid key={index}>
                            <div className="uk-width-1-1  uk-width-1-4@s uk-width-1-4@m uk-width-1-3@l uk-width-1-3@xl">
                                {node.frontmatter.tags.map((tag, index) => (
                                    <span className="uk-label uk-label-success uk-margin-small-left" key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className="uk-width-1-1 uk-width-3-4@s uk-width-3-4@m uk-width-2-3@l uk-width-2-3@xl">
                                <div className="uk-card uk-background-default uk-margin-bottom uk-grid" key={node.id}>
                                    <div className="uk-card-media-left uk-width-1-1 uk-width-1-3@m uk-width-1-3@l uk-width-1-3@xl uk-cover-container">
                                        <Link to={`/${node.frontmatter.path}`}>
                                            <img src={node.frontmatter.hero} alt={node.frontmatter.title} data-uk-cover />
                                            <canvas></canvas>
                                        </Link>        
                                    </div>
                                    <div className="uk-width-1-1 uk-width-2-3@m uk-width-2-3@l uk-width-2-3@xl">
                                        <div className="uk-card-body">
                                            <h2 className="uk-card-title">
                                                <Link to={`/${node.frontmatter.path}`}>{node.frontmatter.title}</Link>
                                            </h2>
                                            <p className="uk-text-meta">@ {node.frontmatter.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    ))}
                    <ul className="uk-pagination">
                        <li className="uk-margin-auto-left">
                            <Link to="/post/1">
                                More <span data-uk-icon="chevron-double-right"></span>
                            </Link>
                        </li>
                    </ul>
                </div> 

                
            )}
        />
    );

};

export default PostsList;