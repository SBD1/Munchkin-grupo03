export default class Player{
    id: number;
    nome: string;
    raca: string;
    classe: string;
    nivel: number;
    forcaDeCombate: number;
    equipamento:number[]; //Como inicializar um array de itens ?
    missaoAtual: number;
    salaAtual: number;

    constructor(nome:string){
        this.id = 0;
        this.nome = nome;
        this.raca = 'Humano';
        this.classe = 'Guerreiro';
        this.nivel = 1;
        this.forcaDeCombate = this.nivel;
        //Respectivamente, 0: cabeca | 1: arma | 2: armadura | 3: pes
        this.equipamento = [0, 0, 0, 0] //Inicializando um array com 4 valores.
        this.missaoAtual = 1;
        this.salaAtual = 1;
    }
}