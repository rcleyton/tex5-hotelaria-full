const UsuarioService = require('../services/usuarioService');
const EnderecoService = require('../services/enderecoService');

module.exports = {
	insert: async (req, res) => {
		const {
			usuario: { nome, telefone, email, cpf, senha },
			endereco: {
				cidade,
				estado,
				numero,
				rua,
				bairro,
				complemento }
			} = req.body;

			/**
			 * Erro ao inserir id de endereco na tabela usuario
			 */
		try {
			const endereco_id = await EnderecoService.insert(
				cidade, estado, numero, rua, bairro, complemento
			)
			await UsuarioService.insert(
				nome, telefone, email, cpf, senha, endereco_id
			);
		} catch (err) {
			console.log(err);
		}
	}
}
