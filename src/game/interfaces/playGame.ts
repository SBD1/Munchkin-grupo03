import client from '../../db/connection.ts'
import userRepository from '../repository/userRepository.ts';
import salaRepository from '../repository/salaRepository.ts';
import missaoRepository from '../repository/missaoRepository.ts';
import Sala from '../classes/sala.ts'
import Personagem from '../classes/personagem.ts';

const PlayGame = async (personagem: Personagem) => {
    console.clear();
    await client.connect();

    const userRepo: userRepository = new userRepository();
    const salaRepo: salaRepository = new salaRepository();
    const missaoRepo: missaoRepository = new missaoRepository();

    // Jogador
    //const personagem = await userRepo.getUser(personagem);

    // Sala
    const dadosDaSalaAtual = await salaRepo.getDataRoom(personagem.sala_atual_id);
    const salasConectadasIds = await salaRepo.listRooms(personagem.sala_atual_id);
    console.log(salasConectadasIds)

    // Missao
    const dadosDaMissao = await missaoRepo.dadosDaMissao(personagem.missao_atual_id);

    const verDescriçãoDaSala = () => {
        console.clear()
        console.log(`Você está no ${dadosDaSalaAtual[0].nome}: ${dadosDaSalaAtual[0].descricao}.`)
    }

    const olharEmVolta = () => {
        console.clear()
        let salasConectadas = []
        console.log(salasConectadasIds)

        salasConectadasIds.forEach( async(element, index) => {
            console.log(element.sala_alvo_id)
            salasConectadas = await salaRepo.getDataRoom(element.sala_alvo_id);
        });

        console.log(`${salasConectadas}`, "AKIII")
    }

    const verStatus = () => {
        console.clear();
        console.log(`nome: ${personagem.nome}`);
        console.log(`nivel: ${personagem.nivel}`);
        console.log(`poder: ${personagem.forca_combate}`);
        console.log(`classe: ${personagem.classe}`);
        console.log(`raça: ${personagem.raca}`);
        console.log(`ouro: ${personagem.qtd_gold}`);
    }

    const verMissaoAtual = () => {
        console.clear()
        console.log(`Missão atual: ${dadosDaMissao[0].nome} -- ${dadosDaMissao[0].descricao}.`)
    }

    const verOpcoesDeSaida = () => {
        console.clear()
        console.log(`Você está no ${dadosDaSalaAtual[0].nome}: ${dadosDaSalaAtual[0].descricao}.`)
    }

    const sairDoJogo = () => {

    }

    const listarComandos = () => {

    }

    let flag = true;
    console.log(`Você está no(a) ${dadosDaSalaAtual[0].nome}: ${dadosDaSalaAtual[0].descricao}.`)

    while(flag) {

        console.log("====================");
        console.log("=                  =");
        console.log("=       ('-')      =");
        console.log("=        -|-       =");
        console.log("=         A        =");
        console.log("=                  =");
        console.log("====================\n");

        console.log("1 - olhar em volta");
        console.log("2 - enfrentar");
        console.log("3 - ver status");
        console.log("4 - ver descrição da missão");
        console.log("5 - Descrever sala atual");

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
        } else {
            console.clear()
            console.log("Não entendi... oque deseja fazer?")
        }



    }



    await client.end();
}

export default PlayGame;