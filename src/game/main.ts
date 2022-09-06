import printMenu from "./interfaces/mainMenu.ts";

let isPlaying = true; //Variável do game loop

await printMenu();
const opcao = Number(prompt('\nDigite o número de uma opção acima, ou +  0 para sair do jogo.', ''));

console.clear();
console.log(`%copção selecionada: ${opcao}`, 'color: blue; font-weight: bold');
switch(opcao){
    case 1:
        break;
    case 2:
        break;
    case 0:
        console.log('Leaving game...');
        isPlaying = false;
        break;
}

while(isPlaying){
    console.log('playing...');
    isPlaying = false;
}