// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require bootstrap-wysihtml5

$(document).ready(function() {
  $('.wysihtml5').each(function(i, elem) {
    $(elem).wysihtml5();
  });

  var windowSize = $(window).width();
  if (windowSize < 768) {
    $('.span-child').unwrap();
  } else {
    $('.span-child').wrap();
  };

  $('.hero-button').click(function() {
    $('html, body').animate({
        scrollTop: $('.blog-info').offset().top
    }, 2000);
  });

  $('.approval-info').tooltip();
});
