import { con } from './connection.js';

export async function listarAnimes() {
    const command = `
        SELECT * FROM tb_anime
    `;

    const [resposta] = await con.query(command);
    
    return resposta
}

export async function inserirAnimes(anime) {
    const command = `
    insert into tb_anime(nm_anime) 
                values(?);
    `;

    const [resposta] = await con.query(command, [anime.nome]); 
    return resposta.affectedRows;
}
