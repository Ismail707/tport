jQuery(function ($) {
	'use strict';

        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 50) {
                $('.main-nav').addClass('menu-shrink');
            } else {
                $('.main-nav').removeClass('menu-shrink');
            }
        });		
        // END MENU JS

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });


        //Home-Slider
		$('.home-slider').owlCarousel({
            items:1,
            loop:true,
            margin:5,
            nav:false ,
            autoplay: true ,
            autoplayhover:true,
            dots:true,
            autoplayTimeout:4000,
            animateOut: 'slideOutUp',
            animateOut: 'slideOutDown',
		});
		//Home-slider-two
		$('.home-slider-two').owlCarousel({
			items:1,
			loop:true,
			margin:5,
			nav:false ,
			autoplay: true ,
			autoplayhover:true,
			dots:true,
			autoplayTimeout:4000,
		});

		//Home-Slider
		$('.home-slideer-three').owlCarousel({
			items:1,
			loop:true,
			margin:5,
			nav:false ,
			autoplay: true ,
			autoplayhover:true,
			dots:true,
			autoplayTimeout:4000,
			animateOut: 'slideOutUp',
			animateOut: 'slideOutDown',
		});

		// Popup Youtube JS
		$('.popup-youtube').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		//Popup Gallery JS
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
			}
		});

		// PRELOADER
		jQuery(window).on('load',function(){
			jQuery(".loader").fadeOut(500);
		});

		// WOW JS
		new WOW().init();

		// Back to top 
		$('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-hand-drag"></i></div>');
		$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 900);
			return false;
		});



        // Feedback Slider JS
		$('.feedback-slider').owlCarousel({
			loop:true,
			margin:10,
			responsiveClass:true,
			autoplay: false,
			autoplayhover:false,
			dots:true,
			autoplayTimeout:4000,
			responsive:{
				0:{
					items:1,
					
				},
				600:{
					items:2,
				
				},
				1000:{
					items:2,
					
					
				}
			}
		})

		// Odometer JS
		$('.odometer').appear(function(e) {
			var odo = $('.odometer');
			odo.each(function() {
				var countNumber = $(this).attr('data-count');
				$(this).html(countNumber);
			});
		});


	}(jQuery));