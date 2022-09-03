
function publicarComent(){

const comentariosNombre = document.querySelector('.inputNombreComent').value;

const comentariosComentario = document.querySelector('.inputComentComent').value;

let nuevosComentarios = document.getElementById("nuevosComentarios");

nuevosComentarios.innerHTML = `<section id="sectionComent" class="sectionComentPagArt nuevosComentColor">
                               <div class="imgComent">
                               <img src="./imagenes/user_comentarios.webp" alt="imagen vacia" class="imagenUsuario">
                               </div>
                               <div class="contComent">
                               <p>${comentariosNombre}</p>
                               <hr>
                               <p>${comentariosComentario}</p>
                               <a class="menu" onclick = "BorrarComent()" style="color: #00011f; font-size: 10px" >Borrar comentario</a>
                               </div>
                               </section>
                               `;

document.body.appendChild(nuevosComentarios);

const sectionIntermedia = document.getElementById('sectionIntermedia');

sectionIntermedia.insertBefore(nuevosComentarios, sectionIntermedia.children[0]);


localStorage.setItem("Nombre", comentariosNombre);
localStorage.setItem("Apellido", comentariosComentario);

}

function BorrarComent(){

nuevosComentarios.innerHTML = `<p>Tu comentario ha sido borrado con éxito</p>`;

document.body.appendChild(nuevosComentarios);

sectionIntermedia.insertBefore(nuevosComentarios, sectionIntermedia.children[0]);

localStorage.clear();


    }

    