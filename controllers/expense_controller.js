const cluster = require('../module/expense');



const allExpenses = async (req, res) => {
    try{
        const expenses = await cluster.find({});
        res.status(200).json(expenses);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}



const getExpensesByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const expenses = await cluster.find({ category });

        if (!expenses.length) {
            return res.status(404).json({ message: "No expenses found in this category" });
        }

        res.status(200).json(expenses);
    } 
    
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};




const spending = async (req, res) => {
    try{
        const spending = await cluster.create(req.body);
        res.status(200).json(spending);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}




const updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await cluster.findByIdAndUpdate(id, req.body)
        res.status(200).json(expense);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}



const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await cluster.findByIdAndDelete(id);
        res.status(200).json(expense);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { 
    allExpenses,
    getExpensesByCategory,
    spending,
    updateExpense,
    deleteExpense
    };
