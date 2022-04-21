require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;
const mongodb = process.env.MONGODB;

mongoose.connect(mongodb, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Unable to connect to database.')
    } else {
        app.listen(port, () => {
            console.log('Node server running on ' + process.env.MONGODB);
        })
    }
})