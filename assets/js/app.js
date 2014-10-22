// @codekit-prepend 'vendor/jquery-2.0.3.min.js'
// @codekit-prepend 'vendor/modernizr-2.8.2.min.js'
// @codekit-prepend 'plugins/fastclick.js'
// @codekit-prepend 'plugins/retina.js'
// @codekit-prepend 'plugins/simpleAnchors.js'
// @codekit-prepend 'plugins/jquery.easing.min.js'
// @codekit-prepend 'plugins/jquery.lazyload.min.js'
// @codekit-prepend 'plugins/jquery.validate.min.js'
// @codekit-prepend 'plugins/responsive-nav/responsive-nav.min.js'
// @codekit-prepend 'plugins/owl-carousel/owl.carousel.min.js'
// @codekit-prepend 'plugins/jquery.matchHeight-min.js'
// @codekit-prepend 'plugins/jquery.fitvids.js'
// @codekit-prepend 'plugins/jquery.magnific-popup.min.js'
// @codekit-prepend 'plugins/signet.min.js'

(function($){

	/* jshint devel:true */
	'use strict';

	window.THEMENAME = {};

	var SHORTNAME = window.THEMENAME;

	var $window = $(window);

	SHORTNAME.init = function(){
		SHORTNAME.setElements();
		SHORTNAME.colors();
		SHORTNAME.basics();
		SHORTNAME.widowFix();
		SHORTNAME.pageTransitions();
		SHORTNAME.instagram();
		SHORTNAME.parallaxVert();
		SHORTNAME.mobileNav();
		SHORTNAME.infinitescroll();
		SHORTNAME.forms();
		SHORTNAME.vertAlign();
	};

	SHORTNAME.setElements = function(){
		SHORTNAME.elems				= {};

		// defaults
		SHORTNAME.elems.html				=	$('html');
		SHORTNAME.elems.body				=	$('body');
		SHORTNAME.elems.valign				=	$('.valign');
		SHORTNAME.elems.commentform			=	$('#commentform');
		SHORTNAME.elems.contactForm			=	$('#contactForm');
		SHORTNAME.elems.loadMoreContainer	=	$('.load-more-container');
		SHORTNAME.elems.scrollToTop			=	$('a[data-scroll-to="top"]');
		SHORTNAME.elems.commentReplyLink	=	$('.comment-reply-link');
		SHORTNAME.elems.respond				=	$('#respond');
		SHORTNAME.elems.lazyImg				=	$('img.lazy');
		SHORTNAME.elems.mobileNav			=	$('nav-collapse');
	};

    SHORTNAME.colors = function() {
        var colors = {
            aqua    : '#7FDBFF',
            blue    : '#0074D9',
            lime    : '#01FF70',
            navy    : '#001F3F',
            teal    : '#39CCCC',
            olive   : '#3D9970',
            green   : '#2ECC40',
            red     : '#FF4136',
            maroon  : '#85144B',
            orange  : '#FF851B',
            purple  : '#B10DC9',
            yellow  : '#FFDC00',
            fuchsia : '#F012BE',
            gray    : '#aaa',
            white   : '#fff',
            black   : '#111',
            silver  : '#ddd'
        };
        // console.log(colors);
        // console.log(colors.blue);
    };

	SHORTNAME.basics = function(){

		if( window.back_to_top ) {
			$window.scroll(function(){
				if ( $(this).scrollTop() > 300 ) {
					SHORTNAME.elems.scrollToTop.addClass('fadeIn');
				} else {
					SHORTNAME.elems.scrollToTop.removeClass('fadeIn');
				}
			});
		}

		// jQuery Lazyload
		SHORTNAME.elems.lazyImg.lazyload({
			threshold   : 200,
			effect      : 'fadeIn',
		});
		// usage: <img class="lazy" data-original="" src="gray.png" alt="" />

		// Fastclick.js - Polyfill to remove click delays on browsers with touch UIs
		$(function() {
			window.FastClick.attach(document.body);
		});

		// SimpleAnchors
		$.simpleAnchors({
			offset: -1, // 80-1, header height on scroll
			easing: 'easeInOutCubic'
		});

		// Target your .container, .wrapper, .post, etc.
		// SHORTNAME.elems.body.fitVids();

	};

	SHORTNAME.widowFix = function() {

		// takes care of widows - hehe
		$('h1, h2, h4, h5, h6, .post-content').each(function(){
			var string = $(this).html();
			string     = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
			$(this).html(string);
		});

	}

	SHORTNAME.pageTransitions = function() {

		// fade transition navigation thru site
		SHORTNAME.elems.body.addClass('fadeIn');
		SHORTNAME.elems.body.on('click', 'a:not([href^="#"]):not([data-scroll-to])', function(e) {

			e.preventDefault();
			var linkLocation = $(this).attr('href');

			if ( linkLocation == 'javascript:;' ) return;

			function redirectPage() {
				window.location = linkLocation;
			}

			SHORTNAME.elems.body.addClass('fadeOut');

			setTimeout(function() {
				window.location = linkLocation;
			}, 300);

		});

	};

	SHORTNAME.instagram = function() {

		var	user_id = '695497474', //userid
			num_to_display = '1', //instagram limits to max 20, but you can do less for your layout.
			access_token = '695497474.45e59c8.a618fb95f14947b08d2137fd66797bbd';

		$.ajax({
			type: 'GET',
		    dataType: 'jsonp',
		    cache: false,
		    url: 'https://api.instagram.com/v1/users/'+user_id+'/media/recent/?access_token='+access_token,
		    success: function(data) {
		        for (var i = 0; i < num_to_display; i++) {
		    		$('.instagram').append('<li class="instagram-single-'+i+'"><a target="_blank" href="' + data.data[i].link +'" class="instagram-image overlay block" style="background-image: url('+data.data[i].images.low_resolution.url+')"><span><h5>Instagram</h5></span></a></li>');
		  		}
		    }
		});

	};

	SHORTNAME.parallaxVert = function() {
		// parallax scroll
		$( document ).on( 'scroll', function() {

			if ( $window.width() >= 900 && SHORTNAME.elems.body[0].scrollHeight > $( window ).height() ) {

				var scrollPos = typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : SHORTNAME.elems.body.scrollTop(),
					scrollHeight  = SHORTNAME.elems.body[0].scrollHeight - $window.height(),
					backgroundPos = (scrollPos / scrollHeight) * 100;

				backgroundPos = Math.min( Math.max( backgroundPos, 0 ), 100 );
				SHORTNAME.elems.cover.css({
					'background-position' : 'center ' + backgroundPos + '%'
				});
			}
		});
	};

	SHORTNAME.mobileNav = function() {

		if ( !SHORTNAME.elems.mobileNav.length ) return;

		// responsive nav
		var nav = responsiveNav('.nav-collapse', { // Selector
			animate:			true, // Boolean: Use CSS3 transitions, true or false
			transition: 		284, // Integer: Speed of the transition, in milliseconds
			label:				'Menu', // String: Label for the navigation toggle
			insert:				'before', // String: Insert the toggle before or after the navigation
			// customToggle:		'', // Selector: Specify the ID of a custom toggle
			closeOnNavClick: 	false, // Boolean: Close the navigation when one of the links are clicked
			openPos:			'relative', // String: Position of the opened nav, relative or static
			navClass:			'nav-collapse', // String: Default CSS class. If changed, you need to edit the CSS too!
			navActiveClass:		'js-nav-active', // String: Class that is added to  element when nav is active
			jsClass:			'js', // String: 'JS enabled' class which is added to  element
		});
	};

	SHORTNAME.infinitescroll = function() {

		if ( !$.fn.infinitescroll ) return;

		if( !window.is_singular && window.infinite_scroll == '1' ) {

			SHORTNAME.elems.loadMoreContainer.infinitescroll({

				loading: {
					// finished: undefined, // undefined or function
					// finishedMsg: '<em>Congratulations, you\'ve reached the end of the internet.</em>',
					finishedMsg: '<em>Congratulations, you\'ve reached the end.</em>',
					img: window.framework_url + 'assets/images/loader.gif',
					// img: '',
					msgText: '<em>Loading the next set of posts...</em>',
				},
				// debug: true,
				behavior: 'twitter', // default: undefined; comment out for on scroll, set to twitter for on click
				navSelector: '.pagination',
				nextSelector: '.pagination a:first',
				itemSelector: '.post',
				animate: true,

			}, function ( newElements ){

				SHORTNAME.init();

			});

		}

	};

	SHORTNAME.forms = function(){

		// Form Validation
		if ( $().validate ) {
			SHORTNAME.elems.commentform.validate();
			SHORTNAME.elems.commentform.removeAttr('novalidate');

			SHORTNAME.elems.contactForm.validate({
				validClass: 'success',
				errors: {
					contactName: {
						required: '',
						contactName: ''
					},
					email: {
						required: '',
						email: ''
					},
					mailSubject: {
						required: '',
						mailSubject: ''
					},
					comments: {
						required: '',
						comments: ''
					},
				}
			});
		}

	};

	SHORTNAME.vertAlign = function() {
		// Vertical Align
		var vertAlign = function() {
			SHORTNAME.elems.valign.each(function() {
				var newHeight = $(this).parent().height();
				$(this).parent().height(newHeight);
			});
		};
		vertAlign();
	};

	$window.load(function() {

	});

	$(document).ready(function(){

		SHORTNAME.init();

	});

})(window.jQuery);