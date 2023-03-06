import $ from 'jquery';
// import documentReady from './helpers/_documentReady';

$(document).ready(() => {
  $(document).on('click', '.js_plus', () => {
    const count = Number($('.js_count').text());
    $('.js_count').html(count + 1);
  });
  $(document).on('click', '.js_minus', () => {
    const count = Number($('.js_count').text());
    $('.js_count').html(count - 1);
  });
});
