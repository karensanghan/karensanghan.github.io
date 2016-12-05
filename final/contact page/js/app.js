var myMap;

function initMap () {

	// google.maps.Map(element, options)

    myMap = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.734567, lng: -73.983405},
    zoom: 16
    });

	var marker = new google.maps.Marker({
	  position: {lat: 40.734567, lng: -73.983405},
	  map: myMap,
	  title: 'New York, NY'
	});

}

// Turn on my maps! 
initMap()
