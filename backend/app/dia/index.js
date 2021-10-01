const db = require('../../db');
const DiaRepository = require('./repository-dia');
const DiaController = require('./controller-dia');
const DiaRouter = require('./routes-dia');

const repository = new DiaRepository(db);
const controller = new DiaController(repository);
const routes = new DiaRouter(controller);

module.exports = {
    routes
}
