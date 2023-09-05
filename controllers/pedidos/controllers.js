import Pedido from "../../models/Pedidos.js";

export const getPedido = async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    return res.json(pedidos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const crearPedido = async (req, res) => {
  const { nombre, cantidad } = req.body;
  console.log(nombre,cantidad);
  try {
    const newpedido = await new Pedido({
      nombre,
      cantidad,
    });
    newpedido.save();
    return res.sendStatus(200)
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
                                                                                                                                                                                                                                                                                                        