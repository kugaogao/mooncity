---
title: "为Github上的静态博客绑定域名"
vategories: "github"
tags: "github blog domain"
thumbnail: 6.jpg
---
为github上的静态页面绑定自己的域名。
<!--more-->

###操作方法
我的静态博客建立在仓库mooncity的gh-pages分支下，因此在此分支下建立CNAME文件，里面写上所用的域名。在域名服务商阿里云那里修改域名指向设置。修改A记录，使之指向`192.30.252.153`，利用ping命令`ping -a 192.30.252.153`发现此IP的域名为`pages.github.com`，说明域名是可以用的。之前将域名指向了`192.30.252.131`，PING命令发现其域名为`github.com`，指向了github的官方首页，是错误的。
IP来源[百度经验](http://jingyan.baidu.com/article/dca1fa6fa1e403f1a5405262.html)。

###绑定域名之后出现的问题

**浏览器访问出现CSS文件加载错误**
将配置文件_config.yml的baseurl设置为空字串，此问题得到解决。但是此时已经不能在`http://kugaogao.github.io/mooncity`下调试，要想在`http://kugaogao.github.io/mooncity`下调试，要把baseurl设置为`/mooncity`。

**谷歌浏览器访问总是https打开，结果无法访问**
解决办法为启用HTTPS，参见教程[现在就启用 HTTPS，免费的](http://www.oschina.net/translate/switch-to-https-now-for-free?cmp)。