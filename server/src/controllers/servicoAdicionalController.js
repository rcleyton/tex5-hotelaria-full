const ServicosAdicionais = require("../services/servicoAdicionalService");


module.exports = {
    getAll: async (req, res) => {
        const data = []
        const servicosAdd = await ServicosAdicionais.getAll()

        for( const i  in servicosAdd) {
            data.push(servicosAdd[i])
        }
        res.send(data)
    },

    insert: async (req, res) => {
		const { item, descricao, valor, local } = req.body;

		try {
			const id = await ServicosAdicionais.insert(
				item,
				descricao,
				valor,
				local
			);
			const servicoAdd = {
				item,
				descricao,
				valor,
				local,
				servicoAddId: id,
			};
			res.send(servicoAdd);
		} catch (err) {
			console.error(err);
		}
	},
}
