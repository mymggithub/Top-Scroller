(function($) {
	$("#ScrollUp").click(function() {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});
	$(window).on('scroll', function() {
		if ($(this).scrollTop() + $(this).innerHeight() >= ($(document).innerHeight() - $(document).innerHeight() / 8)) {
			$("#ScrollUp").show();
		} else {
			$("#ScrollUp").hide();
		}
	});
	$("#ScrollUp").hide();
})(jQuery);