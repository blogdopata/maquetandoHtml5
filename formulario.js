var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$autor = $('#autor'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

//Eventos :
function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

function agregarPost () {
	var url = $url.val(),
		titulo = $titulo.val(),
		autor = $autor.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a').text(titulo).attr('href',url).attr('alt','lol');
	
	$clone.find('#lol').text(autor).attr('href','http://www.twitter.com');
	
	$clone.hide();

	$list.prepend($clone);

	$clone.fadeIn();
	return false;
}
$button.click(mostrarFormulario);
$form.on('submit',agregarPost);
