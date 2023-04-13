// Con event loop

fetch("http://swapi.dev/api/vehicles/", {
  method: "GET",
})
.then((res) => {
  return res.json();
}).then((body) => {
  return body.results
  // }).catch((err) => {
    // Error handling
  }).then((results) => {
    console.log(results);
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
  const velocityBox = createElement("div", "velocity-box", ship.MGLT)
  shipBox.append(nameBox)
  shipBox.append(modelBox)
  shipBox.append(velocityBox)
  shipBox.append(classBox)
  return shipBox;
}
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
}