import userDto from "src/dto/userDto"
import connect from "../../src/services/connection"
export default  class userRepository{

    public create(user: userDto){
        let sql: string = "INSERT INTO jogador (nome, raca_personagem, classe_personagem) VALUES ('Chico', 0, 1)"
        connect.query(sql, (err:any, res:any) => {
            console.log('alo chico');
            console.log(res.rows);
            connect.end() ;
        });
    }

    public listUser(){
        connect.query('SELECT * FROM jogador', (err:any, res:any) => {
            console.log(res.rows);
            connect.end();
        });
    }

}