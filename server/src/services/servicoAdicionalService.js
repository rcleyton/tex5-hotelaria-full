const db =  require('../db')

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM servicos_adicionais', (err,res) => {
                if(err) {
                    reject(err)
                    return
                } resolve(res)
            })
        })
    },

    insert: (item, descricao, valor, local) => {
		return new Promise((resolve, reject) => {
			db.query(
				`INSERT INTO servicos_adicionais (
				item,
				descricao,
				valor,
				local
				) VALUES (?, ?, ?, ?)`,
				[item, descricao, valor, local],
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

	update: (item, descricao, valor, local, id_servico_adicional) => {
		return new Promise ((reject, resolve) => {
			db.query(`
			UPDATE servicos_adicionais
			SET item = ?,
				descricao = ?,
				valor = ?,
				local = ?
			WHERE id_servico_adicional = ?`,
			[item, descricao, valor, local, id_servico_adicional],
			((erro, res) => {
				if(erro) {
					reject(erro)
					return
				}
				resolve(res)
				return
			}))
		})
	}

}