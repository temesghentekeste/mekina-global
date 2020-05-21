$(document).ready(() => {
  $('.next').click(() => {
    $('#hotAddsCarousel').carousel('next');
    return false;
  });
  $('.prev').click(() => {
    $('#hotAddsCarousel').carousel('prev');
    return false;
  });
  $('.next').click(() => {
    $('#hotAddsCarousel2').carousel('next');
    return false;
  });
  $('.prev').click(() => {
    $('#hotAddsCarousel2').carousel('prev');
    return false;
  });

  $(window).scroll(() => {
    let position = $(this).scrollTop();

    if (position >= 450) {
      $('.mission-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
      $('nav').addClass('sticky');
    } else {
      $('.mission-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }

    //adding sticky class to nav
    if (position >= 200) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });
});

document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.main-menu').classList.toggle('show');
});
