import { getAllJogadores } from "./services/jogador";

//Função que recebe inputs

import createUser from "./services/createUser";
import verifyUser from "./services/verifyuser";
const input = require('prompt-sync')({sigint: true});
let game = true;

function verify() {

    return  new verifyUser().verifyUser()
    
}

function createNewUser () {
    return new createUser().createNewUser()
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

while(game){
    
    let x = input();
    verify()
    if (x == 'a') {
        game = false;
    }
}