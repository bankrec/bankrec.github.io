var time = new Date(); // for now
var hour = time.getHours(); // => 9

var time_of_day;

if(hour > 5 && hour < 17) time_of_day = "light";
else time_of_day = "dark";