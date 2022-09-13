import client from "../../db/connection.ts";
import Sala from "../classes/sala.ts";

export default class salaRepository {

    //Lista salas conectadas
    public async listRooms(sala_base_id: number) {
        await client.connect();
        const rooms = await client.queryObject(`SELECT sala_alvo_id FROM sala_conecta_sala where sala_base_id = ${sala_base_id}`);
        await client.end();
        return rooms.rows;
    }

    //Busca dados da sala
    public async getDataRoom(sala_id: number) {
        // console.log(sala_id, "teste")
        await client.connect();
        const room = await client.queryObject(`SELECT * FROM sala WHERE sala_id = ${sala_id}`);
        await client.end();
        return room.rows;
    }

    public async getEnemyRoom(sala_id: number, player_id: number) {
        //console.log(sala_id, "teste1234")
        await client.connect();
        const inimigo_id = await client.queryObject(`SELECT inimigo_id FROM sala_tem_inimigo WHERE sala_id = ${sala_id}`);
        //console.log(inimigo_id)
        
        if(inimigo_id.rows.length > 0) {

            const inimigoMorto = await client.queryObject(`SELECT * FROM jogador_enfrenta_inimigo WHERE jogador_id = ${player_id} AND inimigo_id = ${inimigo_id.rows[0].inimigo_id}`);
            
            if(inimigoMorto.rows.length == 0) {
                const inimigo = await client.queryObject(`SELECT * FROM inimigo WHERE inimigo_id = ${inimigo_id.rows[0].inimigo_id}`);
                return inimigo.rows;
            }
        }
        await client.end();
        return []
    }
    
}