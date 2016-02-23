---
title:
- Jekyll设置从新标签页打开连接
categories:
- technique
tags:
- technique
- jekyll
- links
thumbnail:
- 5.jpg
qiniuurl:
- http://7xpt1l.com1.z0.glb.clouddn.com/6630807181445771777.jpg
---
Jekyll生成的超链接默认是在本窗口打开的，为了有更好地阅读体验，希望在新窗口中打开超链接，而并不影响阅读本文。
<!--more-->

### 情报
参考：[在Octopress中为markdown的超链接加上target="_blank"](http://www.blogjava.net/lishunli/archive/2013/01/20/394478.html)

### 干货

用到的关键代码为：

	function addBlankTargetForLinks () {
	  $('a[href^="http"]').each(function(){
	      $(this).attr('target', '_blank');
	  });
	}

	$(document).bind('DOMNodeInserted', function(event) {
	  addBlankTargetForLinks();
	});


代码为文档中的所有链接添加一个`target`属性，值为`_blank`，这样就可以在新标签页中打开链接，但应该注意要先引入jQuery。至于添加位置我觉得添加到`default.html`文件中更合适。