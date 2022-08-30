import userDto from "src/dto/salaDto"
import connect from "../../src/services/connection"
export default  class userRepository{

    //Lista itens
    public async listItems(sala_id: number) {
        const user = await connect.query(`SELECT item_id FROM sala WHERE sala_id = ${sala_id}`);
        return user.rows;
    }

    //Lista Inimigos
    public async listEnemies(sala_id: number) {
        const user = await connect.query(`SELECT inimigo_id FROM sala WHERE sala_id = ${sala_id}`);
        return user.rows;
    }

    //Retorna o objeto sala
    public async getSala(sala_id: number) {
        const user = await connect.query(`SELECT * FROM sala WHERE sala_id = ${sala_id}`);
        return user.rows;
    }
    
}