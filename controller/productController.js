const Product = require("../models/productSchema");

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ amount: products.length, products });
};

const getAllProductAvailable = async (req, res) => {
  const products = await Product.find({
    name: "vase table"
  });
  res.status(200).json({ amount: products.length, products });
};

const getProduct = async (req, res) => {
  const { available, name, stock } = req.query;
  const queryObject = {};

  if (available) {
    queryObject.available = available === "true" ? true : false;
  }
  if (name) {
    queryObject.name = name;
  }
  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ amount: products.length, products });
};

module.exports = {
  getAllProducts,
  getAllProductAvailable,
  getProduct
};
