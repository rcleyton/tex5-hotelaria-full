const db = require('../db');

module.exports = {
	getAll: () => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM endereco', (error, results) => {
				if (error) {
					reject(error);
					return;
				}
				resolve(results);
			});
		});
	},

	insert: (cidade, estado, numero, rua, bairro, complemento) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO endereco (
					cidade,
					estado,
					numero,
					rua,
					bairro,
					complemento
				) VALUES (?, ?, ?, ?, ?, ?)`,
				[cidade, estado, numero, rua, bairro, complemento],
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
