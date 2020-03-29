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