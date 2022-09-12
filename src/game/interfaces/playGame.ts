import client from '../../db/connection.ts'
import userRepository from '../repository/userRepository.ts';
import salaRepository from '../repository/salaRepository.ts';
import missaoRepository from '../repository/missaoRepository.ts';
import Sala from '../classes/sala.ts'
import Personagem from '../classes/personagem.ts';

import Main from '../main.ts';

const PlayGame = async (personagem: Personagem) => {
    console.clear();
    await client.connect();

    const userRepo: userRepository = new userRepository();
    const salaRepo: salaRepository = new salaRepository();
    const missaoRepo: missaoRepository = new missaoRepository();

    // Jogador
    let personagem_atual = personagem

    // Sala
    let dadosDaSalaAtual = await salaRepo.getDataRoom(personagem_atual.sala_atual_id);
    const salasConectadasIds = await salaRepo.listRooms(personagem_atual.sala_atual_id);
    // console.log(salasConectadasIds)

    // Missao
    const dadosDaMissao = await missaoRepo.dadosDaMissao(personagem_atual.missao_atual_id);

    const verDescriçãoDaSala = () => {
        console.clear()
        console.log(`Você está no ${dadosDaSalaAtual[0].nome}: ${dadosDaSalaAtual[0].descricao}.`)
    }

    const olharEmVolta = () => {
        console.clear()
    }

    const verStatus = () => {
        console.clear();
        console.log(`nome: ${personagem_atual.nome}`);
        console.log(`nivel: ${personagem_atual.nivel}`);
        console.log(`poder: ${personagem_atual.forca_combate}`);
        console.log(`classe: ${personagem_atual.classe}`);
        console.log(`raça: ${personagem_atual.raca}`);
        console.log(`ouro: ${personagem_atual.qtd_gold}`);
        console.log(`sala: ${personagem_atual.sala_atual_id}`);
    }

    const verMissaoAtual = () => {
        console.clear()
        console.log(`Missão atual: ${dadosDaMissao[0].nome} -- ${dadosDaMissao[0].descricao}.`)
    }

    const escolhersaida = async (salasConectadas) => {
        console.clear()

        salasConectadas.forEach((salaElement, index)=>{
            console.log(`[${index+1}] - Ir para ${salaElement.nome}`);
        })

        const opcao = Number(prompt('\nescolha para onde deseja ir? ')); //pegar input do usuário

        if(opcao > salasConectadas.length || opcao < 0){
            console.log("opção inválida...");
        } else {
            console.log(salasConectadas[opcao-1].sala_id)
            const atual = await userRepo.updateUser(personagem_atual.personagem_id, salasConectadas[opcao-1].sala_id)
            console.log(atual)
            personagem_atual = atual[0]
            dadosDaSalaAtual = await salaRepo.getDataRoom(personagem_atual.sala_atual_id);
        }

    }

    const verOpcoesDeSaida = async () => {
        console.clear()
        let salasConectadas = [];
        console.log(salasConectadasIds[0].sala_alvo_id)

        for(const element of salasConectadasIds) {
            const sala = await salaRepo.getDataRoom(element.sala_alvo_id);
            salasConectadas.push(sala[0])
        }

        await escolhersaida(salasConectadas)
        
    }

    const listarComandos = () => {

    }

    let flag = true;
    console.log(`Você está no(a) ${dadosDaSalaAtual[0].nome}: ${dadosDaSalaAtual[0].descricao}.`)

    while (flag) {

        console.log("====================");
        console.log("=       ('-')      =");
        console.log("=        -|-       =");
        console.log("=         A        =");
        console.log("====================\n");

        console.log("1 - olhar em volta");
        console.log("2 - enfrentar");
        console.log("3 - ver status");
        console.log("4 - ver descrição da missão");
        console.log("5 - Descrever sala atual");
        console.log("6 - opções de saida da sala");
        console.log("0 - sair do jogo");

        const opcao = Number(prompt('\nOque deseja fazer?: ')); //pegar input do usuário

        if(opcao == 1) {
            olharEmVolta();
        } else if(opcao == 2) {
            console.clear();
            console.log('Sem inimigos nessa área...')
        } else if(opcao == 3) {
            verStatus();
        } else if(opcao == 4) {
            verMissaoAtual();
        } else if(opcao == 5) {
            verDescriçãoDaSala();
        } else if(opcao == 6) {
            await verOpcoesDeSaida();
        } else if(opcao == 0) {
            return
        } else {
            console.clear()
            console.log("Não entendi... oque deseja fazer?")
        }



    }



    await client.end();
}

export default PlayGame;