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
			offset: 79, // 80-1, header height on scroll
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