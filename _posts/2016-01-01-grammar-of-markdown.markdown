---
title: "Markdown 语法练习"
tags: "Markdown learn"
thumbnail: 3.jpg
---
相关语法练习。
<!--more-->
采用markdown的语句之前应该空一行。

###一 标题设置（让字体变大）

###二级标题

###七 链接(Links)
内联方式:This is an example: [Google](http://www.google.com)
外联方式:[百度][1]、[淘宝][2]、[个人网站][3]

[1]: http://www.baidu.com "百度"
[2]: http://www.taobao.com "淘宝"
[3]: http://www.kugaogao.com "风轻扬"

###八 图片

内联方式: 

	![高清美图]({{ site.baseurl }}/assets/a.jpg)

引用方式 ：

	![青山绿水][lake]
	![少有人走的路][road]
	[lake]:url
	[road]:url

###九 代码  

`print "hello,world!"`