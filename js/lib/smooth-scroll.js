$(document).ready(function() {
  $('a[href*=\\#]').bind('click', function(e) {
    e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump

  var target = $(this).attr("href"); //Get the target

  // IF IT"S MOBILE CLOSE THE NAV
  if (screen.width <= 1023){
    $('html, body').stop().animate({ scrollTop: $(target).offset().top -60 }, 500);
  } else {
    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({ scrollTop: $(target).offset().top -80 }, 500);
  }

  return false;

  });
});
