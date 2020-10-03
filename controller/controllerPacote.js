const Pacote = require('../model/pacote');

exports.listar = (req, res, next) => {
    Pacote.find({}, (err, pacote) => {
        if(err) {
            console.error(err);
            res.status(500).send(err);
        }
        res.send(pacote);
    });
    next();
}

exports.inserir = (req, res, next) => {
    let novoPacote = new pacote(req.body);
    novoPacote.save((err, pacote) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.status(201).json(pacote);
    });
    next();
}

exports.atualizar = (req, res, next) => {
    let id = req.params.id;
    let pacoteAtualizar = req.body;
    Pacote.findOneAndUpdate({ _id: id }, pacoteAtualizar, { new: true }, (err, pacoteAtual) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(pacoteAtual);
    });
    next();
}

exports.deletar = (req, res, next) => {
    let id = req.params.id;
    Pacote.findByIdAndDelete({ _id: id }, (err, pacoteAtual) => {
        if(err) {
            console.error(err);
            res.send(err);
        }
        res.json(pacoteAtual);
    });
    next();
}

exports.buscarPorId =  (req, res, next) => {
    let id = req.params.id;
    Pacote.findById(id, (err, pacote) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(pacote);
    });
    next();
}

exports.procurar = (req, res, next) => {
    if(req.query && req.query.nome){
        let paramNome = req.query.nome;
        Pacote.find({nome: paramNome}, (err, pacote) => {
            if(err){
                console.error(err);
                res.status(500).send(err);
            }
            res.json(pacote);
        });
    }
    next();
}