$(window).on('load', function() {

	(function navMagic() {


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



			if (screen.width >= 1023){
				setupTL.set(mainTitle, {transformPerspective:300});

				titleSwapTL.to(scrolledTitle, 0.3, {opacity:1},"swapTitle")
									 .to(mainTitle, 0.3, {opacity:0, transformOrigin:"50% 0%", rotationX:-90},"swapTitle")
									 .to(saladParts, 0.3, {opacity:0, y:-80},"swapTitle");
			} else {

				titleSwapTL.to(scrolledTitle, 0.3, {opacity:1},"swapTitle")
									 .to(mainTitle, 0.3, {opacity:0},"swapTitle");
			}

			// PIN THE HEADER ON SCROLL
			var pinHeaderScene = new ScrollMagic.Scene({
				triggerElement: ".headerPin",
				triggerHook: 'onLeave',
				offset:0,
				reverse: true,
			}).setPin(".headerPin");

			// CHANGE THE TRIGGER POINT IF IT'S MOBILE
			if (screen.width >= 1023){

				var titleHeight = $(".mainTitle").height();

				var titleSwapScene = new ScrollMagic.Scene({
					triggerElement: ".mainTitle",
					triggerHook: 'onLeave',
					duration: titleHeight,
					offset:-80,
					reverse: true,
				}).setTween(titleSwapTL);

				controller.addScene([titleSwapScene, pinHeaderScene]);
			} else {

				var titleSwapScene2 = new ScrollMagic.Scene({
					triggerElement: ".mainTitle",
					triggerHook: 'onLeave',
					offset:50,
					reverse: true,
				}).setTween(titleSwapTL);

				controller.addScene([titleSwapScene2, pinHeaderScene]);
			}

	}()); //MENU TOGGLES END
}); //WINDOW LOAD END
