const express = require('express');
const usuariosRoutes = express.Router();
const UsuariosController = require('../controllers/usuariosController');

usuariosRoutes.get('', UsuariosController.getAll);
usuariosRoutes.post('', UsuariosController.insert);
usuariosRoutes.put('/:id_usuario', UsuariosController.update);

module.exports = usuariosRoutes;
