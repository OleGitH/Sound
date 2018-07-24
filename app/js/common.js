$(function() {
 // event header_subnav


  var windowWidth = $(window).width();


	$('.block1__nav__second').on('click',function () {
	  var _self = $(this)
    _self.find('.arrow').toggleClass('block1__nav__arrow__active');
    var subnav = _self.children('.block__nav__subnav')
    subnav.slideToggle(300);

    $(document).mouseup(function (e) {
      var $target = $(e.target);
      if ($target.closest('.block1__nav').length === 0) {
        $('.block__nav__subnav').slideUp(300);
        $('.arrow').removeClass('block1__nav__arrow__active');
      }
    });
  });


  // init swiper
    var mySwiper = new Swiper($('.swiper-container'), {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper__pagination__right',
        prevEl: '.swiper__pagination__left',
      },
    })

  //init Telephone Mask
  $(document).ready(function() {
    $("#tel").mask("+38 (999)-999-99-99");
  });
  //init range input
  $(window).on('resize', function(){
    windowWidth = $(window).width();
    //mySwiper.destroy(true,true);
  })
  $( document ).ready(function() {
    if(windowWidth < 390) {
      $('.single-slider').jRange({
        from: 0,
        to: 10,
        width: 280,
        step: 0.1,
        scale: [0,10],
        format: '%s',
        showLabels: true,
        snap: true,
        theme: 'theme-blue'
      });
      mySwiper.destroy(true,true);
    } else if(windowWidth > 511) {
      $('.single-slider').jRange({
        from: 0,
        to: 10,
        width: 370,
        step: 0.1,
        scale: [0,10],
        format: '%s',
        showLabels: true,
        snap: true,
        theme: 'theme-blue'
      });
    }
  });
//init custom select
  $('.custom-select').select2({
    minimumResultsForSearch: Infinity
  });
  $('.block2__content__elem7 label').on('click', function () {
    $(this).toggleClass('check_box_custom');
  })

  // tabs
  $('.block__header__tablist li a').on('click', function (e) {
    e.preventDefault();
    $('.elem2').toggleClass('active');
  })
  $('.block__header__tablist li a').on('click', function (e) {
    e.preventDefault();

    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
    // $(this).parent().siblings().addClass('active')
    var currentTab = $('#' + $(this).attr('data-tab'));
    var siblings = currentTab.siblings('.tab__item');

    setTimeout(function () {
      currentTab.addClass('active');
    }, 0);

    setTimeout(function () {
      currentTab.addClass('opacity');
    }, 20);

    siblings.removeClass('active');
    siblings.removeClass('opacity');
  })
//  toggle_nav
  $('.toggle_nav').on('click',function () {
    $(this).toggleClass('effect_toggle');
    $('.block1__nav').toggleClass('active')
  })
});
