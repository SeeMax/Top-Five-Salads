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
