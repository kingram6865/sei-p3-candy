import React from 'react'
import { useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
// import Candy from "../../components/Candy/Candy"

const SearchResults = (props) => {
  let productsJSX
  const { results } = useParams()
  //const data = JSON.parse(results)
  console.log(`[SearchResults]: ${results}`)

  // if (results.length > 1){
  //   productsJSX = results.map((candy, index) =>
  //     <Candy
  //       _id={candy._id}
  //       productName={candy.productName}
  //       price={candy.price}
  //       imgURL1={candy.imgURL1}
  //       imgURL2={candy.imgURL2}
  //       imgURL3={candy.imgURL3}
  //       description={candy.description}
  //       key={index}
  //     />
  //   )
  // } else {
  //   productsJSX = <Candy 
  //       _id={results._id}
  //       productName={results.productName}
  //       price={results.price}
  //       imgURL1={results.imgURL1}
  //       imgURL2={results.imgURL2}
  //       imgURL3={results.imgURL3}
  //       description={results.description}
  //     />    
  // }

  return (
    <>
      <Layout>
        <div className="results-container">
          <h3>Search Results</h3>
          { productsJSX }
        </div>
      </Layout>
    </>
  )
}

export default SearchResults