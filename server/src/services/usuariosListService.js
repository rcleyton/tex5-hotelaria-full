const db = require('../db');

module.exports = {

    getAll:() => {
        return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM usuarios u JOIN endereco e ON u.id_usuario = e.id_usuario`, (err, res) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(res);
				return;
			});
		});
    }
}