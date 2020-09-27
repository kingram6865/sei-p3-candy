import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/HomeLayout/HomeLayout";
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

  const candiesJSX = allCandies.map((candy, i) =>
    <Samplings _id={candy._id} name={candy.productName} img={candy.imgURL1} price={candy.price} key={i} />
  );

  return (
    <Layout>
      <div className="home">
        <div>change to image-carousel</div>
        <SearchBar //onSubmit={handleSubmit} onChange={handleSearch}
        />
        <div className="display-case">
          {/* <Favorites /> */}
          {candiesJSX}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
