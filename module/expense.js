const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    to:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now
    },
    description:{
        type: String
    }
})

const cluster = mongoose.model('Expense', ExpenseSchema);
module.exports = cluster;