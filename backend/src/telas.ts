import createUser from "./services/createUser";
import userDto from "./dto/userDto";
import playGame from "./services/playGame";

const input = require('prompt-sync')({sigint: true});
const novoUser = new createUser;
const play_Game = new playGame;

export function menu() {
    console.clear();
    console.log('');
    console.log('');
    console.log(' __       __  __    __  __    __   ______   __    __  __    __  ______  __    __ \r');
    console.log('|  \\     \/  \\|  \\  |  \\|  \\  |  \\ \/      \\ |  \\  |  \\|  \\  \/  \\|      \\|  \\  |  \\\r');
    console.log('| $$\\   \/  $$| $$  | $$| $$\\ | $$|  $$$$$$\\| $$  | $$| $$ \/  $$ \\$$$$$$| $$\\ | $$\r');
    console.log('| $$$\\ \/  $$$| $$  | $$| $$$\\| $$| $$   \\$$| $$__| $$| $$\/  $$   | $$  | $$$\\| $$\r');
    console.log('| $$$$\\  $$$$| $$  | $$| $$$$\\ $$| $$      | $$    $$| $$  $$    | $$  | $$$$\\ $$\r');
    console.log('| $$\\$$ $$ $$| $$  | $$| $$\\$$ $$| $$   __ | $$$$$$$$| $$$$$\\    | $$  | $$\\$$ $$\r');
    console.log('| $$ \\$$$| $$| $$__\/ $$| $$ \\$$$$| $$__\/  \\| $$  | $$| $$ \\$$\\  _| $$_ | $$ \\$$$$\r');
    console.log('| $$  \\$ | $$ \\$$    $$| $$  \\$$$ \\$$    $$| $$  | $$| $$  \\$$\\|   $$ \\| $$  \\$$$\r');
    console.log(' \\$$      \\$$  \\$$$$$$  \\$$   \\$$  \\$$$$$$  \\$$   \\$$ \\$$   \\$$ \\$$$$$$ \\$$   \\$$');
    console.log('');
    console.log('');
    console.log('[1] Novo jogo');
    console.log('[2] Continuar');
    console.log('[0] Sair');
    console.log('');
    console.log('');
}

export function novoJogo() {
    let nome: string[] = ['Druida louco', 'Mago maluco', 'Guerreiro bêbado'];
    let escolha: number;
    console.clear();
    console.log('');
    console.log('');
    console.log('escolha o personagem:');
    console.log('');
    console.log('[1] Druida louco');
    console.log('[2] Mago maluco');
    console.log('[3] Guerreiro Bêbado');
    console.log('');
    console.log('[0] Voltar');
    console.log('');
    console.log('');
    escolha = input() - 1;
    novoUser.createNewUser(nome[escolha]);
}

export async function playState() {
    
    console.clear();
    await novoUser.getPlayer(1).then((x) => {return console.log('alo: ', x)});
    input();
    // sala();
    // let comando: string = input();
    // play_Game.playGame();
}

function sala() {

    console.log('************************************************');
    console.log('*                                              *');
    console.log('*  Bem vindo à Floresta do Manticornitorrinco  *');
    console.log('*                                              *');
    console.log('************************************************');
}