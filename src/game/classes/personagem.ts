//Tipo equipamentos para guardar os IDs dos equipamentos do jogador. Caso 'null', não há item naquele slot
type equipamentos = {
    cabeca: number | null; //É um número ou nulo
    arma: number | null; //É um número ou nulo
    armadura: number | null; //É um número ou nulo
    pes: number | null; //É um número ou nulo
}

//Classe personagem básica
export default class Personagem{
    personagem_id: number;
    nome: string;
    raca: string;
    nivel: number;
    classe: string;
    forca_combate: number;
    equipamento:equipamentos;
    missao_atual_id: number;
    sala_atual_id: number;
    qnt_gold: number;

    //Construtor de um personagem
    constructor(personagem_id: number, nome:string, raca: string, classe: string){
        this.personagem_id = personagem_id; //Inicializando com -1 para depois da inserção sobrescrever com o valor correto
        this.nome = nome; //Nome do personagem
        this.raca = raca; //Raça do personagem
        this.classe = classe; //Classe do personagem
        this.nivel = 1; //Nível do personagem sempre começa em 1
        this.forca_combate = this.nivel; //Força de combate é calculada automaticamente com base no nível e equipamento
        this.equipamento = {cabeca: null, arma: null, armadura: null, pes: null} //Lista dos ids dos equipamentos
        this.missao_atual_id = 1; //Personagem sempre começa na missão 1
        this.sala_atual_id = 1; //Personagem sempre começa na sala inicial (1)
        this.qnt_gold = 0; //Personagem sempre começa com 0 de gold
    }
}
