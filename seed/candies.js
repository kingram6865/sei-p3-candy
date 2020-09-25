const db = require('../db/connection')
const Candy = require('../models/candy')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const candies = 
    [
        {
          productName: "Sour Worm",
          price: "5.99",
          imgURL:"1"
        },  
        {
          productName: "Heart Candy",
          price: "5.99",
          imgURL:"2"
        },    
        {
          productName: "Happy Mix",
          price: "5.99",
          imgURL:"3"
        },
        {
          productName: "Gummy Bears",
          price: "5.99",
          imgURL:"4"
        },
        {
          productName: "Fun Mix",
          price: "5.99",
          imgURL:"5"
        },
        {
          productName: "Fruity Yayas",
          price: "5.99",
          imgURL:"6"
        },
        {
          productName: "Citrus Lollies",
          price: "5.99",
          imgURL:"7"
        },
        {
          productName: "Beer Gummies",
          price: "5.99",
          imgURL:"8"
        },
        {
          productName: "Assorted Dummied",
          price: "5.99",
          imgURL:"9"
        },
        {
          productName: "Assorted MM's",
          price: "4.99",
          imgURL:"10"
        },

      ]

    await Candy.insertMany(candies)
    console.log("Created candies!")
}
const run = async () => {
    await main()
    db.close()
}

run()