const express = require('express');
const reservasRoutes = express.Router();
const ReservasServiceController = require('../controllers/reservaController');

reservasRoutes.get('', ReservasServiceController.getAll);
reservasRoutes.post('', ReservasServiceController.insert);
reservasRoutes.put('/:id_reserva', ReservasServiceController.update);
reservasRoutes.put('/confirmar/:id_reserva', ReservasServiceController.confirmarReserva);

module.exports = reservasRoutes;
