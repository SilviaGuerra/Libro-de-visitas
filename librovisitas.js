function previo(){
  var preview = document.getElementById("comentario").value;
  document.getElementById("previsualizacion").innerHTML = preview;
} //con esta funcion se previsualiza el comentario hecho

function colorTexto(){
  var colorLetra =prompt("Escriba el código hexadecimal");
  document.getElementById("color-texto").style.color= colorLetra;
}

function enviar(){
  var nuevoComentario = document.createElement("P");
  var comentario = document.getElementById("comentario").value;
  var textNode = document.createTextNode(comentario);
  var comentariosAnteriores = document.getElementById("comentariosAnteriores");
  nuevoComentario.appendChild(textNode);
  comentariosAnteriores.appendChild(nuevoComentario);
}
