var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$autor = $('#autor'),
	$url = $('#url'),

	$button = $('#mostrar-form'),
	$lista = $('#contenido'),
	$post = $('.item').first();
	/* con esta condicion pregunto si hay algo guardado entra al if en caso de que sea TRUE*/ 
if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));

	var id=setInterval(function(){
		sessionStorage.setItem('titulo', $titulo.val());
		sessionStorage.setItem('url', $url.val());
	},1000);

};
//Eventos :
function mostrarOcultarFormulario(){
	$form.slideToggle();
	$lista.slideToggle();
	return false;
}

function agregarPost () {
	var url = $url.val(),
		titulo = $titulo.val(),
		autor = $autor.val(),
		$clone = $post.clone();
		$clone.find('.titulo_item a').text(titulo).attr('href',url).attr('alt','lol');
	
		$clone.find('#lol').text(autor).attr('href','http://www.twitter.com');
	
		$clone.hide();/*opcional ya luego se mostrara con el fadeIn, de no ponerlo nunca lo muestra*/

		$lista.prepend($clone);/*pretend empujo el post*/
		mostrarOcultarFormulario();/* oculto el form muestro los post*/
		$titulo.val('');
		$url.val('');
		$autor.val('nuevo autor');

		$clone.fadeIn();/*muestra el nuvo post :D */
		return false; /*Rompe el evento por default*/
}
$button.click(mostrarOcultarFormulario);
$form.on('submit',agregarPost);
