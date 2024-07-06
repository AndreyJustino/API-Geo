import express, { json } from "express";

import dados from "../../repository/data.js";

const router = express.Router();

router.get("/:pais", (req, res) => {
  try {
    const paisNome = req.params.pais;
    let info;

    dados.continentes.forEach((element) => {
      element.paises.findIndex((value) => {
        if (value.nome.toLocaleUpperCase() == paisNome.toLocaleUpperCase()) {
          info = value;
        }
      });
    });

    if (info == undefined) {
      res.status(404).send("Pais não encontrado");
    } else {
      res.status(200).json(info);
    }
  } catch (error) {
    console.error("Erro linha 28 continentePais.js: ", error);
    res.status(400).send("Algum erro aconteceu, tente novamente.");
  }
});

export default router;
