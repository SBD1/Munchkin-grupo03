import printMenu from "./interfaces/mainMenu.ts";

let isPlaying = true; //Variável do game loop

await printMenu(); //printMenu é uma funçao assíncrona
const opcao = Number(prompt('\nDigite o número de uma opção acima, ou 0 para sair do jogo.\n:'));//pegar input do usuário

console.clear(); //Limpar o console para dar início ao jogo
console.log(`%copção selecionada: ${opcao}`, 'color: blue; font-weight: bold');

//Fluxo de opções do menu
switch(opcao){
    case 1:
        //Carregar jogo salvo
        break;
    case 2:
        //Começar novo jogo
        break;
    //Sair do jogo
    case 0:
        console.log('Leaving game...');
        isPlaying = false;
        break;
}

//Game loop principal
while(isPlaying){
    console.log('playing...');
    isPlaying = false;
}