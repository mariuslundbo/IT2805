// var images = ["https://dl.dropboxusercontent.com/u/65639888/image/1.jpg", 
	// "https://dl.dropboxusercontent.com/u/65639888/image/4.jpg", 
	// "https://dl.dropboxusercontent.com/u/65639888/image/5.jpg"];
// var count = 0;
// 
// window.setMS(update, 10000);
// 
// function update() {
	// if (count == 2)
		// count = 0;
	// else
		// count++;
	// document.getElementById("slideshow").src = images[count];
// }


// Slideshow animation JQuery
// $("document").ready(function() {
// 	
	// $("#slideshow_images").cycle({ 
		// fx: "scrollLeft", 
    	// speed:    600, 
    	// timeout:  5000 });
//     
// });


var next = 2;			// Next image
var MS = 10000;			// Interval
var SPEED = 800;		


$(document).ready(function() {
	var n = $("#slideshow img").size();				
	
	$("#slideshow #1").show();																		// Show first image 
	$("#slideshow #1").delay(MS-(2*SPEED)).hide("slide", {direction: "left"}, SPEED);				// Slide out first image
	
	setInterval(function() {
		$("#slideshow #" + next) .show("slide", {direction: "right"}, SPEED);						// Slide in next image from the right side
		$("#slideshow #" + next) .delay(MS-(2*SPEED)).hide("slide", {direction: "left"}, SPEED);	// Wait and slide out image to the left side
		
		next++;		
		if (next > n)	// Reset next when reaching the end
			next = 1;	
		
	}, MS);
	
});


