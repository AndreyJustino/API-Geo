let idAuto = 1

export class Estado {
    constructor(nome, sigla, capital, habitantes) {
      this.id = idAuto++;
      this.nome = nome;
      this.sigla = sigla;
      this.capital = capital;
      this.habitantes = habitantes;
    }
  }