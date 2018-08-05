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
