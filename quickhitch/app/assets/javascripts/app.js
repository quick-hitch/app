$(function() {
	$("button#rider").on("click", findRide);
	$("button#conference").on("click", createConference);

	var users = [ 
		{ name : "Fred Weasley", date : new Date(2014,05,06), time : "4:00pm", 
			confcode : "UMD14", airport : "IAD", flight : "UA111" },
		{ name : "George Weasley", date : new Date(2014,05,06), time : "4:30pm", 
			confcode : "UMD14", airport : "IAD", flight : "UA111" },
		{ name : "Harry Potter", date : new Date(2014,05,06), time : "3:00pm", 
			confcode : "UMD14", airport : "DCA", flight : "UA222" },
		{ name : "Professor Dumbledore", date : new Date(2014,05,05), time : "8:00pm", 
			confcode : "UMD14", airport : "IAD", flight : "UA333" },
	];
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
		$('input[name="date"]').datepicker(
		{
			changeMonth : true,
			changeYear : true
		});
		$(".search").on("click", function() {
			var currDate = $('input[name="date"]').val().split("/");
			currDate = new Date(parseInt(currDate[2]), parseInt(currDate[0]), parseInt(currDate[1]));
			var currTime = $('input[name="time"]').val() + $('#ampm').val();
			var currConfCode = $('input[name="confcode"').val();
			var currAirport = $('input[name="airport"').val();
			var currFlightNo = $('input[name="flightno"').val();
			var newUser = { name : "Signed-In User", date : currDate, time : currTime, confcode : currConfCode, airport : currAirport, flight : currFlightNo };
			var potentialRideSharers = [];
			for (var i = 0; i < users.length; i++) {
				var otherUser = users[i];
				console.log(otherUser);
				console.log(otherUser.date);
				console.log(newUser.date);
				console.log(otherUser.airport);
				console.log(newUser.airport);
				if (otherUser.date.getTime() == newUser.date.getTime() && otherUser.airport == newUser.airport) {
					potentialRideSharers.push(otherUser);
				}
			}
			var shareResults = '';
			for (var i = 0; i < potentialRideSharers.length; i++) {
				var otherUser = potentialRideSharers[i];
				shareResults += 'Result ' + (i+1) + ': ' + otherUser.name + ', ' + otherUser.time + 
					'<br><input type="button" class="little-button" id="rideSharer' + (i+1) + '" value="Share Ride"/><br><br>';
			}
			$("#riderInput").remove();
			$('#container').append('<div id="calculating">Calculating results<span class="one">.' +
				'</span><span class="two">.</span><span class="three">.</span></div>');
			// setTimeout(function() {
				$("#calculating").remove();
				$("#container").append('<div id="riderResults"><h2>Results</h2><br><h4>' + shareResults + '</h4></div>');
			// }, 3000);
		});
	}

	function createConference() {
		$('#description, #buttons').hide();
		$('#container').animate({margin:'4% 20% 0 20%'}, 800);
		$('#user-info, #conference-form').css('display','block');
		// $('#container').append('<div id="confInput">Conference Name<br/><input type="text" name="name"><br/><br/>' +
		// 	'Date(s)<br/><input type="text" name="date"><br/><br/>' +
		// 	'Location<br/><input type="text" name="location"><br/><br/>' +
		// 	'<input type="submit" class="search" value="Add to QuickHitch!"></input></div>');
		// $(".search").on("click", function() {
		// 	var name = $("input[name='name']").val();
		// 	if (name) {
		// 		var code = name.match(/\b(\w)/g).join('') + $("input[name='date']").val();
		// 		$("#confInput").remove();
		// 		$('#container').append('<div id="confResults">Your conference has been added!<br/><br/>' +
		// 			'Give this code to conference-goers, <br/>so that they can use it to find a ride: <br/><span class="code">' + 
		// 			 code + '</span></div>');
		// 	}
		// });
	}

	$("#logo").on("click", function() {
		$("#confInput, #riderInput, #riderResults, #confResults, #calculating").remove();
		// $("#container").animate({margin:'4% 10% 8% 10%'}, 800);
		$("#description").show();
	});
});
