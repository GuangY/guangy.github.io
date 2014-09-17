jQuery(function() {
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});
	$("#timecounter").jCountdown({
		timeText: "2014/10/02 11:30:00",
		timeZone: 8,
		style: "metal",
		color: "black",
		width: "auto",
		textGroupSpace: 15,
		textSpace: 0,
		reflection: true,
		reflectionOpacity: 10,
		reflectionBlur: 0,
		dayTextNumber: 2,
		displayDay: true,
		displayHour: true,
		displayMinute: true,
		displaySecond: true,
		displayLabel: true,
		onFinish: function() {}
	});
});