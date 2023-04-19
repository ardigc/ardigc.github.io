const search = new URLSearchParams(window.location.search);
// const url = window.location.href
const id= search.get("id");
console.log(id)
if (!id === !null) {
      // Con event loop
fetch("https://swapi.dev/api/planets/", {
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
    const gridplanets = document.querySelector(".grid-planets")
    const planets = results.map(createplanet)
    gridplanets.append(...planets);
  })  ;
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
function createplanet(planet) {
  const planetBox = createElement("div", "planet-box",)
  const nameBox =createElement("div", "name-box", planet.name)
  const climateBox = createElement("div", "item-box", "Clima: "+planet.climate)
  const gravityBox = createElement("div", "item-box", "Gravedad: "+planet.gravity)
  const orbitalBox = createElement("div", "item-box", "Periodo orbital: "+planet.orbital_period)
  const terrainBox = createElement("div", "item-box", "Biomas: "+planet.terrain)
  const diameterBox = createElement("div", "item-box", "Diametro: "+planet.diameter+"Km")
  const populationBox = createElement("div", "item-box", "Poblacion: "+planet.population+" habitantes")
  const rotationBox = createElement("div", "item-box", "Periodo rotacional: "+planet.rotation_period)
  const waterBox = createElement("div", "item-box", "Porcentaje de agua superficial: "+planet.surface_water+"%")
  planetBox.append(nameBox);
  planetBox.append(climateBox);
  planetBox.append(diameterBox);
  planetBox.append(gravityBox);
  planetBox.append(orbitalBox);
  planetBox.append(populationBox);
  planetBox.append(rotationBox);
  planetBox.append(waterBox);
  planetBox.append(terrainBox);
  
  const ident = planet.url;
  var regex = /(\d+)/g;
  const ide = ident.match(regex);
  // console.log(ide);
  // const ide = ident.slice(-2,-1);
  console.log(planet);
  planetBox.addEventListener("click", (ev) => {
    window.location.assign(window.location.href+"?id="+ide)
  });
  return planetBox;
}

} else {
  fetch("https://swapi.dev/api/planets/"+id, {
    method: "GET",
  })
  .then((res) => {
    return res.json();
  }).then((body) => {
    console.log(body);
    const gridplanets = document.querySelector(".grid-planets")
    gridplanets.setAttribute("class", "grid-planet")
    const planets = createplanet(body);
    gridplanets.append(planets);
    function createplanet(planet) {
      const planetBox = createElement("div", "planet-box-big",)
      const nameBox =createElement("div", "name-box", planet.name)
      const climateBox = createElement("div", "item-box", "Clima: "+planet.climate)
      const gravityBox = createElement("div", "item-box", "Gravedad: "+planet.gravity)
      const orbitalBox = createElement("div", "item-box", "Periodo orbital: "+planet.orbital_period)
      const terrainBox = createElement("div", "item-box", "Biomas: "+planet.terrain)
      const diameterBox = createElement("div", "item-box", "Diametro: "+planet.diameter+"Km")
      const populationBox = createElement("div", "item-box", "Poblacion: "+planet.population+" habitantes")
      const rotationBox = createElement("div", "item-box", "Periodo rotacional: "+planet.rotation_period)
      const waterBox = createElement("div", "item-box", "Porcentaje de agua superficial: "+planet.surface_water+"%")
      const filmBox = createFilmBox(planet.films);
      const residentBox = createResidentBox(planet.residents);
      // const planetsBox = createplanetsBox(planet.planets);
      // const planetBox = createPlanetBox(planet.homeworld);
      planetBox.append(nameBox)
      planetBox.append(climateBox);
      planetBox.append(diameterBox);
      planetBox.append(gravityBox);
      planetBox.append(orbitalBox);
      planetBox.append(populationBox);
      planetBox.append(rotationBox);
      planetBox.append(waterBox);
      planetBox.append(terrainBox);
      planetBox.append(filmBox);
      planetBox.append(residentBox);
      // planetBox.append(planetsBox);
      // planetBox.append(planetBox);
      return planetBox;
    }
    
  })
}
// }).catch((err) => {
  // Error handling

// window.location.assign(window.location.href+"?id="+id);