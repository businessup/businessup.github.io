jQuery(document).ready(function(){

	//menu
	var menu = document.querySelector('#menu');
	var main = document.querySelector('main');
	var drawer = document.querySelector('.nav');
	var header = document.querySelector('header');

	menu.addEventListener('click', function(e) {
		drawer.classList.toggle('open');
		e.stopPropagation();
		menu.classList.toggle('open');
	});

	main.addEventListener('click', function() {
		drawer.classList.remove('open');
		menu.classList.remove('open');
	});

	header.addEventListener('click', function() {
		drawer.classList.remove('open');
		menu.classList.remove('open');
	});

	//smooth scroll
	$('a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	$('html, body').animate({scrollTop: $(target).offset().top}, 800);
	return false;
	});


	//fixed order btn
    var $order = $("#btn__order");
    
	if(window.matchMedia('(max-width: 680px)').matches) {
	    $(window).scroll(function(){
	        if ( $(this).scrollTop() > 500 && $order.hasClass("default") ){
	            $order.fadeOut('fast',function(){
	                $(this).removeClass("default")
	                       .addClass("fixed transbg")
	                       .fadeIn('fast');
	            });
	        } else if($(this).scrollTop() <= 500 && $order.hasClass("fixed")) {
	            $order.fadeOut('fast',function(){
	                $(this).removeClass("fixed transbg")
	                       .addClass("default")
	                       .fadeIn('fast');
	            });
	        }
	    });
	} 


	//preview app
	function hiding() {

	    if(window.matchMedia('(max-width: 950px)').matches) {
	    	$('#hide-layout, #preview').hide(); 
			$('#hide-layout').css({opacity: .5}); 
			alignCenter($('#preview')); 

			$(window).resize(function() {
				alignCenter($('#preview')); 
			})	

			$('.example').click(function() {
				$('#hide-layout, #preview').fadeIn(300); 
			})
			$('#close').click(function() {
				$('#hide-layout, #preview').fadeOut(300);
			})

			function alignCenter(elem) {
				elem.css({
				left: ($(window).width() - elem.width())/2 + 'px', 
				top: ($(window).height() - elem.height())/2 + 'px' 
				})
			}
	    } 
	}

	hiding();
	$(window).resize(hiding);    


	//recall
	if( screen.width >= '680' ) {
    	$('.f').addClass('active'); 
		$('.recall').mousemove(function(e) {
		  	e.preventDefault();
		  	$('.recall').removeClass('active');
			$(this).addClass('active');		
		});
    } else {
    	hideRecall();
    	$(window).resize(hideRecall);
    }



	// function hideRecall() {

 //    	$('#hide-layout, .each__recall').hide(); 
	// 	$('#hide-layout').css({opacity: .5}); 

	// 	$(window).resize(function() {
	// 		alignCenter($('.each__recall')); 
	// 	})	

	// 	$('.front').click(function() {
	// 		$('.recall').removeClass('active');
	// 		$('.front').removeClass('active');		
	// 		$(this).closest(".recall").addClass('active');
	// 		$(this).addClass('active');
	// 		$('#hide-layout, .recall.active .each__recall').fadeIn(300);
	// 		alignCenter($('.each__recall'));
	// 		return false;
	// 	})

	// 	$('.close__rec, #hide-layout').click(function() {
	// 		$('#hide-layout, .recall.active .each__recall').fadeOut(300);
	// 		return false;
	// 	})

	// 	function alignCenter(elem) {
	// 		elem.css({
	// 		left: ($(window).width() - elem.width())/2 + 'px', 
	// 		top: ($(window).height() - elem.height())/2 + 'px' 
	// 		})
	// 	} 
	// }

   
		

	if (!is_touch_device()) {
    // Animation
    	TweenMax.from(".inside__header", 2, {opacity:0, right:"600px"});
    	TweenMax.from(".img", 2, {opacity:0, left:"600px"});

    	var ctrl = new ScrollMagic.Controller({
    		globalSceneOptions: {
    		triggerHook: '0.7',
    		}
    	});

    	var tweenA = TweenMax.staggerFrom(".sceneA", 2, {
    		opacity:0, 
    		left:"600px"
    	}, 0.25);

    	var sceneA = new ScrollMagic.Scene({
    		triggerElement: ".sceneA",
    		offset: 50
    	})
    	.setTween(tweenA)
    	.addTo(ctrl);

    	sceneA.on("enter", function (event) {
    		sceneA.remove();
    	});

    	var tweenB = TweenMax.staggerFrom(".sceneB", 2, {
    		opacity: 0, 
    		top: "50px",
    		ease: Expo.easeOut
    	}, 0.5);

    	var sceneB = new ScrollMagic.Scene({
    		triggerElement: ".sceneB",
    		offset: 50
    	})
    	.setTween(tweenB)
    	.addTo(ctrl);

    	sceneB.on("enter", function (event) {
    		sceneB.remove();
    	});

    	var tl = new TimelineMax()
    	tl.from("#sceneC1", 0.8, {left: "300px", opacity: 0})
    	  .from("#sceneC2", 0.8, {left: "300px", opacity: 0})
    	  .from("#sceneC3", 0.8, {left: "300px", opacity: 0})
    	  .from("#sceneC6", 0.8, {right: "300px", opacity: 0})
    	  .from("#sceneC5", 0.8, {right: "300px", opacity: 0})
    	  .from("#sceneC4", 0.8, {right: "300px", opacity: 0});

    	var sceneC = new ScrollMagic.Scene({
    		triggerElement: "#sceneC1",
    		offset: 50
    	})
    	.setTween(tl)
    	.addTo(ctrl);

    	sceneC.on("enter", function (event) {
    		sceneC.remove();
    	});

    	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1; 
		var isIE10orOlder = navigator.userAgent.toLowerCase().indexOf('msie ') > 0; 
		var isIE11 = navigator.userAgent.toLowerCase().indexOf('trident/') > 0; 
		var isEdge = navigator.userAgent.toLowerCase().indexOf('edge/') > 0;

    	if (!isFirefox && !isIE10orOlder && !isIE11 && !isEdge) {
	    	! function(e) {
	    		var parallax = new ScrollMagic.Controller,
	    			slides = ["#slide01", "#slide02"];

	    		slides.forEach(function(slides) {
	    					{
	    						var bcg = e(slides).find(".bcg");
	    						new ScrollMagic.Scene({
	    							triggerElement: slides,
	    							triggerHook: "onEnter",
	    							duration: "200%"
	    						})
	    						.setTween(bcg, {y: "80%", ease: Linear.easeNone})
	    						.addTo(parallax)
	    					}
	    				});
	    	}(jQuery);
    	}

	}
	function is_touch_device() {
	  return 'ontouchstart' in window // works on most browsers 
	      || 'onmsgesturechange' in window; // works on ie10
	};



	//iframe
	;(function() {  
	  var itemClass = "example";
	  var buttons = document.getElementsByClassName(itemClass); 
	  for (var i = 0; i < buttons.length ; i++) {
	      buttons[i].addEventListener("click", function (event) {
	        clearAll(itemClass);
	        this.className += " active";
	        var id = this.getAttribute('id');
	            iframe = document.getElementById('preview_ios_app_iframe');
	            link = "http://cloud.apps-club.com.ua/preview/index.php?lang=ru-RU&appCode=" + id + "&mode=2&env=1";
	        iframe.setAttribute('src', link);
	      }, false);
	  }

	  function clearAll(clear) {
	    for (var i = 0; i < buttons.length ; i++) {
	        buttons[i].className = clear;
	    }
	  }

	})();

});