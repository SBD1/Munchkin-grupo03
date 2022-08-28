import connection from "./connection"

export function getAllJogadores() {
    connection.query('SELECT * FROM jogador', (err: any, res: any) => {
        console.log(res.rows)
        connection.end()
    })
}