const db = require('../db');

module.exports = {
	getAll: () => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM acomodacoes', (error, results) => {
				if (error) {
					reject(error);
					return;
				}
				resolve(results);
			});
		});
	},

	insert: (status, titulo, descricao, imagem, preco) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO acomodacoes (
				status,
				titulo,
				descricao,
				imagem,
				preco
				) VALUES (?, ?, ?, ?, ?)`,
				[status, titulo, descricao, imagem, preco],
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
