function ocultarAdelante() {
    var imagen = document.querySelector(".caja_imagen");
    var contenedor = document.querySelector(".texto_informativo");
    imagen.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}
function mostrar() {
    document.getElementById('copia').style.display = 'block';
}
function encriptar() {
    ocultarAdelante();
    var texto = document.getElementById("mensaje").value;
    var temp = '';
    var fin = '';
    var resultado = document.querySelector(".texto-resultado");
    var btn = document.querySelector("btn_copia");

    //alert(texto);

    for (i = 0; i < texto.length; i++) {

        if (texto.charAt(i) == 'a') {
            temp = 'ai';
        } else if (texto.charAt(i) == 'e') {
            temp = 'enter';
        } else if (texto.charAt(i) == 'i') {
            temp = 'imes';
        } else if (texto.charAt(i) == 'o') {
            temp = 'ober';
        } else if (texto.charAt(i) == 'u') {
            temp = 'ufat';
        } else {
            temp = texto.charAt(i);
        }
        var fin = fin + temp;
    }

    // document.getElementById('textoencriptado').innerHTML = fin;

    resultado.textContent = fin;

    mensaje.value = '';

    mostrar();

}
function limpiar(area) {

    document.getElementById(area).innerHTML = "";

}

function copiar() {

    var resultado = document.getElementById("parrafo_llenado").textContent;

    // vars = document.getElementById("textoencriptado").value;

    document.getElementById("mensaje").value = resultado;

    limpiar("parrafo_llenado");

}

function desencriptar() {
    var resultado = document.querySelector(".texto-resultado");
    var texto = document.getElementById("mensaje").value;
    var temp = '';
    var fin = '';

    //alert(texto);

    for (i = 0; i < texto.length; i++) {

        if (texto.charAt(i) == 'a') {
            temp = 'a';
            i = i + 1;
        } else if (texto.charAt(i) == 'e') {
            temp = 'e';
            i = i + 4;
        } else if (texto.charAt(i) == 'i') {
            temp = 'i';
            i = i + 3;
        } else if (texto.charAt(i) == 'o') {
            temp = 'o';
            i = i + 3;
        } else if (texto.charAt(i) == 'u') {
            temp = 'u';
            i = i + 3;
        } else {
            temp = texto.charAt(i);
        }
        var fin = fin + temp;

    }

    // document.getElementById('textoencriptado').innerHTML = fin;
    resultado.textContent = fin;

    mensaje.value = '';

}