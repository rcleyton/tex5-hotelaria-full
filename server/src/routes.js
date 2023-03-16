const express = require('express');
const router = express.Router();
const upload = require('./middlewares/uploadImagem');

const AcomodacoesController = require('./controllers/acomodacoesController');
const EnderecoController = require('./controllers/enderecoController');
const ConsumoController = require('./controllers/consumoController');
const ServicosAdicionaisController = require('./controllers/servicoAdicionalController');
const ReservasServiceController = require('./controllers/reservaController');
const UsuariosController = require('./controllers/usuariosController');
const AvaliacoesService = require('./controllers/avaliacoesController')

router.get('/acomodacoes', AcomodacoesController.getAll);
router.post(
	'/acomodacoes',
	upload.single('imagem'),
	AcomodacoesController.insert
);

router.get('/enderecos', EnderecoController.getAll);
router.post('/enderecos', EnderecoController.insert);
router.put('/enderecos/:id_endereco', EnderecoController.update);

router.get('/consumo', ConsumoController.getAll);
router.post('/consumo', ConsumoController.insert);

router.get('/servicosAdicionais', ServicosAdicionaisController.getAll);
router.post('/servicosAdicionais', ServicosAdicionaisController.insert);

router.get('/reservas', ReservasServiceController.getAll);
router.post('/reservas', ReservasServiceController.insert);

router.get('/usuarios', UsuariosController.getAll);
router.post('/usuarios', UsuariosController.insert);

router.get('/avaliacao', AvaliacoesService.getAll);
router.post('/avaliacao', AvaliacoesService.insert);
router.put('/avaliacao/:id_avaliacao', AvaliacoesService.update)

module.exports = router;
