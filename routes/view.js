const { Router } = require('express');
const router = Router();
const controller = require('../controller/controllerView');

router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/administrador', controller.administrador);
router.get('/pacote', controller.pacote);
router.get('/logout', controller.logout);
router.get('/loja', controller.loja);

module.exports = router;