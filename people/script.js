// Con event loop

const search = new URLSearchParams(window.location.search);
// const url = window.location.href
const id= search.get("id");


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
function createperson(person) {
  const personBox = createElement("div", "person-box",)
  const nameBox =createElement("div", "name-box", person.name)
  const eyeBox =createElement("div", "item-box", "Color de ojos: "+person.eye_color)
  const genderBox =createElement("div", "item-box", "Genero: "+person.gender)
  const heightBox =createElement("div", "item-box", "Altura: "+person.height+" cm")
  const massBox =createElement("div", "item-box", "Peso: "+person.mass+" Kg")
  personBox.append(nameBox);
  personBox.append(eyeBox);
  personBox.append(genderBox);
  personBox.append(heightBox);
  personBox.append(massBox);
    const ident = person.url;
  var regex = /(\d+)/g;
  const ide = ident.match(regex);
  // console.log(ide);
  // const ide = ident.slice(-2,-1);
  console.log(person);
  personBox.addEventListener("click", (ev) => {
    window.location.assign(window.location.href+"?id="+ide)
  });
  return personBox;
}

} else {
  fetch("https://swapi.dev/api/people/"+id, {
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
      const nameBox =createElement("div", "name-box", person.name)
      const eyeBox =createElement("div", "item-box", "Color de ojos: "+person.eye_color)
    const genderBox =createElement("div", "item-box", "Genero: "+person.gender)
    const heightBox =createElement("div", "item-box", "Altura: "+person.height+" cm")
    const massBox =createElement("div", "item-box", "Peso: "+person.mass+" Kg")
    const shipUrlLink = person.starships.map(linkUrl);
    const finalLink = shipUrlLink.map(linkPerson)
    // console.log(person.starships)
    // Crear sub caja con los dos enalces
    const shipBox = createShipBox(finalLink, person.starships);
    // const subShipBox = createElement()
    personBox.append(nameBox);
    personBox.append(eyeBox);
    personBox.append(genderBox);
    personBox.append(heightBox);
    personBox.append(massBox);
    personBox.append(shipBox);
      return personBox;
    }
    
  })
}
// }).catch((err) => {
  // Error handling

  function createShipBox(link, swapi) {
//  console.log(link.length);
    if (link.length === 0) {
      const shipBox=createElement("div", "item-box",)
      const textBox = createElement("div", "item-box", "Naves pilotadas: 0")
      shipBox.append(textBox);
      return shipBox;
    } else {
      const shipBox=createElement("div", "item-box",)
      const textBox = createElement("div", "item-box", "Naves pilotadas: ")
      console.log(link)
      const shipList = link.map(createShipList);
      shipBox.append(textBox);
      shipBox.append(shipList);
      return shipBox;
    }
  }
  function createShipList(link) {
    console.log(link)
    fetch(swapi, {
    method: "GET",
  })
  .then((res) => {
    return res.json();
  }).then((name) => {
  // const ship = createElement("a", "item-box", name.name)
  })
  }
  function linkUrl(url) {
    // console.log(url);
    var regex = /(\d+)/g;
    const ide = url.match(regex);
    return ide;
    console.log(ide);
    console.log(window.location.origin);
  }
  function linkPerson(num) {
    const link =window.location.origin+"/ships/?id="+num;
    // console.log(link);
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
