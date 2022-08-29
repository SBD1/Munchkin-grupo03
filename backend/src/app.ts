import { getAllJogadores } from "./services/jogador";

import { menu, novoJogo } from "./telas";

//Função que recebe inputs

import verifyUser from "./services/verifyuser";
const input = require('prompt-sync')({sigint: true});
let game: boolean = true;

function verify() {

    return  new verifyUser().verifyUser()
    
}

while (game) {
    menu();
    let x = input();

    if (x == 1) {
        novoJogo();
        verify();
        let y = input();
    } else if (x == 2) {
        // Continuar
    } else if (x == 0) {
        game = false;
        break;
    }
}
