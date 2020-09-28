import React, { useState, useEffect } from "react";
import HomeLayout from "../../components/shared/HomeLayout/HomeLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Samplings from "../../components/Samplings/Samplings";
import { getCandies } from "../../services/candies";
import "./Home.css";

const Home = () => {
  const [allCandies, setAllCandies] = useState([]);
  console.log(allCandies);

  useEffect(() => {
    const fetchCandies = async () => {
      const candies = await getCandies();
      setAllCandies(candies);
    };
    fetchCandies();
  }, []);

  // const handleSubmit = e => insert - redirect - here;

  let random = allCandies.sort(() => 0.5 - Math.random()).slice(0, 6);

  const samplesJSX = random.map((candy, i) => (
    <Samplings
      id={candy._id}
      name={candy.productName}
      img={candy.imgURL1}
      price={candy.price}
      key={i}
    />
  ));

  return (
    <HomeLayout>
      <div className="home">
        <div className="img-carousel">change to image-carousel</div>
        <div className="searchbar-container">
          <SearchBar //onSubmit={handleSubmit} onChange={handleSearch}
          />
        </div>
        <div className="home-text-container">
          <h4>Welcome to Sugar Mama's</h4>
          <p>A sinful blend of sweet and sensual for whenever you need that sugar high.</p>
          <p>Brooklyn based but service worldwide.</p>
        </div>
        <div className="display-case">
          {/* <Favorites /> */}
          <div className="favorites-container">
            <p>Favorites Here</p>
          </div>
          <div className="samplings-container">
            {samplesJSX}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;