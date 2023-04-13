// Con event loop

fetch("http://swapi.dev/api/starships/", {
  method: "GET",
})
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    console.log(body);
  }).catch((err) => {
    // Error handling
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
