const db = require('../db/connection')
const Candy = require('../models/candy')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const candies = 
    [
        {
          productName: "Sour Worm",
          price: "5.99",
          imgURL1:"https://imgur.com/F3pWblu",
          imgURL2:"https://imgur.com/a38fGEq",
          imgURL3:"https://imgur.com/ksDx8JO"
        },  
        {
          productName: "Heart Candy",
          price: "5.99",
          imgURL1:"https://imgur.com/F3pWblu",
          imgURL2:"https://imgur.com/",
          imgURL3:"https://imgur.com/"
        },    
        {
          productName: "Happy Mix",
          price: "5.99",
          imgURL1:"https://imgur.com/F3pWblu",
          imgURL2:"https://imgur.com/",
          imgURL3:"https://imgur.com/"
        },
        {
          productName: "Gummy Bears",
          price: "5.99",
          imgURL1:"https://imgur.com/F3pWblu",
          imgURL2:"https://imgur.com/",
          imgURL3:"https://imgur.com/"
        },
        {
          productName: "Fun Mix",
          price: "5.99",
          imgURL1:"https://imgur.com/F3pWblu",
          imgURL2:"https://imgur.com/",
          imgURL3:"https://imgur.com/"
        },
        {
          productName: "Fruity Yayas",
          price: "5.99",
          imgURL1:"https://imgur.com/F3pWblu",
          imgURL2:"https://imgur.com/",
          imgURL3:"https://imgur.com/"
        },
        {
          productName: "Citrus Lollies",
          price: "5.99",
          imgURL1:"https://imgur.com/F3pWblu",
          imgURL2:"https://imgur.com/",
          imgURL3:"https://imgur.com/"
        },
        {
          productName: "Beer Gummies",
          price: "5.99",
          imgURL1:"https://imgur.com/F3pWblu",
          imgURL2:"https://imgur.com/",
          imgURL3:"https://imgur.com/"
        },
        {
          productName: "Assorted Dummied",
          price: "5.99",
          imgURL1:"https://imgur.com/F3pWblu",
          imgURL2:"https://imgur.com/",
          imgURL3:"https://imgur.com/"
        },
        {
          productName: "Assorted MM's",
          price: "4.99",
          imgURL1:"https://imgur.com/F3pWblu",
          imgURL2:"https://imgur.com/",
          imgURL3:"https://imgur.com/"
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