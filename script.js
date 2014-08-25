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


 	// on right arrow click

 	$("#right_arrow").click(function() {
 		document.write("Right arrow clicked.");
 	});

 });