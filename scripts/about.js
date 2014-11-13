var andreas = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in elementum libero. Nullam convallis arcu vel feugiat rhoncus. Mauris feugiat pulvinar est, et porta erat imperdiet sit amet. Donec et diam augue. Donec blandit ac ipsum non molestie. Sed laoreet, nibh sed hendrerit ornare, nibh purus rhoncus velit, eu ornare nunc dolor sed nibh. Mauris semper maximus tellus nec volutpat. Donec egestas sodales ex. Suspendisse sagittis fermentum lectus et luctus. Nam laoreet cursus elementum. Nulla facilisi. Nulla facilisi. Nulla quis massa a orci tempor pellentesque. Pellentesque convallis felis quis nisi vehicula aliquam. Aliquam lacus quam, efficitur id laoreet quis, congue.";
var marius = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in elementum libero. Nullam convallis arcu vel feugiat rhoncus. Mauris feugiat pulvinar est, et porta erat imperdiet sit amet. Donec et diam augue. Donec blandit ac ipsum non molestie. Sed laoreet, nibh sed hendrerit ornare, nibh purus rhoncus velit, eu ornare nunc dolor sed nibh. Mauris semper maximus tellus nec volutpat. Donec egestas sodales ex. Suspendisse sagittis fermentum lectus et luctus. Nam laoreet cursus elementum. Nulla facilisi. Nulla facilisi. Nulla quis massa a orci tempor pellentesque. Pellentesque convallis felis quis nisi vehicula aliquam. Aliquam lacus quam, efficitur id laoreet quis, congue.";
var stian = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in elementum libero. Nullam convallis arcu vel feugiat rhoncus. Mauris feugiat pulvinar est, et porta erat imperdiet sit amet. Donec et diam augue. Donec blandit ac ipsum non molestie. Sed laoreet, nibh sed hendrerit ornare, nibh purus rhoncus velit, eu ornare nunc dolor sed nibh. Mauris semper maximus tellus nec volutpat. Donec egestas sodales ex. Suspendisse sagittis fermentum lectus et luctus. Nam laoreet cursus elementum. Nulla facilisi. Nulla facilisi. Nulla quis massa a orci tempor pellentesque. Pellentesque convallis felis quis nisi vehicula aliquam. Aliquam lacus quam, efficitur id laoreet quis, congue.";

var andreasLI = '<br /><a href="https://www.linkedin.com/profile/view?id=378039994&authType=NAME_SEARCH&authToken=91zq&locale=no_NO&trk=tyah2&trkInfo=tarId%3A1415294762174%2Ctas%3AAndreas%20%2Cidx%3A1-1-1">LinkedIn Profile</a>';
var mariusLI = '<br /><a href="https://www.linkedin.com/profile/view?id=375787843&authType=name&authToken=vg2l&trk=prof-connections-name">LinkedIn Profile</a>';
var stianLI = '<br /><a href="https://www.linkedin.com/profile/view?id=377903736&authType=NAME_SEARCH&authToken=D1xd&locale=no_NO&trk=tyah2&trkInfo=tarId%3A1415294914236%2Ctas%3AStian%20D%2Cidx%3A1-1-1">LinkedIn Profile</a>';

andreas += andreasLI;
marius += mariusLI;
stian += stianLI;


$(document).ready(function() {
	$("#andreas_text").prepend(andreas);
	$("#marius_text").prepend(marius);
	$("#stian_text").prepend(stian);
});
