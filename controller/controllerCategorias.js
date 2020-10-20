const Categorias = require('../model/categoria');

exports.listar = (req, res, next) => {
    Categorias.find({}, (error, categorias) => {
        if(error) {
            console.error(error);
            res.status(500).send(error);
        }
        res.send(categorias);
    });
}

exports.inserir = (req, res, next) => {
    let novoCategorias = new categorias(req.body);
    novoCategorias.save((err, categorias) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.status(201).redirect('/view/pacote');
    });
}

exports.atualizar = (req, res, next) => {
    let id = req.params.id;
    let categoriasAtualizar = req.body;
    Categorias.findOneAndUpdate({ _id: id }, categoriasAtualizar, { new: true }, (err, categoriasAtual) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(categoriasAtual);
    });
}

exports.deletar = (req, res, next) => {
    let id = req.params.id;
    Categorias.findByIdAndDelete({ _id: id }, (err, categoriasAtual) => {
        if(err) {
            console.error(err);
            res.send(err);
        }
        res.json(categoriasAtual);
    });
}

exports.buscarPorId =  (req, res, next) => {
    let id = req.params.id;
    Categorias.findById(id, (err, categorias) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(categorias);
    });
}

exports.procurar = (req, res, next) => {
    if(req.query && req.query.nome){
        let paramNome = req.query.nome;
        Categorias.find({nome: paramNome}, (err, categorias) => {
            if(err){
                console.error(err);
                res.status(500).send(err);
            }
            res.json(categorias);
        });
    }
}