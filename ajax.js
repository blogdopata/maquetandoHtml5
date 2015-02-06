$(function(){
	$.get('logos_footer.html',function(codigo){
		$('footer').append(codigo);
	});

});