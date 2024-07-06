import express from "express";

import dados from "../../repository/data.js";

const router = express.Router();

router.get("/:nome", (req, res) => {
  try {
    const nome = req.params.nome;

    let index = dados.continentes.findIndex((continente) => {
      return continente.nome.toLocaleUpperCase() == nome.toLocaleUpperCase();
    });

    if (index == -1) {
      res.status(404).send("Continentes não encontrado");
    } else {
      res.status(200).json(dados.continentes[index]);
    }

  } catch (error) {
    console.error("Erro linha 48 app.js: ", error);
    res.status(400).send("Algum erro aconteceu, tente novamente.");
  }
});

export default router;
