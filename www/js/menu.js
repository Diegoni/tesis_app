$(function() {
	var animales 			= '<li><a href="estadisticas_animales.html">Animales</a></li>';
	var ventas			 	= '<li><a href="estadisticas_ventas.html">Ventas</a></li>';
	var compras		 		= '<li><a href="estadisticas_compras.html">Compras</a></li>';
	
	$(".menu").append(animales+ventas+compras);
});     