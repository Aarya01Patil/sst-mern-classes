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

app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});