---
title: "Jekyll官方文档学习之分页功能"
actegories: "jekyll 官方文档"
tags: "jekyll 分页"
thumbnail: 13.jpg
---
下载、设置、读取、测试<!--more-->

###下载
首先用`gem`从网上下载`jekyll-paginate`，否则后面会出现错误。

###测试
只能在根目录的index页面中进行测试，建立静态页面进行测试的想法行不通。paginator变量只能在 *根目录* 中的index页面和 *分页目录* 中的index页面中使用，在其他任何类型的页面中都是不能使用的。

###出现的问题

####分页目录能够正确创建，但是目录下的文章都是一样的，都是全部的文章？
使用分页功能时，Jekyll会以根目录下的index页面为模板创建分页目录中的index页面。我是在旧有的index基础上添加了分页代码，但是遍历文章的代码没有更改，仍然是site.posts，遍历的是所有文章。将site.posts更改为paginator.posts后此问题得到解决。

###参考资料
[Setting Up Jekyll Pagination](http://www.ericlagergren.com/blog/jekyll-pagination/)