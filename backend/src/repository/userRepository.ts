import userDto from "src/dto/userDto"
import connect from "../../src/services/connection"
export default  class userRepository{

    //Cria um jogador
    public async create(user: userDto){
        // let sql: string = "INSERT INTO jogador (nome, raca_personagem, classe_personagem) VALUES ('Chico', 'Humano', 'Mago')";
        await connect.query(`
        INSERT INTO jogador 
        (nome, raca_personagem, classe_personagem, sala_id) VALUES('${user.nome}', 'Elfo', 'Guerreiro', 4)`
        , (err:any, res:any) => {
            connect.end();
        });
    }

    //Lista todos os jogadores
    public listUser(){
        connect.query('SELECT * FROM jogador', (err:any, res:any) => {
            console.log(res.rows);
            connect.end();
        });
    }

    public async getUser(player_id: number) {
        const user = await connect.query(`SELECT * FROM jogador WHERE personagem_id = ${player_id}`);
        return user.rows;
    }
    
}