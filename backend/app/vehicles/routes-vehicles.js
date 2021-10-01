class VehicleRouter{
    constructor(controller){
        this.controller = controller;
        this.configure = this.configure.bind(this);
    }

    configure(app){
        app.get('api/vehicles',this.controller.findAll);
    }
}

module.exports = VehicleRouter;