---
title: "Jekyll官方文档学习之集合"
categories: "jekyll 官方文档"
tags: "jekyll 集合"
thumbnail: 10.jpg
---
并非所有的都会是文章或页面。也许您想要记录您开源项目中涉及的各种解决方案，团队成员，或是某次会议记录。集合（Collection）允许您定义一种新的文档类型，它既可以像页面和文章那样工作，也可以拥有它们特有的属性和命名空间。<!--more-->

一 首先让jekyll读取你的集合，在_config.yml中将相关信息设置好。
例如:
## {% highlight ruby linenos %}
    collections:
    - albums
    beauty:
      foo: bar 
## {% endhighlight %}
设置了两个集合albums与beauty。
然后为集合设置默认的属性，例如：
## {% highlight ruby linenos %}
   defaults:
   - scope:
       path:""
       type: albums
     values:
       layout: "ablum" #使用相册模板 
## {% endhighlight %}
为集合中的文件指定默认的模板。

二 加入内容

创建对应的文件夹，因为设定的集合为albums，因此在根目录下创建文件夹_albums。并在目录下创建一系列md文件，文件名为字母数字组合。自定义集合中的文件不会自动被读取，posts，pages实际上也是一个集合，不过它们会被Jekyll自动读取并渲染。

首先在_config.yml文件中选择性渲染你的集合文件为独立文件。
{% highlight ruby linenos %}
collections:
  albums:
    output:true
{% endhighlight %}
允许将albums集合渲染为独立文件。应该注意：对_config.yml所做的任何更改在重启jekyll之后才会生效。

三 用Liquid读取集合

例如通过site.albums变量读取albums集合。文档数组site.albums。问题依然存在，album.name和album.output_ext没有显示，album.permalink也不能读取固定链接。
<ul class="list">
{% for album in site.albums limit:2%}
  {% if album.title %}
    <li>
      <p>文件名:{{ album.name }}</p>
      <p>文档的标题:{{ album.title }}</p>
      <p>文档所属的集合:{{ album.collection }}</p>
      <p>文档类型:{{ album.output_ext }}</p>
      <p>文档相对于集合文件夹的路径:{{ album.path }}</p>
      <p>固定链接:{{ album.permalink }}</p>
      <a href="{{ album.url }}">{{ album.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>

每一个文档还具有以下属性：content、output、path、relative_path、url、collection。举例如下：
<ul class="list">
{% for album in site.albums limit:1 %}
  <li>未被渲染的文档的内容:{{ album.content }}</li>
  <li>被渲染的文档内容:{{ album.output }}</li>
  <li>文档源文件的完整路径:{{ album.path }}</li>
  <li>文档相对于站点源的相对路径。:{{ album.relative_path }}</li>
  <li>渲染后集合的 URL:{{ album.url }}</li>
{% endfor %}
</ul>
<style type="text/css">
.list{
	list-style:none;
}
.list li{
	font-size:14px;
}
</style>