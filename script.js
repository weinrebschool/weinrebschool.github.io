/* 

JavaScript DOCUMENT
------------
Author: Sahibjot Saggu
Date: August 25, 2014
Filename: script.js

 */

 $(document).ready(function() {
 	// change slideshow text line-height
 	var slide_height = $("#pic1").css("height");
 	$("#pic1").css("line-height", slide_height);
 	$("#pic2").css("line-height", slide_height);
 	$("#pic3").css("line-height", slide_height);

 	// changing slideshow text line-height on resize
	$(window).resize(function() {
		 var slide_height = $("#pic1").css("height");
	 	$("#pic1").css("line-height", slide_height);
	 	$("#pic2").css("line-height", slide_height);
	 	$("#pic3").css("line-height", slide_height);

	}); 	

 	function animate_slideshow() {
		var delay = 2000;
		var t = 1000;
		$("#slideshow").animate({'left' : '0%'}, t).delay(delay).animate({'left' : '-100%'}, t).delay(delay).animate({'left' : '-200%'}, t).delay(delay);
	}

	for (var x = 0; x < 100; x++) {
		animate_slideshow();
	}

 });