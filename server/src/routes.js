const express = require('express');
const router = express.Router();
const upload = require('./middlewares/uploadImagem');

const AcomodacoesController = require('./controllers/acomodacoesController');
const EnderecoController = require('./controllers/enderecoController');
const ConsumoService = require('./controllers/consumo');
const ServicosAdicionais = require('./controllers/servicoAdicional');
const ReservasService = require('./controllers/reservaController');
const UsuarioController = require('./controllers/usuarioController');

router.get('/acomodacoes', AcomodacoesController.getAll);
router.post(
	'/acomodacoes',
	upload.single('imagem'),
	AcomodacoesController.insert
);

router.get('/enderecos', EnderecoController.getAll);
router.post('/enderecos', EnderecoController.insert);
router.put('/enderecos/:id_endereco', EnderecoController.update);

router.get('/acomodacoes/consumo', ConsumoService.getAll);
router.post('/acomodacoes/consumo', ConsumoService.insert);

router.get('/servicosAdicionais', ServicosAdicionais.getAll);
router.post('/servicosAdicionais', ServicosAdicionais.insert);

router.get('/reservas', ReservasService.getAll);
router.post('/reservas', ReservasService.insert);

router.post('/usuarios', UsuarioController.insert);

module.exports = router;
