class DiaController{
    constructor(repository){
        this.repository = repository;
        this.findAll = this.findAll.bind(this);
    }

    findAll(request, response){
        this.repository.findAll()
        .then(dia =>{
            if(dia){
                response.json(dia);
            }else{
                response.sendStatus(404);
            }
        })
        .catch(erro =>{
            response.sendStatus(500);
        })
    }
}