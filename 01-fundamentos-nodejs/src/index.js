const express = require("express");

const app = express();

app.use(express.json());

/**
 * GET => Get info on server
 * POST => Insert info on server
 * PUT => Change info on server
 * PATCH => Change info partilly
 * DELETE => Delete info on server
 */

/**
 * Params types
 *
 * Route Params => Identify resource to edit or delete or search (url/:id)
 * Query Params => Pagination / Filter
 * Body Params => Objects to insert or change a resource (JSON)
 */

app.get("/courses", (req, res) => {
  const query = req.query;
  console.log(query);
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (req, res) => {
  const body = req.body;
  console.log(body);
  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3333);
