import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import CandyCreate from './screens/CandyCreate/CandyCreate'
import CandyEdit from './screens/CandyEdit/CandyEdit'
import Candies from './screens/Candies/Candies'
import CandyDetail from './screens/CandyDetail/CandyDetail'

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/candies" component={Candies} />
        <Route exact path="/candies/:id" component={CandyDetail} />
        <Route path="/add-candy" component={CandyCreate} />
        <Route exact path="/candies/:id/edit" component={CandyEdit} />
      </Switch>
    </div>
  );
}

export default App;
