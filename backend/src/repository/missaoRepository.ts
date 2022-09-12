import missaoDto from "src/dto/missaoDto";
import connect from "../../src/services/connection";

export default class missaoRepository{

    public listMissionByNivel(nivel_atual:number){
        connect.query(`SELECT * FROM missao WHERE nivel_da_missao = ${nivel_atual}`, (err:any, res:any) => {
            console.log(res.rows);
            connect.end();
        });
    }
}