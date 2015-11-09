$(document).ready(function(){
//Bootstrap Slide Control
	$('.carousel').carousel({
   	interval: 5000,	// autoplay after sliding
   	wrap: true,			// loop
   	pause: false,		// init with autoplay
   });

// Add What We Do Area "Plus divider" hover
	$( ".do-1,.do-2,.do-3,.do-4" ).hover(
	  		function() {
	    		$( this ).addClass( "do" );
	  		}, function() {
	    		$( this ).removeClass( "do" );
	 	 	}
		);

	$( ".do-1" ).hover(
	  		function() {
	    		$( ".do-1,.do-2" ).addClass( "do-hide" );
	  		}, function() {
	    		$( ".do-1,.do-2" ).removeClass( "do-hide" );
	 	 	}
		);

	$( ".do-2" ).hover(
	  		function() {
	    		$( ".do-2,.do-4" ).addClass( "do-hide" );
	  		}, function() {
	    		$( ".do-2,.do-4" ).removeClass( "do-hide" );
	 	 	}
		);

	$( ".do-3" ).hover(
	  		function() {
	    		$( ".do-3,.do-1" ).addClass( "do-hide" );
	  		}, function() {
	    		$( ".do-3,.do-1" ).removeClass( "do-hide" );
	 	 	}
		);

	$( ".do-4" ).hover(
	  		function() {
	    		$( ".do-4,.do-3" ).addClass( "do-hide" );
	  		}, function() {
	    		$( ".do-4,.do-3" ).removeClass( "do-hide" );
	 	 	}
		);

// jQuery smooth scroll
  $('li.smooth-menu a').bind('click', function(event) {
      var $anchor = $(this);
      var headerH = '30';
      $('html, body').stop().animate({
          scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
      }, 1200, 'easeInOutExpo');

      event.preventDefault();
  });
//Jquery scroll spy
	$("body").scrollspy({
        target: ".mainmenu",
        offset: 70
    })   
        

});


$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.menu-overlay').addClass('menu-opacity');
  } else {
    $('.menu-overlay').removeClass('menu-opacity');
  }
});