import userRepository from '../repository/userRepository.ts';
import PlayGame from './playGame.ts';
import Main from '../main.ts'

const LoadGame = async () => {   
    // Carrega um jogo
    console.log('Carregando jogo...');
    
    const userRepo: userRepository = new userRepository();
    const userList = await userRepo.listUsers();

    const listSize: number = userList.rows.length;

    //Caso não exista nenhum personagem na lista
    if(listSize == 0) {
        console.clear();
        console.log('%cNão existem personagens criados, voltando ao menu principal...', 'color: red; font-weight: bold');
        prompt('Digite Enter para voltar ao menu principal');
        return;
    }

    console.log('Selecione o personagem que deseja jogar:\n');
        
    userList.rows.forEach((element, index) => {
            
        console.log(`[${index+1}] - Nome: ${element.nome}\n\t
         Raça: ${element.raca}\t
         Classe: ${element.classe}\t
         Nível: ${element.nivel}\n`);
            
    });
    console.log('[0] - Voltar ao menu principal');

    //pegar input do usuário
    const opcao = Number(prompt('\nDigite o número do personagem que deseja jogar:'));

    if(opcao > listSize || opcao < 0) {
        console.clear();
        console.log('%cOpção inválida, digite outro valor...', 'color: red; font-weight: bold');
        await LoadGame();
    } else if(opcao == 0) {
        await Main(); 
    } else {
        const personagemSelecionado = userList.rows[opcao-1];
        console.log(personagemSelecionado);
        await PlayGame(personagemSelecionado);
    }
}

export default LoadGame;
