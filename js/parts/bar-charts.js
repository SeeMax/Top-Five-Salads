(function rankBarsOut() {

  var controller = new ScrollMagic.Controller(),
      projects = Array.prototype.slice.call(document.querySelectorAll(".singleSalad")),
      self = this;

  projects.forEach(function(self) {

  	 var sceneOne = new TimelineMax(),
         singleBar = self.querySelectorAll(".rankBar");


     singleBar.forEach( function(selfTwo){

       var barLength = $(selfTwo).data('length')*100,
           bar = $(selfTwo).find('rect'),
           textureBar = $(self).find('.textureBar'),
           dressingBar = $(self).find('.dressingBar'),
           greensBar = $(self).find('.greensBar'),
           textureLabels = $(self).find('.textureLabels'),
           dressingLabels = $(self).find('.dressingLabels'),
           greensLabels = $(self).find('.greensLabels'),
           textureLength = $(textureBar).data('length')*100,
           dressingLength = $(dressingBar).data('length')*100,
           greensLength = $(greensBar).data('length')*100,
           greensFill = $(greensBar).find('rect'),
           textureFill = $(textureBar).find('rect'),
           dressingFill = $(dressingBar).find('rect');

       sceneOne.to(textureFill, 0.6, {width:textureLength, ease:Elastic.easeOut.config(1, 1)}, "fillOut")
               .to(textureLabels, 0.6, {opacity:1,y:0, ease:Elastic.easeOut.config(1, 1)}, "fillOut+=0.3")
               .to(dressingFill, 0.6, {width:dressingLength, ease:Elastic.easeOut.config(1, 1)}, "fillOut+=0.2")
               .to(dressingLabels, 0.6, {opacity:1,y:0, ease:Elastic.easeOut.config(1, 1)}, "fillOut+=0.75")
               .to(greensFill, 0.6, {width:greensLength, ease:Elastic.easeOut.config(1, 1)}, "fillOut+=0.4")
               .to(greensLabels, 0.6, {opacity:1,y:0, ease:Elastic.easeOut.config(1, 1)}, "fillOut+=.95");

     });

  	var scene1 = new ScrollMagic.Scene({
  		triggerElement: self,
  		triggerHook: "onEnter",
  		offset: 300,
      reverse:true
  	}).setTween(sceneOne)
  	  .addTo(controller);

  });

}());
