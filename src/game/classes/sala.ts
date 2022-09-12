export default class Sala{
    id: number; //Id da sala
    descricao: string; //Texto com a descrição da sala
    nome: string; //Nome da sala
    saidas: number[]; //Array com os IDs das salas conectadas à esta sala
    objetos: number[]; //Array com os IDs dos objetos presentes na sala
    itens: number[]; //Array com os IDs dos itens presentes na sala
    monstros: number[]; //Array com os IDs dos monstros presentes na sala

    constructor (nome: string, descricao: string){
        this.id = -1;
        this.nome = nome;
        this.descricao = descricao;
        this.saidas = [];
        this.objetos = [];
        this.itens = [];
        this.monstros = [];
    }
}