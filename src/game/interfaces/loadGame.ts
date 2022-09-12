import client from '../../db/connection.ts'
import userRepository from '../repository/userRepository.ts';
import inGame from './inGame.ts';

const loadGame = async () => {   
    await client.connect();
    // Carrega um jogo
    console.log('Carregando jogo...');
    
    const userRepo:userRepository = new userRepository();
    const userList = await userRepo.listUsers();
    //console.log(userList.rows);
    let personagemSelecionado;

    const listTam = userList.rows.length
    let flag = 1;

    while(flag) {
        console.log("Selecione o personagem que deseja jogar:");
        console.log("");
        
        userList.rows.forEach((element, index) => {
            
            console.log(`[${index}]` , "-", "nome: ", element.nome,"| raça: ", element.raca_personagem, "| nível: ", element.nivel )
            
        });
        
        const opcao = Number(prompt('\nDigite o número do personagem que deseja jogar: ')); //pegar input do usuário

        if(opcao >= listTam || opcao < 0) {
            console.clear();
            console.log("_____________________________________");
            console.log("%c opção inválida, digite outro valor...", 'color: red; font-weight: bold');
            console.log("_____________________________________");
        } else {
            flag = 0;
            personagemSelecionado = userList.rows[opcao].personagem_id;
        }
    }
    await client.end();
    // console.log(personagemSelecionado)

    await inGame(personagemSelecionado)
}

export default loadGame;
