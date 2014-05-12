$(function() {
	$("button#rider").on("click", findRide);
	$("button#conference").on("click", createConference);
	var users = [ 
		{ name : "Fred Weasley", date : new Date(2014,05,13), time : "4:00pm", 
			confcode : "UMD14", airport : "IAD", flight : "UA111" },
		{ name : "George Weasley", date : new Date(2014,05,13), time : "4:30pm", 
			confcode : "UMD14", airport : "IAD", flight : "UA222" },
		{ name : "Harry Potter", date : new Date(2014,05,13), time : "3:00pm", 
			confcode : "UMD14", airport : "DCA", flight : "UA333" },
		{ name : "Professor Dumbledore", date : new Date(2014,05,12), time : "8:00pm", 
			confcode : "UMD14", airport : "IAD", flight : "UA444" },
	];
	var potentialRideSharers = [];
	/*
	 * Displays options for the user to specify pickup date, time, conference, airport, flight number
	 */
	function findRide() {
		$('#description, #buttons').hide();
		$('#container').animate({margin:'4% 20% 0 20%'}, 800);
		$('#container').append('<div id="riderInput">Pickup Date<br/><input type="text" name="date" placeholder="05/20/2014"><br>' +
			'Pickup Time<br/><input type="text" name="time" id="time-input" placeholder="5:00">' +
			'<select id="ampm"><option value="am">AM</option><option value="pm">PM</option></select><br>' +
			'Conference Code<br/><input type="text" name="confcode" placeholder="GHC14"><br>' +
			'Airport<br/><input type="text" name="airport" placeholder="DCA"><br>' +
			'Flight Number<br/><input type="text" name="flightno" placeholder="UA432"><br>' +
			'<input type="submit" class="search" value="QuickHitch Me!"></input></div>');
		// Shows a calendar dropdown in order to select a specific date
		$('input[name="date"]').datepicker(
		{
			changeMonth : true,
			changeYear : true
		});
		/*
		 * Saves variables upon clicking 'search', and displays other users who have flights at
		 * the same airport, on the same date.  
		 */
		$(".search").on("click", function() {
			var currDate = $('input[name="date"]').val().split("/");
			currDate = new Date(parseInt(currDate[2]), parseInt(currDate[0]), parseInt(currDate[1]));
			var currTime = $('input[name="time"]').val() + $('#ampm').val();
			var currConfCode = $('input[name="confcode"').val();
			var currAirport = $('input[name="airport"').val();
			var currFlightNo = $('input[name="flightno"').val();
			var newUser = { name : "Signed-In User", date : currDate, time : currTime, confcode : currConfCode, airport : currAirport, flight : currFlightNo };
			for (var i = 0; i < users.length; i++) {
				var otherUser = users[i];
				if (otherUser.date.getTime() == newUser.date.getTime() && otherUser.airport == newUser.airport) {
					potentialRideSharers.push(otherUser);
				}
			}
			var shareResults = '';
			for (var i = 0; i < potentialRideSharers.length; i++) {
				var otherUser = potentialRideSharers[i];
				shareResults += '<div id="result' + i + '">Result ' + (i+1) + ': ' + otherUser.name + ', ' + otherUser.time + 
					'</div><br><input type="button" class="little-button detailsPerson" id="detailsPerson' + i + '" value="Rider Details"/>' +
					'&nbsp;<input type="button" class="little-button addPerson" id="addPerson' + i + '" value="Share Ride"/><br><br>';
			}
			$("#riderInput").remove();
			$('#container').append('<div id="calculating">Calculating results<span class="one">.' +
				'</span><span class="two">.</span><span class="three">.</span></div>');
			setTimeout(function() {
				$("#calculating").remove();
				$("#container").append('<div id="riderResults"><h2>Results</h2><br><h4>' + shareResults + '</h4></div>');
			}, 1500);
		});
		$(document).on("click", ".detailsPerson", function() {
			/*
			 * Get last digit of the ID, in order to get the correct object in potentialRideSharers array
			 */
			var id = parseInt(this.id.slice("-1")); 
			var personInfo = '<h5><br>';
			var person = potentialRideSharers[id];
			for (var detail in person) {
				var info = person[detail];
				if (detail == 'date') {
					// Only shows the date part of the Date object, not the time portion
					info = info.toString().split(' ').slice(0,4).join(' ');
				}
				personInfo += detail + ': ' + info + '<br>';
			}
			$('#result' + id).append(personInfo + '</h5>');
		});
	}

	function createConference() {
		$('#description, #buttons').hide();
		$('#container').animate({margin:'4% 20% 0 20%'}, 800);
		$('#user-info, #conference-form').css('display','block');
	}

	$("#logo").on("click", function() {
		$("#confInput, #riderInput, #riderResults, #confResults, #calculating").remove();
		$("#description").show();
	});
});
