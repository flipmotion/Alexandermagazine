$(document).ready(function() {
	setH();
	var owlMain = $('[data-item="corusel"]');
	owlMain.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		autoplay:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
      ],
		dots: true
	});
});
function setH() {
	var mHeight = $('[data-item="getHeight"]').height();
	var sheight = parseInt(mHeight / 3);
	var targetHeight = $('[data-item="setHeight"]');
	targetHeight.height(sheight);
	targetHeight.css('display','block');
	//console.log(mHeight);
	//console.log(sheight);
	//console.log(targetHeight);
}

