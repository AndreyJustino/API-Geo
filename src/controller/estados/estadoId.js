import express from "express";

import { estadosBrasileiros } from "../../database/data.js";

const router = express.Router();

router.get("/:id", (req, res) => {
  try {
    const id = req.params.id;
    res.status(200).json(estadosBrasileiros[id - 1]);
  } catch (error) {
    console.error("Erro linha 12 estadoId.js: ", error);
    res.status(400).send("Algum erro aconteceu, tente novamente.");
  }
});

export default router;
