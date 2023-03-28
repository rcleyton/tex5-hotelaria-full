const usuarioService = require('../services/usuariosService');
module.exports = {
	login: async (req, res) => {
		let { email, senha } = req.body;
		let usuario = null;

		// buscar email e senha no db
		try {
			usuario = await usuarioService.findByEmail(email);

			console.log(usuario);

			if (usuario[0].senha === senha) {
				res
					.status(200)
					.json({
						id_usuario: usuario[0].id_usuario,
						nome: usuario[0].nome,
						email,
					});
			} else {
				res.send(401);
			}
		} catch (error) {
			console.log(error);
		}
	},
};
