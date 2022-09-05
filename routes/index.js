const express = require("express");
const cursosController = require("../controller/cursos.controller");


const routes = express.Router();

routes.get("/", cursosController.welcome);

routes.get("/listar-cursos", cursosController.get);

routes.post("/cadastrar", cursosController.insert);

routes.delete("/deleta-cursos/:id", cursosController.delete);

routes.put("/atualizar-cursos/:id", cursosController.put);

module.exports = routes;