$(document).ready(() => {
  console.log('starting...');
  $('.next').click(() => {
    $('#hotAddsCarousel').carousel('next');
    return false;
  });
  $('.prev').click(() => {
    $('#hotAddsCarousel').carousel('prev');
    return false;
  });

  $(window).scroll(() => {
    let position = $(this).scrollTop();

    if (position >= 450) {
      $('.mission-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    } else {
      $('.mission-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  });
});

document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.main-menu').classList.toggle('show');
});
