const express = require('express');
const router = express.Router();

const AcomodacoesController = require('./controllers/acomodacoesController');
const EnderecoController = require('./controllers/enderecoController');

router.get('/acomodacoes', AcomodacoesController.getAll);
router.get('/enderecos', EnderecoController.getAll);

module.exports = router;
