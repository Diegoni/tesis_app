$(function() {
	var url_back = getUrl();
	$.ajax({
	    type:"GET", 
	    url: url_back+"index.php/animales/estadisticas", 
	    success: function(data) 
	    {
	    	$.each(data, function(index, element) {
	    	 	$(".lista").append('<li class="ui-first-child"><a href="index.html" class="ui-btn  ui-icon-carat-r"><br><h2>Tipo: '+element.tipo+'</h2><p><strong>ID: '+element.id_animal+'</strong></p><p>Tarjeta: '+element.tarjeta+'</p><p>Peso: '+element.peso+'</p><p>Altura: '+element.altura+'</p><p class="ui-li-aside"><strong>'+element.date_upd+'</strong></p></a></li>');
	        });
			
	    }, 
	    
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
			//alert(errorThrown);
		},
		dataType: "json"
	});
});