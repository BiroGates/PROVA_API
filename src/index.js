import express from "express";
import cors from 'cors';
import 'dotenv/config';

import animeController from './animeController/animeController.js'

const server = express();
server.use(express.json());
server.use(cors());

server.use(animeController);


server.listen(process.env.PORT, () => console.log(`API running on port ${process.env.PORT}`));