This is the code of my personal website [cyishere](https://cyishere.github.io).


## frontmatter format
```md
---
path: post/<slug>
title: 
date: 
hero: ../images/<picName>
tags: [""]
---
```

```jsx
// 有bug，不可使用
{node.frontmatter.hero && (
              <div className="uk-card-media-left uk-width-1-1 uk-width-1-3@m uk-width-1-3@l uk-width-1-3@xl uk-cover-container" style={{ padding: `0` }}>
                <Link to={`/${node.frontmatter.path}`}>
                  <Img fluid={node.frontmatter.hero.childImageSharp.fluid} alt={node.frontmatter.title} />
                </Link>        
              </div>
            )}
            <div className={`uk-width-1-1 ${node.frontmatter.hero 
                            ? "uk-width-2-3@m uk-width-2-3@l uk-width-2-3@xl" 
                            : ""}`}>
```