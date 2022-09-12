export default class Inimigo{
    id: number;
    nome: string;
    poder: number;
    
    constructor(nome: string, poder: number){
        this.id = -1;
        this.nome = nome;
        this.poder = poder;
    }
}