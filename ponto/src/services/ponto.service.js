class PontoService {
    constructor() {
        this.records = [
            { id: new Date().getTime(), data: new Date(), tempo: 0 }
        ]
        this.getPontos = this.getPontos.bind(this);
        this.getPontoById = this.getPontoById.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
    }

    async getPontos() {
        return Promise.resolve(this.records)
    }

    async getPontoById(id) {
        const ponto = this.records.find(record => record.id === id)
        return Promise.resolve(ponto)
    }

    async save(ponto) {
        if (!ponto.id) {
            ponto.id = new Date().getTime();
            this.records.push(ponto)
        } else {
            this.records = this.records.map(record => {
                return  record.id === ponto.id ? ponto : record
            })
        }
        return Promise.resolve(ponto)
    }

    

    async remove(id) {
        let length = this.records.length;
        this.records = this.records.filter(record => record.id !== id);
        return Promise.resolve(length > this.records.length)
    }
}

export const pontoService = new PontoService()