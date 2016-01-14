$(function(){
	function d(){
		if ($(this).find(".kids")){
			$(this).find(".kids").slideToggle();
		}
		console.log("hello");
	}
	$(".site-footer .nav li").click(d);
})