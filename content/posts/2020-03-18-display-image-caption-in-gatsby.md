---
path: post/2020-03-18-display-image-caption-in-gatsby
title: "Display Image's Caption in Gatsby"
date: 2020-03-21
hero: ../images/coding.jpg
tags: ["learning-to-code", "gatsby", "gatsby-remark-images"]
---

The caption of the image is very useful in articles. In Markdown syntax there's no place to add a caption to image:

```md
![This is alt](here-is-the-url-of-pic "Here is the title")
```

Then I found the this article: [Customising image display in gatsby](https://medium.com/@sgpropguide/customising-image-display-in-gatsby-3b027d783dce). It turned out the plugin <code>gatsby-remark-images</code> can do the caption thing for us. We need to set the option <code>showCaptions</code> to "true" which in the options of <code>gatsby-remark-images</code> in <code>config.js</code>:

```js
plugins: [
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 800,
      showCaptions: true,
    },
  },
]
```

And the "title" in the markdown syntax will automatically show as a caption. We can use the <code>.gatsby-resp-image-figcaption</code> to modify its styles.
