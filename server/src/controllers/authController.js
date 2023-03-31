const usuarioService = require('../services/usuariosService');
module.exports = {
	login: async (req, res) => {
		let { email, senha } = req.body;
		// buscar email e senha no db
		try {
			const [usuario] = await usuarioService.findByEmail(email);
			console.log(usuario);

			if (!usuario) {
				res.status(401).json({
					erro: 'Usuário ou senha incorretos',
				});
			}
			if (usuario.senha === senha) {
				res.status(200).json({
					id_usuario: usuario.id_usuario,
					nome: usuario.nome,
					email,
				});
			} else {
				res.status(400);
			}
		} catch (error) {
			console.log(error);
		}
	},
};
