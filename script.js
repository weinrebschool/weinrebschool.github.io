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
		var win_width = $(window).width();
	 	$("#pic1").css("line-height", slide_height);
	 	$("#pic2").css("line-height", slide_height);
	 	$("#pic3").css("line-height", slide_height);
	});

	// clicking on the white bars during phone mode
	$("#bars").click(function() {
		if ($("#phone_nav").css("top") == "-240px") {
			$("#phone_nav").css("top", "40px");
		}

		else {
			$("#phone_nav").css("top", "-240px");
		}
	});
	
	// fade Slideshow
	$("#slideshow > div:gt(0)").hide();

	setInterval(function() { 
	  $('#slideshow > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#slideshow');
	},  3000);
 });