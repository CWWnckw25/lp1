
var hamburger = $('.hamburger-menu');

$('.hamburger-button').on('click', function() {

  hamburger.toggleClass('hamburger-menu-active');

});
var box = $('.hamburger-menu');

$('.hamburger-menu li').on('click', function() {
  
  hamburger.removeClass('hamburger-menu-active');
});
$(window).on('resize', function() {

  hamburger.removeClass('hamburger-menu-active');
});

$('#smarttab').smartTab({
  enableUrlHash: false 
});