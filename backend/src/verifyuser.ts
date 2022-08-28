import connect from "./database/connections"
export default function verifyUser(){

    connect.query('SELECT * FROM jogador', (err:any, res:any) => {
        console.log(res.rows)
        connect.end() 
    })
}