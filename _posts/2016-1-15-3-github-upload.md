---
title: "将本地项目上传到Github"
categories: 
- technique
tags: 
- "github"
thumbnail: 9.jpg
qiniuurl: http://7xpt1l.com1.z0.glb.clouddn.com/image%2Fnature%2Fphoto-1450101215322-bf5cd27642fc.jpg
---
基本步骤。
<!--more-->

### 第一次提交

#### 1. 项目初始化
到Jekyll 项目下，运行命令：
	
	git init

#### 2. 创建名为gh-pages的分支

	git checkout --orphan gh-pages

#### 3. 发布

	git add .
	git commit -a -m "v1.1 mooncity"

#### 4. 上传到github

	git remote add origin https://github.com/(github用户名)/(jekyll项目名称).git
	git push origin gh-pages

### 修改后提交

#### 1. 增加所有新增的文件到项目中

	git add .

#### 2. 提交所有修改

	git commit -a -m "自己的提交注释"

#### 3. 将修改提交到远程github服务器

	git push origin gh-pages

### 问题及解决方法

#### 1. 删除文件造成的问题
如果本地项目中删除了一些文件，提交会出现问题，此时应强行替代远程文件。

	git push -f origin gh-pages

#### 2. 更改origin
若要将本地项目上传到另一个仓库中，应更改origin：

	git remote rm origin
	git remote add origin (新的origin)
	git push origin gh-pages