const ConsumoService = require('../services/consumoService')

module.exports = {
    getAll: async (require, response) => {
        const data = []
        const consumo = await ConsumoService.getAll()

        for(const i in consumo) {
            data.push(consumo[i])
        }
        response.send(data)
    }
}