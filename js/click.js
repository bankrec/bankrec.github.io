var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function createsoundbite(sound){
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType){ //check support for HTML5 audio
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source')
			sourceel.setAttribute('src', arguments[i])
			if (arguments[i].match(/\.(\w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
			html5audio.pause()
			html5audio.currentTime=0
			html5audio.play()
		}
		return html5audio
	}
	else{
		return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
	}
}

//random integer function min max inclusive;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Initialize two sound clips with 1 fallback file each:
var sound1=createsoundbite("./snd/click1.mp3");
var sound2=createsoundbite("./snd/click2.mp3");
var sound3=createsoundbite("./snd/click3.mp3");
var sound4=createsoundbite("./snd/click4.mp3");

function clickSound(){
	if(playing){
		var num = getRandomInt(1,4);
		if (num == 1) 
			sound1.playclip();
		else if (num == 2) 
			sound2.playclip();
		else if (num == 3) 
			sound3.playclip();
		else if (num == 4) 
			sound4.playclip();
	}
}