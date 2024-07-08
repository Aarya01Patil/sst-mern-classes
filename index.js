const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const userRoutes = require('./project/routes/userRoutes');
const productRoutes = require('./project/routes/productRoutes');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error: ', err);
    });

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(8086, () => {
    console.log('Server is running on port 8086');
});
