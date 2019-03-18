var saladHero = function() {

	var masterTL = new TimelineMax(),
			masterTL2 = new TimelineMax({repeat:-1, yoyo:true}),
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
			saladSections = $(['.top-five-section']),
			uniEaseOut = Elastic.easeOut.config(1, 0.3),
			uniEaseInOut = Power2.easeInOut,
			uniEaseDance =  Power1.easeInOut,
			uniTime = 2,
			uniTime2 = 1;

	function setSalad() {
		var tl = new TimelineMax();
		tl.set(leafL, {y:80, rotation:-70, transformOrigin:'bottom left'})
			.set(leafR, {y:80, rotation:70, transformOrigin:'bottom right'})
			.set(tomatoR, {y:0, x:-10, rotation:74, transformOrigin:'bottom left'})
			.set(tomatoL, {y:0, x:10, rotation:-74, transformOrigin:'bottom right'})
			.set(cuceR, {y:68, x:-120, rotation:64, transformOrigin:'center center'})
			.set(cuceM, {y:78, rotation:64, transformOrigin:'center center'})
			.set(cuceL, {y:68, x:120, rotation:-64, transformOrigin:'center center'})
			.set(eggR, {y:42, x:-45, rotation:104, transformOrigin:'bottom right'})
			.set(eggL, {y:42, x:45, rotation:-104, transformOrigin:'bottom left'})
			.set(backRMid, {y:79, rotation:-15, transformOrigin:'center center'})
			.set(backLMid, {y:79, rotation:15, transformOrigin:'center center'})
			.set(backREnd, {y:75, rotation:15, transformOrigin:'center center'})
			.set(backLEnd, {y:75, rotation:-15, transformOrigin:'center center'})
			.set(backLFar, {y:116, transformOrigin:'center center'})
			.set(backRFar, {y:116, transformOrigin:'center center'});
			if (screen.width >= 1023){
				tl.set(saladSections, {opacity:0});
			}

		return tl;
	}

	function openToss() {

		setTimeout(function(){

			var tl = new TimelineMax();
			tl.to(leafL, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut, onComplete:leafL2}, 'leafOut+=0.0')
			.to(leafR, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut,  onComplete:leafR2}, 'leafOut+=0.3')
			.to(tomatoR, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut, onComplete:tomatoR2}, 'leafOut+=0.2')
			.to(tomatoL, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut, onComplete:tomatoL2}, 'leafOut+=0.0')
			.to(cuceR, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut, onComplete:cuceR2}, 'leafOut+=0.1')
			.to(cuceM, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut, onComplete:cuceM2}, 'leafOut+=0.0')
			.to(cuceL, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut, onComplete:cuceL2}, 'leafOut+=0.0')
			.to(eggR, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut, onComplete:eggR2}, 'leafOut+=0.0')
			.to(eggL, uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut, onComplete:eggL2}, 'leafOut+=0.2')
			.to([backLMid,backLEnd,backRMid,backREnd], uniTime, {y:0, x:0, rotation:0, ease: uniEaseOut, onComplete:backMid2}, 'leafOut+=0.0')
			.to([backLFar, backRFar], uniTime, {y:0, x:0, ease: uniEaseOut, onComplete:backFar2}, 'leafOut+=0.0')
			.to(saladSections, 0.8, {opacity:1}, 'leafOut+=0.1');
			return tl;

		}, 400);
	}

	function leafL2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to(leafL, uniTime2, {rotation:-1, ease: uniEaseDance})
			.to(leafL, uniTime2, {rotation:1, ease: uniEaseDance});
		return tl;
	}

	function leafR2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to(leafR, uniTime2, {rotation:1, ease: uniEaseDance})
			.to(leafR, uniTime2, {rotation:-1, ease: uniEaseDance});
		return tl;
	}


	function tomatoR2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to(tomatoR, uniTime2, {rotation:1, ease: uniEaseDance});
		return tl;
	}

	function tomatoL2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to(tomatoL, uniTime2, {rotation:-1, ease: uniEaseDance});
		return tl;
	}

	function cuceR2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to(cuceR, uniTime2, {x:1, y:-1, rotation:1, ease: uniEaseDance});
		return tl;
	}

	function cuceM2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to(cuceM, uniTime2, {rotation:2, y:3, ease: uniEaseDance})
			.to(cuceM, uniTime2, {rotation:-1, y:-1, ease: uniEaseDance});
		return tl;
	}

	function cuceL2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to(cuceL, uniTime2, {x:1, y:-1, rotation:-1, ease: uniEaseDance});
		return tl;
	}

	function eggR2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to(eggR, uniTime2, {rotation:3, ease: uniEaseDance});
		return tl;
	}

	function eggL2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to(eggL, uniTime2, {rotation:-3, ease: uniEaseDance});
		return tl;
	}

	function backMid2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to([backLMid,backLEnd,backRMid,backREnd], uniTime2, {y:2, ease: uniEaseDance});
		return tl;
	}

	function backFar2() {
		var tl = new TimelineMax({repeat:-1, yoyo:true});
		tl.to([backLFar, backRFar], uniTime2, {y:-2, ease: uniEaseDance});
		return tl;
	}

	masterTL.add(setSalad)
					.add(openToss);

};
