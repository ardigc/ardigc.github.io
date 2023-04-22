const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const app = express();

const port = 3000;

async function readFile(fileName) {
  const filePath = path.join(__dirname, fileName);
  const file = await fs.readFile(filePath);
  return file;
}

async function handleRequest (filename, res, contentType) {
  const file = await readFile(filename);
  res.statusCode = 200;
  res.setHeader("Content-Type", contentType);
  res.send(file);
}

app.get("/", async (req, res) => {
  handleRequest('index.html', res, 'text/html')
});
app.get("/styles.css", async (req, res) => {
  handleRequest('styles.css', res, 'text/css')
});
app.get("/script.js", async (req, res) => {
  handleRequest('script.js', res, 'application/javascript')
});
app.get("/imagenes/stars.jpg", async (req, res) => {
  handleRequest('imagenes/stars.jpg', res, 'image/jpeg')
});
app.get("/imagenes/films.jpg", async (req, res) => {
  handleRequest('imagenes/films.jpg', res, 'image/jpeg')
});
app.get("/imagenes/gente.jpg", async (req, res) => {
  handleRequest('imagenes/gente.jpg', res, 'image/jpeg')
});


app.listen(port, () => {
  console.log("App listening in port ", port);
});
