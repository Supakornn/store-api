const express = require("express");
const app = express();
const notfound = require("./middleware/notfound");
const errorhandler = require("./middleware/errorhandler");
require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/productsRouter");
// middleware
app.use(express.json());

// routes
// app.get("/", (req, res) => {
//   res.json({ data: "Hello" });
// });

app.use("/storeapi/products", productsRouter);

app.use(errorhandler);
app.use(notfound);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    app.listen(port, () => console.log("listening on port " + port));
    await connectDB(process.env.DBURL);
    console.log("connected DB");
  } catch (error) {
    console.error(error);
  }
};

start();
