const db = require('../db')

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM consumo', (err,res) => {
                if(err) {
                    reject(err)
                    return
                } resolve(res)
            })
        })
    },

    insert: ( item, valor, local, qtd_item, data_hora, id_reserva ) => {
        return new Promise ((resolve, reject) => {
            db.query(
                `
                INSERT INTO consumo (
                    item,
                    valor,
                    local,
                    qtd_item,
                    data_hora,
                    id_reserva
                ) VALUES (?, ?, ?, ?, ?, ?)
                `,[item,valor,local,qtd_item,data_hora, id_reserva],
                (err,result) => {
                    if(err) {
                        reject(err)
                        return
                    } else {
                        resolve(result.insertId)
                        return
                    }
                }
            )
        })
    }
}