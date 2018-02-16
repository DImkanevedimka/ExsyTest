$(document).ready(function(){ 
	google.maps.event.addDomListener(window, 'load', init);
	
	function init() {
		var mapOptions = {
			zoom: 13.1,
			mapTypeControl: false,
			zoomControl: false,
			streetViewControl: false,
			fullscreenControl: false,
			center: new google.maps.LatLng(54.210764, 36.615503), 
		};
		
		var mapElement = document.getElementById('map');
		
		var map = new google.maps.Map(mapElement, mapOptions);
		
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(54.210764, 36.615503),
			map: map,
			title: 'Хатино',
			icon: './img/icon.png'
		});
	};
});