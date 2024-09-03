import { Player } from "../database/index.js";

export const addPlayer = async (req, res) => {
  try {
    const { cedula, nombre, email } = req.body;

    const hasPlayer = await Player.findByPk(cedula);

    if (hasPlayer) {
      return res.status(409).json({ message: "El jugador ya existe" });
    }

    const newPlayer = await Player.create({ cedula, nombre, email });

    res.status(201).json({
      message: "Jugador Registrado",
      result: {
        cedula: newPlayer.cedula,
        nombre: newPlayer.nombre,
        email: newPlayer.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message, result: null });
  }
};

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll({
      attributes: ["cedula", "nombre", "email"],
    });
    res.status(200).json({ message: "Lista jugadores", result: players });
  } catch (error) {
    res.status(500).json({ message: error.message, result: null });
  }
};
