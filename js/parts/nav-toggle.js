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
			uniEaseOut = Back.easeOut.config(1.7),
			uniEaseIn = Back.easeIn.config(1.7),
			subHam = $(".submenuToggle"),
			mSubHam = $(".mobileMainToggle"),
			subHam1 = subHam.find(".hamTop"),
			subHam2 = subHam.find(".hamMid"),
			subHam3 = subHam.find(".hamBot"),
			mSubHam1 = mSubHam.find(".hamTop"),
			mSubHam2 = mSubHam.find(".hamMid"),
			mSubHam3 = mSubHam.find(".hamBot");


	function mainNavClose() {

		var tl = new TimelineMax();

		// tl.set($(".wrapper"), {height:"auto", overflow:"visible"});
		tl.to(mainMenu, 0.3, {x:"-100%"}, "menuClose")
			.staggerTo(links, 0.3, {opacity:0, x:"-20%", ease:uniEaseIn}, 0.03, "menuClose")
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
			.staggerTo(links, 0.1, {opacity:1, x:"0%", ease:uniEaseOut}, 0.07, "menuOpen+0.03");


			tl.to(ham1, uniTime2, {rotation:227, y:9}, "menuOpen")
				.to(ham2, uniTime2, {x:5, opacity:0}, "menuOpen")
				.to(ham3, uniTime2, {rotation:-227, y:-9}, "menuOpen");

			tl.to(mSubHam1, uniTime2, {rotation:227, y:9}, "menuOpen+=.1")
				.to(mSubHam2, uniTime2, {x:5, opacity:0}, "menuOpen+=.1")
				.to(mSubHam3, uniTime2, {rotation:-227, y:-9}, "menuOpen+=.1");
	}


	function allNavsClose() {

		var tl = new TimelineMax();

		$(".aboutMenu").css("z-index", "98");
		$(".aboutToggle").removeClass("about-hover");
		$(".submitMenu").css("z-index", "98");
		$(".submitToggle").removeClass("submit-hover");
		links.removeClass("hover-add");

		$(".menuToggle").removeClass("navOpen");

		// tl.set($(".wrapper"), {height:"auto", overflow:"visible"});
		if (screen.width >= 1023){
			tl.to(".subMenu", 0.2, {left:"-55%"}, "menuClose");
		} else {
			tl.to(".subMenu", 0.2, {left:"-100%"}, "menuClose");
		}
		tl.to(subHam1, uniTime2, {rotation:0, y:0}, "menuClose")
			.to(subHam2, uniTime2, {x:0, opacity:1}, "menuClose")
			.to(subHam3, uniTime2, {rotation:0, y:0}, "menuClose")
			.to(mainMenu, 0.2, {x:"-100%"}, "menuClose+=0.15")
			.staggerTo(links, 0.2, {opacity:0, x:"-20%",ease:uniEaseIn}, 0.03, "menuClose-=0.15")
			.to(ham1, uniTime2, {rotation:0, y:0,opacity:1}, "menuClose+=0.2")
			.to(ham2, uniTime2, {x:0, opacity:1}, "menuClose+=0.2")
			.to(ham3, uniTime2, {rotation:0, y:0,opacity:1, onComplete:reshowSub}, "menuClose+=0.2");
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


	$(".mobileMainToggle").on('click', function() {

		var tl = new TimelineMax();

		$(".menuToggle").removeClass("navOpen");

		tl.to(mSubHam1, uniTime2, {rotation:0, y:0}, "menuOpen")
			.to(mSubHam2, uniTime2, {x:0, opacity:1}, "menuOpen")
			.to(mSubHam3, uniTime2, {rotation:0, y:0}, "menuOpen");

		allNavsClose();
	});


	$(".subNavToggle").on('click', function() {

	  var tl = new TimelineMax(),
	      $this = $(this);

		if (screen.width >= 1023){
			tl.to(".subMenu", 0.2, {left:"-55%"}, "subClose")
				.to(mSubHam1, uniTime2, {rotation:0, y:0, opacity:0}, "subClose")
				.to(mSubHam2, uniTime2, {x:0, opacity:0}, "subClose")
				.to(mSubHam3, uniTime2, {rotation:0, y:0, opacity:0}, "subClose");
		} else {
			tl.to(".subMenu", 0.2, {left:"-100%"}, "subClose");
		}

		tl.to(subHam1, uniTime2, {rotation:0, y:0}, "subClose")
			.to(subHam2, uniTime2, {x:0, opacity:1}, "subClose")
			.to(subHam3, uniTime2, {rotation:0, y:0}, "subClose");

		if ($this.hasClass("submitToggle")) {
			$(".submitMenu").addClass("openSubNav");
			$(".subMenu").css("z-index", "81");
			$(".aboutToggle").removeClass("hover-add");
			$(".submitToggle").addClass("hover-add");

			if (screen.width >= 1023){
				tl.to(".submitMenu", 0.3, {left:"45%", onComplete:moveSubmitNavForward});
			} else {
				tl.set(".submitMenu", {zIndex:100});
				tl.to(".submitMenu", 0.3, {left:"0%"});
			} //END SCREEN SIZE IF
		}//END SUBMIT TOGGLE IF

		if ($this.hasClass("aboutToggle")) {

			$(".aboutMenu").addClass("openSubNav");
			$(".subMenu").css("z-index", "81");
			$(".submitToggle").removeClass("hover-add");
			$(".aboutToggle").addClass("hover-add");

			if (screen.width >= 1023){
				tl.to(".aboutMenu", 0.3, {left:"45%", onComplete:moveAboutNavForward});
			} else {
				tl.set(".aboutMenu", {zIndex:100});
				tl.to(".aboutMenu", 0.3, {left:"0%"});
			} //END SCREEN SIZE IF
		}//END SUBMIT ABOUT IF


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
	}); // END SUBNAV TOGGLE CLICK


	function reshowSub() {
		var tl = new TimelineMax();

		tl.set(mSubHam1, {opacity:1})
			.set(mSubHam2, {opacity:1})
			.set(mSubHam3, {opacity:1});
	}


	$(".submenuToggle").on('click', function() {

		var tl = new TimelineMax();

		if (screen.width >= 1023){
			allNavsClose();
		} else {
			tl.to(".subMenu", 0.2, {left:"-100%"});
		}
	});

}());
