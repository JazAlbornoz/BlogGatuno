
$(document).ready(function(){
  $('#buscador').keyup(function(){
     var nombres = $('.titulosArt');
     var buscando = $(this).val();
     var item='';
     for( var i = 0; i < nombres.length; i++ ){
         item = $(nombres[i]).html().toLowerCase();
          for(var x = 0; x < item.length; x++ ){
              if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                  $(nombres[i]).parents('.item').show(); 
              }else{
                   $(nombres[i]).parents('.item').hide();
              }
          }
     }
  });
});


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


 const articulosArray = [
  {
    id: 1,
    titulo: "Curiosidades sobre los gatos",
    publicado: 2020,
    tiempo: 7,
    img: "./imagenes/articulo_4_inicio.webp",
    link: "./GatosNegrosMalaSuerte.html",
    parrafo: "No cabe duda que los gatos son una excelente compañía. Son perfectos cómplices para las personas que buscan un compañero con quien descansar, que le guste pasar momentos tranquilos y sobretodo aquel que busca un amigo fiel."
  },
  {
    id: 2,
    titulo: "Adoptar un gato: 10 cosas que debes saber" ,
    publicado: 2019,
    tiempo: 10 ,
    img: "./imagenes/articulo_1_inicio.webp",
    link: "./GatosNegrosMalaSuerte.html",
    parrafo: "No cabe duda que los gatos son una excelente compañía. Son perfectos cómplices para las personas que buscan un compañero con quien descansar, que le guste pasar momentos tranquilos y sobretodo aquel que busca un amigo fiel."
  },
  {
    id: 3,
    titulo: "Cinco buenas razones para adoptar un gato" ,
    publicado: 2012,
    tiempo: 5 ,
    img: "./imagenes/articulo_2_inicio.webp",
    link: "./GatosNegrosMalaSuerte.html",
    parrafo: "No cabe duda que los gatos son una excelente compañía. Son perfectos cómplices para las personas que buscan un compañero con quien descansar, que le guste pasar momentos tranquilos y sobretodo aquel que busca un amigo fiel."
  },
  {
    id: 4,
    titulo: "La caca de gato puede ayudar a curar el cáncer",
    publicado: 2014,
    tiempo: 3,
    img: "./imagenes/articulo_3_inicio.webp",
    link: "./GatosNegrosMalaSuerte.html",
    parrafo: "Con el número de casos de cáncer al alza en todo el mundo, la búsqueda de una cura para esta enfermedad es una prioridad para muchos investigadores."
  },
  {
    id: 5,
    titulo: "¿Los gatos negros dan mala suerte?" ,
    publicado: 2012,
    tiempo: 8 ,
    img: "./imagenes/articulo_4_inicio.webp",
    link: "./GatosNegrosMalaSuerte.html",
    parrafo: "Aunque atribuir la mala suerte a cruzarse con un gato negro es solo fruto de la superstición, un estudio de científicos del Long Island College Hospital de Nueva York reveló hace poco que..."
  },
  {
    id: 6,
    titulo: "El tigre y el gato comparten un 95% de sus genes" ,
    publicado: 2013,
    tiempo: 4 ,
    img: "./imagenes/articulo_1_inicio.webp",
    link: "./GatosNegrosMalaSuerte.html",
    parrafo: "El tigre siberiano comparte un 95,6 % de su genoma con el gato doméstico, del que se diferenció hace aproximadamente 10,8 millones de años..."
  }
];



const contenedorArticulos = document.querySelector('#contenedorArticulos');


const generarHTMLArticulo = (array) => {
  let htmlArticulos = '';

  array.map( (articulo) => {
    htmlArticulos += `<div class="item artBlog animate__animated  animate__slideInUp">
      <div class="texto"> 
        <img src=${articulo.img} alt="gato curioso" id="gatoArt" class="gatoArt">
        <h3><label class="titulosArt titulosBlog">${articulo.titulo}</label></h3>
        <p class="metadatos">${articulo.tiempo} min de lectura</p>
        <p class="parrafoArt" style="color: #00011f98 ">Publicado en ${articulo.publicado}</p>
        <img onClick="cambiar()" ondblclick="borrar()" id="addFav" class="favoritos-item-art addFav" src="./imagenes/corazon-icono-negro-sRelleno.png" alt="favoritos">
        <p class="parrafoArt">${articulo.parrafo}</p>
        <a href=${articulo.link} class="botonArtBlog">Leer más...</a>
      </div>
    </div>
    `
  });

  return htmlArticulos;
}

let htmlArticulos = generarHTMLArticulo(articulosArray);

contenedorArticulos.innerHTML = htmlArticulos;



localStorage.setItem("articulos", JSON.stringify(articulosArray));

function cambiar (id, titulo) {

  document.getElementById('addFav').src = "./imagenes/corazon-icono-negro.png";

  let articulosStorage = JSON.parse(localStorage.getItem("articulos"));
  let articuloEncontrado = articulosStorage.find(elemento => elemento.id === id);

  articuloEncontrado.titulo = titulo;
  localStorage.setItem("articulos", JSON.stringify(articulosStorage));
  
 }

 function borrar () {
  document.getElementById('addFav').src = "./imagenes/corazon-icono-negro-sRelleno.png";
  localStorage.setItem();
 }




const ordenarAlfabeticamente = ( array ) => {
  contenedorArticulos.innerHTML = "";
  let arrayOrdenado = array.sort( ( a , b) => {
    if (a.titulo > b.titulo) {
      return 1;
    }
    if (a.titulo < b.titulo) {
      return -1;
    }

    return 0;
  })
  let html = generarHTMLArticulo(arrayOrdenado);

  contenedorArticulos.innerHTML = html;
}


const ordenarPorTiempo = ( array ) => {
  contenedorArticulos.innerHTML = "";

  let arrayOrdenado = array.sort( ( a , b) => {
    if (a.tiempo > b.tiempo) {
      return 1;
    }
    if (a.tiempo < b.tiempo) {
      return -1;
    }
 
    return 0;
  })
  let html = generarHTMLArticulo(arrayOrdenado);
  contenedorArticulos.innerHTML = html;
}

const ordenarPorFecha = ( array ) => {
  contenedorArticulos.innerHTML = "";

  let arrayOrdenado = array.sort( ( a , b) => {
    if (a.publicado > b.publicado) {
      return 1;
    }
    if (a.publicado < b.publicado) {
      return -1;
    }

    return 0;
  })
  let html = generarHTMLArticulo(arrayOrdenado);

  contenedorArticulos.innerHTML = html;
}





