$(function(){
	//$.ajax();
	//codigo es un callback para que retorne algo 
	//ya esta masticado  por ajax
	$.get('logos_footer.html',function(codigo){
		$('footer').append(codigo);
	});

	$.get('usuario.json', function(info){
		var avatar = new Image();
		avatar.src = info.avatar;
		avatar.title = info.nombre+ ' ' + info.apellido

		$('#avatar').append(avatar);
	});


});