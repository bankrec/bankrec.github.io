player = window.parent.document.getElementById('audioPlayer');
icon = document.getElementById('playerIcon');
if (!window.parent.playing) {
	icon.src = "../img/mute.png"
}
else if (window.parent.playing) {
	player.play();
}
function toggle() {
	if(window.parent.playing) {
		player.pause();
		icon.src = "../img/mute.png"
		window.parent.playing = false;
	}
	else if(!window.parent.playing) {
		player.play();
		icon.src = "../img/play.png"
		window.parent.playing = true;
		
	}
}

function playerMouseOver() {
	if(window.parent.playing) {
		icon.src = "../img/mute.png"
	}
	else if(!window.parent.playing) {
		icon.src = "../img/play.png"
	}
}

function playerMouseOut() {
	if(window.parent.playing) {
		icon.src = "../img/play.png"
	}
	else if(!window.parent.playing) {
		icon.src = "../img/mute.png"
	}
}