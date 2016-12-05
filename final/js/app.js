$(document).ready(function () {

	// $('.grid').masonry({
	// itemSelector: '.grid-item',
	// columnWidth: 200
	// });


	$('#myForm').submit(function (event) {
		event.preventDefault();



		var name = $('#name-input').val();

		$('#target').text(name);


	}) 

	$('#name-input').keydown(function (event) {
		event.preventDefault();
		console.log(event);		

	})

	$('#social a').click(function (e) {
		e.preventDefault();

	})




	var myMap;

	function initMap () {
		myMap = new google.maps.Map(document.getElementById('map'), {
	  		center: {lat: 40.73, lng: -73.98},
	  		zoom: 12
		});

		var marker = new google.maps.Marker({
		  position: {lat: 40.73, lng: -73.98},
		  map: myMap,
		  title: 'New York, NY'
		});

	}


	// TURN ON MY MAPS!
	initMap();


})
