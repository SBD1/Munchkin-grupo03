//Módulo para gerar o tíulo do jogo
import figlet from 'https://x.nest.land/deno-figlet@0.0.5/mod.js'

//Mostrar o título do jogo com um menu de opções
const printMenu = async() => {
    const gameTitle = await figlet('Munchkin');
    console.log(gameTitle);

    console.log('\n');
    console.log('\t1) Carregar jogo salvo');
    console.log('\t2) Começar novo jogo');
    console.log('\t0) Sair');
}

export default printMenu;