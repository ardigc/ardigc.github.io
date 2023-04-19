const search = new URLSearchParams(window.location.search);
// const url = window.location.href
const id = search.get("id");


if (!id === !null) {
  // Con event loop
  fetch("https://swapi.dev/api/species/", {
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
      const gridspecies = document.querySelector(".grid-species")
      const species = results.map(createspecie)
      gridspecies.append(...species);
    });
  // Deteniendo ejecución
  // async function getLuke() {
  //   const response = await fetch("http://swapi.dev/api/species/1/", {
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
  function createspecie(specie) {
    console.log(specie);
    const specieBox = createElement("div", "specie-box",)
    const nameBox = createElement("div", "name-box", specie.name)
    const heightBox = createElement("div", "item-box", "Altura media: " + specie.average_height + " cm")
    const lifeBox = createElement("div", "item-box", "Esperanza de vida: " + specie.average_lifespan + " años")
    const classBox = createElement("div", "item-box", "Clasificacion: " + specie.classification)
    const eyeBox = createElement("div", "item-box", "Color de ojos: " + specie.eye_colors)
    const hairBox = createElement("div", "item-box", "Color de pelo: " + specie.hair_colors)
    const skinBox = createElement("div", "item-box", "Color de piel: " + specie.skin_colors)
    const langBox = createElement("div", "item-box", "Idioma: " + specie.language)
    specieBox.append(nameBox);
    specieBox.append(heightBox);
    specieBox.append(lifeBox);
    specieBox.append(classBox);
    specieBox.append(eyeBox);
    specieBox.append(hairBox);
    specieBox.append(skinBox);
    specieBox.append(langBox);
    const ident = specie.url;
    var regex = /(\d+)/g;
    const ide = ident.match(regex);
    // console.log(specie);
    specieBox.addEventListener("click", (ev) => {
      window.location.assign(window.location.href + "?id=" + ide)
    });
    return specieBox;
  }

} else {
  fetch("https://swapi.dev/api/species/" + id, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    }).then((body) => {
      console.log(body);
      const gridspecies = document.querySelector(".grid-species")
      gridspecies.setAttribute("class", "grid-specie")
      const species = createspecie(body);
      gridspecies.append(species);
      function createspecie(specie) {
        const specieBox = createElement("div", "specie-box-big",)
        const nameBox = createElement("div", "name-box", specie.name)
        const heightBox = createElement("div", "item-box", "Altura media: " + specie.average_height + " cm")
        const lifeBox = createElement("div", "item-box", "Esperanza de vida: " + specie.average_lifespan + " años")
        const classBox = createElement("div", "item-box", "Clasificacion: " + specie.classification)
        const eyeBox = createElement("div", "item-box", "Color de ojos: " + specie.eye_colors)
        const hairBox = createElement("div", "item-box", "Color de pelo: " + specie.hair_colors)
        const skinBox = createElement("div", "item-box", "Color de piel: " + specie.skin_colors)
        const langBox = createElement("div", "item-box", "Idioma: " + specie.language)
        const filmBox = createFilmBox(specie.films);
        const planetBox = createPlanet2Box(specie.homeworld);
        const peopleBox = createPeopleBox(specie.people);
        // const vehiclesBox = createVehiclesBox(specie.vehicles);
        specieBox.append(nameBox);
        specieBox.append(heightBox);
        specieBox.append(lifeBox);
        specieBox.append(classBox);
        specieBox.append(eyeBox);
        specieBox.append(hairBox);
        specieBox.append(skinBox);
        specieBox.append(langBox);
        specieBox.append(filmBox);
        // specieBox.append(vehiclesBox);
        specieBox.append(planetBox);;
        specieBox.append(peopleBox);
        return specieBox;
      }

    })
}
// }).catch((err) => {
// Error handling

