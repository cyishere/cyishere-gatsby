---
path: post/use-ffmpeg-to-extract-subtitles-from-videos
title: 使用ffmpeg提取视频中的字幕
date: 2020-01-24
hero: ffmpeg.png
tags: ["字幕"]
---

使用下面这行代码可以提取视频中的「软字幕」。「软字幕」对应的是「硬字幕」，后者是像水印一样打在画面上的，前者是可以通过播放器控制是否显示的。

```
ffmpeg -i movie.mkv -map 0:s:0 subs.srt
```

以上代码假设了视频的名称为<code>movie.mkv</code>，其中
- <code>-i</code>代表「input」；
- <code>-map</code>指出提取的是视频中的哪部分；
- 后面跟着的<mark>第一个</mark><code>0</code>是指「第一个视频」（这里只有一个视频）；
- <code>s</code>指的是「subtitles字幕」；
- <mark>最后的</mark><code>0</code>指字幕中的第一个（因为视频可以含有多个字幕文件）；
- 最后的<code>subs.srt</code>是指把提取出来的srt格式的字幕文件命名为「subs」。