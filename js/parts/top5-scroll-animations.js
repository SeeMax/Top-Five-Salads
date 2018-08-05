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
