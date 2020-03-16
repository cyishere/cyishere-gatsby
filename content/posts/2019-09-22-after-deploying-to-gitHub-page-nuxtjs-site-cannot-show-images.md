---
path: "post/after-deploying-to-github-page-nuxtjs-site-cannot-show-images"
title: "After Deploying to GitHub Page Nuxt.js Site Cannot Show Images"
date: "2019-09-22"
hero: "../images/pictures-404.png"
tags: ["Coding", "Nuxt.js"]
---

This is my new website build by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>. I'm so excited to use the new framework. But after deploying to the GitHub page, the site cannot show any picture.

Since the Nuxt.js automatically generates the static files like images to a new folder <code>_nuxt/</code>, and uses this path to show pictures. I thought maybe the underscore was the reason that caused the problem.

Then I found this article on GitHub Help: '<a href="https://help.github.com/en/articles/files-that-start-with-an-underscore-are-missing" target="_blank">Files that start with an underscore are missing</a>'.

Because of GitHub Pages uses Jekyll by default to build Pages sites. Because the way of how Jekyll works, any files or folders that start with <mark>_</mark>, <mark>.</mark>, <mark>#</mark> or end with <mark>~</mark> are not built.

The solution is to add a blank file named <code>.nojekyll</code> in the <code>dist/</code> folder.

So here we go. I have a new website.

<p class="alert alert-info">Actually, Nuxt.js automatically generates a <code>.nojekyll</code> file in the <code>dist/</code> folder. And this file cannot manually upload to git repository.</p>
