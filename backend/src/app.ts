import { getAllJogadores } from "./services/jogador";

import { menu, novoJogo } from "./telas";

//Função que recebe inputs

import verifyUser from "./services/verifyuser";
const input = require('prompt-sync')({sigint: true});
let game: boolean = true;

function verify() {

    return  new verifyUser().verifyUser()
    
}


    //Checar se há jogadores na tabela personagem
    //Se tiver jogador, mostrar lista para selecionar personagem
    /*
    * Selecione o personagem que deseja utilizar, ou digite 0 para criar um personagem novo
    *
    * 1) Oswaldo
    * 2) Adoniran
    * 3) louco
    * 
    * 0
    */

    //Se não tiver jogador, mostrar tela para criação do personagem
    /*
    * Nome = Tritao
    * lista das classes
    * lista das racas
    * 
    */

while (game) {
    menu();
    let x = input();
    novoJogo();
    let y = input();

    verify();
    if (x == 'a') {
        game = false;
    }
}
