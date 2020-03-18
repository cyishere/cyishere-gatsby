import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../templates/layout'

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Links = ({ data }) => {
  return(
    <Layout>
      <Helmet>
        <title>Links | {data.site.siteMetadata.title}</title>
      </Helmet>
      <div  className="uk-container uk-width-2-3@l uk-width-2-3@xl uk-align-center uk-margin-large">
        <div className="uk-article">
          <h2>Links</h2>
          <p>Here are some websites I found very cool and useful.</p>
          <ul>
            <li>
              <p><a href="https://front-end-challenges.club/">Front-End Challenges Club</a></p>
              <p>Quick, fun challenges and solutions to help you to master front-end development.</p>
            </li>
            <li>
              <p><a href="https://piccalil.li/">Dang Spicy</a></p>
              <p>tutorials and courses to level you up as a front⁠-⁠end developer and designer</p>
            </li>
            <li>
              <p><a href="https://audio.trentwalton.com/">Audio from Trent Walton</a></p>
              <p>A little project, a online music player page.</p>
            </li>
            <li>
              <p><a href="https://www.taniarascia.com/">Tania Rascia</a></p>
              <p>A full stack developer. Her personal weibsite is full of writing about modern Javascript, Node.js and development.</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Links