import userDto from "src/dto/userDto"
import connect from "../database/connections"
export default  class userRepository{

    public create(user: userDto){

        connect.query('INSERT INTO jogador VALUES ()', (err:any, res:any) => {
            console.log(res.rows)
            connect.end() 
        })
    }

    public listUser(){
        connect.query('SELECT * FROM jogador', (err:any, res:any) => {
            console.log(res.rows)
            connect.end() 
        })
    }

}