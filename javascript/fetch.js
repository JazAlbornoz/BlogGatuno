

const lista = document.getElementById('listMichis')

fetch('https://api.thecatapi.com/v1/breeds')
.then(response => response.json())
.then(publicaciones => {
  publicaciones.forEach(publicacion => {
  const li = document.createElement('li')
  li.innerHTML = `
              <div class="cardApi">
                  <img class="imgApi" src=${publicacion.cfa_url}></img>
                  <h2 class="nameApi" >${publicacion.name}</h2>
                  <p class="descApi" >${publicacion.description}</p>
                  <p class="tempApi" >${publicacion.temperament}</p>
              </div>

  `;

  lista.append(li);
  });
})

