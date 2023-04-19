const search = new URLSearchParams(window.location.search);
// const url = window.location.href
const id= search.get("id");
console.log(id)
if (!id === !null) {
      // Con event loop
fetch("https://swapi.dev/api/vehicles/", {
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
    const gridvehicles = document.querySelector(".grid-vehicles")
    const vehicles = results.map(createvehicle)
    gridvehicles.append(...vehicles);
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
function createvehicle(vehicle) {
  const nameBox =createElement("div", "name-box", vehicle.name)
  const modelBox = createElement("div", "model-box", "Modelo: "+vehicle.model)
  const classBox = createElement("div", "class-box", "Clase: "+vehicle.vehicle_class)
  const vehicleBox = createElement("div", "vehicle-box",)
  // const velocityBox = createElement("div", "velocity-box", "Velocidad: "+vehicle.MGLT+" MGLT")
  const consumibleBox = createElement("div", "item-box", "Consumibles: "+ vehicle.consumables)
  const passengersBox = createElement("div", "item-box", "Pasajeros:  "+ vehicle.passengers)
  const manufacturerBox = createElement("div", "item-box", "Fabricante:  "+ vehicle.manufacturer)
  const costBox = createElement("div", "item-box", "Coste:  "+ vehicle.cost_in_credits+" Credits")
  const cargoBox = createElement("div", "item-box", "Capacidad de carga:  "+ vehicle.cargo_capacity+" Kg")
  const lengthBox = createElement("div", "item-box", "Longitud:  "+ vehicle.length+" m")
  vehicleBox.append(nameBox);
  vehicleBox.append(modelBox);
  vehicleBox.append(classBox);
  // vehicleBox.append(velocityBox);
  vehicleBox.append(consumibleBox);
  vehicleBox.append(passengersBox);
  vehicleBox.append(manufacturerBox);
  vehicleBox.append(cargoBox);
  vehicleBox.append(costBox);
  vehicleBox.append(lengthBox);
  const ident = vehicle.url;
  var regex = /(\d+)/g;
  const ide = ident.match(regex);
  // console.log(ide);
  // const ide = ident.slice(-2,-1);
  console.log(vehicle);
  vehicleBox.addEventListener("click", (ev) => {
    window.location.assign(window.location.href+"?id="+ide)
  });
  return vehicleBox;
}

} else {
  fetch("https://swapi.dev/api/vehicles/"+id, {
    method: "GET",
  })
  .then((res) => {
    return res.json();
  }).then((body) => {
    console.log(body);
    const gridvehicles = document.querySelector(".grid-vehicles")
    gridvehicles.setAttribute("class", "grid-vehicle")
    const vehicles = createvehicle(body);
    gridvehicles.append(vehicles);
    function createvehicle(vehicle) {
      const vehicleBox = createElement("div", "vehicle-box-big",)
      const nameBox =createElement("div", "name-box", vehicle.name)
      const modelBox = createElement("div", "model-box", "Modelo: "+vehicle.model)
      const classBox = createElement("div", "class-box", "Clase: "+vehicle.vehicle_class)
      // const velocityBox = createElement("div", "velocity-box", "Velocidad: "+vehicle.MGLT+"MGLT")
      const consumibleBox = createElement("div", "velocity-box", "Consumibles: "+ vehicle.consumables)
      const passengersBox = createElement("div", "velocity-box", "Pasajeros:  "+ vehicle.passengers  )
      const manufacturerBox = createElement("div", "velocity-box", "Fabricante:  "+ vehicle.manufacturer)
      const costBox = createElement("div", "item-box", "Coste:  "+ vehicle.cost_in_credits+" Credits")
      const cargoBox = createElement("div", "item-box", "Capacidad de carga:  "+ vehicle.cargo_capacity+" Kg")
      const lengthBox = createElement("div", "item-box", "Longitud:  "+ vehicle.length+" m")
      const filmBox = createFilmBox(vehicle.films);
      const pilotBox = createPilotBox(vehicle.pilots);
      // const vehiclesBox = createVehiclesBox(vehicle.vehicles);
      // const planetBox = createPlanetBox(vehicle.homeworld);
      vehicleBox.append(nameBox)
      vehicleBox.append(modelBox)
      vehicleBox.append(classBox)
      // vehicleBox.append(velocityBox)
      vehicleBox.append(consumibleBox);
      vehicleBox.append(passengersBox);
      vehicleBox.append(manufacturerBox);
      vehicleBox.append(cargoBox);
      vehicleBox.append(costBox);
      vehicleBox.append(lengthBox);
      vehicleBox.append(filmBox);
      vehicleBox.append(pilotBox);
      // vehicleBox.append(vehiclesBox);
      // vehicleBox.append(planetBox);
      return vehicleBox;
    }
    
  })
}
// }).catch((err) => {
  // Error handling

// window.location.assign(window.location.href+"?id="+id);