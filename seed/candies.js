const db = require('../db/connection')
const Candy = require('../models/candy')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const candies = 
    [
        {
          productName: "Sour Worm",
          price: "5.99",
          imgURL1:"https://i.imgur.com/a38fGEq.jpg",
          imgURL2:"https://i.imgur.com/F3pWblu.jpg",
          imgURL3:"https://i.imgur.com/ksDx8JO.jpg"
        },  
        {
          productName: "Heart Candy",
          price: "5.99",
          imgURL1:"https://i.imgur.com/laeVcbF.jpg",
          imgURL2:"https://i.imgur.com/xdf61Tz.jpg",
          imgURL3:"https://i.imgur.com/Xey9SnB.jpg"
        },    
        {
          productName: "Happy Mix",
          price: "5.99",
          imgURL1:"https://i.imgur.com/fUlf8Tt.jpg",
          imgURL2:"https://i.imgur.com/sI70Lwh.jpg",
          imgURL3:"https://i.imgur.com/QVShCya.jpg"
        },
        {
          productName: "Gummy Bears",
          price: "5.99",
          imgURL1:"https://i.imgur.com/DDmp12W.jpg",
          imgURL2:"https://i.imgur.com/Cy7t54X.jpg",
          imgURL3:"https://i.imgur.com/0NpilhL.jpg"
        },
        {
          productName: "Fun Mix",
          price: "5.99",
          imgURL1:"https://i.imgur.com/Jejawes.jpg",
          imgURL2:"https://i.imgur.com/Wx7RVi0.jpg",
          imgURL3:"https://i.imgur.com/jw0krgs.jpg"
        },
        {
          productName: "Fruity Yayas",
          price: "5.99",
          imgURL1:"https://i.imgur.com/d19ZsWY.jpg",
          imgURL2:"https://i.imgur.com/CrVuBVc.jpg",
          imgURL3:"https://i.imgur.com/EIoTa8K.jpg"
        },
        {
          productName: "Citrus Lollies",
          price: "5.99",
          imgURL1:"https://i.imgur.com/a3WlNWa.jpg",
          imgURL2:"https://i.imgur.com/2xzwfDk.jpg",
          imgURL3:"https://i.imgur.com/yQCqqrR.jpg"
        },
        {
          productName: "Beer Gummies",
          price: "5.99",
          imgURL1:"https://i.imgur.com/IZSYvpn.jpg",
          imgURL2:"https://i.imgur.com/KHLjHsc.jpg",
          imgURL3:"https://i.imgur.com/GpO3gXR.jpg"
        },
        {
          productName: "Assorted Dummied",
          price: "5.99",
          imgURL1:"https://i.imgur.com/ZWrBTcp.jpg",
          imgURL2:"https://i.imgur.com/RYLldwW.jpg",
          imgURL3:"https://i.imgur.com/OIyHdNS.jpg"
        },
        {
          productName: "Assorted MM's",
          price: "4.99",
          imgURL1:"https://i.imgur.com/XqA09C3.jpg",
          imgURL2:"https://i.imgur.com/983P6Af.jpg",
          imgURL3:"https://i.imgur.com/TIJ8fu9.jpg"
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