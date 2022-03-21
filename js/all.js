//swiper輪播
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed:2000,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    effect:'cube',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


///漢堡選單
$(document).ready(function () {
    $('.showmenu').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});


//top回最上方效果
$('.backtotop a').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop:0
    },1000);
});

$('.scrolltoTips').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('.tips').offset().top
    },1000);
});
$('.scrolltoChef').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('.chefToday').offset().top
    },1000);
});
$('.scrolltoReserve').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('.reserve').offset().top
    },1000);
});