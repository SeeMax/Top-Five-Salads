$(window).load(function(){
	// Call SaladHero after Preloader is done
	preLaodOut().done( saladHero() );
});

var preLaodOut = function() {
	var r = $.Deferred();
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
	return r;
};
