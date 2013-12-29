$(document).ready(function() {
	var $tn_container = $('.tn-container');

	$tn_container.hover(function() {
		$current = $(this);
		$tn_container.each(function(i,$el){
			if($el != $current) {
				//add semi-transparent mask to each of the above
				$(this).append('<div class="faded"></div>')
			}
		});
	});
});

//toggle off on mouseleave