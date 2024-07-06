import express from "express"

import estado from "./controller/estados/estado.js"
import estadoId from "./controller/estados/estadoId.js"
import estadoNome from "./controller/estados/estadoNome.js"
import continenteNome from "./controller/continentes/continenteNome.js"
import continentePais from "./controller/continentes/continentePais.js"

const router = express()

router.use("/estado", estado) 
router.use("/estadoId", estadoId) 
router.use("/estadoNome", estadoNome)
router.use("/continenteNome", continenteNome)
router.use("/continentePais", continentePais)

export default router