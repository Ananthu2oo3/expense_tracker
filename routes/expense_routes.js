const express = require('express');

const router = express.Router();

const { 
    allExpenses,
    getExpensesByCategory,
    spending,
    updateExpense,
    deleteExpense } = require('../controllers/expense_controller.js');


router.get('/', allExpenses);
router.get('/category/:category', getExpensesByCategory);
router.post('/', spending);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;