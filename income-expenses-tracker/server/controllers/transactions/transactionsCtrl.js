const Account = require("../../model/Account")
const Transaction = require("../../model/Transaction")
const User = require("../../model/User")
const AppErr = require("../../utils/appErr")

// create
const createTransactionCtrl = async (req, res, next) => {
    const { name, amount, notes, transactionType, account, category } = req.body
    try {
        // Find user
        const userFound = await User.findById(req.user)
        if (!userFound) return next(new AppErr("User not found", 404))
        // Find the account
        const accountFound = await Account.findById(account)
        if (!accountFound) return next(new AppErr("Account not found", 404))
        // Create transaction
        const transaction = await Transaction.create({
            amount,
            notes,
            account,
            transactionType,
            category,
            name,
            createdBy: req.user
        })
        // Push the transaction to the amount
        accountFound.transactions.push(transaction._id)
        // Resave the account
        await accountFound.save()
        res.json({ status: "success", data: transaction })
    } catch (error) {
        res.json(error)
    }
}

// all
const getTransactionsCtrl = async (req, res, next) => {
    try {
        const transaction = await Transaction.find()
        res.status(200).json({
            status: 'success',
            data: transaction
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// single
const getSingleTransactionsCtrl = async (req, res) => {
    try {
        const { id } = req.params
        const transaction = await Transaction.findById(id)
        res.json({status: "success", data: transaction})
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// delete
const deleteTransactionsCtrl = async (req, res, next) => {
    try {
        const { id } = req.params
        await Transaction.findByIdAndDelete(id)
        res.json({
            status: "success",
            data: null,
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

// update
const updateTransactionsCtrl = async (req, res, next) => {
    try {
        const { id } = req.params
        const transaction = await Transaction.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        })
        res.json({
            status: "success",
            data: transaction,
        })
    } catch (error) {
        next(new AppErr(error.message, 500))
    }
}

module.exports = {
    createTransactionCtrl,
    getTransactionsCtrl,
    getSingleTransactionsCtrl,
    deleteTransactionsCtrl,
    updateTransactionsCtrl,
}