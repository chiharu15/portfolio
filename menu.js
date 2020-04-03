$(function() {
   $('a[href^="#"]').click(function(){
		var speed = 300;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - 60;
		$("html, body").animate({
      scrollTop:position
    }, speed, "swing");
		return false;
	});

  var menu = $('#gnav'),
  offset = menu.offset();
  $(window).scroll(function () {
    if($(window).scrollTop() > offset.top) {
      menu.addClass('fixed');
    } 
    else {
      menu.removeClass('fixed');
    }
  });

  var scrollMenu = function() {

		var array = {
			'#profile': 0,
			'#works': 0,
			'#skill': 0
		};

		var $globalNavi = new Array();
		for (var key in array) {
			if ($(key).offset()) {
				array[key] = $(key).offset().top - 10; 
				$globalNavi[key] = $('a[href="' + key + '"]');
			}
		}

		$(window).scroll(function () {
			for (var key in array) {
				if ($(window).scrollTop() > array[key] - 50) {
					$('#header ul li a').each(function() {
						$(this).removeClass('active');
					});
					$globalNavi[key].addClass('active');
				}
			}
		});
	}
	scrollMenu();

});

