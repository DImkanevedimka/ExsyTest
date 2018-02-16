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
	var form = $('.popup-form');
	var popupMessage = $('.popup-message');
	
	$('.header-menu__phone-button').on('click', function(){
		popup.removeClass('passive');
		popup.addClass('active');
	});
	
	function closePopup(){
		popup.addClass('passive');
		popup.removeClass('active');
		popupMessage.removeClass('active');
		popupMessage.addClass('popup-message_passive');
		$('.popup-form__input').val('');
	};

	$('.popup__button-close').on('click',closePopup);
	$('.popup-overlay').on('click', closePopup);
	
	form.on('submit', function(event){
		event.preventDefault ? event.preventDefault() : (event.returnValue = false);
		popupMessage.removeClass('popup-message_passive');
		popupMessage.addClass('active');
		$('.popup-message__username').text(this[0].value);
	});
	
	$('#toggle').click(function() {
		$( this ).toggleClass( "on" );
		$('.header-menu').toggleClass('header-menu-on');
	});
});

