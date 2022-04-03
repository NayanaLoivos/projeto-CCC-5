import notas from "../model/Nota.js";

class notaControllers {
            //Essa class é o app.get('/notas') e essa referência será feita dentro do aruivo de rotas
    static listarNotas = (req, res) => {
        notas.find((err, notas) => {
            res.status(200).json(notas);
        })    
    }
    static listarNotaPorId = (req, res) => {
        const { id } = req.params;

        notas.findById(id, (err, notas) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id da nota não localizado.`});
            }else {
                res.status(200).send(notas);

            }
        })
    }
    static cadastrarNotas = (req, res) => {
        let nota = new notas(req.body);

        nota.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar a nota.`});
            }else {
                res.status(201).send(nota.toJSON());
            }
        })
    }
    static atualizarNota = (req, res) => {
        const { id } = req.params;

        notas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'O livro foi atualizado com sucesso!'});                
            }else {
                res.status(500).send({message: err.message});
            }
        })
    }
    static excluirNota = (req, res) => {
        const { id } = req.params;
        
        notas.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send('Nota removida com sucesso.');
            }else {
                res.status(500).send({message: err.message});
            }
           
        })
    }

}

export default notaControllers;