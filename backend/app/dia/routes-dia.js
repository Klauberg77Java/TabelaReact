class DiaRouter{
    constructor(controller){
        this.controller = controller;
        this.configure = this.configure.bind(this);
    }

    configure(app){
        app.get('api/dia',this.controller.findAll);
    }
}

module.exports = DiaRouter;