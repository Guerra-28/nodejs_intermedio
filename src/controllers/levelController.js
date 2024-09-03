import { Level } from "../database";

export const addLevel = async (req, res) => {
  try {
    const nivel = await Level.create(req.body);
    res.status(201).json({
      message: "Nivel " + nivel.nombre + " fue creado",
      result: null,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, result: null });
  }
};

export const getLevels = async (req, res) => {
  try {
    const niveles = await Level.findAll();
    res.status(200).json({ message: "Lista de niveles", result: niveles });
  } catch (error) {
    res.status(500).json({ message: error.message, result: null });
  }
};
