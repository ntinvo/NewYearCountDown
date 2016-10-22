
var timeInteval;
var endDate 	= 'Decmber 31 2016 23:59:59';
var newYearBtn  = document.getElementById('goToNewYear');
var resetBtn	= document.getElementById('goBackToCurrent');



function countDown(endDate) {
	
	function update() {
		var remTime = getRemaningTime(endDate);
		
		if(remTime >= 0) {
			var seconds = Math.floor(remTime % 60);
			var minutes = Math.floor(remTime / 60) % 60;
			var hours   = Math.floor(remTime / 3600) % 24;
			var days    = Math.floor(remTime / 86400);
			
			days = (days < 10) ? '0' + days : days;
			document.getElementById('days').innerHTML 		= days;
			document.getElementById('hours').innerHTML 		= ('00' + hours).slice(-2);
			document.getElementById('minutes').innerHTML 	= ('00' + minutes).slice(-2);
			document.getElementById('seconds').innerHTML 	= ('00' + seconds).slice(-2);		
		} else {
			clearInterval(timeInteval);
			

			swal({
				title: "HAPPY NEW YEAR!",
				imageUrl: "images/newyear2017.png",
				confirmButtonText: "Let's Party"
			});
		}
	}
	update();

	timeInteval = setInterval(update, 1000);
}

function getRemaningTime(endDate) {
	var endTime = new Date(endDate);
	var nowTime = new Date();

	var remTime = Math.floor(endTime - nowTime) / 1000;

	return remTime;
}


function driver() {

	countDown(endDate);
}


driver();