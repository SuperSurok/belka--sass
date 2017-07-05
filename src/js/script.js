$(document).ready(function(){
  $('.tracks__list').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.about-foto').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  $('.carousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  $('.kebab').click(function(e){
    e.preventDefault();
    $('.header__nav-xs').slideToggle(300);
  });


  // modal window
  $('.about-foto__item').click(function(){
    $('.overlay').show();
    $('body').css('overflow-y', 'hidden')
    $(this).find('.about-foto__img').clone().appendTo('.overlay__wrapper');
  })
  $('.overlay__bg').click(function(){
    $(this).closest('.overlay').find('.overlay__wrapper img').remove();
    $('body').css('overflow-y', 'auto')
    $('.overlay').hide()

  })

});
