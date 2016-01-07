---
title: "修改Payments的渣渣代码高亮"
categories: "代码样式"
tags: "代码样式"
thumbnail: 8.jpg
---
一直感觉Jekyll的代码高亮很不好，今天终于将其更改。
<!--more-->
之前按照教程生成了许多不同风格的Pygments样式表，但是总是感觉不太好，今天发现根源是代码字体的样式和大小的问题。"检查"发现main.scss引用了_base.scss，将`code`、`pre`，修改为Bootstrap代码样式的大小和字体之后，看起来好了很多。

###建议
鉴于本博客的设计风格问题，不适用代码的视觉效果是最好的。