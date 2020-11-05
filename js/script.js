jQuery(document).ready(function () {
    "use strict";
    $(window).load(function () {
        $("#sticker").sticky({
            topSpacing: 0
        },1000);
    });
      $(function(){
		  new WOW().init(); 
		});
      

        // Mean Menu
        $('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });
    
    // home text slider 
    $('.main-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        nav: false,
        autoplayHoverPause: false,
        margin: 0,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        mouseDrag: true,
        animateIn: 'slideInRight',
        animateOut: 'fadeOutLeft',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });

     var owl = $('.main-slider');
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 500,

    });
    owl.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2; // Position of the current item
        $('h2').removeClass('animated bounceInDown');
        $('p').removeClass('animated fadeInUp');
        $('a').removeClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated bounceInDown');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('a').addClass('animated fadeInUp');
    });
    // home text slider
   
   $('.portfolio-item-img').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: false,
        nav: true,
        autoplayHoverPause: false,
        margin: 0,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        mouseDrag: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });

   // Portfolio Slide End

   $('.testimonials').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: false,
        nav: true,
        autoplayHoverPause: true,
        margin: 0,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        mouseDrag: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    });

   // Testimonials slider End
   $('.logo-slider').owlCarousel({
        items: 5,
        loop: true,
        dots: true,
        autoplay: false,
        nav: true,
        autoplayHoverPause: true,
        margin: 15,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        mouseDrag: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
                responsive: {
                    300: {
                        items: 1,
                        nav: true,
                    },
                    480: {
                        items: 2,
                        nav: true,
                    },
                    768: {
                        items: 3,
                        nav: true,
                    },
                    1170: {
                        items: 6,
                         nav: true,
                    },
                }
    });

   // Client Logo End

$(document).ready(function() {
      animateDiv($('.a'));
      animateDiv($('.b'));
      animateDiv($('.c'));
      animateDiv($('.d'));
      animateDiv($('.e'));
      animateDiv($('.f'));
    });

function makeNewPosition($animatelogo) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $animatelogo.height() - 100;
    var w = $animatelogo.width() - 100;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}




})




