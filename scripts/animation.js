var INTERVAL = 1;
var r = 180;
var centerX = 180;
var centerY = 180;

var imgC = new Image();
var imgF = new Image();
var imgIe = new Image();
var imgO = new Image();
var imgS = new Image();

imgC.src = "images/chrome.png";
imgF.src = "images/firefox.png";
imgIe.src = "images/internet-explorer.png";
imgO.src = "images/opera.png";
imgS.src = "images/safari.png";

var cX = 0;
var cY = 0;
var fX = 0;
var fY = 0;
var ieX = 0;
var ieY = 0;
var oX = 0;
var oY = 0;
var sX = 0;
var sY = 0;

addEventListener("load", function() {
	var time = 0;

	var timer = setInterval(function() {
		// Calculate positions
		cX = r * Math.cos(time) + centerX;
		cY = r * Math.sin(time) + centerY;

		fX = r * Math.cos(time + 2*Math.PI/5) + centerX;
		fY = r * Math.sin(time + 2*Math.PI/5) + centerY;

		ieX = r * Math.cos(time + 2*2*Math.PI/5) + centerX;
		ieY = r * Math.sin(time + 2*2*Math.PI/5) + centerY;

		oX = r * Math.cos(time + 3*2*Math.PI/5) + centerX;
		oY = r * Math.sin(time + 3*2*Math.PI/5) + centerY;

		sX = r * Math.cos(time + 4*2*Math.PI/5) + centerX;
		sY = r * Math.sin(time + 4*2*Math.PI/5) + centerY;

		draw(cX, cY, fX, fY, ieX, ieY, oX, oY, sX, sY);

		if (time > 2 * Math.PI)				// Reset time to prevent to large numbers in the calculations
	    	time = 0;

		time += (INTERVAL / 1000);
	}, INTERVAL);
});

function draw(cX, cY, fX, fx, ieX, ieY, oX, oY, sX, sY) {
	var canvas = document.getElementById("the-canvas");
	var ctx = canvas.getContext("2d");

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// Clear the canvas

	// Draw images
	ctx.drawImage(imgC, cX, cY);
	ctx.drawImage(imgF, fX, fx);
	ctx.drawImage(imgIe, ieX, ieY);
	ctx.drawImage(imgO, oX, oY);
	ctx.drawImage(imgS, sX, sY);
}