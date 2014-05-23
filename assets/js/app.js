// @codekit-prepend 'vendor/jquery-2.0.3.min.js'
// @codekit-prepend 'vendor/modernizr-2.8.2.min.js'
// @codekit-prepend 'plugins/fastclick.js'
// @codekit-prepend 'plugins/retina.js'
// @codekit-prepend 'plugins/simpleAnchors.js'
// @codekit-prepend 'plugins/jquery.easing.min.js'
// @codekit-prepend 'plugins/jquery.lazyload.min.js'
// @codekit-prepend 'plugins/responsive-nav/responsive-nav.min.js'

(function($){

	/* jshint devel:true */
	'use strict';

	window.THEMENAME = {};

	var SHORTNAME = window.THEMENAME;

	var $window = $(window);

	SHORTNAME.init = function(){
		SHORTNAME.setElements();
		SHORTNAME.basics();
		SHORTNAME.vertAlign();
	};

	SHORTNAME.setElements = function(){
		SHORTNAME.elems				= {};
		SHORTNAME.elems.header		= $('#header');
	};

	SHORTNAME.basics = function(){

		// jQuery Lazyload
		$('img.lazy').lazyload({
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
			offset: SHORTNAME.elems.header.height() - 1, // $header-height-1, header height on scroll bug
			easing: 'easeInOutCubic'
		});

	};

	SHORTNAME.vertAlign = function() {
		// Vertical Align
		var vertAlign = function() {
			$('.valign').each(function() {
				var newHeight = $(this).parent().height();
				$(this).parent().height(newHeight);
			});
		};
		vertAlign();
	};

	$(document).ready(function(){

		SHORTNAME.init();

	});//close document ready

})(window.jQuery);