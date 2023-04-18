const search = new URLSearchParams(window.location.search);
// const url = window.location.href
const id= search.get("id");
console.log(id)
if (!id === !null) {
      // Con event loop
fetch("https://swapi.dev/api/starships/", {
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
    const gridShips = document.querySelector(".grid-ships")
    const ships = results.map(createShip)
    gridShips.append(...ships);
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
function createShip(ship) {
  const nameBox =createElement("div", "name-box", ship.name)
  const modelBox = createElement("div", "model-box", "Modelo: "+ship.model)
  const classBox = createElement("div", "class-box", "Clase: "+ship.starship_class)
  const shipBox = createElement("div", "ship-box",)
  const velocityBox = createElement("div", "velocity-box", "Velocidad: "+ship.MGLT+"MGLT")
  const consumibleBox = createElement("div", "velocity-box", "Consumibles: "+ ship.consumables)
  const passengersBox = createElement("div", "velocity-box", "Pasajeros:  "+ ship.passengers)
  const manufacturerBox = createElement("div", "velocity-box", "Fabricante:  "+ ship.manufacturer)
  shipBox.append(nameBox);
  shipBox.append(modelBox);
  shipBox.append(classBox);
  shipBox.append(velocityBox);
  shipBox.append(consumibleBox);
  shipBox.append(passengersBox);
  shipBox.append(manufacturerBox);
  const ident = ship.url;
  var regex = /(\d+)/g;
  const ide = ident.match(regex);
  // console.log(ide);
  // const ide = ident.slice(-2,-1);
  console.log(ship);
  shipBox.addEventListener("click", (ev) => {
    window.location.assign(window.location.href+"?id="+ide)
  });
  return shipBox;
}

} else {
  fetch("https://swapi.dev/api/starships/"+id, {
    method: "GET",
  })
  .then((res) => {
    return res.json();
  }).then((body) => {
    console.log(body);
    const gridShips = document.querySelector(".grid-ships")
    gridShips.setAttribute("class", "grid-ship")
    const ships = createShip(body);
    gridShips.append(ships);
    function createShip(ship) {
      const shipBox = createElement("div", "ship-box-big",)
      const nameBox =createElement("div", "name-box", ship.name)
      const modelBox = createElement("div", "model-box", "Modelo: "+ship.model)
      const classBox = createElement("div", "class-box", "Clase: "+ship.starship_class)
      const velocityBox = createElement("div", "velocity-box", "Velocidad: "+ship.MGLT+"MGLT")
      const consumibleBox = createElement("div", "velocity-box", "Consumibles: "+ ship.consumables)
      const passengersBox = createElement("div", "velocity-box", "Pasajeros:  "+ ship.passengers  )
      const manufacturerBox = createElement("div", "velocity-box", "Fabricante:  "+ ship.manufacturer)
      const filmBox = createFilmBox(ship.films);
      // const vehiclesBox = createVehiclesBox(ship.vehicles);
      // const planetBox = createPlanetBox(ship.homeworld);
      shipBox.append(nameBox)
      shipBox.append(modelBox)
      shipBox.append(classBox)
      shipBox.append(velocityBox)
      shipBox.append(consumibleBox);
      shipBox.append(passengersBox);
      shipBox.append(manufacturerBox);
      shipBox.append(filmBox);
      // shipBox.append(vehiclesBox);
      // shipBox.append(planetBox);
      return shipBox;
    }
    
  })
}
// }).catch((err) => {
  // Error handling
  
  
  function createElement(tag, styles, content) {
    const element = document.createElement(tag);
    element.setAttribute("class", styles);
    if (!!content === false) {
    } else {
      if (Array.isArray(content)) {
        element.append(...content);
      } else {
        element.append(content);
    }
  }
  return element;
};

// window.location.assign(window.location.href+"?id="+id);