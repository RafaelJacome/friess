$(document).ready(function(){

$(".acordion .item .acordion-title").click(function(){
  if($(this).parent().hasClass('open')){
    $(this).parent().removeClass("open").find('.content').slideUp();
  }else {
    $(".acordion .item .content").slideUp();
    $(".acordion .item").removeClass('open');
    $(this).parent().addClass("open").find('.content').slideDown();
  }
})

$(".acordion2 .item .acordion-title").click(function(){
  if($(this).parent().hasClass('open')){
    $(this).parent().removeClass("open").find('.content').slideUp();
  }else {
    $(".acordion2 .item .content").slideUp();
    $(".acordion2 .item").removeClass('open');
    $(this).parent().addClass("open").find('.content').slideDown();
  }
});

$(".expander a").click(function(){
  $(".expander .options").css("transform", "scale(1)").css('z-index',"999");
})

$(".options .close").click(function(){
  $(".expander .options").css("transform", "scale(0)").css('z-index',"0");
  $(".acordion2 .item").removeClass("open").find('.content').slideUp();
})

$("select").dropkick({
  mobile: true
})
  

  
})