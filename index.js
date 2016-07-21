var songlist = [
    "music/cheap thrills.mp3",
    "music/Move Your Feet.mp3",
    "music/Viva La Vida.mp3",
	"music/Run Around.mp3",
	"music/Down Under.mp3",
	"music/Englishman In New York.mp3",
	"music/Bitter Sweet Symphony.mp3",
	"music/Rock The Casbah.mp3",
	"music/Whole Lotta Love.mp3",
	"music/The Sweetest Taboo.mp3"
];
var random_file = songlist[Math.floor(Math.random() * songlist.length)];
var bell = new Audio('bell.mp3');
var x =document.getElementById("currentSong");
var wednesday =document.getElementById("ai");
var mttf =document.getElementById("mttf");
var latestart =document.getElementById("latestart");
var halfday =document.getElementById("halfday");
var y =x.src=random_file;
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var seconds = new Date().getSeconds();
function clock(){
	var hour = new Date().getHours();
	var minute = new Date().getMinutes();
	var second = new Date().getSeconds();
	if(minute <10){
		document.getElementById("minute").innerHTML="0"+minute;
	}
	document.getElementById("minute").innerHTML=minute;
	document.getElementById("hour").innerHTML=hour;
	document.getElementById("second").innerHTML=second;
	setTimeout("clock()",1000);
}
function pause(){
	x.pause();
}
function work(){
	x.play();
	setTimeout("pause()",225000);
	setTimeout("secondbell()",300000);
}
function bellonly(){
	bell.play();
	setTimeout("secondbell()",240000);
}
function bellonlyfive(){
	bell.play();
	setTimeout("secondbell()",300000);
}
function belly(){
	bell.play();
	setTimeout("work()",3000);
}
function displaySong(){
	document.getElementById("name").innerHTML=random_file;
}
function secondbell(){
	bell.play();
}
function clicked(clicked_id){
	clicked_id.style.borderColor="white";
	if(clicked_id == mttf){
		mttfDay();
	}
	else if(clicked_id ==wednesday){
		aiDay();
	}
	else if(clicked_id ==latestart){
		latestartDay();
	}
	else if(clicked_id ==halfday){
		halfdayDay();
	}
}
function notclicked(){
	halfday.style.borderColor="rgba(0, 0, 0, 0.7)";
	latestart.style.borderColor="rgba(0, 0, 0, 0.7)";
	mttf.style.borderColor="rgba(0, 0, 0, 0.7)";
	wednesday.style.borderColor="rgba(0, 0, 0, 0.7)";
}
function mttfDay(){
	if(hours== 8 && minutes == 6){
		belly();
	}
	else if(hours == 9 && minutes == 2){
		belly();
	}
	else if(hours == 9 && minutes == 58){
		belly();
	}
	else if(hours == 10 && minutes == 54){
		bellonly();
	}
	else if(hours == 11 && minutes == 24){
		bellonly();
	}
	else if(hours == 11 && minutes == 53){
		bellonly();
	}
	else if(hours == 12 && minutes == 22){
		belly();
	}
	else if(hours == 13 && minutes == 18){
		belly();
	}
	else if(hours == 14 && minutes == 15){
		belly();
	}
}
function aiDay(){
	if(hours == 7 && minutes == 59){
		belly();
	}
	else if(hours == 8 && minutes == 48){
		belly();
	}
	else if(hours == 9 && minutes == 23){
		belly();
	}
	else if(hours == 10 && minutes == 13){
		belly();
	}
	else if(hours == 11 && minutes == 3){
		bellonly();
	}
	else if(hours == 11 && minutes == 33){
		bellonly();
	}
	else if(hours == 12 && minutes == 2){
		bellonly();
	}
	else if(hours == 12 && minutes == 31){
		belly();
	}
	else if(hours == 13 && minutes == 20){
		belly();
	}
	else if(hours == 14 && minutes == 25){
		belly();
	}
}
function latestartDay(){
	if(hours == 9 && minutes == 46){
		belly();
	}
	else if(hours == 10 && minutes == 22){
		belly();
	}
	else if(hours == 10 && minutes == 58){
		belly();
	}
	else if(hours == 11 && minutes == 34){
		bellonly();
	}
	else if(hours == 12 && minutes == 4){
		bellonly();
	}
	else if(hours == 12 && minutes == 33){
		bellonly();
	}
	else if(hours == 13 && minutes == 2){
		belly();
	}
	else if(hours == 13 && minutes == 38){
		belly();
	}
	else if(hours == 14 && minutes == 15){
		belly();
	}
}
function halfdayDay(){
	if(hours == 7 && minutes == 49){
		belly();
	}
	else if(hours == 8 && minutes == 28){
		belly();
	}
	else if(hours == 9 && minutes == 7){
		belly();
	}
	else if(hours == 9 && minutes == 46){
		belly();
	}
	else if(hours == 10 && minutes == 25){
		bellonly();
	}
	else if(hours == 10 && minutes == 43){
		bellonlyfive();
	}
	else if(hours == 11 && minutes == 22){
		belly();
	}
	else if(hours == 12 && minutes == 0){
		belly();
	}
}