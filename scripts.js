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

$(".menuToggle").on('click', function() {

	var tl = new TimelineMax(),
			$this = $(this),
			wrapper = $(".wrapper"),
			fullHam = $(".menuToggle"),
			mainMenu = $('.mainMenu'),
			links = $(".mainMenu h3"),
			ham1 = fullHam.find(".hamTop"),
			ham2 = fullHam.find(".hamMid"),
			ham3 = fullHam.find(".hamBot"),
			uniTime2 = 0.15;

	if ($this.hasClass("navOpen")) {
		$this.removeClass("navOpen");

		tl.set(wrapper, {overflow:'visible', height:"auto"})
			.to(mainMenu, 0.3, {x:"-100%"}, "menuClose")
			.staggerTo(links, 0.3, {opacity:0, x:"-20%"}, 0.03, "menuClose")
			.to(ham1, uniTime2, {rotation:0, y:0}, "menuClose")
			.to(ham2, uniTime2, {x:0, opacity:1}, "menuClose")
			.to(ham3, uniTime2, {rotation:0, y:0}, "menuClose");

		} else {
			$this.addClass("navOpen");

			tl.set(wrapper, {overflow:'hidden', height:"100%"})
				.set(links, {opacity:0, x:"-20%"}, "menuOpen")
				.to(mainMenu, 0.3, {x:"0%"}, "menuOpen")
				.staggerTo(links, 0.1, {opacity:1, x:"0%"}, 0.07, "menuOpen+0.03")
				.to(ham1, uniTime2, {rotation:227, y:9}, "menuOpen")
				.to(ham2, uniTime2, {x:5, opacity:0}, "menuOpen")
				.to(ham3, uniTime2, {rotation:-227, y:-9}, "menuOpen");
		}
});

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
