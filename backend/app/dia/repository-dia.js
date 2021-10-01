class DiaRepository{
    constructor(dataBase){
        this.dataBase = dataBase;
        this.findAll = this.findAll.bind(this);
    }

    async findAll(){
        const sql = 'select * from dia';
        let connection = null;
        let dia = null;
        try{
            connection = await this.dataBase.getConnection();
            const data = await connection.query();
            dia = [...data];
        }catch (error){
            console.log('Falha ao buscar os dados');
        }finally{
            connection && connection.end();
        }
    }
}