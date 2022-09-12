import client from '../../db/connection.ts'
import userRepository from '../repository/userRepository.ts';

const inGame = async (personagemSelecionado) => {
    await client.connect();

    const userRepo: userRepository = new userRepository();

    const playerData = await userRepo.getUser(personagemSelecionado)

    console.log(playerData)

    const opcao = Number(prompt('\nDigite o número do personagem que deseja jogar: ')); //pegar input do usuário


    await client.end();
}

export default inGame;