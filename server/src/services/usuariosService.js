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

    insert: (nome, telefone, cpf, email, senha, endereco_id) => {
        return new Promise ((resolve, reject) => {
            db.query(`INSERT INTO usuarios (
                nome,
                telefone,
                cpf,
                email,
                senha,
                endereco_id
            ) VALUES (?, ?, ?, ?, ?, ?)`,
            [nome,telefone,cpf,email,senha,endereco_id]
            ,((err, res) => {
                if(err) {
                    reject(err)
                    return
                } else {
                    resolve(res)
                    return
                }
            }))
        })
    },

    update: (nome, telefone, cpf, email, senha, endereco_id, id_usuario) => {
        return new Promise((resolve, reject) => {
            db.query(`
            UPDATE usuarios
            SET nome = ?,
                telefone = ?,
                cpf = ?,
                email = ?,
                senha = ?,
                endereco_id = ?
            WHERE id_usuario = ?`,
            [nome, telefone, cpf, email, senha, endereco_id, id_usuario],
            ((erro, res) => {
                if(erro) {
                    reject(erro)
                    return
                }
                resolve(res)
            }))
        })
    }
}
