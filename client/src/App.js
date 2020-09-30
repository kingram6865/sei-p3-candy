import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import CandyCreate from './screens/CandyCreate/CandyCreate'
import CandyEdit from './screens/CandyEdit/CandyEdit'
// import Candies from './screens/Candies/Candies'
import CandyDetail from './screens/CandyDetail/CandyDetail'
import CandyManager from './screens/CandyManager/CandyManager'
import SearchResults from './screens/SearchResults/SearchResults'

import './App.css';

function App() {
  const [queryResults, setQueryResults] = useState([])
  
  const handleSearch = (item, arr) => {
    const queryResult = arr.filter(candy => candy.productName.toLowerCase().includes(item.toLowerCase()))
    return(queryResult)
  }


  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/">
          <Home handleSearch={handleSearch} setQueryResults={setQueryResults} />
        </Route>
        <Route exact path="/candies" component={CandyManager} />
        <Route exact path="/candies/:id" component={CandyDetail} />
        <Route path="/add-candy" component={CandyCreate} />
        <Route exact path="/candies/:id/edit" component={CandyEdit} />
        {/* <Route exact path="/search-candies" component={SearchResults} /> */}
        <Route exact path="/search-candies" >
          <SearchResults handleSearch={handleSearch} setQueryResults={setQueryResults} queryResults={queryResults}/>
        </Route>



      </Switch>
    </div>
  );
}

export default App;
