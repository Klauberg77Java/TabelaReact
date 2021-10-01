const db = require('../../db');
const VehicleController = require('./controller-vehicles');
const VehicleRepository = require('./repository-vehicles');
const VehicleRouter = require('./routes-vehicles');

const repository = new VehicleRepository(db);
const controller = new VehicleController(repository);
const routes = new VehicleRouter(controller);

module.exports = {
    routes
}



