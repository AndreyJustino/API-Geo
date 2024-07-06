import express from "express";

import dados from "../../repository/data.js";

const router = express.Router();

router.get(`/:id`, (req, res) => {
  try {
    const id = req.params.id;
    res.status(200).json(dados.estadosBrasileiros[id - 1]);
  } catch (error) {
    console.error("Erro linha 20 app.js: ", error);
    res.status(400).send("Algum erro aconteceu, tente novamente.");
  }
});

export default router;
