const express = require('express');
const router = express.Router();

const AcomodacoesController = require('./controllers/acomodacoesController');

router.get('/acomodacoes', AcomodacoesController.getAll);

module.exports = router;
