/*
Template Name: Effacy - Creative One Page Template
Author: ThemeBite
Author URI: http://themebite.com/
Version: 1.0
Developed and Designed By: ThemeBite
*/

/*
====================================
[ JS TABLE OF CONTENT ]
------------------------------------
    1.0 - Testimonial Carousel
-------------------------------------
[ END JS TABLE OF CONTENT ]
=====================================
*/



$(window).load(function() {

    "use strict";

    // Full Screen Backgrounds
    $(".tb-fullScreen").height($(window).height());
    $(window).resize(function(){
        $(".tb-fullScreen").height($(window).height());
    });


});

$(document).ready(function() {
    // PreLoader
    $("body").queryLoader2({
      // Preloader options
      backgroundColor: "#ff5959",
      barHeight: 3,
      minimumTime: 3000,
      fadeOutTime: 3000,
      percentage: true,
    });
    
    // Sticky Menu
     $(".header-area").sticky({topSpacing:0});

    // Testimonial Carousel 
    $("#testimonial-carousel").owlCarousel({
      // Testimonial Carousel Settings
      navigation : true, // Show next and prev buttons
      navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      slideSpeed : 1000,
      paginationSpeed : 1000,
      singleItem: true,
      pagination: false,
      autoPlay : true,
      stopOnHover: true,
    });
    
    // jQuery Smooth Scroll
    $('.page-scroll').on( 'click' , function(event){
        var $anchor = $(this),
            headerH = '55';
        $('html , body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    // Responsive Menu
    $("ul.nav.navbar-nav li a").click( function(){
      $(".navbar-collapse").removeClass("in");
    });

    // jQuery ScrollSpy
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 70
    });

    // Partners Carousel 
    $("#partners-carousel").owlCarousel({
      // Partners Carousel Settings
      navigation : false,
      pagination: false,
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      stopOnHover : true,
    });

    // Simple Light Box
    var gallery = $('.thumbnails a').simpleLightbox({
      navText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
      closeText: '<i class="fa fa-times"></i>',
    });



    // BLog Post Carousel 
    $("#blog-post-carousel").owlCarousel({
      // BLog Post Carousel Settings
      navigation : false,
      slideSpeed : 2000,
      paginationSpeed : 1000,
      singleItem: true,
      pagination: true,
      autoPlay : true,
      stopOnHover: true,
    });

    // Portfolio Gallery

    if ($('#grid').length > 0) {
        // Initialize plugin
        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.thumbnails' // The Child Item of the parent #grid
        });

        // Re-Shuffle the gallery
        $('#filter li').on('click', function (e) {
            e.preventDefault();

            // Active class on li
            $('#filter li').removeClass('active');
            $(this).addClass('active');

            // Filter item
            var groupName = $(this).attr('data-group');

            // Reshuffle item
            $grid.shuffle('shuffle', groupName );
        });
    }

    // Counter JS
    $('.our-awards-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });




    // Google Map Options
    jQuery(function ($) {
      
      'use strict';

      var map;

      map = new GMaps({
          el: '#gmap-wrapper',
          lat: 22.3590557, //Replace Here Location Google Map Lat
          lng: 91.8213111, //Replace Here Location Google Map Lng
          scrollwheel:false,
          zoom: 17,
          zoomControl : true,
          panControl : true,
          streetViewControl : true,
          mapTypeControl: false,
          overviewMapControl: false,
          clickable: true
      });

      var image = '';
      map.addMarker({
          lat: 22.3590557, //Replace Here Location Google Map Lat
          lng: 91.8213111, //Replace Here Location Google Map Lat
          icon: image,
          animation: google.maps.Animation.DROP,
          verticalAlign: 'bottom',
          horizontalAlign: 'center',
          backgroundColor: '#d9d9d9',
      });


      var styles = [ 

      {
          "featureType": "road",
          "stylers": [
          { "color": "#ffffff" }
          ]
      },{
          "featureType": "water",
          "stylers": [
          { "color": "#99b3cc" }
          ]
      },{
          "featureType": "landscape",
          "stylers": [
          { "color": "#f2efe9" }
          ]
      },{
          "elementType": "labels.text.fill",
          "stylers": [
          { "color": "#d3cfcf" }
          ]
      },{
          "featureType": "poi",
          "stylers": [
          { "color": "#bfbfbf" }
          ]
      },{
          "elementType": "labels.text",
          "stylers": [
          { "saturation": 1 },
          { "weight": 0.1 },
          { "color": "#000000" }
          ]
      }

      ];

      map.addStyle({
          styledMapName:"Styled Map",
          styles: styles,
          mapTypeId: "map_style"  
      });

      map.setStyle("map_style");
    }());

      // Google Map Toggle
   
        var $map = $('#gmap-wrapper');
        var $toggleButton = $('#mapToggle');
        // Hide the map
        $map.hide();
        // Show and Toggle It
        $toggleButton.click(function() {
            $map.slideToggle();
        });

     
});