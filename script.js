setInterval(showTime, 1000);

function showTime(){
	
	
	const currentTime = new Date();
	
	let hoursOfDay = currentTime.getHours();
	let minutes    = currentTime.getMinutes();
	let seconds    = currentTime.getSeconds();
	let day        = currentTime.getDate();
	let weekDays   = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ]; //sunday at index 0
	let dayName    = weekDays[currentTime.getDay()];
	let month      = currentTime.toLocaleString("default", {month: "long"});
	let year       = currentTime.getFullYear();
	let period     = "am";
	
	if (hoursOfDay > 12){
		hoursOfDay -=12;
		period = "pm";
	}
	
	if (hoursOfDay === 0) {
		hoursOfDay = 12;
		period = "am";
	}
	
	hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay; 
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	
	let time = hoursOfDay + ":" + minutes + ":" + seconds + " " + period;
	
	document.getElementById('Time').innerHTML = time;
	document.getElementById('Date').innerHTML = dayName + ", " + day + ". " + month + " " + year;
	
}

showTime();



//add timezones