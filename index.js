const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://AaryaPatil:UHExoJJNES1OfS9r@demo.7t8gc7z.mongodb.net/?retryWrites=true&w=majority&appName=Demo"
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed", err);
  });

// ProductSchema

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  isInStock: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const productModel = mongoose.model("products", productSchema);

// Create

app.post("/api/products", async (req, res) => {
   await productModel.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    isInStock: req.body.isInStock,
    category: req.body.category,
  });
  return res.status(201).json({ message: "Product Created" });
});

app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});