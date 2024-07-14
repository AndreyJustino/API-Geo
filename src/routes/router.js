import express from "express";

import {bandeira} from "../controller/continentes/bandeira.js"
import {estado} from "../controller/estados/estado.js";
import {estadoId} from "../controller/estados/estadoId.js";
import {estadoNome} from "../controller/estados/estadoNome.js";
import {continenteNome} from "../controller/continentes/continenteNome.js";
import {continentePais} from "../controller/continentes/continentePais.js";

const router = express();

router.get("/bandeira/:nome", bandeira)
router.get("/estado", estado);
router.get("/estadoId/:id", estadoId);
router.get("/estadoNome/:nome", estadoNome);
router.get("/continenteNome/:nome", continenteNome);
router.get("/continentePais/:pais", continentePais);

export default router;
