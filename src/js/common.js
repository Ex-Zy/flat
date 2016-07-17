$(document).ready(function() {
	//dropDown
	function dropDown () {
		$('.js-dropdown').click(function() {
			var that     = $(this),
				item     = that.parents('.list'),
				allItems = $('.list'),
				open     = item.hasClass('is-open'),
				time     = 300;

			if(!open) {
				allItems.removeClass('is-open').find('.list__content').stop(true).slideUp(time);
				item.addClass('is-open').find('.list__content').stop(true).slideDown(time);
			} else {
				item.removeClass('is-open').find('.list__content').stop(true).slideUp(time);
			}

		});
	}

	function winSize () {
		var win = $(window).width() <= 767;

		if(win) {
			dropDown();
		} else {
			// $('.list').removeClass('is-open');
			// $('.js-dropdown').unbind();
		}
	}

	$(window).on('load resize', winSize);


	
});
