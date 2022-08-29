import userDto from "src/dto/userDto"
import connect from "../../src/services/connection"
export default  class userRepository{

    public async create(user: userDto){
        // let sql: string = "INSERT INTO jogador (nome, raca_personagem, classe_personagem) VALUES ('Chico', 'Humano', 'Mago')";
        await connect.query(`INSERT INTO jogador (nome, raca_personagem, classe_personagem) VALUES('${user.nome}', 'Elfo', 'Guerreiro')`, (err:any, res:any) => {
            connect.end();
        });
    }

    public listUser(){
        connect.query('SELECT * FROM jogador', (err:any, res:any) => {
            console.log(res.rows);
            connect.end();
        });
    }
}