$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    draggable: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          arrows: false,
          swipe: false
        }
      }
    ]
  });
  
  
  $(".header-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1000);
  });
  
  
  
  var popup = $('.popup');
  var form = $('form');
  var old = form.html();
  
  
  $('.phone-button').on('click', function(){
    form.html(old);
    popup.removeClass('passive');
    popup.addClass('active');
  });
  
  popup.on('click', function(event){
    if(event.target === popup[0] || event.target === $('.buttonClose')[0]){
      popup.addClass('passive');
      popup.removeClass('active');
    };
  });
  
  form.on('submit', function(event){
    console.log(this[0].value)
    form.html('<div class="message"><p>Благодарим ' + this[0].value + '.</p>'+
    '<p> Мы перезвоним вам в кротчайшие сроки</p></div><div class="buttonClose">&#10006;</div>');
  });
  
  
  $('#toggle').click(function() {
    $( this ).toggleClass( "on" );
    $('.togglemenu').toggleClass('menu-on');
  });
});

