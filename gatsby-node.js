const path = require("path")

const createPostsList = (createPage, posts) => {
  const postsListTemplate = path.resolve(`./src/templates/post-list.js`)

  const postsPerPage = 10
  const postsNum = posts.length
  const pagesNum = Math.ceil(postsNum / postsPerPage)
  Array.from({ length: pagesNum }).forEach((_, i) => {
    createPage({
      path: `/post/${i + 1}`,
      component: postsListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pagesNum,
        currentPage: i + 1,
      },
    })
  })
}

const createSinglePostPage = (createPage, posts) => {
  const singlePostPageTemplate = path.resolve(`./src/templates/post.js`)

  posts.forEach(({ node }, index) => {
    createPage({
      path: `/${node.frontmatter.path}`,
      component: singlePostPageTemplate,
      context: {
        pathName: node.frontmatter.path,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })
}

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve(`./src/templates/all-tags-index.js`)
  const singleTagPostsTemplate = path.resolve(
    `./src/templates/single-tag-posts.js`
  )

  postsByTag = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }
        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: "/tags",
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  })

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagPostsTemplate,
      context: {
        posts,
        tagName,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              path
              tags
              title
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges

  createPostsList(createPage, posts)

  createSinglePostPage(createPage, posts)

  createTagPages(createPage, posts)
}
