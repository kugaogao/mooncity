$(function(){
	function d(){
		if ($(this).find(".kids")){
			$(this).find(".kids").slideToggle();
		}
		//console.log("hello");
	}
	$(".site-footer .categories li").click(d);
	$(".site-footer .tags li").click(d);
})