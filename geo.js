var geo = navigator.geolocation;

function geo_error () {
	console.log("no se donde estas");
}
function geo_exito(posicion){
	console.log(posicion);
}
function opciones(){
}

geo.getCurrentPosition(geo_exito,geo_error,opciones);

