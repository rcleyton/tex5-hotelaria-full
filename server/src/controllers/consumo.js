const ConsumoService = require('../services/consumoService')

module.exports = {
    getAll: async (require, response) => {
        const data = []
        const consumo = await ConsumoService.getAll()

        for(const i in consumo) {
            data.push(consumo[i])
        }
        response.send(data)
    },

    insert: async (req, res) => {
        const { item, valor, local, qtd_item, data_hora } = req.body

        try {
            const id  =  await ConsumoService.insert(
                item,
                valor,
                local,
                qtd_item,
                data_hora,
            )
            const consumo = {
                item,
                valor,
                local,
                qtd_item,
                data_hora,
                consumoId: id
            }
            res.send(consumo)
        } catch (error) {
            console.log(error);
        }
    }
}