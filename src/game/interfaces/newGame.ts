import userRepository from "../repository/userRepository.ts";

const newGame = async () => {
    // Cria um novo jogo
    console.log('Criando novo jogo...');
    
    // Carrega o jogador
    const userR = new userRepository();
    const users = await user.listUsers()
    console.log(users);
}

export default newGame;
