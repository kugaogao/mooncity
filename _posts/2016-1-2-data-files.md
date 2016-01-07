---
title: "Jekyll官方文档学习之数据文件"
categories: "jekyll 官方文档"
tags: "jekyll 数据文件"
author: "ukugaogao"
thumbnail: 10.jpg
---
###数据文件

Jekyll 支持从 _data 目录下的 YAML、JSON 和 CSV 载入数据，注意 CSV 文件必须包含表头行。<!--more-->
_data 目录用于存储供 Jekyll 生成网站的附加数据。这些文件可以使用 .yml、.yaml、.json、csv 扩展名，并可通过 site.data 访问。
文件名决定了变量名。

####数据可以直接放在_data文件夹下。
例如在_data文件下创建了members.yml和members.csv文件并根据相应的格式保存了数据。这些数据可以通过site.data.members访问：
<ul class="list">
{% for member in site.data.members %}
  <li>
    <a href="http://github.com/{{ member.github }}">{{ member.name }}</a>
  </li>
{% endfor %}
</ul>

####数据也可以放在_data的子目录下。

每层目录都将添加进变量的命名空间。例如在`_data`目录下创建子目录`orgs`,并创建数据文件`jekyll.yml`和`doeorg.yml`,保存在其中。通过 `site.data.orgs `加上各自的文件名访问。

例如：
<ul class="list">
{% for org_hash in site.data.orgs %}
{% assign org = org_hash[1] %}
  <li>
    <a href="https://github.com/{{ org.username }}">
      {{ org.name }}
    </a>
    ({{ org.members | size }} members )
  </li>
{% endfor %}
</ul>

###访问特定的数据项目

根据不同的作者从数据文件中提取不同的信息。比如可以在页面中指定author变量，然后从数据文件中提取相应的作者信息展示在页面上。例如:

{% assign author=site.data.people[page.author] %}
<a rel="author" href="{{ author.site }}">{{ author.name }}</a>

<style type="text/css">
.list{
	list-style:none;
}
.list li{
	font-size:14px;
}
</style>