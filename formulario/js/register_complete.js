$(document).ready(function() {
    var nombre = readerUrl("nombre");
    var apellido = readerUrl("apellido");
    var email = readerUrl("email");
    var fecha = readerUrl("fecha");
    var sexo = readerUrl("sexo");
    $("#nombre").append(nombre);
    $("#apellido").append(apellido.toString());
    $("#email").append(email.toString().replace("%40","@"));
    $("#fecha").append(fecha.toString());
    $("#sexo").append(sexo.toString());
    $("#volver").click(function(){
        window.location.href="form.html";
    });
});

// opu = obtener parametro de url ;)
function readerUrl(nombre){
    name = nombre.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+nombre+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var resultados = regex.exec( window.location.href );
    if( resultados == null ){
        return "";
    }else {
        return resultados[1];
    }
}