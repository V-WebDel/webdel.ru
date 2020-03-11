$(function () {

  // Mask phone
  $('input[name="phone"]').mask('8 (999) 999 - 99 - 99');

  var width = $(this).width();

  // Scroll menu
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

});

var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 110,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#d9faff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 30,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 180,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#005792",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
});