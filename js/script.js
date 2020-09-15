jQuery(document).ready(function () {
    "use strict";
      $(function(){
		  new WOW().init(); 
		});


        // Mean Menu
        $('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });
        // Header Sticky
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.sticky-nav').addClass("is-sticky");
            }
            else{
                $('.sticky-nav').removeClass("is-sticky");
            }
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

   })

// (jQuery);


