/**
 * Some variables
 */
var timeInteval;
var endDate 	= 'Decmber 31 2016 23:59:59';
var newYearBtn  = document.getElementById('goToNewYear');
var resetBtn	= document.getElementById('goBackToCurrent');

/**
 * Event handlers
 */
newYearBtn.addEventListener('click', goToNewYearHandler);
resetBtn.addEventListener('click', driver);


/**
 * The count down function will count to the
 * endDate which is passed in as a parameter
 */
function countDown(endDate) {
	
	// Get time remaining and update
	function update() {
		// Get remaining time in second
		var remTime = getRemaningTime(endDate);
		
		if(remTime >= 0) {
			// Compute Days:Hours:Minutes:Seconds
			var seconds = Math.floor(remTime % 60);
			var minutes = Math.floor(remTime / 60) % 60;
			var hours   = Math.floor(remTime / 3600) % 24;
			var days    = Math.floor(remTime / 86400);
			
			// Display on the website
			days = (days < 10) ? '0' + days : days;
			document.getElementById('days').innerHTML 		= days;
			document.getElementById('hours').innerHTML 		= ('00' + hours).slice(-2);
			document.getElementById('minutes').innerHTML 	= ('00' + minutes).slice(-2);
			document.getElementById('seconds').innerHTML 	= ('00' + seconds).slice(-2);		
		} else {
			// Clean interval
			clearInterval(timeInteval);
			
			// Change background and backgroundSize
			document.body.style.background = "url('images/new-year.jpg') no-repeat center center fixed";
			document.body.style.backgroundSize= "cover";
		
			// Happy new year
			document.getElementById("gif-photo").src = "images/happy-new-year.gif"; 
			document.getElementById("gif-photo").style = "width: 75%, height: auto;"; 

			// Remove the buttons
			newYearBtn.remove();
			resetBtn.remove();

			// Change text color
			document.getElementsByTagName("body")[0].style.color = "#e74c3c";

			// Alert
			swal({
				title: "HAPPY NEW YEAR!",
				imageUrl: "images/newyear2017.png",
				confirmButtonText: "Let's Party"
			});
		}
	}
	// Call update
	update();

	// Set timeInteval
	timeInteval = setInterval(update, 1000);
}

/**
 * Return the remaining time in seconds
 */
function getRemaningTime(endDate) {
	// Date objs for end and now date
	var endTime = new Date(endDate);
	var nowTime = new Date();

	// Calculate remaining seconds
	var remTime = Math.floor(endTime - nowTime) / 1000;

	return remTime;
}

/**
 * This function is for testing. This will
 * set the remaining time to 5 seconds so
 * that we can see the alert when 
 */
function goToNewYearHandler() {
	// Create a timer 
	var timer = 5;

	// Clear current time Inteval
	clearInterval(timeInteval);
	
	// Update function
	function update() {
		if(timer >= 0) {
			// Display on the website
			document.getElementById('days').innerHTML 		= '00';
			document.getElementById('hours').innerHTML 		= '00';
			document.getElementById('minutes').innerHTML 	= '00';
			document.getElementById('seconds').innerHTML 	= '0' + timer;
		
			// Decrease the timer
			timer--;
		} else {
			// Clean interval
			clearInterval(timeInteval);
			
			// Change background and backgroundSize
			document.body.style.background = "url('images/new-year.jpg') no-repeat center center fixed";
			document.body.style.backgroundSize= "cover";
		
			// Happy new year
			document.getElementById("gif-photo").src = "images/happy-new-year.gif"; 
			document.getElementById("gif-photo").style = "width: 75%, height: auto;"; 

			// Remove the buttons
			newYearBtn.remove();
			resetBtn.remove();

			// Change text color
			document.getElementsByTagName("body")[0].style.color = "#e74c3c";

			// Alert
			swal({
				title: "HAPPY NEW YEAR!",
				imageUrl: "images/newyear2017.png",
				confirmButtonText: "Let's Party"
			});
		}
	}
	// Call update
	update();

	// Set timeInteval
	timeInteval = setInterval(update, 1000);
}

/**
 * The main driver for the count down
 */
function driver() {
	// Clear current time Inteval
	clearInterval(timeInteval);

	// Call count down
	countDown(endDate);
}


// Call the main driver
driver();