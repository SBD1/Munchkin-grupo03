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
            text: 'INSERT INTO jogador (nome, raca_personagem, classe_personagem) VALUES ($nome, $raca, $classe) RETURNING personagem_id',
        });
        console.log(res.rows[0]);
        await client.end();
        return res;
    }
    
}