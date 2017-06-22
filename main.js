function previo(){
  var preview = document.getElementById("comentario").value;
  document.getElementById("previsualizacion").innerHTML = preview;
} //Con esta funcion se previsualiza el comentario hecho

function colorTexto(){
  var colorLetra =prompt("Escriba el código hexadecimal");
  document.getElementById("comentario").style.color= colorLetra;
} //Esta función debería cambiar el color del texto, pero aún no funciona

function cambiarTexto(){
  var preview = document.getElementById("comentario");
  preview.style.fontsize="48px";
}

function enviar(event){
  event.preventDefault(); //esto se pone para decirle al form que ejecute la funcion sin refrescarse
  var comentarioHecho = document.getElementById("comentario").value; //guarda en una variable lo que se escribe en el textarea
  var nuevoComentario = document.createElement("li"); //crea un elemento lista
  nuevoComentario.innerHTML = comentarioHecho; //lo que se escribio en el textarea se pone entre el elemento creado (li)
  document.getElementById("comentariosAnteriores").appendChild(nuevoComentario); //el nuevo elemento que esta en li se le agrega a la sección que yo quiera imprimirlo
  document.getElementById("comentario").value = ""; //Vacía el text area para un nuevo comentario
} //imprime los comentarios hechos
