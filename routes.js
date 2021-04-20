const { Router } = require('express');
const treinadorController = require('./controllers/treinadorController');
const pokemonController = require('./controllers/pokemonController');

const routes = Router();

routes.get('/treinadores', treinadorController.index);
routes.get('/treinadores/:id', treinadorController.show);
routes.post('/treinadores', treinadorController.store);
routes.put('treinadores/:id', treinadorController.update);
routes.delete('treinadores/:id', treinadorController.destroy);

routes.get('/pokemons', pokemonController.index);
routes.get('/pokemons/:id', pokemonController.show);
routes.post('/pokemons', pokemonController.store);
routes.put('/pokemons/:id', pokemonController.update);
routes.delete('/pokemons/:id', pokemonController.destroy);

module.exports = routes;