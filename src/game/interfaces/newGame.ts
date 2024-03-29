import Personagem from '../classes/personagem.ts';
import userRepository from '../repository/userRepository.ts';
import Main from '../main.ts'

const newGame = async () => {
    
    // Cria um novo jogo
    console.log('Criando novo jogo...');
    
    const racas: string[] = ['Humano', 'Elfo', 'Halfling', 'Anao'];
    const classes: string[] = ['Guerreiro', 'Mago', 'Ladrao', 'Clerigo'];

    // Criação de um jogador
    const nome = String(prompt('\nQual o nome do seu personagem ? '));
    
    //Menu de seleção de raças
    console.log('\nRaças existentes:');
    console.log('\n%c\t 1) Humano', 'color: white; font-weight: bold');
    console.log('%c\t 2) Elfo', 'color: green; font-weight: bold');
    console.log('%c\t 3) Halfling', 'color: blue; font-weight: bold');
    console.log('%c\t 4) Anão\n', 'color: red; font-weight: bold');
    const raca = Number(prompt('Qual a raça do seu personagem ?'));
    console.clear();

    //Menu de seleção de classes
    console.log('\nClasses existentes:');
    console.log('\n%c\t 1) Guerreiro', 'color: darkslateblue; font-weight: bold');
    console.log('%c\t 2) Mago', 'color: darkgoldenrod; font-weight: bold');
    console.log('%c\t 3) Ladrão', 'color: crimson; font-weight: bold');
    console.log('%c\t 4) Clérigo\n', 'color: aliceblue; font-weight: bold');
    const classe = Number(prompt('Qual a classe do seu personagem ?'));
    console.clear();
    
    const novoPersonagem: Personagem = new Personagem(-1 ,nome, racas[raca-1], classes[classe-1]);

    const userRepo: userRepository = new userRepository();
    const newId = await userRepo.createUser(novoPersonagem);

    //Colocando novo ID no personagem criado
    novoPersonagem.id = Number(newId[0]);
    // console.log(novoPersonagem.id);

    //Chama o início do jogo

    Main();

}

export default newGame;
