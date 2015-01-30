var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

//Eventos :
function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

$button.click(mostrarFormulario)