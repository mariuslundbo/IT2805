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

		fX = r * Math.cos(time + 250) + centerX;
		fY = r * Math.sin(time + 250) + centerY;

		ieX = r * Math.cos(time + 500) + centerX;
		ieY = r * Math.sin(time + 500) + centerY;

		oX = r * Math.cos(time + 750) + centerX;
		oY = r * Math.sin(time + 750) + centerY;

		sX = r * Math.cos(time + 1000) + centerX;
		sY = r * Math.sin(time + 1000) + centerY;

		draw(cX, cY, fX, fY, ieX, ieY, oX, oY, sX, sY);

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