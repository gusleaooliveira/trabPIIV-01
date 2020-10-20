const Usuario = require('../model/usuario');
const jwt = require("jsonwebtoken");


exports.listar = (req, res) => {
    Usuario.find({}, (err, usuario) => {
        if(err) {
            console.error(err);
            res.status(500).send(err);
        }
        res.send(usuario);
    });
}

exports.inserir = (req, res) => {
    let novoUsuario = new Usuario(req.body);
    novoUsuario.save((err, usuario) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.status(201).json(usuario);
    });
}

exports.atualizar = (req, res) => {
    let id = req.params.id;
    let usuarioAtualizar = req.body;
    Usuario.findOneAndUpdate({ _id: id }, usuarioAtualizar, { new: true }, (err, usuarioAtual) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(usuarioAtual);
    });
}

exports.deletar = (req, res) => {
    let id = req.params.id;
    Usuario.findByIdAndDelete({ _id: id }, (err, usuarioAtual) => {
        if(err) {
            console.error(err);
            res.send(err);
        }
        res.json(usuarioAtual);
    });
}

exports.buscarPorId =  (req, res) => {
    let id = req.params.id;
    Usuario.findById(id, (err, usuario) => {
        if(err){
            console.error(err);
            res.send(err);
        }
        res.json(usuario);
    });
}

exports.procurar = (req, res) => {
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
}


exports.login = (req, res) => {
    Usuario.findOne({
        email: req.body.email,
        senha: req.body.senha
    },  (err, usuario) =>{
        if(err){
            console.error(err);
            res.redirect("/view/login");
            // res.status(500).send(err);
        }
        if(usuario){
            let token = jwt.sign({usuario}, process.env.SECRET, {expiresIn: 300});
            res.cookie('token', token, {signed: true}).redirect("/view/administrador");
        }
        else {
            res.redirect("/view/login");
        }
    });
    
}
