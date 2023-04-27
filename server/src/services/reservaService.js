const db = require('../db');

module.exports = {
	getAll: () => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM reservas', (err, res) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(res);
			});
		});
	},

	getAllByIdUsuario: (id_usuario) => {
		return new Promise((resolve, reject) => {
			db.query(
				'SELECT * FROM perfil_listar_reservas WHERE id_usuario = ?',
				[id_usuario],
				(err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res);
				}
			);
		});
	},

	insert: (
		check_in,
		check_out,
		quantidade_pessoas,
		total,
		total_desconto,
		id_cupom,
		id_acomodacao,
		id_usuario
	) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO reservas (
						check_in,
						check_out,
						quantidade_pessoas,
						total,
						total_desconto,
						id_cupom,
						id_acomodacao,
						id_usuario
					) VALUES (
						?, ?, ?, ?, ?, ?, ?, ?
					)
          `,
				[
					check_in,
					check_out,
					quantidade_pessoas,
					total,
					total_desconto,
					id_cupom,
					id_acomodacao,
					id_usuario,
				],
				(err, result) => {
					if (err) {
						reject(err);
						return;
					} else {
						resolve(result.insertId);
						return;
					}
				}
			);
		});
	},

	update: (
		check_in,
		check_out,
		quantidade_pessoas,
		total,
		total_desconto,
		confirmacao,
		data_confirmacao,
		id_cupom,
		id_acomodacao,
		id_usuario,
		id_reserva
	) => {
		return new Promise((resolve, reject) => {
			db.query(
				`
            UPDATE reservas
            SET check_in = ?,
                check_out = ?,
                quantidade_pessoas = ?,
                total = ?,
                total_desconto = ?,
                confirmacao = ?,
                data_confirmacao = ?,
								id_cupom = ?,
								id_acomodacao = ?,
								id_usuario = ?,
                WHERE id_reserva = ?`,
				[
					check_in,
					check_out,
					quantidade_pessoas,
					total,
					total_desconto,
					confirmacao,
					data_confirmacao,
					id_cupom,
					id_acomodacao,
					id_usuario,
					id_reserva,
				],
				(erro, res) => {
					if (erro) {
						reject(erro);
						return;
					}
					resolve(res);
				}
			);
		});
	},

	confirmarReserva: (id_reserva) => {
		return new Promise((resolve, reject) => {
			db.query(
				'UPDATE reservas SET confirmacao = 1, data_confirmacao = ? WHERE id_reserva = ?',
				[new Date(), id_reserva],
				(err, res) => {
					if (err) {
						reject(err);
					}
					resolve(res);
				}
			);
		});
	},
};
