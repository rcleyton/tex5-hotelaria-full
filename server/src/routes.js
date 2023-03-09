const express = require('express');
const router = express.Router();

const AcomodacoesController = require('./controllers/acomodacoesController');
const EnderecoController = require('./controllers/enderecoController');
const ConsumoService = require('./controllers/consumo')

router.get('/acomodacoes', AcomodacoesController.getAll);
router.get('/enderecos', EnderecoController.getAll);
router.get('/acomodacoes/consumo', ConsumoService.getAll)

module.exports = router;
