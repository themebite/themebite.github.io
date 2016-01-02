(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

		  // jQuery Smooth Scroll
		    $('.page-scroll').on( 'click' , function(event){
		        var $anchor = $(this),
		            headerH = '0';
		        $('html , body').stop().animate({
		            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
		        }, 1200, 'easeInOutExpo');

		        event.preventDefault();
		    });




    });


    jQuery(window).load(function(){


    });


}(jQuery));
