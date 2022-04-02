import express from "express";
import db from "./config/dbConnect.js";
import notas from "./model/Nota.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('A conexão com o banco foi feita com sucesso!');
});

const app = express();

app.use(express.json());


// const notas = [
//     {id: 1, "titulo": "Estudar", "conteudo": "API REST"},
//     {id: 2, "titulo": "Cozinhar", "conteudo": "Panqueca"}
// ]

app.get('/', (req, res) => {
    res.status(200, 'Postando suas notas!');
})

app.get('/notas', (req, res) => {
    notas.find((err, notas) => {
        res.status(200).json(notas);
    })    
})

app.get('/notas/:id', (req, res) => {
   let index = buscaNotas(req.params.id);
   res.json(notas[index]);
})

app.post('/notas', (req, res) => {
    notas.push(req.body);
    res.status(201).send('Nota cadastrada com sucesso!')
})

app.put('/notas/:id', (req, res) => {
    let index = buscaNotas(req.params.id);
    notas[index] = req.body.titulo;
    notas[index] = req.body.conteudo;
    res.status(200).json(notas);
})

app.delete('/notas/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaNotas(id);
    notas.splice(index, 1);
    res.send(`Nota ${index} removido com sucesso!`);
})

function buscaNotas(id){
    return notas.findIndex(nota => nota.id === id);
}

export default app;