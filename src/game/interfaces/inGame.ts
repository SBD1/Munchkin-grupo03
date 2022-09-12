import client from '../../db/connection.ts'
import userRepository from '../repository/userRepository.ts';
import salaRepository from '../repository/salaRepository.ts';
import Sala from '../classes/sala.ts'

const inGame = async (personagemSelecionado) => {
    await client.connect();

    const userRepo: userRepository = new userRepository();
    const salaRepo: salaRepository = new salaRepository();

    const playerData = await userRepo.getUser(personagemSelecionado)

    console.log(playerData[0])

    const dadosDaSalaAtual: Sala = await salaRepo.getDataRoom(playerData[0].sala_atual_id)

    console.log(dadosDaSalaAtual[0], "leopa")

    const opcao = Number(prompt('\nDigite o número do personagem que deseja jogar: ')); //pegar input do usuário


    await client.end();
}

export default inGame;