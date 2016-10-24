$(document).ready(function(){
	$(".main").onepage_scroll();
	
	
	$("#home").click(function() {
		$(".main").moveTo(1);
	});
	
	$("#providence").click(function() {
		$(".main").moveTo(2);
	});
	
	$("#tots").click(function() {
		$(".main").moveTo(3);
	});
	
	$("#shura").click(function() {
		$(".main").moveTo(4);
	});
	
	$("#contact").click(function() {
		$(".main").moveTo(5);
	});
});