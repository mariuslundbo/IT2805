var fw = "jQuery from http://jquery.com/ <br/> ajax from http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js <br /> and jQuery UI http://ajax.aspnetcdn.com/ajax/jquery.ui/1.10.3/jquery-ui.js" ;
var img = "The images alternative.jpg, logo_dark_grey.png, logo_grey.png, logo.png, search_grey.png, search_white.png, search.png are all made by Stian Dysthe. <br />The profile pictures andreas.jpg, marius.jpg and stian.jpg are all private pictures. ";
var multi = "The multimedia from the Work page is made by Stian Dysthe.";

$(document).ready(function() {
	$("#frameworks").prepend(fw);
	$("#images").prepend(img);
	$("#multimedia").prepend(multi);
}); 

