(function ($, root, undefined) {$(function () {
'use strict';
(function rankBarsOut() {

  var controller = new ScrollMagic.Controller(),
      projects = Array.prototype.slice.call(document.querySelectorAll(".singleSalad")),
      self = this;

  projects.forEach(function(self) {

  	 var sceneOne = new TimelineMax(),
         singleBar = self.querySelectorAll(".rankBar");


     singleBar.forEach( function(selfTwo){

       var barLength = $(selfTwo).data('length')*100,
           bar = $(selfTwo).find('rect'),
           textureBar = $(self).find('.textureBar'),
           dressingBar = $(self).find('.dressingBar'),
           greensBar = $(self).find('.greensBar'),
           textureLabels = $(self).find('.textureLabels'),
           dressingLabels = $(self).find('.dressingLabels'),
           greensLabels = $(self).find('.greensLabels'),
           textureLength = $(textureBar).data('length')*100,
           dressingLength = $(dressingBar).data('length')*100,
           greensLength = $(greensBar).data('length')*100,
           greensFill = $(greensBar).find('rect'),
           textureFill = $(textureBar).find('rect'),
           dressingFill = $(dressingBar).find('rect');

       sceneOne.to(textureFill, 0.6, {width:textureLength, ease:Elastic.easeOut.config(1, 1)}, "fillOut")
               .to(textureLabels, 0.6, {opacity:1,y:0, ease:Elastic.easeOut.config(1, 1)}, "fillOut+=0.3")
               .to(dressingFill, 0.6, {width:dressingLength, ease:Elastic.easeOut.config(1, 1)}, "fillOut+=0.2")
               .to(dressingLabels, 0.6, {opacity:1,y:0, ease:Elastic.easeOut.config(1, 1)}, "fillOut+=0.75")
               .to(greensFill, 0.6, {width:greensLength, ease:Elastic.easeOut.config(1, 1)}, "fillOut+=0.4")
               .to(greensLabels, 0.6, {opacity:1,y:0, ease:Elastic.easeOut.config(1, 1)}, "fillOut+=.95");

     });

  	var scene1 = new ScrollMagic.Scene({
  		triggerElement: self,
  		triggerHook: "onEnter",
  		offset: 300,
      reverse:true
  	}).setTween(sceneOne)
  	  .addTo(controller);

  });

}());

//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES

$(window).on('load', function() {

	(function navMagic() {

		if (screen.width >= 1025){

			var setupTL = new TimelineMax(),
					titleSwapTL = new TimelineMax(),
					secondTL = new TimelineMax(),
					controller = new ScrollMagic.Controller(),
					// First Section
					firstTrigger = $(".top5Trigger"),
					firstMover = $(".singleSalad"),
					secondTrigger = $(".saladTrigger"),
					secondMover = $(".rankBar"),
					scrolledTitle = $(".scrolledTitle"),
					saladParts = $(".saladParts"),
					mainTitle = $(".mainTitle"),
		      // Universal Variables
		      uniTime1 = 1,
		      uniTime2 = 0.3,
		      uniEase1 = Power4.easeOut,
		      uniEase2 = Power4.easeIn;

	    setupTL.set(mainTitle, {transformPerspective:300})
						 .set(scrolledTitle, {transformPerspective:300,transformOrigin:"50% 100%", rotationX:90});

			titleSwapTL.to(scrolledTitle, 0.3, {opacity:1,rotationX:0},"swapTitle")
								 .to(mainTitle, 0.3, {opacity:0, transformOrigin:"50% 0%", rotationX:-90},"swapTitle")
								 .to(saladParts, 0.3, {opacity:0, y:-80},"swapTitle");

			var titleHeight = $(".mainTitle").height();

			console.log(titleHeight);

			var titleSwapScene = new ScrollMagic.Scene({
				triggerElement: ".mainTitle",
				triggerHook: 'onLeave',
				duration: titleHeight,
				offset:-80,
				reverse: true,
			}).setTween(titleSwapTL);

			var secondScene = new ScrollMagic.Scene({
				triggerElement: ".saladTrigger",
				triggerHook: 'onLeave',
				offset:0,
				reverse: true,
			}).on('enter', mainNavLock());

			var pinHeaderScene = new ScrollMagic.Scene({
				triggerElement: ".headerPin",
				triggerHook: 'onLeave',
				offset:0,
				reverse: true,
			}).setPin(".headerPin");



			// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
			controller.addScene([titleSwapScene, pinHeaderScene]);

		}// End 1025 Screen Width Scope


		function mainNavLock() {


		}

		$(".single-salad").each( function(){

			var setupTL = new TimelineMax(),
					numberPunchTL = new TimelineMax(),
					controller = new ScrollMagic.Controller(),
					saladNum = $(this).find(".salad-order-number"),
					saladOrder = $(this).find(".salad-order");


			setupTL.set(saladNum, {opacity:0, scale:10})
						 .set(saladOrder, {transformPerspective:300, transformOrigin:"50% 0%"});

			numberPunchTL.to(saladNum, 0.2, {scale:1, opacity:1})
									 .to(saladOrder, 0.1, {rotationX:-30})
									 .to(saladOrder, 0.1, {rotationX:30})
									 .to(saladOrder, 0.1, {rotationX:0});

			var numberPunchScene = new ScrollMagic.Scene({
				triggerElement: this,
				offset:-80,
				reverse: false,
			}).setTween(numberPunchTL);


			controller.addScene(numberPunchScene);

		});


	}()); //MENU TOGGLES END
}); //WINDOW LOAD END

(function menuToggles() {

	var wrapper = $(".wrapper"),
			fullHam = $(".menuToggle"),
			mainMenu = $('.mainMenu'),
			links = $(".mainMenu h3"),
			ham1 = fullHam.find(".hamTop"),
			ham2 = fullHam.find(".hamMid"),
			ham3 = fullHam.find(".hamBot"),
			uniTime = 0.3,
			uniTime2 = 0.15,
			subHam = $(".submenuToggle"),
			subHam1 = subHam.find(".hamTop"),
			subHam2 = subHam.find(".hamMid"),
			subHam3 = subHam.find(".hamBot");


	function mainNavClose() {

		var tl = new TimelineMax();

		// tl.set($(".wrapper"), {height:"auto", overflow:"visible"});
		tl.to(mainMenu, 0.3, {x:"-100%"}, "menuClose")
			.staggerTo(links, 0.3, {opacity:0, x:"-20%"}, 0.03, "menuClose")
			.to(ham1, uniTime2, {rotation:0, y:0}, "menuClose")
			.to(ham2, uniTime2, {x:0, opacity:1}, "menuClose")
			.to(ham3, uniTime2, {rotation:0, y:0}, "menuClose");

		links.removeClass("hover-add");
	}

	function mainNavOpen() {

		var tl = new TimelineMax();

		// tl.set($(".wrapper"), {height:"100%", overflow:"hidden"});
		tl.set(links, {opacity:0, x:"-20%"}, "menuOpen")
			.to(mainMenu, 0.3, {x:"0%"}, "menuOpen")
			.staggerTo(links, 0.1, {opacity:1, x:"0%"}, 0.07, "menuOpen+0.03")
			.to(ham1, uniTime2, {rotation:227, y:9}, "menuOpen")
			.to(ham2, uniTime2, {x:5, opacity:0}, "menuOpen")
			.to(ham3, uniTime2, {rotation:-227, y:-9}, "menuOpen");
	}

	function allNavsClose() {

		var tl = new TimelineMax();

		$(".aboutMenu").css("z-index", "98");
		$(".aboutToggle").removeClass("about-hover");
		$(".submitMenu").css("z-index", "98");
		$(".submitToggle").removeClass("submit-hover");
		links.removeClass("hover-add");

		$(".menuToggle").removeClass("navOpen");

		tl.set($(".wrapper"), {height:"auto", overflow:"visible"})
			.to(".subMenu", 0.2, {left:"-55%"}, "menuClose")
			.to(subHam1, uniTime2, {rotation:0, y:0}, "menuClose")
			.to(subHam2, uniTime2, {x:0, opacity:1}, "menuClose")
			.to(subHam3, uniTime2, {rotation:0, y:0}, "menuClose")
			.to(mainMenu, 0.2, {x:"-100%"}, "menuClose+=0.15")
			.staggerTo(links, 0.2, {opacity:0, x:"-20%"}, 0.03, "menuClose+=0.15")
			.to(ham1, uniTime2, {rotation:0, y:0,opacity:1}, "menuClose+=0.2")
			.to(ham2, uniTime2, {x:0, opacity:1}, "menuClose+=0.2")
			.to(ham3, uniTime2, {rotation:0, y:0,opacity:1}, "menuClose+=0.2");
	}

	$(".menuToggle").on('click', function() {

		var	$this = $(this);

		if ($this.hasClass("navOpen")) {
			$this.removeClass("navOpen");
			mainNavClose();
		} else {
			$this.addClass("navOpen");
			mainNavOpen();
		}
	});

	$(".subNavAnchor a").on('click', function() {

		var tl = new TimelineMax(),
	      $this = $(this);

		$(".menuToggle").removeClass("navOpen");
		allNavsClose();
	});


	$(".subNavToggle").on('click', function() {

	  var tl = new TimelineMax(),
	      $this = $(this);


    tl.to(".subMenu", 0.2, {left:"-55%"}, "subClose")
			.to(subHam1, uniTime2, {rotation:0, y:0}, "subClose")
			.to(subHam2, uniTime2, {x:0, opacity:1}, "subClose")
			.to(subHam3, uniTime2, {rotation:0, y:0}, "subClose");

		if ($this.hasClass("submitToggle")) {
			$(".submitMenu").addClass("openSubNav");
			$(".subMenu").css("z-index", "81");
			$(".aboutToggle").removeClass("hover-add");
			$(".submitToggle").addClass("hover-add");

			tl.to(".submitMenu", 0.3, {left:"45%", onComplete:moveSubmitNavForward});
		}

		if ($this.hasClass("aboutToggle")) {

			$(".aboutMenu").addClass("openSubNav");
			$(".subMenu").css("z-index", "81");
			$(".submitToggle").removeClass("hover-add");
			$(".aboutToggle").addClass("hover-add");

			tl.to(".aboutMenu", 0.3, {left:"45%", onComplete:moveAboutNavForward});
		}

    tl.to(subHam1, uniTime2, {rotation:227, y:9}, "subMenuOpen+=0.05")
      .to(subHam2, uniTime2, {x:5, opacity:0}, "subMenuOpen+=0.05")
      .to(subHam3, uniTime2, {rotation:-227, y:-9}, "subMenuOpen+=0.05")
      .to(ham1, uniTime2, {rotation:0, y:0,  opacity:0}, "subMenuOpen-=0.25")
      .to(ham2, uniTime2, {x:0, opacity:0}, "subMenuOpen-=0.25")
      .to(ham3, uniTime2, {rotation:0, y:0, opacity:0}, "subMenuOpen-=0.25");

    function moveSubmitNavForward() {
      $(".submitMenu").css("z-index", "100");
    }

		function moveAboutNavForward() {
			$(".aboutMenu").css("z-index", "100");
		}
	});


	$(".submenuToggle").on('click', function() {
		allNavsClose();
	});

}());

(function saladHero() {

	var masterTL = new TimelineMax(),
			backLFar= $('.leaf-far-back-left'),
			backRFar = $('.leaf-far-back-right'),
			backLMid = $('.leaf-back-left-mid'),
			backLEnd = $('.leaf-back-left-end'),
			backRMid = $('.leaf-back-right-mid'),
			backREnd = $('.leaf-back-right-end'),
			leafR = $('.leaf-right'),
			leafL = $('.leaf-left'),
			tomatoL = $('.tomato-left'),
			tomatoR = $('.tomato-right'),
			eggL= $('.egg-left'),
			eggR = $('.egg-right'),
			cuceL = $('.cucumber-left'),
			cuceM = $('.cucumber-middle'),
			cuceR = $('.cucumber-right'),
			uniEaseOut = Elastic.easeOut.config(1, 0.3),
			uniEaseInOut = Power2.easeInOut,
			uniEaseDance =  Power2.easeInOut,
			uniTime = 2,
			uniTime2 = 1;

	function openToss() {

		var tl = new TimelineMax();

		tl.set(leafL, {y:50, rotation:-30, transformOrigin:'bottom right'})
			.set(leafR, {y:50, rotation:30, transformOrigin:'bottom left'})
			.set(tomatoR, {y:60, rotation:64, transformOrigin:'center center'})
			.set(tomatoL, {y:60, rotation:-64, transformOrigin:'center center'})
			.set(cuceR, {y:100, x:-70, rotation:64, transformOrigin:'center center'})
			.set(cuceM, {y:110, rotation:64, transformOrigin:'center center'})
			.set(cuceL, {y:100, x:70, rotation:-64, transformOrigin:'center center'})
			.set(eggR, {y:85, rotation:64, transformOrigin:'center center'})
			.set(eggL, {y:85, rotation:-64, transformOrigin:'center center'})
			.set([backLMid,backLEnd,backRMid,backREnd], {y:85, transformOrigin:'center center'})
			.set([backLFar, backRFar], {y:125, transformOrigin:'center center'})

			.to(leafL, uniTime, {y:0, rotation:0, ease: uniEaseOut}, 'leafOut')
			.to(leafR, uniTime, {y:0, rotation:0, ease: uniEaseOut}, 'leafOut+=0.1')
			.to(tomatoR, uniTime, {y:0, rotation:0, ease: uniEaseOut}, 'leafOut+=0.3')
			.to(tomatoL, uniTime, {y:0, rotation:0, ease: uniEaseOut}, 'leafOut+=0.1')
			.to(cuceR, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut}, 'leafOut+=0.3')
			.to(cuceM, uniTime, {y:0, rotation:0, ease: uniEaseOut}, 'leafOut+=0.05')
			.to(cuceL, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut}, 'leafOut+=0.15')
			.to(eggR, uniTime, {y:0, rotation:0, ease: uniEaseOut}, 'leafOut')
			.to(eggL, uniTime, {y:0, rotation:0, ease: uniEaseOut}, 'leafOut+=0.2')
			.to([backLMid,backLEnd,backRMid,backREnd], uniTime, {y:0, rotationY:0, ease: uniEaseOut}, 'leafOut+=0.6')
			.to([backLFar, backRFar], uniTime, {y:0, ease: uniEaseOut, onComplete:repeatToss}, 'leafOut+=0.6');

		return tl;

	}

	function repeatToss() {

		var tl = new TimelineMax({repeat:-1});

		tl.to(leafL, uniTime2, {rotation:-2, ease: uniEaseDance}, 'leafOut')
			.to(leafL, uniTime2, {rotation:2, ease: uniEaseDance}, 'leafOut1')
		  .to(leafL, uniTime2, {rotation:0, ease: uniEaseDance}, 'leafOut2')
		  .to(leafR, uniTime2, {rotation:2, ease: uniEaseDance}, 'leafOut')
			.to(leafR, uniTime2, {rotation:-2, ease: uniEaseDance}, 'leafOut1')
		  .to(leafR, uniTime2, {rotation:0, ease: uniEaseDance}, 'leafOut2')
		  .to(tomatoR, uniTime2, {rotation:2, ease: uniEaseDance}, 'leafOut')
		  .to(tomatoR, uniTime2, {rotation:0, ease: uniEaseDance}, 'leafOut2')
		  .to(tomatoL, uniTime2, {rotation:-2, ease: uniEaseDance}, 'leafOut')
		  .to(tomatoL, uniTime2, {rotation:0, ease: uniEaseDance}, 'leafOut2')
		  .to(cuceR, uniTime2, {rotation:2, ease: uniEaseDance}, 'leafOut')
		  .to(cuceR, uniTime2, {rotation:0, ease: uniEaseDance}, 'leafOut2')
		  .to(cuceM, uniTime2, {rotation:20, x:9, y:15, ease: uniEaseDance}, 'leafOut')
			.to(cuceM, uniTime2, {rotation:-3, x:-2, y:5, ease: uniEaseDance}, 'leafOut1')
		  .to(cuceM, uniTime2, {rotation:0, x:0, y:0, ease: uniEaseDance}, 'leafOut2')
		  .to(cuceL, uniTime2, {rotation:-2, ease: uniEaseDance}, 'leafOut')
		  .to(cuceL, uniTime2, {rotation:0, ease: uniEaseDance}, 'leafOut2')
		  .to(eggR, uniTime2, {rotation:2, ease: uniEaseDance}, 'leafOut')
		  .to(eggR, uniTime2, {rotation:0, ease: uniEaseDance}, 'leafOut2')
		  .to(eggL, uniTime2, {rotation:-2, ease: uniEaseDance}, 'leafOut')
		  .to(eggL, uniTime2, {rotation:0, ease: uniEaseDance}, 'leafOut2')
		  .to([backLMid,backLEnd,backRMid,backREnd], uniTime2, {rotation:2, ease: uniEaseDance}, 'leafOut')
		  .to([backLMid,backLEnd,backRMid,backREnd], uniTime2, {rotation:0, ease: uniEaseDance}, 'leafOut2')
		  .to([backLFar, backRFar], uniTime2, {rotation:-2, ease: uniEaseDance}, 'leafOut')
		  .to([backLFar, backRFar], uniTime2, {rotation:0, ease: uniEaseDance}, 'leafOut2');

		return tl;
	}

	masterTL.add(openToss);
}());

// $(window).on('load', function() {
//
// 	if (screen.width >= 1025){
//
// 		var setupTL = new TimelineMax(),
// 				firstTL = new TimelineMax(),
// 				secondTL = new TimelineMax(),
// 				controller = new ScrollMagic.Controller(),
// 				// First Section
// 				firstTrigger = $(".top5Trigger"),
// 				firstMover = $(".singleSalad"),
// 				secondTrigger = $(".saladTrigger"),
// 				secondMover = $(".rankBar"),
// 	      // Universal Variables
// 	      uniTime1 = 1,
// 	      uniTime2 = 0.3,
// 	      uniEase1 = Power4.easeOut,
// 	      uniEase2 = Power4.easeIn;
//
//     setupTL.set(firstMover, {opacity:1})
// 					 .set(secondMover, {opacity:1});
//
// 		firstTL.to(firstMover, 0.3, {opacity:1});
//
// 		secondTL.to(secondMover, 0.3, {opacity:1});
//
// 		var firstScene = new ScrollMagic.Scene({
// 			triggerElement: ".top5Trigger",
// 			triggerHook: 'onEnter',
// 			offset:0,
// 			reverse: false,
// 		}).setTween(firstTL);
//
// 		var secondScene = new ScrollMagic.Scene({
// 			triggerElement: ".saladTrigger",
// 			triggerHook: 'onLeave',
// 			offset:0,
// 			reverse: true,
// 		}).on('enter', rankBarsOut());
//
// 		// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
// 		controller.addScene([secondScene]);
//
// 	}// End Screen Width Scope
//
// });

});})(jQuery, this);
