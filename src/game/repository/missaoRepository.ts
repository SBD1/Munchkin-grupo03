import client from "../../db/connection.ts";

export default class missaoRepository {

    // Pegar dados da missao
    public async dadosDaMissao(missao_id) {
        await client.connect();
        const missao = await client.queryObject(`SELECT * FROM missao where missao_id = ${missao_id}`);
        await client.end();
        return missao.rows;
    }
    
}