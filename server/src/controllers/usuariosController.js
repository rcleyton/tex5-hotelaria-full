const UsuarioService = require('../services/usuariosService.js');
const EnderecoService = require('../services/enderecoService');

module.exports = {
	getAll: async (req, res) => {
		const data = [];
		const usuarios = await UsuarioService.getAll();

		for (const i in usuarios) {
			data.push(usuarios[i]);
		}
		res.send(data);
	},

	insert: async (req, res) => {
		const {
			usuario: { nome, telefone, email, cpf, senha },
			endereco: { cidade, estado, numero, rua, bairro, complemento },
		} = req.body;

		try {
			const endereco_id = await EnderecoService.insert(
				cidade,
				estado,
				numero,
				rua,
				bairro,
				complemento
			);
			await UsuarioService.insert(
				nome,
				telefone,
				email,
				cpf,
				senha,
				endereco_id
			);
		} catch (err) {
			console.log(err);
		}
	},
};
