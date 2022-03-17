const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductAvailable,
  getProduct
} = require("../controller/productController");

router.route("/").get(getAllProducts);
router.route("/available").get(getAllProductAvailable);
router.route("/search").get(getProduct);

module.exports = router;
