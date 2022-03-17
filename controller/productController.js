const Product = require("../models/productSchema");

const getAllProducts = async (req, res) => {
  const products = await Product.find({}).sort("name");
  res.status(200).json({ amount: products.length, products });
};

const getAllProductAvailable = async (req, res) => {
  const products = await Product.find({ available: true }).sort("name");
  res.status(200).json({ amount: products.length, products });
};

const getProduct = async (req, res) => {
  const { available, name, sort, fields, limit, numericFilter } = req.query;
  const queryObject = {};
  if (available) {
    queryObject.available = available === "true" ? true : false;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (numericFilter) {
    const opeatermap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte"
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilter.replace(regEx, (match) => `-${opeatermap[match]}-`);
    const options = ["price", "stock"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  // sort
  let products = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    console.log(sortList);
    products = products.sort(sortList);
  } else {
    products = products.sort();
  }

  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    products = products.select(fieldsList);
  }

  if (limit) {
    products = products.limit(limit);
  }

  const results = await products;

  res.status(200).json({ amount: results.length, results });
};

module.exports = {
  getAllProducts,
  getAllProductAvailable,
  getProduct
};
