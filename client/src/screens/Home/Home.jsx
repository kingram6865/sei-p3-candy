import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import SearchBar from "../../components/SearchBar/SearchBar";
// import Samplings from "../../components/Samplings/Samplings";
import { getCandies } from "../../services/candies";

const Home = () => {
  const [allCandies, setAllCandies] = useState([]);
  console.log(allCandies);

  useEffect(() => {
    const fetchCandies = async () => {
      const candies = await getCandies();
      setAllCandies(candies);
    }
    fetchCandies();
  }, []);

  // const handleSubmit = e => insert - redirect - here;


  return (
    <Layout>
      <div>change to image-carousel</div>
      <SearchBar //onSubmit={handleSubmit} onChange={handleSearch}
      />
      <div className="display-case">
        {/* <Favorites /> */}
        products go here
        {/* <Samplings candies={allCandies} /> */}
      </div>
    </Layout>
  )
}

export default Home;