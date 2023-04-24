const UsuarioService = require('../services/usuariosService.js');
const EnderecoService = require('../services/enderecoService');
const ReservaService = require('../services/reservaService.js');
const bcrypt = require('bcryptjs');

module.exports = {
	getAll: async (req, res) => {
		const data = [];
		const usuarios = await UsuarioService.getAll();

		for (const i in usuarios) {
			data.push(usuarios[i]);
		}
		res.send(data);
	},

	getPerfilById: async (req, res) => {
		const { id_usuario } = req.params;
		const dadosPerfil = [];

		const [perfil] = await UsuarioService.getPerfilByIdUsuario(id_usuario);
		const reservas = await ReservaService.getAllByIdUsuario(id_usuario);

		dadosPerfil.push(perfil, reservas);

		res.status(200).send(dadosPerfil);
	},

	insert: async (req, res, next) => {
		const {
			usuario: { nome, telefone, email, cpf, senha },
			endereco: { cidade, estado, numero, rua, bairro, complemento },
		} = req.body;

		const hash = await bcrypt.hash(senha, 10);

		try {
			const id_usuario = await UsuarioService.insert(
				nome,
				telefone,
				cpf,
				email,
				hash
			);
			await EnderecoService.insert(
				cidade,
				estado,
				numero,
				rua,
				bairro,
				complemento,
				id_usuario
			);
			res.status(200).json({
				nome,
				email,
				id_usuario,
			});
		} catch (err) {
			console.log(err);
		}
	},

	update: async (req, res) => {
		const { nome, telefone, cpf, email } = req.body;
		const { id_usuario } = req.params;

		try {
			await UsuarioService.update(
				nome,
				telefone,
				cpf,
				email,
				id_usuario
			);

			const usuario = {
				nome,
				telefone,
				cpf,
				email,
				id_usuario,
			};
			res.send(usuario);
		} catch (error) {
			console.log(error);
		}
	},
};
