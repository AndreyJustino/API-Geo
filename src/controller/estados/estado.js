import { estadosBrasileiros } from "../../database/data.js";

export const estado = (req, res) => {
  try {
    res.status(200).json(estadosBrasileiros);
  } catch (error) {
    console.error("Erro linha 11 estado.js: ", error);
    res.status(400).send("Algum erro aconteceu, tente novamente.");
  }
};


