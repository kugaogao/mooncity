---
title: "Jekyll官方文档学习之常用变量——全站(site)变量"
categories: "jekyll"
tags: "jekyll 官方文档"
thumbnail: 13.jpg
---
Jekyll 会遍历你的网站搜寻要处理的文件。任何有 YAML 头信息的文件都是要处理的对象。对于每一个这样的文件，Jekyll 都会通过 Liquid 模板工具来生成一系列的数据。下面就是这些可用数据变量的参考和文档。
<!--more-->

#### site.time 
当前时间（最近一次运行jekyll命令的事件）,例如：{{ site.time }}

#### site.pages 
所有pages清单,指的是静态页面清单，可以用Liquid模板语言中的for循环遍历。前面已经提到过header.html文件用到了这个变量。
列出静态页面：
<ul class="pages">
{% for page in site.pages limit:5 %}
  {% if page.title %}
    <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

#### site.posts 
按照时间倒序的所有Posts清单，可以用Liquid模板语言中的for循环遍历。根目录中的index.html页面用这个变量遍历所有博文。
列出一部分博文：
<ul class="posts">
{% for post in site.posts limit:5 %}
  {% if post.title %}
    <li><a href="{{ post.url | prepend: site.baseurl}}">{{ post.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

#### site.related_posts 
如果当前被处理的页面是一个 Post，这个变量就会包含最多10个相关的 Post。是一个与当前页面相关的全局变量。 用jekyll 这个命令带上 --lsi (latent semantic indexing) 选项来计算高相关性的 Post。
列出相关博文：
<ul class="posts">
  {% for post in site.related_posts limit:5 %}
    {% if post.title %}
      <li><a href="{{ post.url | prepend: site.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

#### site.static_files 
静态文件的列表，图片、pdf等不会被渲染的文件。列出静态文件:
<ul class="posts">
  {% for file in site.static_files limit:5 %}
      <li>
        <p>文件类型:{{ file.extname }}</p>
        <p><a href="{{ file.path }}">文件路径</a></p>
        <p>上次修改时间:{{ file.modified_time }}</p>
      </li>
  {% endfor %}
</ul>

#### site.html_pages 
'site.pages'的子集，存储类型为html的静态页面。
列出类型为html的静态页面:
<ul class="pages">
{% for page in site.html_pages limit:5  %}
  {% if page.title %}
    <li><a href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

#### site.html_files 
'site.static_files'的子集，存储以'html'结尾的部分。
列出类型为html的静态文件:
<ul class="posts">
  {% for file in site.html_files limit:5 %}
      <li>
        <p>文件类型:{{ file.extname }}</p>
        <p><a href="{{ file.path }}">文件路径</a></p>
        <p>上次修改时间:{{ file.modified_time }}</p>
      </li>
  {% endfor %}
</ul>

#### site.collections 
一个所有集合(collection)的清单。
清单:
<ul class="posts">
  {% for c in site.collections limit:5 %}
      <li>
        <p>Scope:{{ c.scope }}</p>
        <p>values:{{ c.values }}</p>
      </li>
  {% endfor %}
</ul>

#### site.data 
存储./_data目录下YAML文件数据的清单。_data文件本来是不存在的，我自己建立了_data目录并创建了一个YAML文件。
遍历清单:
<ul class="posts">
  {% for d in site.data limit:5 %}
      <li>
        <p>{{ d.title }}</p>
      </li>
  {% endfor %}
</ul>


#### site.documents 
每一个集合（collection）中的全部文件的清单。
列出清单：
<ul class="posts">
  {% for file in site.documents limit:5 %}
      <li>
       <a href="{{ file.url }}">{{ file.title }}</a>
      </li>
  {% endfor %}
</ul>

#### site.categories.CATEGORY 
所有的在 CATEGORY 类别下的帖子。
例如遍历catorories属于jekyll 的帖子:
<ul class="posts">
  {% for post in site.categories.jekyll limit:5 %}
    {% if post.title %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

#### site.tags.TAG 
所有的在 TAG 标签下的帖子。
例如寻找标签为 document 的帖子:
<ul class="posts">
  {% for post in site.tags["document"] limit:5 %}
    {% if post.title %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

#### site.[CONFIGURATION_DATA] 
除了固有的全局变量之外还可以自定义全局变量。所有的通过命令行和 _config.yml 设置的变量都会存到这个 site 里面。Jekyll 并不会把对 _config.yml 做的改动放到 watch 模式，所以你每次都要重启 Jekyll 来让你的变动生效。例如在_config.yml文件中设置了hello变量，就可以在YAML文件中通过site.hello来访问它：
{{ site.hello }}