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

}