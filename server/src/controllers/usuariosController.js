const UsuarioService = require('../services/usuariosService.js')

module.exports = {
    getAll: async (req, res) => {
        const data = []
        const usuarios = await UsuarioService.getAll()

        for (const i in usuarios) {
            data.push(usuarios[i])
        }
        res.send(data)
    },

    insert: async (req, res) => {
        const { nome, telefone, cpf, email, senha, endereco_id } = req.body

        try {
            const id = await UsuarioService.insert(
                nome,
                telefone,
                cpf,
                email,
                senha,
                endereco_id
            )
            const usuarios = {
                nome,
                telefone,
                cpf,
                email,
                senha,
                endereco_id,
                usuariosId: id
            }
            res.send(usuarios) 

        } catch (err) {
            console.log(err);
        }
    }
}