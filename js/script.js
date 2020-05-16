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
});
