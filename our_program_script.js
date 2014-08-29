$(document).ready(function() {
	//$("#phone_footer_2").css("top")
	var cont_h = Number(($("#content").css("height")).replace("px", ""));
	var tot = toString(cont_h + 40);
	$("#phone_footer_2").css("top", '1080px');
	//document.write($("#phone_footer_2").css("top"));
});