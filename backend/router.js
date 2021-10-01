const routes = [
    require('./app/vehicles').routes,
    require('./app/clientes').routes,
    
]

function configure(app){
    for(let route of routes){
        route.configure(app);
    }

}

module.exports = {
    configure
}
