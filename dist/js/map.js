$(document).ready(function(){
    google.maps.event.addDomListener(window, 'load', initMap);
    function initMap() {
        var mapOptions = {
            
            zoom: 13.1,
            
            center: new google.maps.LatLng(54.210764, 36.615503),
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#aacbd9"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "hue": "#6b8ea9",
                        }

                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#1CB2BD"
                        },
                        {
                            "saturation": 40
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#f4f0d3"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                }
                

            ]
        };
        var mapElement = document.getElementById('map');
        
        
        var map = new google.maps.Map(mapElement, mapOptions);
        
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(54.210764, 36.615503),
            map: map,
            title: 'Snazzy!',
            icon: '/img/icon.png'
        });
    };
});