const Candy = require('../models/candy')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getCandies = async (req, res) => {
    try {
        const Candies = await Candy.find()
        res.json(Candies)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getCandy = async (req, res) => {
    try {
        const { id } = req.params
        const candy = await Candy.findById(id)
        if (candy) {
            return res.json(candy)
        }
        res.status(404).json({ message: 'Candy not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createCandy = async (req, res) => {
    try {
        const candy = await new Candy(req.body)
        await candy.save()
        res.status(201).json(candy)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateCandy = async (req, res) => {
    const { id } = req.params
    await Candy.findByIdAndUpdate(id, req.body, { new: true }, (error, candy) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!candy) {
            return res.status(404).json({ message: 'Candy not found!' })
        }
        res.status(200).json(candy)
    })
}

const deleteCandy = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Candy.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Candy deleted")
        }
        throw new Error("Candy not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createCandy,
    getCandies,
    getCandy,
    updateCandy,
    deleteCandy
}