const Product = require('../models/ProductModel');
const mongoose = require('mongoose');

const addProduct = async (req, res) => {
  const {
    name,
    price,
    img,
    gender,
    adult,
    description,
    size,
    chest,
    waist,
    hips,
    height,
    material,
    specifications,
  } = req.body;

  try {
    product = await Product.create({
      name,
      price,
      img,
      gender,
      adult,
      description,
      size,
      chest,
      waist,
      hips,
      height,
      material,
      specifications,
    });
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findProduct = async (req, res) => {
  const { name } = req.body;
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).toArray();

    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  addProduct,
};
