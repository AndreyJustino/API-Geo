import express from "express";

import { estadosBrasileiros } from "../../database/data.js";

const router = express.Router();

router.get("/:nome", (req, res) => {
  try {
    const nome = req.params.nome;

    let index = estadosBrasileiros.findIndex((estado) => {
      return estado.nome.toLocaleUpperCase() == nome.toLocaleUpperCase();
    });

    if (index == -1) {
      res.status(404).send(`Estado não encontrado!`);
    }

    res.status(200).json(estadosBrasileiros[index]);
  } catch (error) {
    console.error("Erro linha 21 estado.js: ", error);
    res.status(400).send("Algum erro aconteceu, tente novamente.");
  }
});

export default router;
