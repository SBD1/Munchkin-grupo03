import client from '../../db/connection.ts'
import userRepository from '../repository/userRepository.ts';

const loadGame = async () => {   
    await client.connect();
    // Carrega um jogo
    console.log('Carregando jogo...');
    
    const userRepo:userRepository = new userRepository();
    const userList = await userRepo.listUsers();
    console.log(userList.rows);
    
    await client.end();
}

export default loadGame;
