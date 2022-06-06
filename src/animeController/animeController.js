import { Router } from "express";
import { listarAnimes, inserirAnimes } from "../animeRepository/animeRepository.js";

const server = Router();


server.get('/anime', async (req, resp) => {
    try{
        const resposta = await listarAnimes(); 
        resp.send(resposta);
    }catch(error){
        resp.status(401).send({
            error: error.message
        });
    }
});

server.post('/anime', async (req, resp) => {
    try{
        const anime = req.body;
        const resposta = await inserirAnimes(anime); 
        resp.send({
            x: resposta
        });
    }catch(error){
        resp.send({
            error: error.message
        });
    }
});

export default server;