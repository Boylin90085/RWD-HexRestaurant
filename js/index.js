$(document).ready(function(){
	$("#toyummy").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#whyummy").offset().top
   		}, 800);
	});
	$("#tochef").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#chef").offset().top
   		}, 800);
	});
	$("#toreserve").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#reserve").offset().top
   		}, 800);
	});
})