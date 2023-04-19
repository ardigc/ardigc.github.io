const search = new URLSearchParams(window.location.search);
// const url = window.location.href
const id = search.get("id");


if (!id === !null) {
  // Con event loop
  fetch("https://swapi.dev/api/people/", {
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
      const gridpersons = document.querySelector(".grid-persons")
      const persons = results.map(createperson)
      gridpersons.append(...persons);
    });
  // Deteniendo ejecución
  // async function getLuke() {
  //   const response = await fetch("http://swapi.dev/api/people/1/", {
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
  function createperson(person) {
    const personBox = createElement("div", "person-box",)
    const nameBox = createElement("div", "name-box", person.name)
    const eyeBox = createElement("div", "item-box", "Color de ojos: " + person.eye_color)
    const genderBox = createElement("div", "item-box", "Genero: " + person.gender)
    const heightBox = createElement("div", "item-box", "Altura: " + person.height + " cm")
    const massBox = createElement("div", "item-box", "Peso: " + person.mass + " Kg")
    const hairBox = createElement("div", "item-box", "Color de pelo: " + person.hair_color)
    const skinBox = createElement("div", "item-box", "Color de piel: " + person.skin_color)
    const birthBox = createElement("div", "item-box", "Año de nacimiento: " + person.birth_year)
    personBox.append(nameBox);
    personBox.append(eyeBox);
    personBox.append(genderBox);
    personBox.append(heightBox);
    personBox.append(massBox);
    personBox.append(hairBox);
    personBox.append(skinBox);
    personBox.append(birthBox);
    const ident = person.url;
    var regex = /(\d+)/g;
    const ide = ident.match(regex);
    // console.log(person);
    personBox.addEventListener("click", (ev) => {
      window.location.assign(window.location.href + "?id=" + ide)
    });
    return personBox;
  }

} else {
  fetch("https://swapi.dev/api/people/" + id, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    }).then((body) => {
      console.log(body);
      const gridpersons = document.querySelector(".grid-persons")
      gridpersons.setAttribute("class", "grid-person")
      const persons = createperson(body);
      gridpersons.append(persons);
      function createperson(person) {
        const personBox = createElement("div", "person-box-big",)
        const nameBox = createElement("div", "name-box", person.name)
        const eyeBox = createElement("div", "item-box", "Color de ojos: " + person.eye_color)
        const genderBox = createElement("div", "item-box", "Genero: " + person.gender)
        const heightBox = createElement("div", "item-box", "Altura: " + person.height + " cm")
        const massBox = createElement("div", "item-box", "Peso: " + person.mass + " Kg")
        const hairBox = createElement("div", "item-box", "Color de pelo: " + person.hair_color)
        const skinBox = createElement("div", "item-box", "Color de piel: " + person.skin_color)
        const birthBox = createElement("div", "item-box", "Año de nacimiento: " + person.birth_year)
        const shipBox = createShipBox(person.starships);
        const filmBox = createFilmBox(person.films);
        const vehiclesBox = createVehiclesBox(person.vehicles);
        const planetBox = createPlanetBox(person.homeworld);
        const speciesBox = createSpeciesBox(person.species);
        personBox.append(nameBox);
        personBox.append(eyeBox);
        personBox.append(genderBox);
        personBox.append(heightBox);
        personBox.append(massBox);
        personBox.append(shipBox);
        personBox.append(hairBox);
        personBox.append(skinBox);
        personBox.append(filmBox);
        personBox.append(vehiclesBox);
        personBox.append(planetBox);
        personBox.append(birthBox);
        personBox.append(speciesBox);
        return personBox;
      }

    })
}
// }).catch((err) => {
// Error handling

