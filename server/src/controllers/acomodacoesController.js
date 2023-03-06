const AcomodacoesService = require('../services/acomodacoesService');

module.exports = {
	getAll: async (req, res) => {
		const data = [];
		const acomodacoes = await AcomodacoesService.getAll();

		for (const i in acomodacoes) {
			data.push(acomodacoes[i]);
		}
		res.send(data);
	},
};
