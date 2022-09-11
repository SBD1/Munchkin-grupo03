import client from "../../db/connection.ts";

export default class userRepository {

    //Cria um jogador
    public async create() {
    }

    //Lista todos os jogadores
    public async listUsers() {
        await client.connect();
        const users = await client.query(`SELECT * FROM jogador`);
        return users;
    }

    public async getUser(player_id: number) {
        const user = await client.query(`SELECT * FROM jogador WHERE personagem_id = ${player_id}`);
        return user.rows;
    }
    
}