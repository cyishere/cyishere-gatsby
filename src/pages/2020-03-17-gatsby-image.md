---
path: post/2020-03-17-gatsby-image
title: "Auto-Optimize Images On MY Gatsby Site"
date: 2020-03-17
hero: ../images/gatsby-image.jpg
tags: ["learning-to-code", "gatsby"]
---

## #100DaysOfGatsby Challenge 3

Today I followed [#100DaysOfGatsby Challenge 3](https://www.gatsbyjs.org/blog/100days/gatsby-image/) to optimize the images on my site. In the beginning, it drove me crazy.

I structured my code like this at first:

```
- content/
  - posts/
    - article1.md
    - article2.md
- src/
  - components/
  - pages/
    - index.js
    - about.js
  - scss/
  - templates/
- static/
  - images/
    - pic-of-article1.jpg
    - pic-of-article2.jpg
```

And the frontmatter in markdown files like this:

```md
---
<!-- content/posts/article1.md -->
title: This is the title of article1
hero: pic-of-article1.jpg
---
```

The configures in <code>gatsby-config.js</code>:

```
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/content/post/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/static/images/`
      }
    }
  ]
}
```

I used the plugin <code>gatsby-source-filesystem</code> to sourcing data, and it all worked fine until I started to use <code>gatsby-image</code> to optimize images.

When I follow the [document](https://www.gatsbyjs.org/docs/working-with-images-in-markdown/) to configure <code>gatsby-image</code> I couldn't get the images.

```js
export const query = graphql`
    query PostContent($pathName: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathName } }) {
            frontmatter {
                title
                hero {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
        }
    }
`
```

The <mark>error</mark> message showed up: 

```
Field \"hero\" must not have a selection since type \"String\" has no subfields.
```

I can't find the right solution for this until I restructured my code as same as in the document. Putting the markdown files in <code>/src/pages/</code> and the images in <code>/src/images/</code>.

```
- src/
  - components/
  - pages/
    - index.js
    - about.js
    - article1.md
    - article2.md
  - scss/
  - templates/
  - images/
    - pic-of-article1.jpg
    - pic-of-article2.jpg
```

```md
---
<!-- src/pages/article1.md -->
title: This is the title of article1
hero: ../images/pic-of-article1.jpg
---
```

Then the hero image automatically attached to the markdown node and everthing works fine!

I think the right way to do anything is just to follow the documents exactly and change my own habits.

#### Other Reading Materials

- [Add ImageSharp as a field to MarkdownRemark nodes (not frontmatter)](https://stackoverflow.com/questions/54636627/add-imagesharp-as-a-field-to-markdownremark-nodes-not-frontmatter?answertab=votes#tab-top)
- [Part 5: Adding Thumbnail Images to a Blog List](https://dennytek.com/blog/personal-site-with-gatsby-part-5)