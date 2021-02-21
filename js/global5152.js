
jQuery(function($) {

  "use strict";

  /*================*/
  /* 01 - VARIABLES */
  /*================*/
  var swipers = [],
    winW, winH, winScr, $container, $isotope_container_rating, _isresponsive, smPoint = 768,
    mdPoint = 992,
    lgPoint = 1200,
    addPoint = 1600,
    _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

  /*========================*/
  /* 02 - page calculations */
  /*========================*/
  function pageCalculations() {
    winW = $(window).width();
    winH = $(window).height();
    if ($('.menu-button').is(':visible')) _isresponsive = true;
    else _isresponsive = false;
  }



  /*==============================*/
  /* 05 - function on page scroll */
  /*==============================*/
  $(window).on("scroll", function() {
    winScr = $(window).scrollTop();
    if (winScr > 0) {
      $(".tt-header").addClass("stick");
    } else {
      $(".tt-header").removeClass("stick");
    }
  });

  

  /*==============================*/
  /* 08 - buttons, clicks, hovers */
  /*==============================*/
  //menu
  $('.cmn-toggle-switch').on('click', function(e) {
    $(this).toggleClass('active');
    $(this).parents('header').find('.toggle-block').slideToggle();
    e.preventDefault();
  });
  $('.main-nav .menu-toggle').on('click', function(e) {
    $(this).closest('li').addClass('active').siblings('.active').removeClass('active');
    $(this).closest('li').siblings('.parent').find('ul').slideUp();
    $(this).parent().siblings('ul').slideToggle();
    e.preventDefault();
  });
  $('.main-nav .menu-toggle-inner').on('click', function(e) {
    $(this).closest('li').addClass('active').siblings('.active').removeClass('active');
    $(this).closest('li').siblings('li').find('ul').slideUp();
    $(this).parent().siblings('ul').slideToggle();
    e.preventDefault();
  });




  /*tt-mslide-2 scroll*/
  $(document).on('click', '.tt-mslide-2-arrow', function(e) {
    var $slide = $(this).parents('.tt-mslide-2'),
      offset = $slide.offset().top,
      height = $slide.height(),
      headerH = $('.tt-header .top-inner').height();
    scroll = offset + height - headerH;
    $('html,body').animate({ scrollTop: scroll }, 1000);
    e.preventDefault();
  });

  /*tt-scroll-link*/
  if ($('.tt-scroll-link').length) {
    $(document).on('click', '.tt-scroll-link', function(e) {
      var offset = $('.tt-scroll-block').offset().top,
        headerH = $('.tt-header .top-inner').height();
      scroll = offset - headerH;
      $('html,body').animate({ scrollTop: scroll }, 1000);
      e.preventDefault();
    });
  }

  $('.player').mb_YTPlayer();


  function heightInit() {
    (function($) {
      var adminHeight = ($('body').hasClass('admin-bar')) ? 32 : 0,
        ttHeaderHeight = $('.tt-header').height(),
        totalHeight = adminHeight + ttHeaderHeight;
      $('.tt-full-height').height($(window).height() - totalHeight);
      $('.tt-height-parent').each(function() {
        $(this).height($(this).parent().first().height());
      });
    })(jQuery);
  }



});
