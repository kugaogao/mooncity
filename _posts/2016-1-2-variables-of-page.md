---
title: "Jekyll官方文档学习之常用变量——页面(page)变量"
categories: "jekyll 官方文档"
tags: "jekyll 官方文档 变量"
actor: "RIO"
thumbnail: 1.jpg
---
主要有page.content、page.title、page.except、page.url、page.date、page.id等<!--more-->
在本页面中，page变量指的就是本页面，在for循环中的page循环变量不包括在内.

page.content 页面内容的源码。可以直接通过page.content访问本页面内容的源码，例如
<pre>
{{ page.content | }}
</pre>
也可以在查看其它页面内容的源码。例如:
{% for post in site.categories.update %}
<pre>
{{ post.content }}
</pre>
{% endfor %}

page.title 页面的标题。例如本页面的标题:
<pre>{{ page.title }}</pre>
page.excerpt 页面摘要的源码。例如本页面：
<pre>{{ page.excerpt }}</pre>

page.url 帖子以斜线打头的相对路径，例如本页面:
<pre>{{ page.url }}</pre>

page.date 帖子的日期，例如本博文：
<pre>{{ page.date }}</pre>

page.id 帖子的唯一标识码（在RSS源里非常有用），例如本页面:
<pre>{{ page.id }}</pre>

page.categories 这个帖子所属的 Categories。 Categories 也能在 YAML 头文件信息 中被设置。例如本页面：
<pre>{{ page.categories }}</pre>

page.tags 这个 Post 所属的所有 tags。Tags 是在YAML 头文件信息中被定义的。例如本页面：
<pre>{{ page.tags }}</pre>

page.path Post 或者 Page 的源文件地址。举例来说，一个页面在 GitHub 上的源文件地址。 这可以在 YAML 头文件信息 中被改写。例如本页面：
<pre>{{ page.path }}</pre>

page.next 当前文章在site.posts中的位置对应的下一篇文章。若当前文章为最后一篇文章，返回nil。例如本文下一篇文章:
{% if page.next %}
<a href="{{ page.next.url }}">{{ page.next.title }}</a>
{% endif %}

page.previous 当前文章在site.posts中的位置对应的上一篇文章。若当前文章为第一篇文章，返回nil。例如本文上一篇文章：
{% if page.previous %}
<a href="{{ page.previous.url }}">{{ page.previous.title }}</a>
{% endif %}

除了固有页面变量之外，页面变量也可以自定义，任何你自定义的头文件信息都会在 page 中可用。例如在本面的头信息中定义了actor变量:
<pre>{{ page.actor }}</pre>

