$(function() {
	var url_back = getUrl();
	$.ajax({
	    type:"GET", 
	    url: url_back+"index.php/facturas/estadisticas", 
	    success: function(data) 
	    {
	    	$.each(data, function(index, element) {
	    	 	$(".lista").append('<li class="ui-first-child"><a href="index.html" class="ui-btn  ui-icon-carat-r"><br><h2>Cliente: '+element.cliente+'</h2><p><strong>ID: '+element.id_factura+'</strong></p><p>Condicion Pago: '+element.condicion_pago+'</p><p>Monto: $'+element.total+'</p>	<p class="ui-li-aside"><strong>'+element.date_upd+'</strong></p></a></li>');
	        });
			
	    }, 
	    
	    error: function(jqXHR, textStatus, errorThrown) 
	    {
			//alert(errorThrown);
		},
		dataType: "json"
	});
});