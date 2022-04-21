const express = require('express');
const userRoutes = require('./Routes/userRoutes');
const ticketRoutes = require('./Routes/ticketRoutes');

const app = express();
app.use(express.urlencoded({
    extended: false,
}));

app.use(express.json());
app.use('/user', userRoutes);
app.use('/ticket', ticketRoutes);

module.exports = app;