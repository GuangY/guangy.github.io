jQuery(function() {
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});
    var now = new Date().getTime() / 1000;
    var end = new Date("2014/10/02 11:30:00").getTime() / 1000;

	var clock = $('.myclock').FlipClock(end - now, {
        clockFace: 'DailyCounter',
        countdown: true

    });
});