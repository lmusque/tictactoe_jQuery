$("#document").ready(function () {
	let turn = 1;
	$("button").click(function () {
		if ($(this).hasClass("fa fa-times") || $(this).hasClass("fa fa-check")) {
			// Already clicked, do nothing
			return;
		}
		if (turn == 1) {
			$("#screen").text("Player 2's Turn");

			//check sign font awesome
			$(this).addClass("fa fa-check");
			turn = 2;
			//player 2's turn comes next
		} else {
			$("#screen").text("Player 1's Turn Next");
			//times sign from font awesome
			$(this).addClass("fa fa-times");
			turn = 1;
			//player 1's turn comes next
		}

		if (check("fa-check")) {
			$("#screen").text("Player 1 Wins!");
		} else if (check("fa-times")) {
			$("#screen").text("Player 2 Wins!");
		}
	});
});

//checking invalid moves--clicked twice
$("button").click(function () {
	if ($(this).hasClass("fa fa-times") || $(this).hasClass("fa fa-check")) {
		$(this).css("background-color", "red");
		setTimeout(() => {
			$(this).css("background-color", "white");
		}, 800);
	}
});

// Function to check the winning move
function check(symbol) {
	if ($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)) {
		$(".sq1").css("color", "green");
		$(".sq2").css("color", "green");
		$(".sq3").css("color", "green");
		return true;
	} else if ($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)) {
		$(".sq4").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq6").css("color", "green");
		return true;
	} else if ($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
		$(".sq7").css("color", "green");
		$(".sq8").css("color", "green");
		$(".sq9").css("color", "green");
		return true;
	} else if ($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
		$(".sq1").css("color", "green");
		$(".sq4").css("color", "green");
		$(".sq7").css("color", "green");
		return true;
	} else if ($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)) {
		$(".sq2").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq8").css("color", "green");
		return true;
	} else if ($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
		$(".sq3").css("color", "green");
		$(".sq6").css("color", "green");
		$(".sq9").css("color", "green");
		return true;
	} else if ($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
		$(".sq1").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq9").css("color", "green");
		return true;
	} else if ($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
		$(".sq3").css("color", "green");
		$(".sq5").css("color", "green");
		$(".sq7").css("color", "green");
		return true;
	} else {
		return false;
	}
}

//reset
function reset() {
	$("#screen").text("Let's Start! Player 1 Make A Move");
	$("#screen").css("background-color", "transparent");
	$(".r").removeClass("fa fa-check");
	$(".r").removeClass("fa fa-times");
	turn = 1;

	// Reset Colors
	$(".sq1").css("color", "black");
	$(".sq2").css("color", "black");
	$(".sq3").css("color", "black");
	$(".sq4").css("color", "black");
	$(".sq5").css("color", "black");
	$(".sq6").css("color", "black");
	$(".sq7").css("color", "black");
	$(".sq8").css("color", "black");
	$(".sq9").css("color", "black");
}
