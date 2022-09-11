import Personagem from '../classes/personagem.ts';
import userRepository from '../repository/userRepository.ts';

const newGame = async () => {
    
    // Cria um novo jogo
    console.log('Criando novo jogo...');
    
    // Criação de um jogador
    const nome = String(prompt('Qual o nome do seu personagem ? '));
    
    console.log('Raças existentes:');
    console.log('%c\t Humano', 'color: white; font-weight: bold');
    console.log('%c\t Elfo', 'color: green; font-weight: bold');
    console.log('%c\t Halfling', 'color: blue; font-weight: bold');
    console.log('%c\t Anão', 'color: red; font-weight: bold');
    const raca = String(prompt('Qual a raça do seu personagem ? '));

    console.log('Classes existentes:');
    console.log('%c\t Guerreiro', 'color: darkslateblue; font-weight: bold');
    console.log('%c\t Mago', 'color: darkgoldenrod; font-weight: bold');
    console.log('%c\t Ladrão', 'color: crimson; font-weight: bold');
    console.log('%c\t Clerigo', 'color: aliceblue; font-weight: bold');
    const classe = String(prompt('Qual a classe do seu personagem ? '));
    
    const novoPersonagem: Personagem = new Personagem(nome, raca, classe);

    const userRepo: userRepository = new userRepository();
    await userRepo.createUser(novoPersonagem);
}

export default newGame;
