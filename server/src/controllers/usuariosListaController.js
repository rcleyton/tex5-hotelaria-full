const UsuariosListaService = require('../services/usuariosListService.js');

module.exports = {
    getAll: async (req,res) => {
        const data = [];
        const usuarios = await UsuariosListaService.getAll();
        
        for (const key in usuarios) {
            data.push(usuarios[key]);
        }
        res.send(data);
    },
}