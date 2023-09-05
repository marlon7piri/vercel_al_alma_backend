import Producto from "../../models/Productos.js";
import mongoose from "mongoose";

export const getProductsRequest = async (req, res) => {
  try {
  const productos = await Producto.find({});

    return res.json(productos); 
  
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const createProductRequest = async (req, res) => {
  const { nombre, precio, cantidad, fecha_entrada} = req.body;

  try {
   
      const newproduct = await new Producto({
        nombre,
        precio,
        cantidad,
        fecha_entrada,
     
      });
      newproduct.save();
      return res.sendStatus(200);

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getProductRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const productFound = await Producto.findById(id);

    return res.json(productFound)
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateProductRequest = async (req, res) => {
  const { id } = req.params;
  const newproduct = req.body;

  const newProductInfo = {
    nombre: newproduct.nombre,
    precio: newproduct.precio,
    cantidad: newproduct.cantidad,
    fecha_entrada: newproduct.fecha_entrada,
    agotado: newproduct.estado,
  };
  try {
    const productupdate = await Producto.findByIdAndUpdate(
      id,
      newProductInfo,
      { new: true }
    );

    return res.json(productupdate);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteProductRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const productdelete = await Producto.findByIdAndDelete(id);

    return res.json(productdelete);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
