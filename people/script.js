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
    personBox.append(nameBox);
    personBox.append(eyeBox);
    personBox.append(genderBox);
    personBox.append(heightBox);
    personBox.append(massBox);
    personBox.append(hairBox);
    personBox.append(skinBox);
    const ident = person.url;
    var regex = /(\d+)/g;
    const ide = ident.match(regex);
    console.log(person);
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
        const shipBox = createShipBox(person.starships);
        const filmBox = createFilmBox(person.films);
        personBox.append(nameBox);
        personBox.append(eyeBox);
        personBox.append(genderBox);
        personBox.append(heightBox);
        personBox.append(massBox);
        personBox.append(shipBox);
        personBox.append(hairBox);
        personBox.append(skinBox);
        personBox.append(filmBox);
        return personBox;
      }

    })
}
// }).catch((err) => {
// Error handling

function createShipBox(link) {
  if (link.length === 0) {
    const shipBox = createElement("div", "item-box",)
    const textBox = createElement("div", "item-box", "Naves pilotadas: 0")
    shipBox.append(textBox);
    return shipBox;
  } else {
    const shipBox = createElement("div", "item-box",)
    const textBox = createElement("div", "item-box", "Naves pilotadas: ")
    console.log(link)
    const shipList = link.map(createShipList);
    shipBox.append(textBox);
    shipBox.append(...shipList);
    return shipBox;
  }
}
function createFilmBox(link) {
  if (link.length === 0) {
    const filmBox = createElement("div", "item-box",)
    const textBox = createElement("div", "item-box", "Aparece en: 0")
    filmBox.append(textBox);
    return filmBox;
  } else {
    const filmBox = createElement("div", "item-box",)
    const textBox = createElement("div", "item-box", "Aparece en: ")
    console.log(link)
    const filmList = link.map(createFilmList);
    filmBox.append(textBox);
    filmBox.append(...filmList);
    return filmBox;
  }
}
function createShipList(link) {
  const ship = createElement("div", "item-box",)
  console.log(ship)
  fetch(link, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    }).then((name) => {
      const shipName = createElement("a", "link-box", name.name)
      const shipUrlLink = linkUrl(link);
      const finalLink = linkShip(shipUrlLink)
      shipName.setAttribute("href", finalLink)
      ship.append(shipName)
    })

  return ship
}
function createFilmList(link) {
  const film = createElement("div", "item-box",)
  console.log(film)
  fetch(link, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    }).then((name) => {
      const filmName = createElement("a", "link-box", name.title)
      const filmUrlLink = linkUrl(link);
      const finalLink = linkFilm(filmUrlLink)
      filmName.setAttribute("href", finalLink)
      film.append(filmName)
    })

  return film
}
function linkUrl(url) {
  var regex = /(\d+)/g;
  const ide = url.match(regex);
  return ide;
}
function linkShip(num) {
  const link = window.location.origin + "/ships/?id=" + num;
  return link
}
function linkFilm(num) {
  const link = window.location.origin + "/films/?id=" + num;
  return link
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
};
