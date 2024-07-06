import express from "express";

import dados from "../../repository/data.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json(dados.estadosBrasileiros);
  } catch (error) {
    console.error("Erro linha 11 estado.js: ", error);
    res.status(400).send("Algum erro aconteceu, tente novamente.");
  }
});

export default router;
