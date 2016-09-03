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

$(document).ready(function(){
  $('.wysihtml5').each(function(i, elem) {
    $(elem).wysihtml5();
  });

  $('ul.wysihtml5-toolbar').wysihtml5({
    toolbar: {
      "font-styles": false, //Font styling, e.g. h1, h2, etc. Default true
      "emphasis": true, //Italics, bold, etc. Default true
      "lists": false, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
      "html": false, //Button which allows you to edit the generated HTML. Default false
      "link": true, //Button to insert a link. Default true
      "image": true, //Button to insert an image. Default true,
      "color": false, //Button to change color of font
      "blockquote": false
    }
  });
});
