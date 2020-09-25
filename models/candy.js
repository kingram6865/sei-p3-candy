const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Candy = new Schema(
  {
    productName: { type: String, required: true },
    price: { type: String, required: true },
    imgURL: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('candies', Candy)