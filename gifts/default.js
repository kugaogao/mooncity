$(function(){

	/*
	* 组织层级关系
	* 从底层节点开始处理
	*/
	
	//处理 4 级 节点
	$(".level4Indent").each(function(i){
		//处理 5 级节点
		copynodeBtonodeAasChild(this,"level5Indent","level5Indents");
		//绑定事件
		$(this).click(function(){
			$(this).find(".level5Indents").toggle();
		});
	});
	//处理 3 级 节点
	$(".level3Indent").each(function(i){
		copynodeBtonodeAasChild(this,"level4Indent","level4Indents");
	});
	//处理 2 级 节点
	$(".level2Indent").each(function(i){
		copynodeBtonodeAasChild(this,"level3Indent","level3Indents");
	});
	//处理 1 级 节点
	$(".level1Indent").each(function(i){
		copynodeBtonodeAasChild(this,"level2Indent","level2Indents");
	});
	// 隐藏所有 5 级 节点
	$(".level5Indents").hide();


	/*
	*生成辅助导航
	*/

	var wrapper=$("<div class='wrapper'></div>");
	var nav=$("<div class='right-nav'></div>");
	nav.appendTo($("body"));
	$(".level2Indent").each(function(i){
		var id="2("+i+")";		//为节点编号 便于索引；
		$(this).attr({"id":id});
		//生成一个指向 2级节点 的链接
		$("<a href=#"+id+"></a>").text($(this).find(".level2Style").text()).attr("class","two").css("padding-left","1em").appendTo(wrapper);
		$(this).find(".level3Indent").each(function(j){
			var id="2("+i+")"+"3("+j+")";		//为节点编号
			$(this).attr({"id":id});
			//生成一个指向 3级节点 的链接
			$("<a href=#"+id+"></a>").text($(this).find(".level3Style").text()).attr("class","three").css("padding-left","2em").appendTo(wrapper);
			$(this).find(".level4Indent").each(function(k){
				var id="2("+i+")"+"3("+j+")"+"4("+k+")";		//为节点编号
				$(this).attr({"id":id});
				//生成一个指向 4级节点 的链接
				$("<a href=#"+id+"></a>").text($(this).find(".level4Style").text()).attr("class","four").css("padding-left","4em").appendTo(wrapper);
			})
		})
	})
	wrapper.appendTo(nav);
})


/*
* 将所有 此 nodeA 节点之后 下一个 nodeA 节点之前的所有 id 为 nodeB 节点作为 A 的子节点
* nodeA 界限节点 
* nodeB 界限节点之间的节点
* className 包裹 B 类节点的父节点的 class
*/

function copynodeBtonodeAasChild(nodeA,nodeB,className){
	var father=$("<ul class='"+className+"'></ul>"); 	// 构造一个父节点
	var child=$(nodeA).next();					        // A类型节点的下一个节点
	while(child.attr("class") == nodeB){
		var tempEle=child.next();
		child.appendTo(father);			//将节点添加到节点组中
		child=tempEle;				    //继续检测下一个节点
	}
	father.appendTo(nodeA);
}