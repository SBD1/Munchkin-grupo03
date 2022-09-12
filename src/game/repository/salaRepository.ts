


export default class salaRepository {

    //Lista salas conectadas
    public async listRooms() {
        await client.connect();
        const users = await client.queryObject(`SELECT * FROM sala_conecta_sala`);
        await client.end();
        return users;
    }

    //Busca dados da sala
    public async getRoom(sala_id: number) {
        await client.connect();
        const user = await client.queryObject(`SELECT * FROM sala WHERE sala_id = ${sala_id}`);
        await client.end();
        return user.rows;
    }
    
}