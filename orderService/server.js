const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
require('./config/db_conn');
const port = process.env.PORT || 9004;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', require('../userService/routes/userRouter'));
app.use('/products', require('../Product/routes/productRouter'));
app.use('/cart', require('../cartService/routes/cartRouter'));
app.use('/orders', require('./routes/orderRouter')); // Include the order routes

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
