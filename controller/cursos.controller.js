const cursosModel = require("../model/cursos");


 const cursosController = {
    welcome: (request, response) => {
        response.send("Seja bem vindo a api");
      },

    get: (request, response) => {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(cursosModel.getListCursos());
    },

    insert: (request, response) => {
      const {id, titulo, descricao, professor} = request.body;
      response.setHeader("Access-Control-Allow-Origin", "*");
      const newCurso = cursosModel.insertCursos(id, titulo, descricao, professor);

      response.status(204).json(newCurso);
    },

    delete: (request, response) => {
      const {id} = request.params;
      const cursosIndex = cursosModel.excluirCurso(id);

      return response.status(204).send(console.log("Deletado id" + id));
    },

    put: (request, response) => {
      const {id} = request.params;
      const body = request.body;
      const cursosIndex = cursosModel.atualizarCurso(id);
      const atualizarCurso = {id:id, ...body};
        cursosModel[cursosIndex] = atualizarCurso;
        console.log(body);
        res.status(204).send(console.log("Atualizado com sucesso!" + id));

    }

 };


  module.exports = cursosController;