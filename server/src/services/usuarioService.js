const db = require('../db');

module.exports = {
	insert: (nome, telefone, email, cpf, senha, endereco_id) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO usuarios
				(nome, telefone, email, cpf, senha, endereco_id)
				VALUES (?, ?, ?, ?, ?)`,
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
