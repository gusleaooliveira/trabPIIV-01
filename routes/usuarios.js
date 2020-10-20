const { Router } = require('express');
const router = Router();
const controller = require('../controller/controllerUsuario');
const jwt = require("jsonwebtoken");

let verifiqueJwt = (req, res, next) => {
    let token = req.signedCookies;
    if(!token){
        return res.redirect('/view/login')
        //return res.status(401).json({auth: false, msg: "Nenhum token fornecido!"});
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => { 
        if(err){
            return res.redirect('/view/login')   
            //return res.status(500).json({auth: false, msg: "Falha ao autenticar o token!"});
        }
        
        console.warn(`=========> Item: ${decoded}`);
        next();
    });

};


router.get('/', verifiqueJwt, controller.listar);
router.get('/search', verifiqueJwt,  controller.procurar);
router.get('/:id', verifiqueJwt,  controller.buscarPorId);
router.put('/:id', verifiqueJwt,  controller.atualizar);
router.delete('/:id', verifiqueJwt,  controller.deletar);
router.post('/', verifiqueJwt,  controller.inserir);
router.post('/login', controller.login);

module.exports = router;