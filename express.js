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

async function handleRequest(filename, res, contentType) {
  const file = await readFile(filename);
  res.statusCode = 200;
  res.setHeader("Content-Type", contentType);
  res.send(file);
}

app.get("/", async (req, res) => {
  handleRequest("index.html", res, "text/html");
});
app.get("/styles.css", async (req, res) => {
  handleRequest("styles.css", res, "text/css");
});
app.get("/script.js", async (req, res) => {
  handleRequest("script.js", res, "application/javascript");
});
app.get("/vehicles/?", async (req, res) => {
  handleRequest("vehicles/index.html", res, "text/html");
});
app.get("/vehicles/styles.css", async (req, res) => {
  handleRequest("vehicles/styles.css", res, "text/css");
});
app.get("/vehicles/script.js", async (req, res) => {
  handleRequest("vehicles/script.js", res, "application/javascript");
});
app.get("/species/?", async (req, res) => {
  handleRequest("species/index.html", res, "text/html");
});
app.get("/species/styles.css", async (req, res) => {
  handleRequest("species/styles.css", res, "text/css");
});
app.get("/species/script.js", async (req, res) => {
  handleRequest("species/script.js", res, "application/javascript");
});
app.get("/ships/?", async (req, res) => {
  handleRequest("ships/index.html", res, "text/html");
});
app.get("/ships/styles.css", async (req, res) => {
  handleRequest("ships/styles.css", res, "text/css");
});
app.get("/ships/script.js", async (req, res) => {
  handleRequest("ships/script.js", res, "application/javascript");
});
app.get("/planets/?", async (req, res) => {
  handleRequest("/planets/index.html", res, "text/html");
});
app.get("/planets/styles.css", async (req, res) => {
  handleRequest("/planets/styles.css", res, "text/css");
});
app.get("/planets/script.js", async (req, res) => {
  handleRequest("/planets/script.js", res, "application/javascript");
});
app.get("/people/?", async (req, res) => {
  handleRequest("people/index.html", res, "text/html");
});
app.get("/people/styles.css", async (req, res) => {
  handleRequest("people/styles.css", res, "text/css");
});
app.get("/people/script.js", async (req, res) => {
  handleRequest("people/script.js", res, "application/javascript");
});
app.get("/films/?", async (req, res) => {
  handleRequest("films/index.html", res, "text/html");
});
app.get("/films/styles.css", async (req, res) => {
  handleRequest("films/styles.css", res, "text/css");
});
app.get("/films/script.js", async (req, res) => {
  handleRequest("films/script.js", res, "application/javascript");
});
app.get("/imagenes/stars.jpg", async (req, res) => {
  handleRequest("imagenes/stars.jpg", res, "image/jpeg");
});
app.get("/imagenes/films.jpg", async (req, res) => {
  handleRequest("imagenes/films.jpg", res, "image/jpeg");
});
app.get("/imagenes/gente.jpg", async (req, res) => {
  handleRequest("imagenes/gente.jpg", res, "image/jpeg");
});
app.get("/imagenes/planets.jpg", async (req, res) => {
  handleRequest("imagenes/planets.jpg", res, "image/jpeg");
});
app.get("/imagenes/ship.jpg", async (req, res) => {
  handleRequest("imagenes/ship.jpg", res, "image/jpeg");
});
app.get("/imagenes/species.jpg", async (req, res) => {
  handleRequest("imagenes/species.jpg", res, "image/jpeg");
});
app.get("/imagenes/vehicles.jpg", async (req, res) => {
  handleRequest("imagenes/vehicles.jpg", res, "image/jpeg");
});

app.listen(port, () => {
  console.log("App listening in port ", port);
});
