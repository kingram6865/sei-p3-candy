import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Samplings from "../../components/Samplings/Samplings";

const Home = () => {
  const [allCandies, setAllCandies] = ([]);

  useEffect(() => {
    const fetchCandies = async () => {
      const candies = await getCandies();
      setAllCandies(candies);
    }
    fetchCandies();
  }, []);

  const handleSubmit = e => insert - redirect - here;


  return (
    <Layout>
      <div>change to image-carousel</div>
      <SearchBar onSubmit={handleSubmit} onChange={handleSearch} />
      <div className="display-case">
        {/* <Favorites /> */}
        <Samplings candies={allCandies} />
      </div>
    </Layout>
  )
}

export default Home;