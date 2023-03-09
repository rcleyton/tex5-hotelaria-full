const express = require('express');
const router = express.Router();

const AcomodacoesController = require('./controllers/acomodacoesController');
const EnderecoController = require('./controllers/enderecoController');
const ConsumoService = require('./controllers/consumo')

router.get('/acomodacoes', AcomodacoesController.getAll);
router.post('/acomodacoes', AcomodacoesController.insert);

router.get('/enderecos', EnderecoController.getAll);
router.post('/enderecos', EnderecoController.insert);

router.get('/acomodacoes/consumo', ConsumoService.getAll)


module.exports = router;
