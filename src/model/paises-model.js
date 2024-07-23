let idAuto = 1

export class Pais {
    constructor(id, nome, presidente, habitantes, territorio){
        this.id = idAuto++;
        this.nome = nome;
        this.presidente = presidente;
        this.habitantes = habitantes;
        this.territorio = territorio;
    }
}