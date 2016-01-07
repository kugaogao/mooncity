---
title: "Jekyll 中的语法高亮 Pygments"
categories: "jekyll pygments"
tags: "jekyll pygments 语法高亮"
thumbnail: 9.jpg
---
如何使用、问题、实例
<!--more-->

###如何使用？
详见网络资源：[Havee's Space](http://havee.me/internet/2013-08/support-pygments-in-jekyll.html)

###问题
生成了多个不同样式的pygments.css文件，并在页面中应用，但是并没有发现不同的样式之间有明显差别。与教程很不一样，想不通。

###C语言
{% highlight c %}
#include <stdio.h>
int main(int argc,char **argv){
	printf("Hello,world!\n");
	return 0;
}
{% endhighlight %}

###JavaScript
{% highlight js %}
function g(id){
	return document.getElementById(id);
}
{% endhighlight %}

###HTML
{% highlight html %}
  <div class="wrapper">
	<span></span>
  </div>
{% endhighlight %}

