const db = require('./db');
const VehicleRepository = require('./app/vehicles/repository-vehicles');

const repository = new VehicleRepository(db);

async function teste(){
    let vehicles = await repository.findAll();
    console.log('vehicles');
}

teste();