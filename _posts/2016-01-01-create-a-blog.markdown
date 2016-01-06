---
title: "撰写博客"
categories: "tutorials"
tags: "tutorials jekyll"
thumbnail: 2.jpg
---
Jeklly 的一个最好的特点是『关注 blog 本身』。这是指什么呢？简单的说就是写博客的过程被铸造进了 Jekyll 的功能中。你只需简单的管理你电脑中的一个文件夹下的文本文件就可以写文章并方便的在线上发布。与繁琐的配置和维护数据库和基于网站的内容管理系统 (CMS) 相比，这是一个非常受欢迎的改变。
<!--more-->

###一 高亮代码片段
	def show
		@widget=Widget(params[:id])
		respond_to do |format|
		  format.html # show.html.erb
		  format.json { render json: @widget}
		end 
	end

###二 使用草稿  

在./_drafts目录中保存草稿文章，文章写法与正常的文章相同，只是文件名中不必包含日期。然后运行jekyll serve --drafts就可以查看以草稿作为最新文章的网站。

###三 创建页面

在根目录下创建一个静态页面。

####可以创建一个html页面

此时参照根目录下index.html文件的写法。index.html的模板用的是default,default模板是最基本的模板，页面最外层的框架，几乎所有的模板都会用到。page和post模板都引用了default模板，其中page模板用于静态页面，这样我们就可以只关心静态页面的文本内容，而不必去担心HTML代码如何编写。
post模板用于博客文章，里面多定义了一些博客文章用到的html标签。
创建静态页面的时候多用page模板，当然也可以用自己编写的模板，比如`my_page.html`。

####写静态html页面的时候应该注意：

1. __可以使用模板__。
在文件头信息中指定。
2. __使用html而不是markdown语言__。因为最终要保存为html页面，所以在静态页面中应该使用html字串编写，写成markdown格式是不会被转换的。
3. __可以使用style标签编写样式表，使用script标签写javascript程序__
4. __可以使用Liquid模板语言__(前提是一定要有YAML头信息，否则文件将会被视为静态文件而不会被渲染)
5. __优点__
使用html静态页面可以充分发挥html知识，结合自定义模板实现对静态页面完全的自定义。

####也可以创建一个md页面：
使用markdown语法和模板创建一个静态页面，让我们更加关注与内容本身，而不必费力编写html代码。

#####创建md静态页面具有如下特点
1 在md页面中同样可以使用html字串，使用style标签编写样式表，使用script标签编写javascript程序
2 使用Liquid模板语言

总之使用md 静态页面更加省时省力

在根目录下的静态页面会被./_includes 中的header.html中的Liquid模板代码添加到模板中。
header.html中相关代码如下:
{% highlight ruby linenos%}
 <div class="trigger">
 </div>
{% endhighlight %}

####第二种创建静态页面的方法

在根目录下创建一个文件夹并包含一个index.html文件。这样创建的静态文件的目录名同样会被保存在site.pages数组中。
site.pages可以访问静态页面,是一个数组。