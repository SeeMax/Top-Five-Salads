// (function mapToggles() {
//
//   var mapContainer = $(".mapContainer"),
//       uniEaseOut = Back.easeOut.config(1),
//       uniEaseIn = Back.easeIn.config(1.3),
//       uniTime2 = 0.3,
//       mapHam = $(".mapClose"),
//       mapHam1 = mapHam.find(".hamTop"),
// 			mapHam2 = mapHam.find(".hamMid"),
// 			mapHam3 = mapHam.find(".hamBot");
//
//   TweenMax.set(mapContainer, {x:'100%'});
//
//   $(".mapOpen").on('click', function(){
//
//     var tl = new TimelineMax();
//
//     tl.to(mapContainer, 0.3, {x:"0%", opacity:1, ease:uniEaseOut}, "mapOpen")
//       .to(mapHam1, uniTime2, {rotation:227, y:9}, "mapOpen")
//       .to(mapHam2, uniTime2, {x:5, opacity:0}, "mapOpen")
//       .to(mapHam3, uniTime2, {rotation:-227, y:-9}, "mapOpen");
//
//   });
//
//   $(".mapClose").on('click', function(){
//     var tl = new TimelineMax();
//
//     tl.to(mapContainer, 0.3, {x:'100%', opacity:0, ease:uniEaseOut}, "mapClose")
//       .to(mapHam1, uniTime2, {rotation:0, y:0}, "mapClose")
//       .to(mapHam2, uniTime2, {x:0, opacity:1}, "mapClose")
//       .to(mapHam3, uniTime2, {rotation:0, y:0}, "mapClose");
//
//   });
//
// }());
