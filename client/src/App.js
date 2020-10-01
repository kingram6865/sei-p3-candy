import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import CandyCreate from './screens/CandyCreate/CandyCreate'
import CandyEdit from './screens/CandyEdit/CandyEdit'
import CandyDetail from './screens/CandyDetail/CandyDetail'
import CandyManager from './screens/CandyManager/CandyManager'
import SearchResults from './screens/SearchResults/SearchResults'
import { AZ, ZA, lowestFirst, highestFirst } from "./utils/sort";

import './App.css';

function App() {
  const [queryResults, setQueryResults] = useState([])
  const [sortType, setSortType] = useState([]);
  const [queriedCandy, setQueriedCandy] = useState([])

  const handleSearch = (item, arr) => {
    const queryResult = arr.filter(candy => candy.productName.toLowerCase().includes(item.toLowerCase()))
    return(queryResult)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) =>  <Home handleSearch={handleSearch} setQueryResults={setQueryResults}/>} />
        <Route exact path="/candies" render={(props) =>  <CandyManager handleSearch={handleSearch} setQueryResults={setQueryResults}/>} />
        <Route exact path="/candies/:id" render={(props) =>  <CandyDetail handleSearch={handleSearch} setQueryResults={setQueryResults} queryResults={queryResults} />} />
        <Route path="/add-candy" render={(props) =>  <CandyCreate handleSearch={handleSearch} setQueryResults={setQueryResults}/>} />
        <Route exact path="/candies/:id/edit" render={(props) =>  <CandyEdit handleSearch={handleSearch} setQueryResults={setQueryResults}/>} />
        {/* <Route exact path="/search-candies"
          render={(props) =>
            <SearchResults
              handleSearch={handleSearch}
              setQueryResults={setQueryResults}
              queryResults={queryResults}
              handleSort={handleSort}
              queriedCandy={queriedCandy}
              setQueriedCandy={setQueriedCandy}
            />}
        /> */}
        <Route exact path="/search-candies" render={(props) =>  <SearchResults handleSearch={handleSearch} setQueryResults={setQueryResults} queryResults={queryResults} />} />
      </Switch>
    </div>
  );
}

export default App;
