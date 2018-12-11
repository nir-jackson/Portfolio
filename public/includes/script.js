$(document).ready(function(){
	$(".main").onepage_scroll();
	
	
	$(".page1").click(function() {
		$(".main").moveTo(1);
	});
	
	$(".page2").click(function() {
		$(".main").moveTo(2);
	});
	
	$(".page3").click(function() {
		$(".main").moveTo(3);
	});
	
	$(".page4").click(function() {
		$(".main").moveTo(4);
	});
	
	$(".page5").click(function() {
		$(".main").moveTo(5);
	});

	$(".flexslider").flexslider({
		animation: "slide",
		itemWidth: 1100,
	});
	

});