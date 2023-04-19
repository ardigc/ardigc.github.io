const search = new URLSearchParams(window.location.search);
// const url = window.location.href
const id = search.get("id");


if (!id === !null) {
  // Con event loop
  fetch("https://swapi.dev/api/films/", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    }).then((body) => {
      return body.results
      // }).catch((err) => {
      // Error handling
    }).then((results) => {
      // console.log(results);
      const gridfilms = document.querySelector(".grid-films")
      const films = results.map(createfilm)
      gridfilms.append(...films);
    });
  // Deteniendo ejecución
  // async function getLuke() {
  //   const response = await fetch("http://swapi.dev/api/films/1/", {
  //     method: "GET",
  //   });
  //   const body = await response.json();
  //   return body;
  // }
  // async function main() {
  //   const luke = await getLuke()
  //   console.log(luke)
  // }
  // main()
  function createfilm(film) {
    console.log(film);
    const filmBox = createElement("div", "film-box",)
    const nameBox = createElement("div", "name-box", film.title)
    const dirBox = createElement("div", "item-box", "Director: " + film.director)
    const epiBox = createElement("div", "item-box", "Episodio: " + film.episode_id)
    const prodBox = createElement("div", "item-box", "Productores: " + film.producer)
    const releaseBox = createElement("div", "item-box", "Fecha de estreno: " + film.release_date)
    filmBox.append(nameBox);
    filmBox.append(dirBox);
    filmBox.append(epiBox);
    filmBox.append(prodBox);
    filmBox.append(releaseBox);
    const ident = film.url;
    var regex = /(\d+)/g;
    const ide = ident.match(regex);
    // console.log(film);
    filmBox.addEventListener("click", (ev) => {
      window.location.assign(window.location.href + "?id=" + ide)
    });
    return filmBox;
  }

} else {
  fetch("https://swapi.dev/api/films/" + id, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    }).then((body) => {
      console.log(body);
      const gridfilms = document.querySelector(".grid-films")
      gridfilms.setAttribute("class", "grid-film")
      const films = createfilm(body);
      gridfilms.append(films);
      function createfilm(film) {
        const filmBox = createElement("div", "film-box-big",)
        const nameBox = createElement("div", "name-box", film.title)
        const dirBox = createElement("div", "item-box", "Director: " + film.director)
        const epiBox = createElement("div", "item-box", "Episodio: " + film.episode_id)
        const prodBox = createElement("div", "item-box", "Productores: " + film.producer)
        const releaseBox = createElement("div", "item-box", "Fecha de estreno: " + film.release_date)
        const planetBox = createPlanet3Box(film.planets);
        const speciesBox = createSpecies2Box(film.species);
        const shipsBox = createShip2Box(film.starships);
        const vehiclesBox = createVehicles2Box(film.vehicles);
        const introBox = createElement("div", "item-box", "Opening: "+film.opening_crawl)
        filmBox.append(nameBox);
        filmBox.append(dirBox);
        filmBox.append(epiBox);
        filmBox.append(prodBox);
        filmBox.append(releaseBox);
        filmBox.append(planetBox)
        filmBox.append(speciesBox);
        filmBox.append(shipsBox)
        filmBox.append(vehiclesBox)
        filmBox.append(introBox)
        return filmBox;
      }

    })
}
// }).catch((err) => {
// Error handling

