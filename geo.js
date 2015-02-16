$(function(){
	var geo = navigator.geolocation;
	//console.log(geo)
	var opciones = {};
	function geo_error () {
		console.log("Necesito las API's DE LA NSA");
	}
	function geo_exito(posicion){
		/*console.log(posicion);*/
		var lat  = posicion.coords.latitude;
		var lon  = posicion.coords.longitude;
		var lol  = posicion.timestamp;
		/*console.log(lat + " y " + lon + " si " + lol);*/
		var mapa = new Image() ;
		mapa.src = "http://maps.googleapis.com/maps/api/staticmap?maptype=hybrid&zoom=20&size=280x280&sensor=false&center=" + lat + "," + lon;
		$('#geo').append(mapa);

		window.lat = lat;
		window.lon = lon;

		obtenerGeoInfo(lat,lon);

		
	}

	function opciones(){
		console.log("LOL");
	}

	geo.getCurrentPosition(geo_exito,geo_error,opciones);



});	
	
