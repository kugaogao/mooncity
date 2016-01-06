---
title: "相册"
---
相册图片列表
<ul class="list">
{% for album in site.albums %}
  <li><a href="{{ site.baseurl }}{{ album.url }}">{{ album.title }}</a></li>
{% endfor %}
</ul>