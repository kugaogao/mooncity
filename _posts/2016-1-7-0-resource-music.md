---
title: "为博客添加音乐资源"
categories: "博客进阶"
tags: "音乐"
thumbnail: 10.jpg
---
在线音乐播放
<!--more-->

###使用html5标签和七牛云外链
cast away
<audio src="http://7xpt1l.com1.z0.glb.clouddn.com/thumbnailcast%20away.mp3" controls>
您的浏览器不支持audio元素。
</audio>
Enchantment
<audio src="http://7xpt1l.com1.z0.glb.clouddn.com/Enchantment.mp3" controls>
您的浏览器不支持audio元素。
</audio>
Inspire
<audio src="http://7xpt1l.com1.z0.glb.clouddn.com/Inspire.mp3" controls>
您的浏览器不支持audio元素。
</audio>
Journey
<audio src="http://7xpt1l.com1.z0.glb.clouddn.com/Journey.mp3" controls>
您的浏览器不支持audio元素。
</audio>

###使用网易云音乐
**使用iframe标签**。
md文件不支持，html文件支持，因此在静态文件中可以使用此种方法。查看效果，请转至”音乐“页面。

代码

	<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="http://music.163.com/outchain/player?type=2&id=34834180&auto=1&height=66">
	您的浏览器不支持iframe元素。
	</iframe>

**flash插件**
完美支持

代码

	<embed src="http://music.163.com/style/swf/widget.swf?sid=4956882&type=2&auto=1&width=320&height=66" width="340" height="86"  allowNetworking="all"></embed>

效果如下
<embed src="http://music.163.com/style/swf/widget.swf?sid=4956882&type=2&auto=1&width=320&height=66" width="340" height="86"  allowNetworking="all">
	请下载Flash插件。
</embed>

