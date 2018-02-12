$(document).ready(function()
{
	var url = getUrl();
    $("#errorMsg").hide();
    $("#btnLogin").click(function()
    {
        var usu = $("#txtuser").val();
        var pass = $("#txtpassword").val();
        
        var url_post = url+'index.php/Usuarios/login/';
        
        $.post(url_post, 
        	{ 
        		usu : usu, 
        		pass : pass
        	},function(respuesta)
        {
            if (respuesta == 1) 
            {
                $.mobile.changePage("estadisticas_animales.html");
            }else
            {
                $.mobile.changePage('#pageError', 'pop', true, true);
                /*$("#errorMsg").fadeIn(300);
                $("#errorMsg").css("display", "block");*/
            }
        });
    });
});
