const db = require('../../db');
const ClienteRepository = require('./repository-clientes');
const ClienteController = require('./controller-clientes');
const ClienteRouter = require('./routes-clientes');

const repository = new ClienteRepository(db);
const controller = new ClienteController(repository);
const routes = new ClienteRouter(controller);

module.exports = {
    routes
}
