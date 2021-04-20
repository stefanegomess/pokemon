const { treinador } = require('../models');

class treinadorController {
  async index(req, res) {
    try {
      const treinador = await treinadores.findAll();

      return res.json(treinador);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const user = await treinadores.findByPk(req.params.id);

      return res.json(treinadores);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const treinadores = await treinadores.create(req.body);

      return res.json(treinadores);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const user = await treinador.findByPk(req.params.id);

      await user.update(req.body);

      return res.json({ treinador });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const user = await treinadores.findByPk(req.params.id);

      await user.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new treinadorController();