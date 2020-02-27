// JavaScript Document
$(document).ready(function () {
	"use strict";
    $('.truncate button').click(function() {
		$(this).parent('.truncate').toggleClass('open');
		if ($('.truncate').hasClass('open')) {
			$(this).html('Show Less');
		} else {
			$(this).html('Show More');
		}
	});
    var secondaryNav = $('.nav-horizontal'),
		secondaryNavTopPosition = secondaryNav.offset().top,
		contentSections = $('.jump-link-section');
    $(window).on('scroll', function(){
		//on desktop - fix secondary navigation on scrolling
		if($(window).scrollTop() > secondaryNavTopPosition ) {
			//fix secondary navigation
			secondaryNav.addClass('is-fixed');
		} else {
			secondaryNav.removeClass('is-fixed');
		}
		//on desktop - update the active link in the secondary fixed navigation
		updateSecondaryNavigation();
	});
    function updateSecondaryNavigation() {
		contentSections.each(function(){
			var actual = $(this),
				actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
				actualAnchor = secondaryNav.find('a[href="#'+actual.attr('id')+'"]');
			if ( ( actual.offset().top - secondaryNav.height() <= $(window).scrollTop() ) && ( actual.offset().top +  actualHeight - secondaryNav.height() > $(window).scrollTop() ) ) {
				actualAnchor.addClass('active');
			} else {
				actualAnchor.removeClass('active');
			}
		});
	}
    function update(){
        var height = $(window).scrollTop();
        $('.ah-bg-1').each(function() {
            $(this).css('background-position', 'center ' + Math.round((height) * 0.16) + 'px');
        });
        $('.ah-bg-2').each(function() {
            $(this).css('background-position', 'center ' + Math.round((height) * 0.13) + 'px');
        });
        $('.ah-bg-3').each(function() {
            $(this).css('background-position', 'center ' + Math.round((height) * 0.1) + 'px');
        });
    }

    $(window).bind('scroll', update);
    });
