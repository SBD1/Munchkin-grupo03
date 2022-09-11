import { QueryArrayResult } from 'https://deno.land/x/postgres@v0.16.1/query/query.ts';
import client from '../../db/connection.ts'
import userRepository from '../repository/userRepository.ts';

const loadGame = async () => {   
    await client.connect();
    // Carrega um jogo
    console.log('Carregando jogo...');
    
    const userRepo:userRepository = new userRepository();
    const userList:QueryArrayResult = await userRepo.listUsers();
    userList.rows.forEach(user => {
        console.log(user[0]);
    });
    
    await client.end();
}

export default loadGame;
