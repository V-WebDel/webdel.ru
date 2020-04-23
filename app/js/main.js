$(function () {

  // Mask phone
  $('input[name="phone"]').mask('8 (999) 999 - 99 - 99');

  
  // Scroll menu
  var width = $(this).width();

  $(window).innerWidth(function () {

    if (width > 768) {

      $(".menu").removeClass("menu_hidden");
      $(this).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $(".menu").addClass("menu_fixed");
        } else if ($(this).scrollTop() < 200) {
          $(".menu").removeClass("menu_fixed");
        }
      });

    } else {
      $(".menu").addClass("menu_hidden");
    }
  });


  // Open & close menu
  $(".toggle-menu").click(function () {
    $(this).toggleClass("toggle-menu_open");
    $(this).siblings("header").find(".menu").toggleClass("menu_fixed menu_hidden");
    return false;
  });


  // Smooth scroll for anchor link
  $(".menu__link").on("click", function (event) {

    var id = $(this).attr('href'),
      top = $(id).offset().top;

    if (width < 768) {
      $(".menu__link").each(function () {
        $(this).find(".menu__name").removeClass("hidden");
        setTimeout(function () {
          $(".menu__link").find(".menu__name").addClass("hidden");
        }, 1500);

      });
    }

    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  // Section modal
  $(".modal-btn").click(function (evt) {
    evt.preventDefault();

    $(".modal__wrap").removeClass("hidden");
    $(".modal__overlay").removeClass("hidden");

  });
  $(".modal__overlay, .modal__close").click(function () {
    $(".modal__wrap").addClass("hidden");
    $(".modal__overlay").addClass("hidden");
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      $(".modal__wrap").addClass("hidden");
      $(".modal__overlay").addClass("hidden");
    }
  });

  // Portfolio hidden item
  // let count_items = $(".portfolio__item").length
  
  // if (count_items > 3) {
  //   $(".portfolio__item").slice(3).hide()
  // }

  // $(".portfolio__btn").click(function () {
  //   $(this).siblings('.portfolio__wrap').find('.portfolio__item:not(:visible):lt(3)').show();
  //   let hide_items = $(".portfolio__item:hidden").length
  //   if (hide_items == 0) {
  //     $(this).hide()
  //   }
  // });

  // Top bottom 
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height()) {
      $(".btn-top").addClass("btn-top_active");
    } else {
      $(".btn-top").removeClass("btn-top_active");
    }
  });

  $("body").on("click", ".btn-top", function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
  });


  // Skill animation
  let block_scroll = $(".skill");
  let counter = 0;

  $(window).scroll(function() {

    let scroll = $(window).scrollTop() + $(window).height();
    let offset = block_scroll.offset().top + 200;
   
    if (scroll > offset && counter == 0) {
      $(".skill__line").each(function (){
        let skill = $(this).children(".skill__count").text();
        $(this).animate({width: skill+"%"}, 1200);
      });
      counter = 1;
    }
  });


  // WOW
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 100,
    mobile: false,
    live: true,
    callback: function (box) {

    },
    scrollContainer: null
  });
  wow.init();

  // Animate.css
  $('.top__title, .top__subtitle').addClass('animated lightSpeedIn');
  $('.btn').addClass('animated lightSpeedIn');
  $('.title-text').addClass('animated bounceInRight');
  $('.services__item').addClass('animated fadeInRight');
  $('.advantages__item').addClass('animated fadeInUp');


  // Отправка данных на сервер
  $('.form_modal, .form_callback').on('submit', function(evt) {
    evt.preventDefault();
    $.ajax({
      url: 'send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(this),
      success: function(msg) {
        console.log(msg);
        if (msg == 'ok') {
          $('.form').find('.form__success').addClass('form__success_active').hide().fadeIn();
          setTimeout(function() {
            $('.form').find('.form__success').removeClass('form__success_active').fadeOut(); // скрытие сообщения об успешной отправки 
            $('.modal__wrap, .modal__overlay').addClass('hidden'); // скрытие модального окна
            $('.form').trigger('reset'); // очистка формы
          }, 3000);
          
        } else {
          alert('При отправки произошла ошибка!');
          
        }
      }
    });
  });

});

var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});


