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
};
