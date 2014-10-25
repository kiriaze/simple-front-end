// @codekit-prepend 'vendor/jquery-2.0.3.min.js'
// @codekit-prepend 'vendor/jquery-ui.min.js'
// @codekit-prepend 'vendor/jquery.easing.min.js'
// @codekit-prepend 'vendor/modernizr-2.8.3.min.js'
// @codekit-prepend 'plugins/fastclick.js'
// @codekit-prepend 'plugins/isOnScreen.js'
// @codekit-prepend 'plugins/retina.js'
// @codekit-prepend 'plugins/simpleAnchors.js'
// @codekit-prepend 'plugins/jquery.lazyload.min.js'
// @codekit-prepend 'plugins/jquery.validate.min.js'
// @codekit-prepend 'plugins/simpleforms.min.js'
// @codekit-prepend 'plugins/prettify.js'

// @codekit-prepend 'plugins/signet.min.js'

// @codekit-prepend 'plugins/responsive-nav/responsive-nav.min.js'
// @codekit-prepend 'plugins/owl-carousel/owl.carousel.min.js'
// @codekit-prepend 'plugins/jquery.matchHeight-min.js'
// @codekit-prepend 'plugins/jquery.fitvids.js'
// @codekit-prepend 'plugins/jquery.magnific-popup.min.js'
// @codekit-prepend 'plugins/jquery.stellar.min.js'
// @codekit-prepend 'plugins/jquery.photoset-grid.min.js'

