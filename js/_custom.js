$(document).ready(function(){$(".menu-toggle").click(function(){$("nav").toggleClass("active")})}),(new WOW).init();



$('.language-select').click(function(){
    $(this).toggleClass('open');
    })
    
    $('.language-select li').click(function(){
    var setLang = $('.language-select').data('location'),
        dataLangSelect = $(this).data('lang')
          $('.language-select').data('location', dataLangSelect);
          $('.language-select li').removeClass('active');
          $(this).toggleClass('active');
    })