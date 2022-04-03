import express from "express";
import db from "./config/dbConnect.js";
import notas from "./model/Nota.js";
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('A conexão com o banco foi feita com sucesso!');
});

const app = express();

app.use(express.json());

routes(app);

// const notas = [
//     {id: 1, "titulo": "Estudar", "conteudo": "API REST"},
//     {id: 2, "titulo": "Cozinhar", "conteudo": "Panqueca"}
// ]



app.put('/notas/:id', (req, res) => {
    let index = buscaNotas(req.params.id);
    notas[index] = req.body.titulo;
    notas[index] = req.body.conteudo;
    res.status(200).json(notas);
})

function buscaNotas(id){
    return notas.findIndex(nota => nota.id === id);
}

export default app;