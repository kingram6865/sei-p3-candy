// import React from 'react'
// // import { useParams } from "react-router-dom";
// import Layout from "../../components/shared/Layout/Layout";
// import Candy from "../../components/Candy/Candy"
// import Sort from '../../components/Sort/Sort'


// const SearchResults = (props) => {
//   let productsJSX
//   // const { results } = useParams()
//   // const data = JSON.parse(results)
//   // console.log(`[SearchResults]: ${props.match.params}`)

//   // if (results.length > 1){
//   //   productsJSX = results.map((candy, index) =>
//   //     <Candy
//   //       _id={candy._id}
//   //       productName={candy.productName}
//   //       price={candy.price}
//   //       imgURL1={candy.imgURL1}
//   //       imgURL2={candy.imgURL2}
//   //       imgURL3={candy.imgURL3}
//   //       description={candy.description}
//   //       key={index}
//   //     />
//   //   )
//   // } else {
//   //   productsJSX = <Candy 
//   //       _id={results._id}
//   //       productName={results.productName}
//   //       price={results.price}
//   //       imgURL1={results.imgURL1}
//   //       imgURL2={results.imgURL2}
//   //       imgURL3={results.imgURL3}
//   //       description={results.description}
//   //     />    
//   // }
//   const candies = props.queriedCandy && props.queriedCandy.length > 0 ? props.queriedCandy : props.queryResults
//   const productsJSX = candies.map((candy, index) =>
//   <Candy
//     _id={candy._id}
//     productName={candy.productName}
//     price={candy.price}
//     imgURL1={candy.imgURL1}
//     imgURL2={candy.imgURL2}
//     imgURL3={candy.imgURL3}
//     description={candy.description}
//     key={index}
//   />
//   )

//   productsJSX = props.queryResults.map((candy, index) =>
//   <Candy
//     _id={candy._id}
//     productName={candy.productName}
//     price={candy.price}
//     imgURL1={candy.imgURL1}
//     imgURL2={candy.imgURL2}
//     imgURL3={candy.imgURL3}
//     description={candy.description}
//     key={index}
//   />
//   )

// return (
//     <>
//       <Layout handleSearch={props.handleSearch} setQueryResults={props.setQueryResults}>
//         <div className="results-container">
//         <h3>Search Results</h3>
//         <Sort handleSort={props.handleSort} setQueriedCandy={props.setQueriedCandy} />
//         {console.log(candies)}
//           { productsJSX }
//         </div>
//       </Layout>
//     </>
//   )
// }
import React from 'react'
// import { useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import Candy from "../../components/Candy/Candy"
import Sort from '../../components/Sort/sort'


const SearchResults = (props) => {
  
  const candies = props.queriedCandy && props.queriedCandy.length > 0 ? props.queriedCandy : props.queryResults
  const productsJSX = candies.map((candy, index) =>
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
        <Sort handleSort={props.handleSort} setQueriedCandy={props.setQueriedCandy} />
        {console.log(candies)}
          { productsJSX }
        </div>
      </Layout>
    </>
  )
}

export default SearchResults