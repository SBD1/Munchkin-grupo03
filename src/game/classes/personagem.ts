//Tipo equipamentos para guardar os IDs dos equipamentos do jogador. Caso 'null', não há item naquele slot
type equipamentos = {
    cabeca: number | null; //É um número ou nulo
    arma: number | null; //É um número ou nulo
    armadura: number | null; //É um número ou nulo
    pes: number | null; //É um número ou nulo
}

//Classe personagem básica
export default class Personagem{
    id: number;
    nome: string;
    raca: string;
    classe: string;
    nivel: number;
    forcaDeCombate: number;
    equipamento:equipamentos; //Como inicializar um objeto dentro de uma classe ?
    missaoAtual: number;
    salaAtual: number;
    gold: number;

    //Construtor de um personagem
    constructor(nome:string, raca: string, classe: string){
        this.id = -1; //Inicializando com -1 para depois da inserção sobrescrever com o valor correto
        this.nome = nome; //Nome do personagem
        this.raca = raca; //Raça do personagem
        this.classe = classe; //Classe do personagem
        this.nivel = 1; //Nível do personagem sempre começa em 1
        this.forcaDeCombate = this.nivel; //Força de combate é calculada automaticamente com base no nível e equipamento
        this.equipamento = {cabeca: null, arma: null, armadura: null, pes: null} //Lista dos ids dos equipamentos
        this.missaoAtual = 1; //Personagem sempre começa na missão 1
        this.salaAtual = 1; //Personagem sempre começa na sala inicial (1)
        this.gold = 0; //Personagem sempre começa com 0 de gold
    }
}