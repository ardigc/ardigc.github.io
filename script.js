const intro = document.querySelector(".intro");
intro.addEventListener("click", (ev) => {
  window.location.assign(window.location.origin + window.location.pathname);
});
const header = document.querySelector(".header");
header.addEventListener("click", (ev) => {
  window.location.assign(window.location.origin);
});
function linkUrl(url) {
  var regex = /(\d+)/g;
  const ide = url.match(regex);
  return ide;
}
function linkShip(num) {
  const link = window.location.origin + "/ships/?id=" + num;
  return link;
}
function linkFilm(num) {
  const link = window.location.origin + "/films/?id=" + num;
  return link;
}
function linkPilot(num) {
  const link = window.location.origin + "/people/?id=" + num;
  return link;
}
function linkSpecies(num) {
  const link = window.location.origin + "/species/?id=" + num;
  return link;
}

function linkVehicles(num) {
  const link = window.location.origin + "/vehicles/?id=" + num;
  return link;
}
function linkPlanet(num) {
  const link = window.location.origin + "/planets/?id=" + num;
  return link;
}
function createShipBox(link) {
  if (link.length === 0) {
    const shipBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Naves pilotadas: 0");
    shipBox.append(textBox);
    return shipBox;
  } else {
    const shipBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Naves pilotadas: ");
    // console.log(link)
    const shipList = link.map(createShipList);
    shipBox.append(textBox);
    shipBox.append(...shipList);
    return shipBox;
  }
}
function createShip2Box(link) {
  if (link.length === 0) {
    const shipBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Naves pilotadas: 0");
    shipBox.append(textBox);
    return shipBox;
  } else {
    const shipBox = createElement("div", "resident-box");
    const textBox = createElement("div", "li-box", "Naves que aparecen: ");
    // console.log(link)
    const shipList = link.map(createShipList);
    shipBox.append(textBox);
    shipBox.append(...shipList);
    return shipBox;
  }
}
function createVehicles2Box(link) {
  if (link.length === 0) {
    const shipBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Naves pilotadas: 0");
    shipBox.append(textBox);
    return shipBox;
  } else {
    const shipBox = createElement("div", "resident-box");
    const textBox = createElement("div", "li-box", "Vehiculos que aparecen: ");
    // console.log(link)
    const shipList = link.map(createVehiclesList);
    shipBox.append(textBox);
    shipBox.append(...shipList);
    return shipBox;
  }
}
function createFilmBox(link) {
  if (link.length === 0) {
    const filmBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Aparece en: 0");
    filmBox.append(textBox);
    return filmBox;
  } else {
    const filmBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Aparece en: ");
    // console.log(link)
    const filmList = link.map(createFilmList);
    filmBox.append(textBox);
    filmBox.append(...filmList);
    return filmBox;
  }
}
function createPilotBox(link) {
  if (link.length === 0) {
    const pilotBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Sin pilotos conocidos");
    pilotBox.append(textBox);
    return pilotBox;
  } else {
    const pilotBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Pilotos conocidos: ");
    // console.log(link)
    const pilotList = link.map(createPilotList);
    pilotBox.append(textBox);
    pilotBox.append(...pilotList);
    return pilotBox;
  }
}
function createPeopleBox(link) {
  if (link.length === 0) {
    const pilotBox = createElement("div", "item-box");
    const textBox = createElement(
      "div",
      "item-box",
      "Sin personajes conocidos"
    );
    pilotBox.append(textBox);
    return pilotBox;
  } else {
    const pilotBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Personajes: ");
    // console.log(link)
    const pilotList = link.map(createPilotList);
    pilotBox.append(textBox);
    pilotBox.append(...pilotList);
    return pilotBox;
  }
}
function createSpeciesBox(link) {
  if (link.length === 0) {
    const speciesBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Especie: humano");
    speciesBox.append(textBox);
    return speciesBox;
  } else {
    const speciesBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Especie: ");
    // console.log(link)
    const speciesList = link.map(createSpeciesList);
    speciesBox.append(textBox);
    speciesBox.append(...speciesList);
    return speciesBox;
  }
}
function createSpecies2Box(link) {
  if (link.length === 0) {
    const speciesBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Especie: humano");
    speciesBox.append(textBox);
    return speciesBox;
  } else {
    const speciesBox = createElement("div", "resident-box");
    const textBox = createElement("div", "li-box", "Especies que aparecen: ");
    // console.log(link)
    const speciesList = link.map(createSpeciesList);
    speciesBox.append(textBox);
    speciesBox.append(...speciesList);
    return speciesBox;
  }
}
function createResidentBox(link) {
  if (link.length === 0) {
    const pilotBox = createElement("div", "item-box");
    const textBox = createElement(
      "div",
      "item-box",
      "Sin Residentes conocidos"
    );
    pilotBox.append(textBox);
    return pilotBox;
  } else {
    const pilotBox = createElement("div", "resident-box");
    const textBox = createElement("div", "li-box", "Residentes conocidos: ");
    // console.log(link)
    const pilotList = link.map(createPilotList);
    pilotBox.append(textBox);
    pilotBox.append(...pilotList);
    return pilotBox;
  }
}
function createVehiclesBox(link) {
  if (link.length === 0) {
    const vehiclesBox = createElement("div", "item-box");
    const textBox = createElement(
      "div",
      "item-box",
      "Vehiculos conocidos: ninguno"
    );
    vehiclesBox.append(textBox);
    return vehiclesBox;
  } else {
    const vehiclesBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Vehiculos conocidos: ");
    // console.log(link)
    const vehiclesList = link.map(createVehiclesList);
    vehiclesBox.append(textBox);
    vehiclesBox.append(...vehiclesList);
    return vehiclesBox;
  }
}
function createPlanetBox(link) {
  if (link.length === 0) {
    const planetBox = createElement("div", "item-box");
    const textBox = createElement(
      "div",
      "item-box",
      "Planeta de origen desconocido"
    );
    planetBox.append(textBox);
    return planetBox;
  } else {
    const planetBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Planeta de origen: ");
    // console.log(link)
    const planetList = createPlanetList(link);
    planetBox.append(textBox);
    planetBox.append(planetList);
    return planetBox;
  }
}
function createPlanet2Box(link) {
  if (!link) {
    const planetBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Fabricado");
    planetBox.append(textBox);
    return planetBox;
  } else {
    const planetBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Planeta de origen: ");
    // console.log(link)
    const planetList = createPlanetList(link);
    planetBox.append(textBox);
    planetBox.append(planetList);
    return planetBox;
  }
}
function createPlanet3Box(link) {
  if (!link) {
    const planetBox = createElement("div", "item-box");
    const textBox = createElement("div", "item-box", "Fabricado");
    planetBox.append(textBox);
    return planetBox;
  } else {
    const planetBox = createElement("div", "resident-box");
    const textBox = createElement("div", "li-box", "Planetas que aparecen: ");
    // console.log(link)
    const planetList = link.map(createPlanetList);
    planetBox.append(textBox);
    planetBox.append(...planetList);
    return planetBox;
  }
}
function createShipList(link) {
  const ship = createElement("div", "item-box");
  // console.log(ship)
  fetch(link, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((name) => {
      const shipName = createElement("a", "link-box", name.name);
      const shipUrlLink = linkUrl(link);
      const finalLink = linkShip(shipUrlLink);
      shipName.setAttribute("href", finalLink);
      ship.append(shipName);
    });

  return ship;
}
function createFilmList(link) {
  const film = createElement("div", "item-box");
  // console.log(film)
  fetch(link, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((name) => {
      const filmName = createElement("a", "link-box", name.title);
      const filmUrlLink = linkUrl(link);
      const finalLink = linkFilm(filmUrlLink);
      filmName.setAttribute("href", finalLink);
      film.append(filmName);
    });

  return film;
}
function createPilotList(link) {
  const pilot = createElement("div", "item-box");
  fetch(link, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((name) => {
      const pilotName = createElement("a", "link-box", name.name);
      // console.log(name)
      const pilotUrlLink = linkUrl(link);
      const finalLink = linkPilot(pilotUrlLink);
      pilotName.setAttribute("href", finalLink);
      pilot.append(pilotName);
    });

  return pilot;
}
function createSpeciesList(link) {
  const species = createElement("div", "item-box");
  fetch(link, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((name) => {
      const speciesName = createElement("a", "link-box", name.name);
      // console.log(name)
      const speciesUrlLink = linkUrl(link);
      const finalLink = linkSpecies(speciesUrlLink);
      speciesName.setAttribute("href", finalLink);
      species.append(speciesName);
    });

  return species;
}
function createResidentList(link) {
  const pilot = createElement("div", "resident-box");
  fetch(link, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((name) => {
      const pilotName = createElement("a", "link-box", name.name);
      // console.log(name)
      const pilotUrlLink = linkUrl(link);
      const finalLink = linkPilot(pilotUrlLink);
      pilotName.setAttribute("href", finalLink);
      pilot.append(pilotName);
    });

  return pilot;
}
function createVehiclesList(link) {
  const vehicles = createElement("div", "item-box");
  // console.log(vehicles)
  fetch(link, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((name) => {
      const vehiclesName = createElement("a", "link-box", name.name);
      const vehiclesUrlLink = linkUrl(link);
      const finalLink = linkVehicles(vehiclesUrlLink);
      vehiclesName.setAttribute("href", finalLink);
      vehicles.append(vehiclesName);
    });

  return vehicles;
}
function createPlanetList(link) {
  const planet = createElement("div", "item-box");
  // console.log(planet)
  fetch(link, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((name) => {
      const planetName = createElement("a", "link-box", name.name);
      const planetUrlLink = linkUrl(link);
      const finalLink = linkPlanet(planetUrlLink);
      planetName.setAttribute("href", finalLink);
      planet.append(planetName);
    });

  return planet;
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
