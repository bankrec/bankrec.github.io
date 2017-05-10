var time = new Date(); // for now
var hour = time.getHours(); // => 9
var minute = time.getMinutes();
var day = time.getDay();
var second = time.getSeconds();

var sun = SunCalc.getTimes(new Date(), -37.8, 145.0);
var sunset = sun.sunset;
var sunrise = sun.sunrise;
var dark = true;

if(hour > sunrise.getHours() && hour < sunset.getHours()) {
	dark = false;
} else if (hour == sunrise.getHours()) {
	if (minute < sunrise.getMinutes())
		dark = true;
	else
		dark = false;
} else if (hour == sunset.getHours()) {
	if (minute > sunset.getMinutes())
		dark = true;
	else
		dark = false;
}else{}
var dayInSeconds = (hour*60*60)+(minute*60)+second;
var DAY_1_LENGTH = 1061;
var DAY_2_LENGTH = 886;
var NIGHT_1_LENGTH = 954;
var NIGHT_2_LENGTH = 1061;

//START VIDEO AT TIME: dayInSecond % [video length]
var liveStream = document.getElementById("livestream");

var position;
if(day % 2 == 0) {
	if (dark) {
		position = dayInSeconds % NIGHT_1_LENGTH;
		liveStream.src = "./vid/n1.mp4";

	}else{
		position = dayInSeconds % DAY_1_LENGTH;
		liveStream.src = "./vid/d1.mp4";
	}
}else{
	if (dark) {
		position = dayInSeconds % NIGHT_2_LENGTH;
		liveStream.src = "./vid/n2.mp4";

	}else{
		position = dayInSeconds % DAY_2_LENGTH;
		liveStream.src = "./vid/d2.mp4";
	}
}
blinker = document.getElementById("blinker");
liveStream.addEventListener("loadedmetadata", function() {
     this.currentTime = position;
	 blinker.style.visibility = "visible";
}, false);