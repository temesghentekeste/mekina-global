$(document).ready(() => {
  console.log('starting...');
  $('.next').click(() => {
    $('#hotAddsCarousel').carousel('next');
    console.log('next');
    return false;
  });
  $('.prev').click(() => {
    $('#hotAddsCarousel').carousel('prev');
    console.log('prev');
    return false;
  });

  $(window).scroll(() => {
    let position = $(this).scrollTop();
    console.log(position);

    if (position >= 1845) {
      $('.mission-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    } else {
      $('.mission-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  });
});
