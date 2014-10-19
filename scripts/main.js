var images = ["https://dl.dropboxusercontent.com/u/65639888/image/1.jpg", 
	"https://dl.dropboxusercontent.com/u/65639888/image/4.jpg", 
	"https://dl.dropboxusercontent.com/u/65639888/image/5.jpg"];
var count = 0;

window.setInterval(update, 10000);

function update() {
	if (count == 2)
		count = 0;
	else
		count++;
	document.getElementById("slideshow").src = images[count];
}