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
              <p><a href="https://front-end-challenges.club/" target="_blank" rel="noopener noreferrer">Front-End Challenges Club</a></p>
              <p>Quick, fun challenges and solutions to help you to master front-end development.</p>
            </li>
            <li>
              <p><a href="https://piccalil.li/" target="_blank" rel="noopener noreferrer">Dang Spicy</a></p>
              <p>tutorials and courses to level you up as a front⁠-⁠end developer and designer</p>
            </li>
            <li>
              <p><a href="https://audio.trentwalton.com/" target="_blank" rel="noopener noreferrer">Audio from Trent Walton</a></p>
              <p>A little project, a online music player page.</p>
            </li>
            <li>
              <p><a href="https://www.taniarascia.com/" target="_blank" rel="noopener noreferrer">Tania Rascia</a></p>
              <p>A full stack developer. Her personal weibsite is full of writing about modern Javascript, Node.js and development.</p>
            </li>
            <li>
              <p><a href="https://csslayout.news/" target="_blank" rel="noopener noreferrer">CSS Layout Newsletter</a></p>
              <p>A weekly collection of tutorials, news and information on all things CSS Layout.</p>
            </li>
            <li>
              <p><a href="https://24ways.org/" target="_blank" rel="noopener noreferrer">24 WAYS</a></p>
              <p>24 ways is the advent calendar for web geeks. For twenty-four days each December we publish a daily dose of web design and development goodness to bring you all a little Christmas cheer.</p>
            </li>
            <li>
              <p><a href="https://react-tutorial.app/" target="_blank" rel="noopener noreferrer">React Tutorial</a></p>
              <p>Learn in an interactive environment. Understand how React works not just how to build with React.</p>
            </li>
            <li>
              <p><a href="https://educationlinks.fyi/" target="_blank" rel="noopener noreferrer">Education Links</a></p>
              <p>The Coronavirus Pandemic has resulted in school closures in many countries around the globe, so here is a collection of links to help you and your kids to access loads of resources from around the web.</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Links