class ClienteController{
    constructor(repository){
        this.repository = repository;
        this.insert = this.insert.bind(this);
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }

    insert(request, response){
        const {nome,email,telefone,documento} = request.body;
        this.repository.insert({nome,email:parseInt(email),telefone})
        .then((clientes) =>{
            if(clientes){
                response.sendStatus(201).json({id});
            }else{
                response.sendStatus(500);
            }
        })
        .catch(()=>{
            response.sendStatus(500);
        })
    }

    findAll(request, response){
        this.repository.findAll()
        .then(clientes =>{
            if(clientes){
                response.json(clientes);
            }else{
                response.sendStatus(404);
            }    
        })
        .catch(erro =>{
            console.log(erro)
            response.sendStatus(500);
        })
    }


    remove(request, response){
        const id  = request.params.id;
        this.repository.remove(id)
        .then((ok)=>{
            if(ok){
                response.sendStatus(204);
            }else{
                response.sendStatus(412);
            }
        })
        .catch((error)=>{
            console.log(error)
            response.sendStatus(500);
        })
    }

    update(request, response){
        const id = parseInt(request.params.id);
        const {nome,email,telefone,documento} = request.body;
        this.repository.update({id,nome,email:parseInt(email),telefone})
        .then(ok =>{
            if(ok){
                response.sendStatus(204);
            }else{
                response.sendStatus(412);
            }
        })
        .catch((error)=>{
            console.log(error);
            response.sendStatus(500);
        })
    }

    findById(request, response){
        const id = request.params.id;
        this.repository.findById(id)
        .then((cliente)=>{
            if(cliente){
                response.json(client);
            }else{
                response.sendStatus(404);
            }
        })
        .catch((e)=>{
            console.log(e);
            response.sendStatus(500);
        })
    }
}

module.exports = ClienteController;
    



