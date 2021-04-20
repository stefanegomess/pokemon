const { pokemon } = require('../models');

class pokemonController {
  async index(req, res) {
    try {
      const pokemon = await pokemons.findAll();

      return res.json(pokemon);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const user = await pokemons.findByPk(req.params.id);

      return res.json(pokemons);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const pokemons = await pokemons.create(req.body);

      return res.json(pokemons);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const user = await pokemon.findByPk(req.params.id);

      await user.update(req.body);

      return res.json({ pokemon });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const user = await pokemons.findByPk(req.params.id);

      await user.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new pokemonController();