const EnderecoService = require('../services/enderecoService');

module.exports = {
	getAll: async (_, res) => {
		const data = [];
		const endereco = await EnderecoService.getAll();

		for (const i in endereco) {
			data.push(endereco[i]);
		}
		res.send(data);
	},

	insert: async (req, res) => {
		const { cidade, estado, numero, rua, bairro, complemento } = req.body;

		try {
			const id = await EnderecoService.insert(
				cidade,
				estado,
				numero,
				rua,
				bairro,
				complemento
			);
			const endereco = {
				cidade,
				estado,
				numero,
				rua,
				bairro,
				complemento,
				enderecoId: id,
			};
			res.send(endereco);
		} catch (err) {
			console.error(err);
		}
	},
};
