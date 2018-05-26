$(function(){
	// 产品模块二级菜单
	$('.p_sidenav li').hover(function(){
		$(this).find('ul').fadeIn(100);
	},function(){
		$(this).find('ul').fadeOut(100);
	});

	$(".click_span").click(function(){
		$(this).parent().addClass("on").siblings().removeClass("on");
	});

	$('.chenning-header-1 #com_mainmenu > ul li').hover(function(){
		$(this).find('ul').fadeIn(100);
	},function(){
		$(this).find('ul').fadeOut(100);
	});


	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			$('#to-the-top').fadeIn();
			$('#chenning-header-menu').addClass('chenning-header-sticked');
			$('.chenning-content').css('padding-top', $('#chenning-header-menu').height() + 'px');
		} else {
			$('#to-the-top').fadeOut();
			$('#chenning-header-menu').removeClass('chenning-header-sticked');
			$('.chenning-content').css('padding-top', 0);
		}
		
	});
	$('#to-the-top').click(function() { 
		$('body,html').animate({scrollTop: 0}, 500); 
	});
	$('#layerslider').layerSlider({
	    skinsPath : '/templates/css_style/layerslider/skins/',
	    skin : 'fullwidth',
	    thumbnailNavigation : 'hover',
	    hoverPrevNext : false,
	    responsive : false,
	    responsiveUnder : 1170,
	    sublayerContainer : 1170
	});
	
	$('.service-model').find('.services-divs').hover(function(){
		$(this).find('figcaption').fadeIn();
	},function(){
		$(this).find('figcaption').fadeOut();
	});


	$('.chenning-toggle').each(function() {
		var $this = $(this),
			$article = $this.find('article'),
			$header = $article.find('header'),
			$content = $article.find('div');
		$content.hide();
		$header.removeClass('active');
		$article.last().css('margin-bottom', '0px');
		$article.each(function() {
			var $t = $(this);
			if ($t.hasClass('open')) {
				$t.find('.fa').addClass('fa-minus');
				$t.find('header').addClass('active');
				$t.find('p').show();
			}
		});
		$header.click(function() {
			$header.parent().removeClass('open');
			if ($(this).hasClass('active')) {
				$(this).find('.fa').removeClass('fa-minus');
				$(this).removeClass('active');
				$(this).parent().find('div').slideUp();
			} else {
				$header.removeClass('active');
				$content.slideUp();
				$header.find('.fa').removeClass('fa-minus');
				$(this).find('.fa').addClass('fa-minus');
				$(this).addClass('active');
				$(this).parent().find('div').slideDown();
			}
		});

		var len = $('.chenning-section-news-img .col-lg-6').length;
		for(var i = 0; i < len; i++) {
			var ele = $('.chenning-section-news-img .col-lg-6').eq(i).find('strong');
			if(ele.length > 0) {
				ele.parent().addClass('strongEle');
			}
		}
	});


	/*********************************************

		Mobile Menu

	*********************************************/
	var $mobileMenu = $('.chenning-mobile-menu .i_nav'), isMobileMenuShown = 1;
	$mobileMenu.css('max-height', $(window).height() - 40);
	$mobileMenu.mCustomScrollbar();
	$('<span class="border"></span>').appendTo($mobileMenu.find('ul li'));
	$('<span class="border"></span>').appendTo($mobileMenu);
	$mobileMenu.find('li').each(function() {
		var $ul = $(this).find('> ul');
		if ($ul.length > 0)
			$('<i class="glyphicon glyphicon-plus-sign"></i>').appendTo($(this));
		var $i = $(this).find('> i.glyphicon-plus-sign');
		$i.click(function() {
			$(this).toggleClass('glyphicon-minus-sign');
			if ($(this).hasClass('glyphicon-minus-sign')) {
				$(this).parent('li').find('> ul').show();
			} else {
				$(this).parent('li').find('> ul').hide();
			}
			$mobileMenu.mCustomScrollbar('update');
		});
	});
	$mobileMenu.mCustomScrollbar('update');
	$('#chenning-mobile-menu-btn').click(function() {
		if (isMobileMenuShown) {
			$('#chenning-mobile-menu').animate({
				'right':'0px'
			});
			$(this).animate({
				'right':'200px'
			});
			isMobileMenuShown = 0;
		} else {
			$('#chenning-mobile-menu').animate({
				'right':'-200px'
			});
			$(this).animate({
				'right':'0px'
			});
			isMobileMenuShown = 1;
		}
		$(this).toggleClass('clicked');
	});
	$('#chenning-mobile-cart-btn').click(function() {
		if (isMobileMenuShown) {
			$('#chenning-mobile-cart').animate({
				'right':'0px'
			});
			$(this).animate({
				'right':'200px'
			});
			isMobileMenuShown = 0;
		} else {
			$('#chenning-mobile-cart').animate({
				'right':'-200px'
			});
			$(this).animate({
				'right':'0px'
			});
			isMobileMenuShown = 1;
		}
		$(this).toggleClass('clicked');
	});

})
