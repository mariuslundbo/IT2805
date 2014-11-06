var andreas = "andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, andreas, ";
var marius = "marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, marius, ";
var stian = "stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, stian, ";

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
