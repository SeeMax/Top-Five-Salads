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
