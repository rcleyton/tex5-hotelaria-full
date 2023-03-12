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

}