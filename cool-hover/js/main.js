$(document).ready(function() {
	var $tn_container = $('.tn-container');

	$tn_container.hover(function() {
		var src = $(this).find('img').attr('src');

		$tn_container.each(function(){
			var check_src = $(this).find('img').attr('src');

			if(check_src != src) {
				$(this).css('opacity',0.5);
			}
		});
	}, function() {
		$tn_container.css('opacity',1);
	});
});