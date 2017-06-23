function overlayOn() {
    document.getElementById("overlay").style.display = "block";
	bankIntro.playVideo();
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
	bankIntro.pauseVideo();
}


// create youtube player
        var bankIntro;
        function onYouTubePlayerAPIReady() {
            bankIntro = new YT.Player('player', {
			  playerVars: {
                    controls: 0,
                    showinfo: 0,
                    autohide: 1,
                    modestbranding: 1,
                    },
              videoId: 'uO9lTF8Dees',
              events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange
              }
            });
        }

        // autoplay video
        function onPlayerReady(event) {
			event.target.setPlaybackQuality('hd720');
        }

        // when video ends
        function onPlayerStateChange(event) {        
            if(event.data === 0) {         
				//when video ends
				overlayOff();
				event.target.seekTo(0);
            }
        }