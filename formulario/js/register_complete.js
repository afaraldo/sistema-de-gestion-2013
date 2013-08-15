$(document).ready(function() {
    var url = readerUrl("nombre");
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