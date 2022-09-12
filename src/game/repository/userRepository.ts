import { QueryObjectResult } from "https://deno.land/x/postgres@v0.16.1/query/query.ts";
import client from "../../db/connection.ts";
import Personagem from '../classes/personagem.ts';
import type equipamentos from '../classes/personagem.ts';

export default class userRepository {

    //Lista todos dados de todos os jogadores
    public async listUsers() {
        await client.connect();
        const users: QueryObjectResult<{id: number;
            nome: string;
            raca: string;
            classe: string;
            nivel: number;
            forcaDeCombate: number;
            equipamento:equipamentos; //Talvez substituir pelo tipo de cada parte do equipamento
            missaoAtual: number;
            salaAtual: number;
            gold: number;}> = await client.queryObject(`SELECT * FROM jogador`);
        await client.end();
        return users.rows;
    }

    //Busca um jogador com base no ID
    public async getUser(player_id: number) {
        await client.connect();
        const user = await client.queryObject(`SELECT * FROM jogador WHERE personagem_id = ${player_id}`);
        await client.end();
        return user.rows;
    }

    public async updateUser(player_id: number, nova_sala_atual_id: number) {
        await client.connect();
        await client.queryObject(`UPDATE jogador SET sala_atual_id=${nova_sala_atual_id} WHERE personagem_id = ${player_id}`);
        const user = await client.queryObject(`SELECT * FROM jogador WHERE personagem_id = ${player_id}`);
        await client.end();
        return user.rows;
    }

    //Criar um jogador
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