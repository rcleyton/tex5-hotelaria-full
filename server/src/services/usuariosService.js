const db = require('../db')

module.exports = {
	getAll: () => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM usuarios`, (err, res) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(res);
			});
		});
	},

	insert: (nome, telefone, email, cpf, senha, endereco_id) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO usuarios
					(nome, telefone, email, cpf, senha, endereco_id)
					VALUES (?, ?, ?, ?, ?, ?)`,
				[nome, telefone, email, cpf, senha, endereco_id],
				(error, results) => {
					if (error) {
						reject(error);
						return;
					} else {
						resolve(results.insertId);
					}
				}
			);
		});
	},
};
