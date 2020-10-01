import React from 'react'
// import { useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import Candy from "../../components/Candy/Candy"
// import Sort from '../../components/sort/sort'


const SearchResults = (props) => {
  let productsJSX

  productsJSX = props.queryResults.map((candy, index) =>
  <Candy
    _id={candy._id}
    productName={candy.productName}
    price={candy.price}
    imgURL1={candy.imgURL1}
    imgURL2={candy.imgURL2}
    imgURL3={candy.imgURL3}
    description={candy.description}
    key={index}
  />
  )

return (
    <>
      <Layout handleSearch={props.handleSearch} setQueryResults={props.setQueryResults}>
        <div className="results-container">
        <h3>Search Results</h3>
        {/* <Sort handleSort={props.handleSort} setQueriedCandy={props.setQueriedCandy} />
        {console.log(candies)} */}
          { productsJSX }
        </div>
      </Layout>
    </>
  )
}

export default SearchResults