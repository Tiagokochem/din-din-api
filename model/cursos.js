const listCursos = require("../database/cursos.json");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require('crypto');


function getListCursos(){
    return listCursos;
}

function insertCursos(id, titulo, descricao, professor){
    const newCurso = {
        id: randomUUID(),
        titulo: "titulo",
        descricao: "descricao",
        professor: "professor"
    };
    CursoOk()
    listCursos.push(newCurso);
    return newCurso;   

}

function CursoOk() {fs.writeFileSync(
    path.resolve("database", "cursos.json"),
    JSON.stringify(listCursos)
);
}

function excluirCurso(id){
    const cursosIndex = listCursos.findIndex(cursos => cursos.id === id);
    listCursos.splice(cursosIndex, 1);
    CursoOk()
}

function atualizarCurso(id){
    const cursosIndex = listCursos.findIndex(cursos => cursos.id === id);
    listCursos.splice(cursosIndex, 1);
    CursoOk()
}




module.exports = { getListCursos, insertCursos, excluirCurso, atualizarCurso}; 