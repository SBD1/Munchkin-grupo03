import client from "../../db/connection.ts";
import Sala from "../classes/sala.ts";

export default class salaRepository {

    //Lista salas conectadas
    public async listRooms(sala_base_id) {
        await client.connect();
        const rooms = await client.queryObject(`SELECT sala_alvo_id FROM sala_conecta_sala where sala_base_id = ${sala_base_id}`);
        await client.end();
        return rooms.rows;
    }

    //Busca dados da sala
    public async getDataRoom(sala_id: number) {
        await client.connect();
        const room = await client.queryObject(`SELECT * FROM sala WHERE sala_id = ${sala_id}`);
        await client.end();
        return room.rows;
    }
    
}