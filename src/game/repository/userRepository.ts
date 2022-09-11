import client from "../../db/connection.ts";
import Personagem from "../classes/personagem.ts";

export default class userRepository {

    //Lista todos os jogadores
    public async listUsers() {
        await client.connect();
        const users = await client.queryObject(`SELECT * FROM jogador`);
        await client.end();
        return users;
    }

    //Busca um jogador com base no ID
    public async getUser(player_id: number) {
        await client.connect();
        const user = await client.queryArray(`SELECT * FROM jogador WHERE personagem_id = ${player_id}`);
        await client.end();
        return user.rows;
    }

    //Cria um joagdor
    public async createUser(player: Personagem) {
        await client.connect();
        const res = await client.queryArray({
            args: {nome: player.nome, raca: player.raca, classe: player.classe},
            text: 'INSERT INTO jogador (nome, raca, classe) VALUES ($nome, $raca, $classe) RETURNING personagem_id',
        });
        await client.end();
        return res.rows[0];
    }
    
}