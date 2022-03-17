require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/productSchema");

const jsonProduct = require("./products.json");

const start = async (req, res) => {
  try {
    await connectDB(process.env.DBURL);
    await Product.deleteMany();
    await Product.create(jsonProduct);
    console.log("Successfully");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
