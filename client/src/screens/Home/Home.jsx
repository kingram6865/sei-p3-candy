import React, { useState, useEffect } from "react";
import HomeLayout from "../../components/shared/HomeLayout/HomeLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Samplings from "../../components/Samplings/Samplings";
import Carousel from "../../components/Carousel/Carousel";
import Favorites from "../../components/Favorites/Favorites";
import { getCandies } from "../../services/candies";
import "./Home.css";

const Home = (props) => {
  const [allCandies, setAllCandies] = useState([]);

  useEffect(() => {
    const fetchCandies = async () => {
      const candies = await getCandies();
      setAllCandies(candies);
    };
    fetchCandies();
  }, []);

  let random = allCandies.sort(() => 0.5 - Math.random()).slice(0, 6);

  let favs = allCandies.sort(() => 0.5 - Math.random()).slice(0, 3);

  const samplesJSX = random.map((candy, i) => (
    <Samplings
      id={candy._id}
      name={candy.productName}
      img={candy.imgURL1}
      price={candy.price}
      key={i}
    />
  ));

  const favsJSX = favs.map((candy, i) => (
    <Favorites
      id={candy._id}
      name={candy.productName}
      img={candy.imgURL3}
      price={candy.price}
      key={i}
    />
  ));

  return (
    <HomeLayout>
      <div className="home">
        <div className="img-carousel"><Carousel /></div>

        <div className="searchbar-container">
          <SearchBar handleSearch={props.handleSearch} setQueryResults={props.setQueryResults}
          />
        </div>
        <div className="home-text-container">
          <h4>Welcome to Sugar Mama's</h4>
          <p>A sinful blend of sweet and sensual for whenever you need that sugar high.</p>
          <p>Brooklyn based but service worldwide.</p>
        </div>
        <div className="display-case">
          <div className="favorites-container">
            {favsJSX}
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