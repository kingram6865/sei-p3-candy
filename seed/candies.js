const db = require('../db/connection')
const Candy = require('../models/candy')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const candies = [
    {
      productName: "Sour Worm",
      price: "5.99",
      imgURL1: "https://i.imgur.com/a38fGEq.jpg",
      imgURL2: "https://i.imgur.com/F3pWblu.jpg",
      imgURL3: "https://i.imgur.com/ksDx8JO.jpg",
      description:
        "Wonderful kaleidoscope of colorful sugary worms ready to eat for a treat.  Perfect for sharing to show that you're caring or get it for yourself, because happiness is wealth!",
    },
    {
      productName: "Heart Candy",
      price: "5.99",
      imgURL1: "https://i.imgur.com/laeVcbF.jpg",
      imgURL2: "https://i.imgur.com/xdf61Tz.jpg",
      imgURL3: "https://i.imgur.com/Xey9SnB.jpg",
      description:
        "In love or carrying a heavy heart?  Feel better either way with sugary sentiments of love affirmations.  Perfect for sharing to show that you're caring or get it for yourself, because happiness is wealth!",
    },
    {
      productName: "Happy Mix",
      price: "5.99",
      imgURL1: "https://i.imgur.com/fUlf8Tt.jpg",
      imgURL2: "https://i.imgur.com/sI70Lwh.jpg",
      imgURL3: "https://i.imgur.com/QVShCya.jpg",
      description:
        "Smile from ear to ear and clear those skies of any clouds in sight.  Perfect for sharing to show that you're caring or get it for yourself, because happiness is wealth!",
    },
    {
      productName: "Gummy Bears",
      price: "5.99",
      imgURL1: "https://i.imgur.com/DDmp12W.jpg",
      imgURL2: "https://i.imgur.com/Cy7t54X.jpg",
      imgURL3: "https://i.imgur.com/0NpilhL.jpg",
      description:
        "They're bouncing here and there and everywhere.  They are the Gummy Bears.  Perfect for sharing to show that you're caring or get it for yourself, because happiness is wealth!",
    },
    {
      productName: "Fun Mix",
      price: "5.99",
      imgURL1: "https://i.imgur.com/Jejawes.jpg",
      imgURL2: "https://i.imgur.com/Wx7RVi0.jpg",
      imgURL3: "https://i.imgur.com/jw0krgs.jpg",
      description:
        "Fun in the sun. Fun in a bun. Fun after work at 6. Hear that gleeful sound?  It's that fun mix!  Perfect for sharing to show that you're caring or get it for yourself, because happiness is wealth!",
    },
    {
      productName: "Fruity Yayas",
      price: "5.99",
      imgURL1: "https://i.imgur.com/d19ZsWY.jpg",
      imgURL2: "https://i.imgur.com/CrVuBVc.jpg",
      imgURL3: "https://i.imgur.com/EIoTa8K.jpg",
      description:
        "Forget Jelly Bellies or, antiquated, Jelly Beans.  It's all about that Yas! Fruity Yayas that is.  Perfect for sharing to show that you're caring or get it for yourself, because happiness is wealth!",
    },
    {
      productName: "Citrus Lollies",
      price: "5.99",
      imgURL1: "https://i.imgur.com/a3WlNWa.jpg",
      imgURL2: "https://i.imgur.com/2xzwfDk.jpg",
      imgURL3: "https://i.imgur.com/yQCqqrR.jpg",
      description:
        "Pucker up those lips with Citrus Lollies.  Perfect for sharing to show that you're caring or get it for yourself, because happiness is wealth!",
    },
    {
      productName: "Beer Gummies",
      price: "5.99",
      imgURL1: "https://i.imgur.com/IZSYvpn.jpg",
      imgURL2: "https://i.imgur.com/KHLjHsc.jpg",
      imgURL3: "https://i.imgur.com/GpO3gXR.jpg",
      description:
        "Beer Gummies for the young who need to wait for 21. Perfect for sharing to show that you're caring or get it for yourself, because happiness is wealth!",
    },
    {
      productName: "Assorted Dummies",
      price: "5.99",
      imgURL1: "https://i.imgur.com/ZWrBTcp.jpg",
      imgURL2: "https://i.imgur.com/RYLldwW.jpg",
      imgURL3: "https://i.imgur.com/OIyHdNS.jpg",
      description:
        "Eat a medley of flavors that never get dull. Be smart and eat those Dummies.  Perfect for sharing to show that you're caring or get it for yourself, because happiness is wealth!",
    },
    {
      productName: "Assorted MM's",
      price: "4.99",
      imgURL1: "https://i.imgur.com/XqA09C3.jpg",
      imgURL2: "https://i.imgur.com/983P6Af.jpg",
      imgURL3: "https://i.imgur.com/TIJ8fu9.jpg",
      description:
        "An old school classic for that eternal chocolate and peanut sensation.  Perfect for sharing to show that you're caring or get it for yourself, because happiness is wealth!",
    },
  ];

    await Candy.insertMany(candies)
    console.log("Created candies!")
}
const run = async () => {
    await main()
    db.close()
}

run()