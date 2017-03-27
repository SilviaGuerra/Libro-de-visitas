function previo(){
  var preview = document.getElementById("comentario").value;
  document.getElementById("previsualizacion").innerHTML = preview;
} //con esta funcion se previsualiza el comentario hecho

function enviar(event){
  event.preventDefault(); //esto se pone para decirle al form que ejecute la funcion sin refrescarse
  var comentarioHecho = document.getElementById("comentario").value;
  var nuevoComentario = document.createElement("li");
  nuevoComentario.innerHTML = comentarioHecho;
  document.getElementById("comentariosAnteriores").appendChild(nuevoComentario);
  document.getElementById("comentario").value = "";
}

function colorTexto(){
  var colorLetra =prompt("Escriba el código hexadecimal");
  document.getElementById("color-texto").style.color= colorLetra;
}
