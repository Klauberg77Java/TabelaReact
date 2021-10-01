class ClienteRouter{
    constructor(controller){
        this.controller = controller;
        this.configure = this.configure.bind(this);
    }

    configure (app){
    app.post('/api/clientes',this.controller.insert);
    app.get('/api/clientes',this.controller.findAll);
    app.get('/api/clientes/:id',this.controller.findById);
    app.delete('/api/clientes/:id',this.controller.remove);
    app.put('/api/clientes/:id',this.controller.update);
    }
}

module.exports = ClienteRouter;