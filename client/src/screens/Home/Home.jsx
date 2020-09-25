import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";

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
      <div>insert-displaycase-here</div>
    </Layout>
  )
}

export default Home;