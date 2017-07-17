function previo(){
  var preview = document.getElementById("comentario").value;
  document.getElementById("previsualizacion").innerHTML = preview;
} //Con esta funcion se previsualiza el comentario hecho

function textoGrande(){
  var preview = document.getElementById("previsualizacion");
  preview.style.fontSize= "48px";
}

function textoMediano(){
  var preview = document.getElementById("previsualizacion");
  preview.style.fontSize= "28px";
}

function textoChico(){
  var preview = document.getElementById("previsualizacion");
  preview.style.fontSize= "8px";
}

function colorTexto(){
  var colorLetra = prompt("Escriba el código hexadecimal");
  document.getElementById("previsualizacion").style.color= colorLetra;
}

function colorFondo(){
  var fondo = prompt("Escriba el código hexadecimal");
  document.getElementById("previsualizacion").style.background= fondo;
}

function alinearIzq(){
  var preview = document.getElementById("previsualizacion");
  preview.style.textAlign= "left";
}

function centrar(){
  var preview = document.getElementById("previsualizacion");
  preview.style.textAlign= "center";
}

function alinearDer(){
  var preview = document.getElementById("previsualizacion");
  preview.style.textAlign= "right";
}


function enviar(){
  var comentarios = document.getElementById('comentariosAnteriores');
  var nuevoComentario = document.getElementById("previsualizacion");
  var nuevoNodo = nuevoComentario.cloneNode(true);
  nuevoNodo.id = Date.now();
  comentarios.insertBefore(nuevoNodo, comentarios.firstChild);

  document.getElementById("comentario").value = "";
}
