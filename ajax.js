$(function(){
	//$.ajax();
	//codigo es un callback para que retorne algo 
	//ya esta masticado  por ajax
	// $('footer').load(logos_footer.html);
	$.get('logos_footer.html',function(codigo){
		$('footer').append(codigo);
	});

	$.get('usuario.json', function(info){

	

		var avatar   =  new Image();
		avatar.src   = info.avatar;
		avatar.title = info.nombre + '_ ' + info.apellido;

		$('#avatar').append(avatar);
	});

	function obtenerGeoInfo(lat, lon){
		console.log(lat +' ' + lon)
	};

});

var base_url = "https://query.yahooapis.com/v1/public/yql?";



function obtenerGeoInfo(lat, lon){
	var query =  'SELECT * FROM geo.placefinder WHERE text = "'+lat+', '+lon+'" AND gflags="R"';

	query = encodeURIComponent(query);
	//se le pasa un objeto con opciones 
	$.ajax({
		url: base_url+"q="+query,
		dataType: 'jsonp',
		jsonpCallback: 'procesarGeoInfo',
		data: {
			format: 'json'
		}
	});
}

function procesarGeoInfo(datos){
	//console.log(datos);
	var res    = datos.query.results.Result;
	var barrio = res.neighborhood;
	var ciudad = res.city;
	var pais   = res.country;
	var woeid  = res.woeid;

	$('#geo').prepend('<p><strong>'+barrio+'</strong><br>'+ciudad+', ' + pais + '</p>');

	obtenerClima(woeid);
}

function obtenerClima(woeid){

	var query =  'SELECT * FROM weather.forecast WHERE woeid ="'+woeid+'" and u="c"';

	query = encodeURIComponent(query);
	//se le pasa un objeto con opciones 
	$.ajax({
		url: base_url+"q="+query,
		dataType: 'jsonp',
		jsonpCallback: 'procesarClima',
		data: {
			format: 'json'
		}
	});

}
function procesarClima(datos){

	var clima  = datos.query.results.channel;
	var temp   = clima.item.condition.temp;
	var unit   = clima.units.temperature;
	var img    = new Image();
	var code   = clima.item.condition.code;
	img.src    = "http://l.yimg.com/a/i/us/we/52/"+ code +".gif"; 
/*console.log(clima);*/
	/*$('#clima').append(temp+ ' ' + unit +' °');*/
	$("#clima").append(img).append(temp+' '+unit+'°');
}