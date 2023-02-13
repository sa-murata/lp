'use strict';
$(function(){
  $(".toggle").click(function(){
    $(this).toggleClass("open");
    $(".global-nav").fadeToggle();
  });

  $('.global-nav a').click(function() {
    $(".toggle").toggleClass("open");
    $(".global-nav").fadeToggle();
  });

  $('.inview-slide-left').on('inview', function(event, isInView) {
    if(isInView) {
      $(this).addClass('slide-left');
    } else {
      $(this).removeClass('slide-left');
    }
  });
  $('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView) {
      $(this).stop().addClass('slide-right');
    } else {
      $(this).stop().removeClass('slide-right');
    }
  });

  $('.inview-voice-item').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).addClass('voice-item');
    } else {
      $(this).removeClass('voice-item');
    }
  });
});


