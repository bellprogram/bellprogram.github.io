var songlist = [
    "music/cheap thrills.mp3",
	"music/Bitter Sweet Symphony.mp3",
	"music/Boston - More Than A Feeling.mp3",
	"music/Feel So Close - Calvin Harris [OFFICIAL LYRICS].mp3",
	"music/CAN'T STOP THE FEELING! (From DreamWorks Animation's _Trolls_) (Official Video).mp3",
	"music/clocks.mp3",
	"music/Derek And The Dominos - Layla.mp3",
	"music/DJ Snake - Middle (Audio) ft. Bipolar Sunshine.mp3",
	"music/Down Under.mp3",
	"music/Fergie - Clumsy.mp3",
	"music/Flume - Never Be Like You feat. Kai (Clean) [RADIO EDIT].mp3",
	"music/George Michael - Careless Whisper (Official Video).mp3",
	"music/Gnarls Barkley - Crazy.mp3",
	"music/Gwen Stefani - The Sweet Escape ft. Akon.mp3",
	"music/Kenny Loggins - Danger Zone.mp3",
	"music/Kiiara - Gold (Official Video).mp3",
	"music/Kungs vs Cookin’ on 3 Burners - This Girl.mp3",
	"music/light.mp3",
	"music/Major Lazer - Cold Water (feat. Justin Bieber & MØ) (Official Lyric Video).mp3",
	"music/mountain.mp3",
	"music/Move Your Feet.mp3",
	"music/OneRepublic - Wherever I Go (Audio).mp3",
	"music/OutKast -- Hey Ya lyrics.mp3",
	"music/Pon De Replay Lyrics - Rihanna.mp3",
	"music/Ride.mp3",
	"music/Santigold - Disparate Youth [Official Music Video].mp3",
	"music/Stevie Wonder - Sir Duke [HD].mp3",
	"music/take.mp3",
	"music/The Black Eyed Peas - Let's Get It Started.mp3",
	"music/The Black Eyed Peas - Where Is The Love_.mp3",
	"music/The Chainsmokers - Don't Let Me Down (Audio) ft. Daya (1).mp3",
	"music/The Jimi Hendrix Experience - All Along The Watchtower (Official Audio).mp3",
	"music/The Ocean.mp3",
	"music/The Sweetest Taboo.mp3",
	"music/toogood.mp3",
	"music/Treat You Better.mp3",
	"music/Viva La Vida.mp3",
	"music/wild.mp3",
];
var bell = new Audio('bell.mp3');
var x =document.getElementById("currentSong");
var wednesday =document.getElementById("ai");
var mttf =document.getElementById("mttf");
var latestart =document.getElementById("latestart");
var halfday =document.getElementById("halfday");
function clock(){
	var hour = new Date().getHours();
	var minute = new Date().getMinutes();
	var second = new Date().getSeconds();
	if(minute <10){
		document.getElementById("minute").innerHTML="0"+minute;
	}
	if(minute>=10){
		document.getElementById("minute").innerHTML=minute;
	}
	if(hour>12){
		hour-=12;
	}
	document.getElementById("hour").innerHTML=hour;
	document.getElementById("second").innerHTML=second;
	setTimeout("clock()",1000);
}
function pause(){
	x.pause();
}
x.addEventListener("ended", function() {
	var random_file = songlist[Math.floor(Math.random() * songlist.length)];
    x.src=random_file;
	document.getElementById("name").innerHTML=random_file;
    x.play();
});
function work(){
	x.play();
	setTimeout("pause()",225000);
}
function bellonly(){
	bell.play();
	setTimeout("playbell()",240000);
}
function belly(){
	setTimeout("work()",4500);
}
function randomPlay(){
	var random_file = songlist[Math.floor(Math.random() * songlist.length)];
    x.src=random_file;
	document.getElementById("name").innerHTML=random_file;
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
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();
	if(hours== 7 && minutes == 10){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds>3 && seconds<5){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 7 && minutes == 15){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 8 && minutes == 6){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 8 && minutes == 11){
		if(seconds>0 && seconds<5){
			bell.play();
		}	
	}
	if(hours== 9 && minutes == 2){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds>3 && seconds<5){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 9 && minutes == 7){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 9 && minutes == 58){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 10 && minutes == 3){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 10 && minutes == 54){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 10 && minutes == 59){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 11 && minutes == 24){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 11 && minutes == 53){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 12 && minutes == 22){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 12 && minutes == 27){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 13 && minutes == 18){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 13 && minutes == 23){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 14 && minutes == 15){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	setTimeout(mttfDay, 1000);
}
function aiDay(){
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();
	if(hours== 7 && minutes == 10){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds>3 && seconds<5){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 7 && minutes == 15){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 7 && minutes == 59){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 8 && minutes == 4){
		if(seconds>0 && seconds<5){
			bell.play();
		}	
	}
	if(hours== 8 && minutes == 48){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds>3 && seconds<5){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 8 && minutes == 53){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 9 && minutes == 23){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 9 && minutes == 28){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 10 && minutes == 13){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 10 && minutes == 18){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 11 && minutes == 3){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 11 && minutes == 8){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 11 && minutes == 33){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 12 && minutes == 2){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 12 && minutes == 31){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 12 && minutes == 36){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 13 && minutes == 20){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 13 && minutes == 25){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 14 && minutes == 15){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	setTimeout(aiDay, 1000);
}
function latestartDay(){
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();
	if(hours== 12 && minutes == 53){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds>4 && seconds<6){
			randomPlay();
		}
	}
	else if(hours == 15 && minutes == 35){
		bell.play();
		if(seconds>=4){
			bell.pause();
		}	
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
	setTimeout(latestartDay, 1000);
}
function halfdayDay(){
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();
	if(hours== 7 && minutes == 10){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds>3 && seconds<5){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 7 && minutes == 15){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 7 && minutes == 49){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 7 && minutes == 54){
		if(seconds>0 && seconds<5){
			bell.play();
		}	
	}
	if(hours== 8 && minutes == 28){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds>3 && seconds<5){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 8 && minutes == 33){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 9 && minutes == 7){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 9 && minutes == 12){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 9 && minutes == 46){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 9 && minutes == 51){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 11 && minutes == 24){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 11 && minutes == 53){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 12 && minutes == 22){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 12 && minutes == 27){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 13 && minutes == 18){
		belly();
		if(seconds>0 && seconds<4){
			bell.play();
		}
		if(seconds==4){
			random_file = songlist[Math.floor(Math.random() * songlist.length)];
			randomPlay();
		}
	}
	else if(hours == 13 && minutes == 23){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	else if(hours == 14 && minutes == 15){
		if(seconds>0 && seconds<5){
			bell.play();
		}
	}
	setTimeout(halfdayDay, 1000);
}

