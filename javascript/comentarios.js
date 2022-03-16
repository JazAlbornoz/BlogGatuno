
function publicarArt(){

const comentariosNombre = document.querySelector('.inputNombreComent').value;

const comentariosComentario = document.querySelector('.inputComentComent').value;

let nuevosComentarios = document.getElementById("nuevosComentarios");

nuevosComentarios.innerHTML = `<section class="sectionComentPagArt">
                               <div class="imgComent">
                               <img src="./imagenes/user_comentarios.webp" alt="imagen vacia" class="imagenUsuario">
                               </div>
                               <div class="contComent">
                               <p>${comentariosNombre}</p>
                               <hr>
                               <p>${comentariosComentario}</p>
                               </div>
                               </section>
                               `;

document.body.appendChild(nuevosComentarios);
}