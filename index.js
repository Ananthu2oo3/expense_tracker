const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/expense_routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());


app.use('/expenses', route);

app.listen(3000, () => {
    console.log("Server is running at port 3000")
});


mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Database Connected")
    })
    .catch((err) => {
        console.log("Connection Failed", err)
    });