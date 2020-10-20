let categoria = require('./categoria');
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const PacoteSchema =  new Schema({
    nome: String,
    descricao: String,
    comandoInstalar: String,
    comandoApagar: String,
    versao: String,
    categoria: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }
    ]
}, {
    versionKey: false
});


module.exports = mongoose.model("Pacote", PacoteSchema);