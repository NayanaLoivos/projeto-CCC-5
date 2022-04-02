import mongoose from 'mongoose';

const notaSchema = new mongoose.Schema({
    id: {type: String},
    titulo: {type: String, required: true},
    conteudo: {type: String, required: true}
})

const notas = mongoose.model('notas', notaSchema);

export default notas;