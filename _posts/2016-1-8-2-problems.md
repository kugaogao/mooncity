---
title: "错误提示:Internal Server Error"
categories: "Problems"
tags: "Problems"
thumbnail: 13.jpg
---
问题描述、原因、解决办法。
<!--more-->

###问题描述
在文章中，将categories头信息设定为中文。点击页面打开文章时会出现错误提示：

	Internal Server Error
	"\xA7\x91" from GBK to UTF-8
	WEBrick/1.3.1 (Ruby/2.0.0/2014-11-13) at localhost:4000

但是停放在github上的页面不会出现此问题。

###原因
jekyll根据categories变量创建文章目录，将categories值设定为中文会导致文章路径中含有中文字符，导致错误。

###解决办法
避免在categories值中出现中文字符。
