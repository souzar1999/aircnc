/*
  Controle de acesso do usuário
  Recebe email e caso já tenha usuário com aquele email não cria
*/
const User = require('../models/User');

// index (listar), show(apresenta um registro), store(salvar), update(atualizar), destroy(deletar)

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};