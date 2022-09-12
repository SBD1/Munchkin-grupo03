import salaDto from "src/dto/salaDto";
import connect from "../../src/services/connection";

const input = require('prompt-sync')({sigint: true});

export default class salaRepository{

    public listSalasConectadas(sala_id:number){

        let listSalasConectadas:number[] = [];
        connect.query(`SELECT id_da_sala_conectada FROM salas_conectadas WHERE id_da_sala_atual = ${sala_id}`, (err:any, res:any) => {
            res.rows.forEach(element => {
                listSalasConectadas.push(element.id_da_sala_conectada)
            });
            connect.end();

            return listSalasConectadas;
        });
    }

    public async getSalaInfo(sala_id) {

        const salaInfo:any = await connect.query(`SELECT * FROM sala WHERE sala_id = ${sala_id}`)

        return salaInfo;
    }
}