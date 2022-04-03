import express from "express";
import notaControllers from "../controllers/notasController.js";

const router = express.Router();

router
.get('/notas', notaControllers.listarNotas)
.get('/notas/:id', notaControllers.listarNotaPorId)
.post('/notas', notaControllers.cadastrarNotas)
.put('/notas/:id', notaControllers.atualizarNota)
.delete('/notas/:id', notaControllers.excluirNota)

export default router;