$(function(){
	//$.ajax();
	//codigo es un callback para que retorne algo 
	//ya esta masticado  por ajax
	$.get('logos_footer.html',function(codigo){
		$('footer').append(codigo);
	});

	$.get('usuario.json', function(info){
		console.log(info);

	});


});