const Usuario = require('../model/usuario');

exports.listar = (req, res, next) => {
    Usuario.find({}, (err, usuario) => {
        if(err) {
            console.error(err);
            res.status(500).send(err);
        }
        res.send(usuario);
    });
    next();
}

exports.inserir = (req, res, next) => {
    let novoUsuario = new Usuario(req.body);
    novoUsuario.save((err, usuario) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.status(201).json(usuario);
    });
    next();
}

exports.atualizar = (req, res, next) => {
    let id = req.params.id;
    let usuarioAtualizar = req.body;
    Usuario.findOneAndUpdate({ _id: id }, usuarioAtualizar, { new: true }, (err, usuarioAtual) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(usuarioAtual);
    });
    next();
}

exports.deletar = (req, res, next) => {
    let id = req.params.id;
    Usuario.findByIdAndDelete({ _id: id }, (err, usuarioAtual) => {
        if(err) {
            console.error(err);
            res.send(err);
        }
        res.json(usuarioAtual);
    });
    next();
}

exports.buscarPorId =  (req, res, next) => {
    let id = req.params.id;
    Usuario.findById(id, (err, usuario) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(usuario);
    });
    next();
}

exports.procurar = (req, res, next) => {
    if(req.query && req.query.nome){
        let paramNome = req.query.nome;
        Usuario.find({nome: paramNome}, (err, usuario) => {
            if(err){
                console.error(err);
                res.status(500).send(err);
            }
            res.json(usuario);
        });
    }
    next();
}