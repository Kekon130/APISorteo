const express = require('express');
const userRoutes = require('./Routes/userRoutes');

const app = express();
app.use(express.urlencoded({
    extended: false,
}));

app.use(express.json());
app.use('/user', userRoutes);

module.exports = app;