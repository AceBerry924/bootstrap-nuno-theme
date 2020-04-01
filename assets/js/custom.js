/* Navbar Transparent to Solid */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});

/* Close Mobile Nav on Click */
$(document).ready(function () {
  $(window).click(function (event) {
    var clickOver = $(event.target);
    var _opened = $('.navbar-collapse').hasClass('show');
    if (_opened === true && !clickOver.hasClass('navbar-toggler')) {
      $('.navbar-toggler').click();
    }
  });
});

/* Smooth Scrolling to Links */
$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    } // End if
  });
});

/* Bouncing Down Arrow */
$(document).ready(function () {
  $(window).scroll(function () {
    $('.arrow').css('opacity', 1 - $(window).scrollTop / 250);
  });
});

/* Meet the Team */
$(document).ready(function () {
  $('#team-slider').owlCarousel({
    item: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });
});


/* Sills Counter */
$(document).ready(function () {
  $('.counter').counterUp({
    delay: 10,
    time: 1800
  });
});

/* Clients Carousel */
$(document).ready(function () {
  $('#clients-slider').owlCarousel({
    item: 3,
    autoplay: true,
    smartSpeed: 1700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
    }
  });
});

/* Top Scroll */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.top-scroll').fadeIn();
    } else {
      $('.top-scroll').fadeOut();
    }
  });
});

//Optional Refresh Page at top of document on load instead of at # hash
/*
$(document).ready(function() {
  $('html, body').scrollTop(0);
  $(window).on('load', function() {
    setTimeout(function(){
      $('html, body').scrollTop(0);
    }, 0);
  });
});
*/