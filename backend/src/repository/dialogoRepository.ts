import dialogoDto from "src/dto/dialogoDto";
import connect from "../services/connection";

export default class dialogoRepository{

    public listDialogoByNivel(nivel_atual:number){
        connect.query(`SELECT * FROM dialogo WHERE nivel_da_missao = ${nivel_atual} OR nivel_da_missao = 0`, (err:any, res:any) => {
            console.log(res.rows);
            connect.end();
        });
    }
}