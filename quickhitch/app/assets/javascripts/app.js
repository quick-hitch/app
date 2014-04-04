$(function() {
	$("button#rider").on("click", findRide);
	$("button#conference").on("click", createConference);

	function findRide() {
		$('#description').hide();
		$('#container').animate({margin:'4% 20% 0 20%'}, 800);
		$('#container').append('<div id="riderInput">Desired Pickup Time<br/><input type="text" name="time"><br/><br/>' +
			'Conference Code<br/><input type="text" name="confcode"><br/><br/>' +
			'Airport<br/><input type="text" name="airport"><br/><br/>' +
			'Flight Number<br/><input type="text" name="flightno"><br/><br/>' +
			'<input type="submit" class="search" value="QuickHitch Me!"></input></div>');
		$(".search").on("click", function() {
			$("#riderInput").remove();
			$('#container').append('<div id="calculating">Calculating results<span class="one">.' +
				'</span><span class="two">.</span><span class="three">.</span></div>');
			setTimeout(function() {
				$("#calculating").remove();
				$("#container").append('<div id="riderResults"><h2>Results</h2></div>');
			}, 2000);
		});
	}

	function createConference() {
		$('#description').hide();
		$('#container').animate({margin:'4% 20% 0 20%'}, 800);
		$('#container').append('<div id="confInput">Conference Name<br/><input type="text" name="name"><br/><br/>' +
			'Date(s)<br/><input type="text" name="date"><br/><br/>' +
			'Location<br/><input type="text" name="location"><br/><br/>' +
			'<input type="submit" class="search" value="Add to QuickHitch!"></input></div>');
		$(".search").on("click", function() {
			var name = $("input[name='name']").val();
			if (name) {
				var code = name.match(/\b(\w)/g).join('') + $("input[name='date']").val();
				$("#confInput").remove();
				$('#container').append('<div id="confResults">Your conference has been added!<br/><br/>' +
					'Give this code to conference-goers, <br/>so that they can use it to find a ride: <br/><span class="code">' + 
					 code + '</span></div>');
			}
		});
	}

	$("#logo").on("click", function() {
		$("#confInput, #riderInput, #riderResults, #confResults, #calculating").remove();
		$("#container").animate({margin:'4% 10% 8% 10%'}, 800);
		$("#description").show();
	});

	function login() {

	}
});
