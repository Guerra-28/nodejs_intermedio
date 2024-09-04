import { PlayerLevel } from "../database/index.js";

export const gameScore = async (req, res) => {
  try {
    const score = await PlayerLevel.create(req.body);
    res.status(201).json({ message: "Puntaje registrado", result: null });
  } catch (error) {
    res.status(500).json({ message: error.message, result: null });
  }
};

export const getScoreByPlayer = async (req, res) => {
  try {
    const scores = await PlayerLevel.findAll({
      where: {
        jugadorCedula: req.params.cedula,
      },
    });

    if (!scores.length) {
      return res.status(404).json({
        message: "No se encontraron puntajes para este jugador",
        result: null,
      });
    }
    return res
      .status(200)
      .json({ message: "Lista de puntajes", result: scores });
  } catch (error) {
    return res.status(500).json({ message: error.message, result: null });
  }
};
