import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../templates/layout';

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const About = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <title>About | {data.site.siteMetadata.title}</title>
            </Helmet>
            <div className="uk-container uk-width-2-3@l uk-width-2-3@xl uk-align-center uk-margin-large">
                <div className="uk-article">
                    <h2 className="uk-article-title uk-margin-large">About</h2>
                    <p>cyishere - CY is here - is the web home of full-stack developer CY (Y. Chen). This is where I talk about various web development and films - plus whatever else I currently find interesting.</p>
                    <p>Here are some video essays about films I made:</p>
                    <ul>
                        <li>Film Reviews: on <a href="https://www.youtube.com/watch?v=CiU3VVSK4V4&list=PLjjc192rmd7dWH69KThUEeVFOKX5pnnky">Youtube</a>, on <a href="https://space.bilibili.com/88447273/favlist?fid=106452973&ftype=create">Bilibili</a></li>
                        <li>Why These Films Are Good: on <a href="https://www.youtube.com/watch?v=4qMwCyt8-xI&list=PLjjc192rmd7era1Ks0q06D2CptNzwRRVV">Youtube</a>, on <a href="https://space.bilibili.com/88447273/favlist?fid=474591573&ftype=create">Bilibili</a></li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

export default About;