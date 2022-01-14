// Cursor Positioning Calculation
const pos = document.documentElement;
pos.addEventListener("mousemove", e=>{
	pos.style.setProperty('--x', e.clientX + 'px');
	pos.style.setProperty('--y', e.clientY + 'px');
});
//Cursor Hover Effect For Button and links
$('a, button, .underline').on("mouseover", () => {
	// $(".cursor").toggleClass("plus");
	$('.cursor').addClass("plus");
	$('.cursor1').addClass("plus1");
	$('.dot').addClass("hovered");
});
$('a, button, .underline').on("mouseleave", () => {
	$(".cursor").removeClass("plus");
	$(".cursor1").removeClass("plus1");
	$(".dot").removeClass("hovered");
});
// Add Required elements For Cursor Designing
$('body').append('<div class="cursor"></div><div class="cursor1"></div><div class="cursor2"></div><div class="dot"></div>');

// Hero Shadow
(function () {
    $(window).scroll(function () { 
        var Num = $(window).scrollTop() / 500;
        var Num2 = $(window).scrollTop() * .0004; // higher number for more zoom
        var Num2mod = Num2 + 1;
        var Num3 = $(window).scrollTop() * .2; // Title speed
        var Num3mod = Num3 + 1;
        return $('.shade').css('opacity', Num),
        $(".header_content").css({"transform":"scale(" + Num2mod + ")"});
    });
}.call(this));

// Swiper Js
 var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});


// $(document).ready(function() {
// 	$('#pagepiling').pagepiling({
// 	    menu: null,
//         direction: 'vertical',
//         verticalCentered: true,
//         sectionsColor: [],
//         anchors: [],
//         scrollingSpeed: 700,
//         easing: 'swing',
//         loopBottom: false,
//         loopTop: false,
//         css3: true,
//         navigation: {
//             'textColor': '#000',
//             'bulletsColor': '#000',
//             'position': 'right',
//             'tooltips': ['section1', 'section2', 'section3', 'section4']
//         },
//        	normalScrollElements: null,
//         normalScrollElementTouchThreshold: 5,
//         touchSensitivity: 5,
//         keyboardScrolling: true,
//         sectionSelector: '.section',
//         animateAnchor: false,

// 		//events
// 		onLeave: function(index, nextIndex, direction){},
// 		afterLoad: function(anchorLink, index){},
// 		afterRender: function(){},
// 	});
// });