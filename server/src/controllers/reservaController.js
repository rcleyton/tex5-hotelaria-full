const ReservasService = require('../services/reservaService');

module.exports = {
	getAll: async (req, res) => {
		const data = [];
		const reservas = await ReservasService.getAll();

		for (const i in reservas) {
			data.push(reservas[i]);
		}
		res.send(data);
	},

	insert: async (req, res) => {
		const { check_in, check_out, quantidade_pessoas, total, total_desconto, confirmacao,
			data_confirmacao, cupom_id, acomodacao_id, usuario_id, servicos_adicionais_id } = req.body;

		try {
			const id = await ReservasService.insert(
				check_in,
				check_out,
                quantidade_pessoas,
                total,
                total_desconto,
                confirmacao,
                data_confirmacao,
                cupom_id,
                acomodacao_id,
                usuario_id,
                servicos_adicionais_id
			);
			const reservas = {
				check_in, check_out,
                quantidade_pessoas,
                total,
                total_desconto,
                confirmacao,
                data_confirmacao,
                cupom_id,
                acomodacao_id,
                usuario_id,
                servicos_adicionais_id,
				reservasId: id,
			};
			res.send(reservas);
		} catch (err) {
			console.error(err);
		}
	},

	update: async (req, res) => {
		const { check_in, check_out, quantidade_pessoas, total, total_desconto, confirmacao, data_confirmacao, cupom_id, acomodacao_id, usuario_id, servicos_adicionais_id } = req.body
		const { id_reserva } = req.params

		try {
			
			await ReservasService.update(
				check_in,
				check_out,
				quantidade_pessoas,
				total,
				total_desconto,
				confirmacao,
				data_confirmacao,
				cupom_id,
				acomodacao_id,
				usuario_id,
				servicos_adicionais_id,
				id_reserva 
			)

			const reserva = {
				check_in,
				check_out,
				quantidade_pessoas,
				total,
				total_desconto,
				confirmacao,
				data_confirmacao,
				cupom_id,
				acomodacao_id,
				usuario_id,
				servicos_adicionais_id,
				id_reserva 
			}
			res.send(reserva)
			
		} catch (error) {
			console.log(error);
		}
	}
};