// @codekit-prepend 'plugins/infinite-scroll/jquery.infinitescroll.min.js'
// @codekit-prepend 'plugins/infinite-scroll/manual-trigger.js'
// @codekit-prepend 'plugins/mediaelement-and-player.min.js'
// @codekit-prepend 'plugins/simple-media.js'

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
		SHORTNAME.photoGrid();
		SHORTNAME.widowFix();
		SHORTNAME.pageTransitions();
		SHORTNAME.instagram();
		SHORTNAME.parallaxVert();
		SHORTNAME.mobileNav();
		SHORTNAME.infinitescroll();
		SHORTNAME.forms();
		SHORTNAME.vertAlign();



		SHORTNAME.alerts();
		SHORTNAME.tooltips();
		SHORTNAME.toggles();
		SHORTNAME.accordions();
		SHORTNAME.tabs();
		SHORTNAME.modal();
		SHORTNAME.mediaElements();
		SHORTNAME.magnificPopup();
		SHORTNAME.stats();

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
		SHORTNAME.elems.cover				=	$('.parallax');
		SHORTNAME.elems.mobileNav			=	$('.nav-collapse');




		SHORTNAME.elems.tooltip            =   $('[data-toggle=tooltip]');
		SHORTNAME.elems.modalLink          =   $('[data-modal]');
		SHORTNAME.elems.tab                =   $('[data-tab]');
		SHORTNAME.elems.mediaElements      =   $('[data-media-src]');
		SHORTNAME.elems.toggles            =   $('.simple-toggle');
		SHORTNAME.elems.accordions         =   $('.simple-accordion');
		SHORTNAME.elems.mfpImage           =   $('[data-type="mfp-image"]');
		SHORTNAME.elems.mfpInline          =   $('[data-type="mfp-inline"]');
		SHORTNAME.elems.mfpIframe          =   $('[data-type="mfp-iframe"]');
		SHORTNAME.elems.stats              =   $('.stats');

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

	SHORTNAME.basics = function() {

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
		SHORTNAME.elems.body.fitVids();

		// Stellar parallax
		$.stellar();

		// set image-grid columns to equal size
		$('.image-grid').find('[class^="columns-"]').matchHeight();

		// simpleforms - styles/effects for forms, checkboxes, radio's
		$('body').simpleforms();

		// prettyprint
		prettyPrint();

		// simpleMedia init
		SHORTNAME.elems.mediaElements.simpleMedia();


	};

	SHORTNAME.alerts = function(){

		$(".alert .close").click( function() {
			$(this).parent('.alert').fadeTo(300, 0.001).slideUp();
		});

	};

	SHORTNAME.tooltips = function() {
		SHORTNAME.elems.tooltip.hover(
			function() {
				var $this = $(this),
					title = $this.attr('title'),
					position = $this.data('placement'),
					tooltip = $( '<div class="tooltip '+position+'"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+title+'</div></div>' );

				$this.append( $( tooltip ) );

				if ( position === 'top' ) {
					tooltip.css({
						'top': - tooltip.height() - 10,
						'margin-left': - tooltip.width()/2
					});
				}

				if ( position === 'bottom' ) {
					tooltip.css({
						'margin-left': - tooltip.width()/2
					});
				}

				if ( position === 'left' ) {
					tooltip.css({
						'top': - tooltip.height()/4,
						'left': - tooltip.width() - 20
					});
				}

				if ( position === 'right' ) {
					tooltip.css({
						'top': - tooltip.height()/4,
						'right': - tooltip.width() - 20
					});
				}

				tooltip.addClass('in');

			}, function() {
				$( this ).find( ".tooltip" ).removeClass('in').remove();
			}
		);
	};

	SHORTNAME.toggles = function(){

		SHORTNAME.elems.toggles.each( function () {

			if( $(this).attr('data-id') === 'closed' ) {
				$(this).accordion({
					header: '.simple-toggle-title',
					collapsible: true,
					active: false
				});
			} else {
				$(this).accordion({
					header: '.simple-toggle-title',
					collapsible: true
				});
			}

		});

		var icon = SHORTNAME.elems.toggles.find('.ui-icon');
		icon.addClass('fa fa-angle-down');

		if ( SHORTNAME.elems.toggles.find('.simple-toggle-title').is('.ui-state-active') ) {
			$('.ui-state-active').find(icon).addClass('fa-angle-up');
		}

		SHORTNAME.elems.toggles.on('click',function(){
			if ( $(this).find('.simple-toggle-title').is('.ui-state-active') ) {
				$(this).find(icon).removeClass('fa-angle-down').addClass('fa-angle-up');
			} else {
				$(this).find(icon).removeClass('fa-angle-up').addClass('fa-angle-down');
			}
		});

	};

	SHORTNAME.tabs = function(){

		//  Add active states to first tab and link
		var tabs = $('[data-type="tabs"]');
		tabs.find('[data-tab-content]:first-of-type').addClass('active');
		tabs.find('[data-tab]:first-of-type').addClass('active');

		// var tabHeight = [];

		// $('[data-tab-content]').each(function(){
		//     tabHeight.push($(this).height());
		// });

		SHORTNAME.elems.tab.on('click', function(e) {

			e.preventDefault();

			if ( $(this).is('.active') ) return;

			$(this)
				.addClass('active')
				.siblings('[data-tab]')
				.removeClass('active')

				.siblings('[data-tab-content="' + $(this).data('tab') + '"]')

				// .parents('[data-type="tabs"]').find('[data-tab-content="' + $(this).data('tab') + '"]')

				.addClass('active')
				.siblings('[data-tab-content]')
				.removeClass('active');

		});
	};

	SHORTNAME.modal = function(){

		if ( !SHORTNAME.elems.modalLink.length ) return;

		SHORTNAME.elems.modalLink.on('click', function(){

			var $this           = $(this),
				modalOpen       = $this.data('modal'),
				modalTarget     = $('[data-modal-id=' + modalOpen + ']'),
				modalClose      = modalTarget.find('[data-modal-trigger="close"]');

			// Show Modal
			modalTarget.addClass('visible');
			modalTarget.attr('data-modal-status','visible');

			$(modalTarget).on('click', function(e){
				// Check if whats being clicked on is the overlay, not the modal itself
				if ( e.target === modalTarget.get(0) ) {
					// Hide Modal
					$(this).removeClass('visible');
					$(this).attr('data-modal-status','');
				}
			});

			modalClose.on('click',function(){
				// Hide Modal
				modalTarget.removeClass('visible');
				modalTarget.attr('data-modal-status','');
			});

		});
	};

	SHORTNAME.mediaElements = function(){

		if( !SHORTNAME.elems.mediaElements.length ) return;

		SHORTNAME.elems.mediaElements.each(function(){
			$(this).mediaelementplayer({
				// if the <video width> is not specified, this is the default
				defaultVideoWidth: 480,
				// if the <video height> is not specified, this is the default
				defaultVideoHeight: 270,
				// if set, overrides <video width>
				videoWidth: -1,
				// if set, overrides <video height>
				videoHeight: -1,
				// width of audio player
				audioWidth: 400,
				// height of audio player
				audioHeight: 50,
				// initial volume when the player starts
				startVolume: 0.8,
				// // path to Flash and Silverlight plugins
				// pluginPath: theme_objects.base + '/_include/js/mediaelement/',
				// // name of flash file
				// flashName: 'flashmediaelement.swf',
				// // name of silverlight file
				// silverlightName: 'silverlightmediaelement.xap',
				// useful for <audio> player loops
				loop: false,
				// enables Flash and Silverlight to resize to content size
				enableAutosize: true,
				// the order of controls you want on the control bar (and other plugins below)
				// Hide controls when playing and mouse is not over the video
				alwaysShowControls: false,
				// force iPad's native controls
				iPadUseNativeControls: false,
				// force iPhone's native controls
				iPhoneUseNativeControls: false,
				// force Android's native controls
				AndroidUseNativeControls: false,
				// forces the hour marker (##:00:00)
				alwaysShowHours: false,
				// show framecount in timecode (##:00:00:00)
				showTimecodeFrameCount: false,
				// used when showTimecodeFrameCount is set to true
				framesPerSecond: 25,
				// turns keyboard support on and off for this instance
				enableKeyboard: true,
				// when this player starts, it will pause other players
				pauseOtherPlayers: true,
				// array of keyboard commands
				keyActions: [],
				// autosizeProgress: false
			});
		});
	};

	SHORTNAME.magnificPopup = function(){

		if( !SHORTNAME.elems.mfpInline.length && !SHORTNAME.elems.mfpImage.length && !SHORTNAME.elems.mfpIframe.length ) return;

		// Inline popups
		SHORTNAME.elems.mfpInline.magnificPopup({
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
				beforeOpen: function() {
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});

		// Image popups
		SHORTNAME.elems.mfpImage.magnificPopup({
			type: 'image',
			removalDelay: 500, //delay removal by X to allow out-animation
			preloader: true,
			callbacks: {
				beforeOpen: function() {
					// just a hack that adds mfp-anim class to markup
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					// this.st.mainClass = this.st.el.attr('data-effect');
					this.st.mainClass = this.st.el.attr('data-effect').length ? this.st.el.attr('data-effect') : 'mfp-fade-in-up';
				}
			},
			// closeOnContentClick: true,
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});

		// Image popups
		SHORTNAME.elems.mfpIframe.magnificPopup({
			delegate: 'a', //if elem is nested
			type: 'iframe',
			removalDelay: 500,
			preloader: true,
			callbacks: {
				beforeOpen: function() {
					// just a hack that adds mfp-anim class to markup
					this.st.iframe.markup = this.st.iframe.markup.replace('mfp-iframe-scaler', 'mfp-iframe-scaler mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect').length ? this.st.el.attr('data-effect') : 'mfp-fade-in-up';
				}
			},
			midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});


	};

	SHORTNAME.stats = function(){

		if( !SHORTNAME.elems.stats.length ) return;

		var fired = 0;
		$(window).scroll(function() {
			if ( SHORTNAME.elems.stats.isOnScreen() ) {
				if ( fired === 0 ) {
					scrollStats();
					fired = 1;
				}
			}
		});

		var scrollStats = function() {

			// cycle through every scrollable stat and set the scrollCounter
			SHORTNAME.elems.stats.find('.scrollstat').each( function() {

				scrollCounter($(this), 0);

			});

		};

		var scrollCounter = function($stat, current) {

			// return if total reached
			if ( current > $stat.data('total') ) return;

			// set element html to new value
			$stat.html(current);

			// set timeout to increment value
			setTimeout(function(){ scrollCounter($stat, current + 1); }, 40);

		};

	};

	SHORTNAME.accordions = function(){

		// SHORTNAME.elems.accordions.siblings('.simple-accordion').andSelf().wrapAll('<div class="accordion"></div>');
		// SHORTNAME.elems.accordions.nextUntil('*:not(.simple-accordion)').addBack().wrapAll( '<div class="accordion"></div>' );

		$('.accordion').accordion({
			header: '.simple-accordion-title',
			collapsible: true,
			heightStyle: "content"
		});

		var icon = SHORTNAME.elems.accordions.find('.ui-icon');
		icon.addClass('ion-plus');

		if ( SHORTNAME.elems.accordions.find('.simple-accordion-title').is('.ui-state-active') ) {
			$('.ui-state-active').find(icon).addClass('ion-minus');
		}

		SHORTNAME.elems.accordions.on('click', function() {
			icon.removeClass('ion-minus').addClass('ion-plus');
			if ( $(this).find('.simple-accordion-title').is('.ui-state-active') ) {
				$(this).find(icon).removeClass('ion-plus').addClass('ion-minus');
			}
		});

	};

	SHORTNAME.photoGrid = function() {

		$('.photoset-grid-1').photosetGrid({
			// Manually set the grid layout - each number is # of rows and images per row; e.g. 21 - 2 imgs in first row, 1 image in second row
			layout: '12',
			// Change the width that the photo set grid will be rendered at. Default: 100% automatically fits its container for responsive layouts
			width: '100%',
			// Set the pixel width between the columns and rows. Default: 0px
			gutter: '35px',
			// Set to true to automatically swap out the default image src with the data-highres attribute once the image is wider than lowresWidth. This will also wrap each image with an a vs. div element. Default: false
			// highresLinks: true,
			// Sets the width where the default image is swapped out for the high resolution image. Default: 500
			// lowresWidth: 300,
			// Asign a common rel attribute for lightbox viewers
			// rel: 'print-gallery',

			onInit: function(){},
			onComplete: function(){
				// Show the grid after it renders
				$('.photoset-grid-1').css({
					'visibility': 'visible'
				});
			}

		});

	};

	SHORTNAME.widowFix = function() {

		// takes care of widows - hehe
		$('h1, h2, h4, h5, h6, .post-content').each(function(){
			var string = $(this).html();
			string     = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
			$(this).html(string);
		});

	};

	SHORTNAME.pageTransitions = function() {

		// fade transition navigation thru site
		SHORTNAME.elems.body.addClass('fadeIn');
		SHORTNAME.elems.body.on('click', 'a:not([href^="#"]):not([data-scroll-to]):not([data-type*="mfp-"])', function(e) {

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
			transition: 		300, // Integer: Speed of the transition, in milliseconds
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

		// honeypot antispam
		SHORTNAME.elems.contactForm.submit(function(){
			// need redic name so spambots wont pick up on it
			if ( $('#imSoAwesome').val().length != 0 ) {
				return false;
			}
		});

		// prevent form submission when Enter is pressed within input field
		$(window).keydown(function(event){
			if(event.keyCode == 13) {
				event.preventDefault();
				return false;
			}
		});

		// debugging validator, prevents form submit
		// $.validator.setDefaults({
		// 	debug: true,
		// 	success: "valid"
		// });

		// Form Validation
		if ( $().validate ) {
			SHORTNAME.elems.contactForm.validate();
			SHORTNAME.elems.contactForm.removeAttr('novalidate');
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

        // quick fix for icons
        // (needs work - current this finds anything that contains these letters within classes)
        $('body').find('[class*=ion-]').filter(function() {
            return this.className.match(/\bion-/);
        }).addClass('ion');

        $('body').find('[class*=fa-]').filter(function() {
            return this.className.match(/\bfa-/);
        }).addClass('fa');

        $('body').find('[class*=fi-]').filter(function() {
            return this.className.match(/\bfi-/);
        }).addClass('fi');

	});

	$window.resize(function(event) {
		// SHORTNAME.widowFix();
	});

	$(document).ready(function(){

		SHORTNAME.init();

	});

})(window.jQuery);
