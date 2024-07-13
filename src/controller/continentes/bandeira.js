import express from "express";
import { siglas } from "../../database/data.js";

const router = express.Router();

router.get("/:nome", async (req, res) => {
  const nome = req.params.nome.toLocaleUpperCase();

  let index = siglas.findIndex((value) => {
    if (value.nome.toLocaleUpperCase() == nome) {
      return value.sigla;
    }
  });

  if (index == -1) {
    res.status(404).send("Siglas não encontradas");
  }

  let sigla = siglas[index].sigla;

  const url = await fetch(`https://flagsapi.com/${sigla}/shiny/64.png`);
  const buffe = await url.arrayBuffer();

  res.set("Content-Type", "image/png");
  res.set("Content-Disposition", `inline; filename="${sigla}.png"`);

  res.send(Buffer.from(buffe));
});

export default router;
