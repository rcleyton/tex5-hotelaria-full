const express = require('express');
const usuariosListaRoutes = express.Router();
const UsuariosListaController = require('../controllers/usuariosListaController');

usuariosListaRoutes.get('', UsuariosListaController.getAll);

module.exports = usuariosListaRoutes;
