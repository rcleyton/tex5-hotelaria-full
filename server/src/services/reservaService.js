const db = require('../db')

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM reservas', (err,res) => {
                if(err) {
                    reject(err)
                    return
                } resolve(res)
            })
        })
    },

    insert: ( check_in, check_out, quantidade_pessoas, total, total_desconto, confirmacao, data_confirmacao, cupom_id, acomodacao_id, usuario_id, servicos_adicionais_id ) => {
        return new Promise ((resolve, reject) => {
            db.query(
                `
                INSERT INTO reservas (
                    check_in,
                    check_out,
                    quantidade_pessoas,
                    total,
                    total_desconto,
                    confirmacao,
                    data_confirmacao,
                    cupom_id,
                    acomodacao_id,
                    usuario_id,
                    servicos_adicionais_id
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                `,[check_in, check_out, quantidade_pessoas, total, total_desconto, confirmacao, data_confirmacao, cupom_id, acomodacao_id, usuario_id, servicos_adicionais_id],
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